import { ImageContainer, MainContainer, SubTitleContainer, Title, TitleContainer } from "./styles";
import coffee from '../../../../assets/coffee.svg'
import buy from '../../../../assets/IconBuy.svg'
import coffeeSub from '../../../../assets/IconCoffee.svg'
import delivery from '../../../../assets/IconDelivery.svg'
import packageCoffee from '../../../../assets/IconPackage.svg'

export function Welcome() {
  return (
    <MainContainer>
      <div>
        <TitleContainer>
          <p style={{ fontWeight: 800, fontSize: 48, lineHeight: '130%', width: 588, height: 124, color: '#272221'}}>
            Encontre o café perfeito para qualquer hora do dia
          </p>
          <p style={{ fontWeight: 400, fontSize: 20, lineHeight: '130%', width: 588, height: 52, color: '#272221'}}>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </p>
        </TitleContainer>
        <SubTitleContainer>
          <div>            
            <Title>
              <p>
                <img src={buy} alt="" />
                Compra simples e segura
              </p>
            </Title>
            <Title>
              <p>
                <img src={delivery} alt="" />
                Entrega rápida e rastreada
              </p>  
            </Title>
          </div>
          <div>
            <Title>
              <p>
                <img src={packageCoffee} alt="" />
                Embalagem mantém o café intacto
              </p>
            </Title>
            <Title>
              <p>
                <img src={coffeeSub} alt="" />
                O café chega fresquinho até você
              </p>
            </Title>
          </div>
        </SubTitleContainer>
      </div>
      <ImageContainer>
        <img src={coffee} alt="" />
      </ImageContainer>
    </MainContainer>
    
  )
}