import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import {Add, Remove} from "@mui/icons-material";


const Container = styled.div``

const Wrapper = styled.div`
  margin: 20px;
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === "filled" && "none"};
  background-color: ${props => props.type === "filled" ? "black" : "transparent"};
  color: ${props => props.type === "filled" && "white"};
`

const TopTexts = styled.div``
const TopText  = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`


const Bottom = styled.div`
    display: flex;
  justify-content: space-between;
`
const Info = styled.div`
  flex: 3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProductDetail  = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 200px;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`
const ProductSize = styled.span``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ProductAmountContainer = styled.div`
    display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const ProductAmount = styled.div`
    margin: 20px;
  font-size: 24px;
`
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`

const Hr = styled.hr`
    background-color: teal;
  border: none;
  height: 1px;
  margin: 10px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`
const SummaryTitle = styled.h1`
  font-weight: 200;
`
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "500"};
  font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`

const Cart = () => {
   return (
       <Container>
           <Navbar/>
           <Announcement/>
           <Wrapper>
               <Title>YOUR BAG</Title>
               <Top>
                   <TopButton>CONTINUE SHOPPING</TopButton>
                   <TopTexts>
                       <TopText>Shopping bag(2)</TopText>
                       <TopText>Your Whislist</TopText>
                   </TopTexts>
                   <TopButton type={"filled"}>CHECKOUT NOW</TopButton>
               </Top>
               <Bottom>
                   <Info>
                       <Product>
                           <ProductDetail>
                               <Image src={"https://i1.adis.ws/i/carhartt_wip/I030211_0TX_XX-ST-01/s-s-detroit-arch-t-shirt-hokkaido-black-388.png?$pdp_02$"}/>
                               <Details>
                                   <ProductName><b>Product:</b> Galaxy T-Shirt</ProductName>
                                   <ProductId><b>ID:</b> 826347364</ProductId>
                                   <ProductColor color={"black"}/>
                                   <ProductSize><b>Size:</b>L</ProductSize>
                               </Details>
                           </ProductDetail>
                           <PriceDetail>
                               <ProductAmountContainer>
                                   <Add/>
                                   <ProductAmount>2</ProductAmount>
                                   <Remove/>
                               </ProductAmountContainer>
                               <ProductPrice>$ 30</ProductPrice>
                           </PriceDetail>
                       </Product>
                       <Hr/>
                       <Product>
                           <ProductDetail>
                               <Image src={"https://i1.adis.ws/i/carhartt_wip/I030189_827_XX-ST-01/s-s-longhaul-t-shirt-hedge-464.png?$pdp_02$"}/>
                               <Details>
                                   <ProductName><b>Product:</b> Milkway runtime</ProductName>
                                   <ProductId><b>ID:</b> 7723647</ProductId>
                                   <ProductColor color={"green"}/>
                                   <ProductSize><b>Size:</b>L</ProductSize>
                               </Details>
                           </ProductDetail>
                           <PriceDetail>
                               <ProductAmountContainer>
                                   <Add/>
                                   <ProductAmount>2</ProductAmount>
                                   <Remove/>
                               </ProductAmountContainer>
                               <ProductPrice>$ 30</ProductPrice>
                           </PriceDetail>
                       </Product>
                   </Info>
                   <Summary>
                       <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                       <SummaryItem>
                           <SummaryItemText>Subtotal</SummaryItemText>
                           <SummaryItemPrice>$59</SummaryItemPrice>
                       </SummaryItem>
                       <SummaryItem>
                           <SummaryItemText>Estimated Shipping</SummaryItemText>
                           <SummaryItemPrice>$ 5.9</SummaryItemPrice>
                       </SummaryItem>
                       <SummaryItem>
                           <SummaryItemText>Shipping Discount</SummaryItemText>
                           <SummaryItemPrice>$ -5.9</SummaryItemPrice>
                       </SummaryItem>
                       <SummaryItem type={"total"} >
                           <SummaryItemText>Total</SummaryItemText>
                           <SummaryItemPrice>$59</SummaryItemPrice>
                       </SummaryItem>
                       <Button>CHECKOUT NOW</Button>
                   </Summary>
               </Bottom>
           </Wrapper>
           <Footer/>
       </Container>
   )
}

export default Cart