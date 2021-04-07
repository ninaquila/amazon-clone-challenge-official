import React from 'react'
import styled from 'styled-components'
import { db } from './firebase'

function Products({ title, price, rating, image, id }) {

    const addToCart = () => {
        console.log(id);
        const cartItem = db.collection("cartItems").doc(id);
        cartItem.get()
        .then((doc)=>{
            console.log(doc);
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            } else {
                db.collection("cartItems").doc(id).set({
                    Name: title,
                    Image: Image,
                    Price: Price,
                    quantity: 1
                })
            }
        })
    }

    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Price>
                {Price}
            </Price>
            <Rating>
            {
                Array(rating)
                    .fill()
                    .map(rating => <p>⭐</p>)
            }
            </Rating>
            <Image src={image} />
            <ActionSection>
            <AddToCartButton onClick={addToCart}>Add to Cart</AddToCartButton>
            </ActionSection>
        </Container>
    )
}

export default Products

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
const Rating = styled.div `
display: flex;
`
const Image = styled.img `
    max-height: 200px;
    object-fit: contain;
    cursor: pointer;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
`
const AddToCartButton = styled.button `
    width: 100px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    height: 30px;
    cursor: pointer;
`
const ActionSection = styled.div`
display: flex;
justify-content: center;
margin-top: 12px;
`
