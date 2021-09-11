import React from "react"
import styled from "styled-components"

const SlidesList = styled.div`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 30px;  
  `
  
const Container = styled.div`
   align-items: center;
   max-width: max-content;
   margin: 3.5%;
  `
const SlideNotebook = styled.img`
    width: 35vw;
    height: 43.63vh;
    `

const ContainerTexto = styled.div`
    border: 95px solid black;
    background-color: #000000;
    width: 40vw;
    height: 13vh;
    color: white;
`

const Sliders = () => {
    return(
        <Container>
        <SlidesList>
            <ContainerTexto>
                <h2> Você quer experimentar produtos de ponta?</h2>
            </ContainerTexto>
            <SlideNotebook src="https://picsum.photos/300/300?image=6" />  
        </SlidesList>    
            <input type="radio"  name="slide" checked />
            <input type="radio"  name="slide" checked />
            <input type="radio"  name="slide" checked />
            <input type="radio"  name="slide" checked />    
        </Container>
    )
}

export default Sliders