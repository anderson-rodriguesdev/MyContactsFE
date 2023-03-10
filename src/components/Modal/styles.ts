import styled from "styled-components";

interface Props {
  danger?: boolean;
}

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div<Props>`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.4);
  max-width: 450px;
  width: 100%;

  h1 {
    font-size: 22px;
    color: ${({ theme, danger }) =>
      danger ? theme.colors.danger.main : theme.colors.gray[900]};
  }
  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background-color: transparent;
    border: none;
    font-size: 16px;
    font-weight: bold;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
