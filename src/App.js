import { useState, useEffect } from 'react'
import './App.css';
import Header from './Header.js'
import Cart from './Cart.js'
import Home from './Home.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import styled from 'styled-components'
import { db } from './firebase.js'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        products: doc.data()
      }))

      setCartItems(tempItems);
    })
  }

  useEffect(() => {
    getCartItems();
  }, [])

    return (
        <Router>
            <Container>
            <Header />

            <Switch>
                <Route path="/Cart">
                    <Cart cartItems={cartItems} />
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
background-color: #EAEDED;
`