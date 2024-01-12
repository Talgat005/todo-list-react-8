import styled from "styled-components";
import { createPortal } from "react-dom";

export const Modal = ({ visible, onClose, children }) => {
  if (visible === false) {
    return null;
  }
  return createPortal(
    <Overlay onClick={onClose}>
      <Content>{children}</Content>
    </Overlay>,
    document.getElementById("modal")
  );
};
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: #00000082;

  text-align: center;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
`;
