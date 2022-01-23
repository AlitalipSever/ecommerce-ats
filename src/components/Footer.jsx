import React from "react";
import styled from "styled-components";
import {Facebook, Instagram, MailOutlined, Phone, Pinterest, Room, Twitter} from "@mui/icons-material";
import {mobile} from "../responsive";

const Container = styled.div` 
    display: flex;
  ${mobile({flexDirection: "column"})}
`
const Left = styled.div` 
    flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1``
const Description = styled.p`
  margin: 20px 0px;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display: "none"})}
`

const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0px ;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px ;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor: "#fff8f8"})}
`

const ContactItem = styled.div`
display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Red ATMO.</Logo>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue massa nunc, vel elementum lacus bibendum quis. Donec non convallis sapien. Suspendisse consequat tristique orci, bibendum luctus odio blandit sed. Mauris fermentum a felis eu fermentum.
                </Description>
                <SocialContainer>
                    <SocialIcon color={"3B5999"}>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color={"E4405F"}>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color={"55ACEE"}>
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color={"E60023"}>
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight: "10px"}}/> Ettenheimer Str. 16 Freiburg Im Breisgau</ContactItem>
                <ContactItem><Phone style={{marginRight: "10px"}}/> +4915750961781</ContactItem>
                <ContactItem><MailOutlined style={{marginRight: "10px"}}/> alitalipsever@gmail.com</ContactItem>
            </Right>
        </Container>
    )
}

export default Footer