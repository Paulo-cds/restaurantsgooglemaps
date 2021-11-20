/* eslint-disable camelcase */
import React, {useState} from "react"
import TextField, {Input} from "@material/react-text-field"
import {useSelector} from "react-redux"
import MaterialIcon from "@material/react-material-icon"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {IoArrowUndoOutline, IoArrowRedoOutline} from "react-icons/io5"
import {
  Container,
  Search,
  Logo,
  Wrapper,
  CarouselTitle,
  Carousel,
  ModalTitle,
  ModalContent,
  ContainerOpen,
  ButtonClose,
} from "./styles"
import logo from "../../assets/logo.svg"
import restaurante from "../../assets/restaurante-fake.png"
import {Card, RestaurantCard, Modal, Map, Loader, Skeleton} from "../../components"

const Home = () => {
  const [inputValue, setInputValue] = useState("")
  const [query, setQuery] = useState(null)
  const [placeId, setPlaceId] = useState(null)
  const {restaurants, restaurantSelected} = useSelector((state) => state.restaurants)
  const [modalOpened, setModalOpened] = useState(false)
  const [menuCards, setMenuCards] = useState(true)

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setQuery(inputValue)
      if (!menuCards) {
        setMenuCards(true)
      }
    }
  }

  function handleOpenModal(placeId) {
    setPlaceId(placeId)
    setModalOpened(true)
  }

  return (
    <Wrapper>
      {!menuCards && (
        <ContainerOpen>
          <IoArrowRedoOutline
            size="30px"
            onClick={() => {
              setMenuCards(true)
            }}
          />
        </ContainerOpen>
      )}
      {menuCards && (
        <Container>
          <Search>
            <Logo src={logo} alt="Logo do Restaurante" />
            <TextField
              label="Pesquisar Restaurante"
              outlined
              trailingIcon={<MaterialIcon role="button" icon="search" />}
            >
              <Input
                value={inputValue}
                onKeyPress={handleKeyPress}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </TextField>
            {restaurants.length > 0 ? (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "16px 0",
                    paddingLeft: "10px",
                  }}
                >
                  <CarouselTitle>Na sua Área</CarouselTitle>

                  <ButtonClose
                    onClick={() => {
                      setMenuCards(false)
                    }}
                  >
                    <IoArrowUndoOutline size="30px" />
                  </ButtonClose>
                </div>
                <Carousel {...settings}>
                  {restaurants.map((restaurant) => (
                    <Card
                      key={restaurant.place_id}
                      photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                      title={restaurant.name}
                    />
                  ))}
                </Carousel>
              </>
            ) : (
              <Loader />
            )}
          </Search>
          {restaurants.map((restaurant) => (
            <RestaurantCard
              onClick={() => handleOpenModal(restaurant.place_id)}
              restaurant={restaurant}
            />
          ))}
        </Container>
      )}
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        {restaurantSelected ? (
          <>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
            <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
            <ModalContent>
              {restaurantSelected?.opening_hours?.open_now
                ? "Aberto agora :-)"
                : "Fechado neste momento :-("}
            </ModalContent>
          </>
        ) : (
          <>
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
          </>
        )}
      </Modal>
    </Wrapper>
  )
}

export default Home
