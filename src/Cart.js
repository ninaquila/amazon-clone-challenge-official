import React from 'react'
import styled from 'styled-components'
import CartItems from './CartItems.js'
import CartTotal from './CartTotal.js'

function Cart({ cartItems }) {
    return (
        <Container>
            <CartItems cartItems={cartItems}  />
            <CartTotal />
        </Container>
    )
}

export default Cart

const Container = styled.div`
    display: flex;
    //TRouBLe
    padding: 14px 18px 0 18px;
`