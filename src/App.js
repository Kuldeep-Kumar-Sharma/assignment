import { useState } from "react";
import styled from "styled-components";
import data from "./assets/data.json";
import addBanner from "./assets/sampleAdd.png";

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

const Header = styled.div`
  padding: 5px;
  text-align: center;
  background: #396afc; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2948ff,
    #396afc
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2948ff,
    #396afc
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
  font-size: 10px;
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
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const CardText = styled.p`
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
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
  background-color: white;
  border: 1px solid #cccccc;
  margin: 2%;
  color: #696969;
  padding: 0.5rem;
  text-transform: camelcase;
  display: block;
  width: 96%;
`;

export default App;
