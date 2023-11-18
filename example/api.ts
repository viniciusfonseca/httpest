import { randomUUID } from 'crypto'
import { Elysia, t } from 'elysia'

type Todo = {
  id: string
  desc: string
}

const todos: Todo[] = []

new Elysia()
  .get('/todos', () => todos)
  .post('/todos', ({ body, set }) => {
    const todo = {
      id: randomUUID(),
      desc: body.desc
    }
    todos.push(todo)
    set.status = 201
    return todo
  }, {
    body: t.Object({
      desc: t.String()
    })
  })
  .delete('/todos/:id', ({ params, set }) => {
    const idx = todos.findIndex(({ id }) => params.id === id)
    if (idx === -1) {
      set.status = 404
      return ""
    }
    todos.splice(idx, 1)
    set.status = 204
    return ""
  })
  .listen(3000)