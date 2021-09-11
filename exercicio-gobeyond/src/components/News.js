import React from "react"
import styled from "styled-components"

const Container = styled.div`
    text-align: center;
    background-color: #F2F2F2;
    width: 90vw;
    height: 20vh;
    color: #000000;
    padding:15px;
    margin-left: 35px;
`

const ContainerButton = styled.button`
  background: #e9692c;
  border-radius: 8px;
  width: 10vw;
  height: 40;
  
`
const Input = styled.input`
  background: white;
  border-radius: 8px;
  width: 30%;
  height: 6vh;
`
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  
`

const News = () => {
    return(
            <Container>
                <h2> Participe de nossas news com promoções e novidades!</h2>
              <InputContainer>
                <Input type="text" id="name" name="q" placeholder = "Nome" />
                <Input type="email" id="email" name="q" placeholder = "Email" />
                <ContainerButton>Eu quero!</ContainerButton>
                </InputContainer>
            </Container>
       
    )
}

export default News