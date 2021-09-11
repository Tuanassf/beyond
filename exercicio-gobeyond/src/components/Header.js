import React from "react"
import styled from "styled-components"
import logo from "../assets/logo.png"
import Vector from "../assets/Vector.png"
import person from "../assets/person.png"

const ScreenContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  margin-bottom: -3%;
  margin-right: 6px;
`
const IconPerson = styled.img`
  width:15px;
  height: 15px;
`
const InputContainer = styled.input`
  width: 20vw;
    
`
const Header = () => {
    return(
        <ScreenContainer>
            <img src = {logo} />
            <text>Home</text>
            <text>Categoria 1</text>
            <text>Categoria 2</text>
            <text>Contato</text>

            <form action=" " method="post">
                <InputContainer type="search" id="busca" name="q" placeholder = "O que você está procurando?" />
                <button type="submit"> &#128269;</button>
            </form>

            <text>
                <a href="#"><IconPerson src={person} /> Minha conta </a>
                
            </text>
            
            <img src ={Vector} />

        </ScreenContainer>
    )
}

export default Header;