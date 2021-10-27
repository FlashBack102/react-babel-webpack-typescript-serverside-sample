import * as React from 'react'
import ReactDOM from 'react-dom'
import App from '../shared/App.tsx'
import Home from '../shared/Home.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
    <Home />
  </BrowserRouter>,
  document.getElementById('app')
);