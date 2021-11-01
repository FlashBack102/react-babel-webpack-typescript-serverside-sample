import path from 'path'
import express from 'express'
import cors from 'cors'
import * as React from 'react'
import ReactDOM from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import serialize from 'serialize-javascript'
import App from '../shared/App.tsx'
import routes from '../shared/routes.tsx'


const app = express()



if(process.env.NODE_ENv !== 'production') {
  const webpack = require('webpack')
  
  const webpackConfig = require('../../webpack.client.js')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  // webpack-dev-middleware and webpack-hot-middleware setting instead of webpack-dev-server
  const compiler = webpack(webpackConfig)
  
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    writeToDisk: true,
  }));
  
  app.use(webpackHotMiddleware(compiler));
}

app.use(cors())
// app.use(express.static('dist'))
// app.use(express.static(path.resolve(__dirname)));
// app.use(express.static(path.resolve(__dirname, 'dist')))


app.get('*', (req, res, next) => {
  const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve()

  promise.then((data) => {
    const markup = ReactDOM.renderToString(
      <StaticRouter location={req.url} context={{ data }}>
        <App />
      </StaticRouter>
    )

    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR with RRv5</title>
          <script src="/bundle.js" defer></script>
          <link href="/main.css" rel="stylesheet">
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>

        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `)
  }).catch(next)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})