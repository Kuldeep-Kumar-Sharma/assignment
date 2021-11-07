import { useState } from "react";
import styled from "styled-components";
import data from "./assets/data.json";
import addBanner from "./assets/sampleAdd.png";
import logo from "./assets/logo.svg";
//MARK -->Components
import CardModal from "./components/Modal";
const Images = require.context("./assets/images", true);

function App() {
  const [toogleModel, setToggleModal] = useState(false);
  //global counter was needed here
  let addCounter = 0;
  const [fullText, setFullText] = useState("");
  const closeModal = () => {
    setToggleModal(false);
  };

  const addBannerCheck = () => {
    if (addCounter === 3) {
      addCounter = 0;
      return (
        <AddContainer>
          <Image src={addBanner} alt="" />
        </AddContainer>
      );
    }
  };

  return (
    <>
      <Header>
        <Logo src={logo} alt="logo" />
        <h1>{data.title}</h1>
      </Header>
      <CardModal
        show={toogleModel}
        closeModal={closeModal}
        content={fullText}
      />
      <Gallery>
        {data.items.map((item) => {
          const Add = addBannerCheck();
          addCounter++;
          return (
            <>
              {Add}
              <Item>
                <Card>
                  <Image src={Images(`./${item.image}`).default} alt="" />
                  <CardContent>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDate>{item.publised}</CardDate>
                    <CardText>{item.intro}</CardText>
                  </CardContent>
                  <Button
                    onClick={() => {
                      setToggleModal(true);
                      setFullText(item.fullText);
                    }}
                  >
                    Read More..
                  </Button>
                </Card>
              </Item>
            </>
          );
        })}
      </Gallery>
    </>
  );
}

const Logo = styled.img`
  width: 30px;
  margin-top: 12 px;
  margin-right: 10px;
  display: inline;
`;

const Header = styled.div`
  padding: 5px;
  text-align: center;
  background: #0fa0d9; /* fallback for old browsers */
  color: white;
  font-size: 10px;
  display: flex;
`;

const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:hover {
    .card__image {
      filter: contrast(100%);
    }
  }
`;

const CardTitle = styled.p`
  color: #696969;
  font-family: "Lato", sans-serif;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const CardDate = styled.p`
  color: #696969;
  font-family: "Lato", sans-serif;
  font-size: 11px;
  font-weight: regular;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const CardText = styled.p`
  flex: 1 1 auto;
  font-size: 13px;
  font-family: "Lato", sans-serif;
  font-weight: regular;
  margin-bottom: 1.25rem;
`;

const CardContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
`;

const Item = styled.li`
  display: flex;
  padding: 1rem;
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 33.3333%;
  }
`;

const AddContainer = styled.div`
  display: flex;
  padding: 10px 40px 10px 40px;
  width: 100%;
  height: 10%;
`;

const Image = styled.img`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  filter: contrast(70%);
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  &::before {
    content: "";
    display: block;
    padding-top: 56.25%; // 16:9 aspect ratio
  }
  @media (min-width: 40rem) {
    &::before {
      padding-top: 66.6%; // 3:2 aspect ratio
    }
  }
`;

const Button = styled.button`
  background-color: #0d6e94;
  border: 1px solid #cccccc;
  margin: 2%;
  color: white;
  padding: 0.5rem;
  text-transform: camelcase;
  display: block;
  width: 96%;
`;

export default App;
