import { createAPIFileRoute } from '@tanstack/react-start/api'

export const APIRoute = createAPIFileRoute('/api/test')({
  GET: () => {
    return new Response('Hello World')
  },
})
