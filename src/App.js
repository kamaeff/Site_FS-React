import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav, Navbar, Button } from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Home from '../src/Pages/Home';
import About from '../src/Pages/About';
import Services from '../src/Pages/Services';
import Contacts from '../src/Pages/Contacts';


function App() {
  return (
     <>
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">
          <Navbar.Brand className="ml-4">YDB</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Главная</Nav.Link>
              <Nav.Link href="/about">Консультация</Nav.Link>
              <Nav.Link href="/services">Услуги</Nav.Link>
              <Nav.Link href="/contacts">Контакты</Nav.Link>
            </Nav>
            <Nav>
              <Button variant="primary" className="mr-2">
                Войти
              </Button>
              <Button variant="primary">Регистрация</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={About}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
        </Router>
      </>
    

  );
}

export default App;
