import React from "react"
import styled from "styled-components"
import corebiz_footer from "../assets/corebiz_footer.png"
import Vtex from "../assets/Vtex.png"
import Icon from "../assets/Icon.png"
import email from "../assets/email.png"


const ContainerTexto = styled.div`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    column-gap: 10%;
    border: 95px solid black;
    background-color: #000000;
    width: 78.3vw;
    height:10vh;
    color: white;
    margin-left: 35px;
    
    
`
const IconButton = styled.button`
    background-color: #E9BF33;
    width: 11vw;  
    height: 9vh;
    border-radius: 10px;
`
const EmailImage = styled.img`
    width: 10%;
    height: 30%;
`
const Footer = () => {
    return(
        <ContainerTexto>
            <span>
             <h2> Localização:</h2>
             <br></br>
             </span>
             <span>
             <p>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphavile SP brasil@corebiz.ag +55 11 3090 1039</p>
             </span>
             <span>
             <IconButton type="submit"> <EmailImage src= {email} />Entre em contato</IconButton> 
             <IconButton type="submit"> <img src= {Icon} />Fale Conosco<br></br>Consultor Online</IconButton> 
             </span>
             <span>
             <img src = {corebiz_footer} /> 
             </span>
             <span>
             <img src = {Vtex}/> 
             </span>
        </ContainerTexto>
        
    )
}

export default Footer