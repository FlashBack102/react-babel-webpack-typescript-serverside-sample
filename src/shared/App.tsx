import * as React from 'react'
import routes from './routes'
import { Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import NoMatch from './NoMatch'
import ColorfulBorder from './ColorfulBorder'
import './styles.css'

export default function App () {
  return (
    <React.Fragment>
      <div className='container'>
        <h1>App.tsx</h1>
      </div>
    </React.Fragment>
  )
}