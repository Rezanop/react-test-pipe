const React = require('react')
const ReactDom = require('react-dom/server')
const express = require('express')
const { Ring, Ellipsis } = require('react-test-pipe')

const app = express()
const port = 3000

app.get('*', (req, res) => {
  const ring = React.createElement(Ring)
  const ellipsis = React.createElement(Ellipsis)

  const html = ReactDom.renderToString(ring)
  const htmlEllip = ReactDom.renderToString(ellipsis)

  res.send(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
      </head>
      <body>
      ${htmlEllip}
      ${html}
      </body>
    </html>
    `)
})

app.listen(port, () => {
  console.log(`Listening to: http://localhost:${port}`)
})
