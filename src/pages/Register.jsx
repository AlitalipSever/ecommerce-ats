import React from "react";
import styled from "styled-components"
import {mobile} from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
          rgba(255,255,255,0.5),
          rgba(255,255,255,0.5)
          ),
          url("https://www.carhartt-wip.com/binaries/content/gallery/pagetypes/gender/women/2022cw03/womens-glp-05.jpg/womens-glp-05.jpg/carhartt%3Adesktopfull") center;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  width: 40%;
  background-color: white;
  padding: 20px;
  ${mobile({width: "75%"})}
`
const Title = styled.h1`
    font-size: 24px;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 40px 10px 0px 0px;
  padding: 10px;
`
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 0px;
  background-color: teal;
  color: white;
  cursor: pointer;
`


const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder={"name"}/>
                    <Input placeholder={"lastname"}/>
                    <Input placeholder={"username"}/>
                    <Input placeholder={"email"}/>
                    <Input placeholder={"password"}/>
                    <Input placeholder={"confirm password"}/>
                    <Agreement>
                        By creating an account, I consent to processing of mu personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register