import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {    
    Link
} from "react-router-dom";


function Header() {
    return ( 
        <Container>
            <Headerlogo >
                <Link to="/">
                    <img src = { "https://i.imgur.com/7ZOgkok.png" }/>
                </Link>    
            </Headerlogo>

            <HeaderoptionAddress>
               
                <LocationOnIcon />
                <HeaderOption>
                    <OptionLineOne> Hello </OptionLineOne>   
                    <OptionLineTwo> Select your address </OptionLineTwo>
                </HeaderOption>
            </HeaderoptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type = 'text' />
                    <HeaderSearchIconContainer >
                        <SearchIcon />
                    </HeaderSearchIconContainer> 
            </HeaderSearch> 
            
            <HeaderNavItems>

                <HeaderOption>
                    <OptionLineOne>Hello, User</OptionLineOne>
                    <OptionLineTwo> Account & Lists</OptionLineTwo>
                </HeaderOption>

                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>

                <HeaderOptionCart>
                    <Link to="/cart">
                        <ShoppingBasketIcon />
                        <CartCount>5</CartCount>
                    </Link>
                </HeaderOptionCart>

            </HeaderNavItems>






        </Container>
    )
}

export default Header

const Container = styled.div `
    height: 60px;
    background-color: #0F1111;
    display: flex;
    align-items: center;
    color: white;
    justify-content: space-between;
`

const Headerlogo = styled.div `
  img{
      width: 55px;
      margin-left: 11px;
  }
`
const HeaderoptionAddress = styled.div `
padding-left: 9px;
display: flex;
align-items: center;
`
const OptionLineOne = styled.div ``

const OptionLineTwo = styled.div `
    font-weight: 700;
`

const HeaderSearch = styled.div `
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  margin-left: 4px;
  background-color: white;
  :focus-within{
      box-shadow: 0 0 0 3px #F90;
  }

  `

const HeaderSearchInput = styled.input `
  flex-grow: 1;
  border: 0;
  :focus {
      outline: none;
  }
`

const HeaderSearchIconContainer = styled.div `
  background-color: #febd69;
  width: 45px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderOption = styled.div `
  //T(op)r(ight)oub(ottom)l(eft)e
    padding: 10px 9px 10px 9px;

`

const HeaderOptionCart = styled.div `
    display: flex;
    a {
        display: flex;
        align-items: center;
        padding-left: 9px;
        padding-right: 9px;
        color: white;
        text-decoration: none;
    }
`
const HeaderNavItems = styled.div `
    display: flex;
    justify-content: space-between;


`
const CartCount = styled.div `
padding-left: 4px;
font-weight: 700;
color: #f08804;
`