import { serve } from 'ellie'

const HelloWorld = () => (request) => (
  <div>
    <h1>Hello World</h1>
    <pre>{request.method} {request.url}</pre>
  </div>
)

// Heroku uses this port
const port = process.env.PORT || 8080

serve(HelloWorld)
  .listen(port)
  .then(() => console.log(`Listening to port ${port}`))
