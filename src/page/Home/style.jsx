import styled from 'styled-components'

export const Container = styled.div`
width:100%;
background: #fff;
margin-top: 20px;

.titulo{
    font-size: 24px;
    padding: 10px;
}
`

export const Card = styled.div`
width:280px;
height: 400px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border-radius: 8px;
padding:10px;
margin:5px;

`
export const ContainerImage = styled.div`
border: 1px solid black;
width: 280px;
height: 200px;
`
export const ConatinerInfo = styled.div``

export const Img = styled.img`
width:100%;
`

export const Col = styled.div`
width:270px;
border:1px solid red;
padding:5px;

.button-86 {
    all: unset;
    width: 230px;
    height: 30px;
    font-size: 16px;
    background: transparent;
    border: none;
    position: relative;
    color: #f0f0f0;
    cursor: pointer;
    z-index: 1;
    padding: 7px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
  
  .button-86::after,
  .button-86::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -99999;
    transition: all .4s;
  }
  
  .button-86::before {
    transform: translate(0%, 0%);
    width: 100%;
    height: 40px;
    background: #970ffd;
    border-radius: 10px;
  }
  
  .button-86::after {
    transform: translate(10px, 10px);
    width: 35px;
    height: 35px;
    background: #ffffff15;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 50px;
  }
  
  .button-86:hover::before {
    transform: translate(5%, 20%);
    width: 110%;
    height: 110%;
  }
  
  .button-86:hover::after {
    border-radius: 10px;
    transform: translate(0, 0);
    width: 100%;
    height: 100%;
  }
  
  .button-86:active::after {
    transition: 0s;
    transform: translate(0, 5%);
  }
`

export const Titulo = styled.label`

`

export const Preco = styled.span``

export const PrecoDesc = styled.span``
export const PrecoParcela = styled.span``

export const Frete = styled.label``

export const AddCarrinho = styled.button`
`

export const ListProduct = styled.div`
display:flex;
`
