import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";

function CardModal(props) {
  const divStyle = {
    display: props.show ? "block" : "none",
  };
  console.log(props);
  return (
    <div style={divStyle}>
      <ModalOverlay
        onClick={() => {
          props.closeModal();
        }}
      ></ModalOverlay>
      <Modal>
        <CloseButton
          onClick={() => {
            props.closeModal();
          }}
        >
          X
        </CloseButton>
        <ModalGuts>
          <h1>{props.title}</h1>
          {ReactHtmlParser(props.content)}
        </ModalGuts>
      </Modal>
    </div>
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background: rgba(0, 0, 0, 0.6);
`;

const Modal = styled.div`
  /* This way it could be display flex or grid or whatever also. */
  display: block;

  /* Probably need media queries here */
  width: 600px;
  max-width: 100%;

  height: 400px;
  max-height: 100%;

  position: fixed;

  z-index: 100;

  left: 50%;
  top: 50%;

  /* Use this for centering if unknown width/height */
  transform: translate(-50%, -50%);

  /* If known, negative margins are probably better (less chance of blurry text). */
  /* margin: -200px 0 0 -200px; */

  background: white;
`;

const CloseButton = styled.button`
  position: absolute;

  /* don't need to go crazy with z-index here, just sits over .modal-guts */
  z-index: 1;

  top: -16px;

  right: 50%;

  border: 0;
  background: black;
  color: white;
  padding: 5px 10px;
  font-size: 1.3rem;
  border-radius: 50%;
`;

const ModalGuts = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 20px 50px 20px 20px;
`;

export default CardModal;
