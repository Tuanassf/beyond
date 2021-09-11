import React from "react"
import styled from "styled-components"
import star_icon from "../assets/star_icon.png"

const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: fit-content;
`
const CardInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 4px 0;
  }
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 40px;
`
const Icon = styled.button`
    background-color: #14a741;
    height:20%;
    border-radius: 10px;
    width: 40%;
    
`
const ImageZap = styled.img`
    height: 53%;
`
const ProductList = () => {
    return(
        <Container>
           <CardContainer>
            <img src="https://picsum.photos/300/300?image=1"/>
                <CardInfo>
                <span>
                    <i>
                    <a href="#"><img src={star_icon} /></a>
                    <a href="#"><img src={star_icon}/></a>
                    <a href="#"><img src={star_icon}/></a>
                    <a href="#"><img src={star_icon}/></a>
                    <a href="#"><img src={star_icon}/></a>
                    </i>
                </span>
                    <h6>NOTEBOOK ÚLTIMA GERAÇÃO</h6>
                    <p>De R$ 7.00,00</p>
                    <strong> Por R$ 5.000,00</strong>
                    
                    <Icon type="submit"> <ImageZap src="https://img.icons8.com/color/48/000000/whatsapp--v3.png"/>Comprar</Icon> 
                </CardInfo>
            </CardContainer>

            <CardContainer>
            <img src="https://picsum.photos/300/300?image=8"/>
                <CardInfo>
                <span>
                    <i>
                    <a href="#"><img src={star_icon} /></a>
                    <a href="#"><img src={star_icon}/></a>
                    <a href="#"><img src={star_icon}/></a>
                    <a href="#"><img src={star_icon}/></a>
                    <a href="#"><img src={star_icon}/></a>
                    </i>
                </span>
                <h6>MACBOOK</h6>
                    <p>De R$ 2.000,00</p>
                    <strong> Por R$ R$1.000,00</strong>
                    <Icon type="submit"> <ImageZap src="https://img.icons8.com/color/48/000000/whatsapp--v3.png"/>Comprar</Icon> 
                </CardInfo>
            </CardContainer>

            <CardContainer>
            <img src="https://picsum.photos/300/300?image=3"/>
                <CardInfo>
                <span>
                    <i>
                    <a href="#"><img src={star_icon} /></a>
                    <a href="#"><img src={star_icon}/></a>
                    <a href="#"><img src={star_icon}/></a>
                    <a href="#"><img src={star_icon}/></a>
                    <a href="#"><img src={star_icon}/></a>
                    </i>
                </span>
                <h6>SMARTPHONE</h6>
                    <p>De R$.1000,00</p>
                    <strong> Por R$ R$500,00</strong>
                    <Icon type="submit"> <ImageZap src="https://img.icons8.com/color/48/000000/whatsapp--v3.png"/>Comprar</Icon> 
                </CardInfo>
            </CardContainer>

            <CardContainer>
            <img src="https://picsum.photos/300/300?image=4"/>
                <CardInfo>
                <span>
                    <i>
                    <a href="#"><img src={star_icon} /></a>
                    <a href="#"><img src={star_icon}/></a>
                    <a href="#"><img src={star_icon}/></a>
                    <a href="#"><img src={star_icon}/></a>
                    <a href="#"><img src={star_icon}/></a>
                    </i>
                </span>
                <h6>CANETA WISE PEN</h6>
                    <p>De R$1.500,00</p>
                    <strong> Por R$ R$1.000,00</strong>
                    <Icon type="submit"> <ImageZap src="https://img.icons8.com/color/48/000000/whatsapp--v3.png"/>Comprar</Icon> 
                                
                </CardInfo>
            </CardContainer>
        </Container>
    )
}

export default ProductList