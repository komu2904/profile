import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './screens/AboutScreen'
import Contact from './screens/ContactScreen'
import Resume from './screens/ResumeScreen'
import Home from './screens/HomeScreen'
import Project from './screens/ProjectScreen'
import Admin from './screens/AdminScreen'
import Login from './screens/Login'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <Router>
      <Header />
      <Container className='p-2'>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/login' component={Login} />
        <Route path='/admin' component={Admin} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/resume' component={Resume} />
          <Route path='/project' component={Project} />
      </Switch>
      </Container>
      <Footer />
    </Router>
  )
}

export default App

