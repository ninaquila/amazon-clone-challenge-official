import React from 'react'
import styled from 'styled-components'


function Product() {
    return (
        <Container>
            <Title>
            Nintendo Switch with Pastel Green and Blue Joy-Con Console - Animal Crossing: New Horizons Edition - Family Christmas Holiday - 6.2" Touchscreen LCD Display, 128GB MicroSD Card
            </Title>
            <Price>
            $419.99
            </Price>
            <Rating>
            ⭐⭐⭐⭐⭐
            </Rating>
            <Image src='https://images-na.ssl-images-amazon.com/images/I/61VEjFlKdTL._AC_SX679_.jpg'/>
            <ActionSection>
            <AddToCartButton>Add to Cart</AddToCartButton>
            </ActionSection>
          
        </Container>
    )
}

export default Product

const Container = styled.div `
    background-color: white;
    z-index: 100;
    flex: 1;
    padding: 20px;
    margin: 10px;
    max-height: 400px;
    flex-direction: column;
    display: flex;
`

const Title = styled.span ``
const Price = styled.span `
    font-weight: 500;
    margin-top: 30px;
`
const Rating = styled.div ``
const Image = styled.img `
    max-height: 200px;
    object-fit: contain;
`
const AddToCartButton = styled.button `
    width: 100px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    height: 30px;
`
const ActionSection = styled.div`
display: flex;
justify-content: center;
`
