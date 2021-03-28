import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Cart from './Cart.js'
import Home from './Home.js'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'

function App() {
    return (
        <Router>
            <Container>
            <Header />

            <Switch>
                <Route path="/Cart">
                    <Cart />
                </Route>

                <Route path="/">
                    <Home />
                </Route>

            </Switch>









            </Container>
        </Router> 
    );
}

export default App;

const Container = styled.div`
`