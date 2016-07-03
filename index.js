import { pipe, serve } from 'ellie'

// Logger middleware, demonstrating a middleware
// interactive with both the request and response
const Logger = (next) => async (request) => {
  const startTime = Date.now()
  const response = await next(request)
  const endTime = Date.now()
  const milliseconds = endTime - startTime

  console.log(
    new Date(startTime),
    request.method,
    request.url,
    `${milliseconds}ms`
  )

  return response
}

// HelloWorld middlware, demonstrating a responding
// middleware that uses JSX to generate HTML.
const HelloWorld = () => (request) => (
  <div>
    Welcome to {request.url}. Enjoy your stay!
  </div>
)

// Heroku uses this environment variable
const port = process.env.PORT || 8080

// Create the server pipeline
const server = serve(pipe(
  Logger,
  HelloWorld
))

// Start listening
server.listen(port).then(() => {
  console.log(`Listening to port ${port}`)
})
