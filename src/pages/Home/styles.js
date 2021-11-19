import styled from "styled-components"
import Slider from "react-slick"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;  
`

export const Container = styled.div`
  width: 360px;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 0;
    height: 0;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    background-color: #ffffff;
    height: 15%;
    padding: 5px;
  }
`

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  width: 100%;
  @media (max-width: 768px) {
    position: absolute;
    width: 70%;
    top: 15%;
    left: 0;
    z-index: 99;
    padding-top: 10px;
  }
`

export const ContainerSearch = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  background-color: #ffffff;
  padding: 16px 0;
`

export const Logo = styled.img`
  margin: 0 auto 15px;
`

export const Map = styled.div`
  background-color: red;
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 25px;
  }
`

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
`

export const OpenMenu = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
`

export const ModalTitle = styled.p`
  margin-bottom: 10px;
  letter-spacing: 0.11px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  text-transform: none;
  line-height: 29px;
  font-size: 24px;
  font-weight: bold;
`

export const ModalContent = styled.p`
  margin-bottom: 10px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-weight: normal;
  line-height: 19px;
  font-size: 16px;
`

export const ButtonOpen = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15%;
    left: 0;
  }
`

export const ButtonClose = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`
