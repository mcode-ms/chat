import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 500px;
  min-height: 500px;
  padding: 20px;
  margin: auto;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 3px 1px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  font-size: 30px;
  font-size: clamp(2rem, 10vw, 30px);
  color: #092e63;
  line-height: 1.2;
`;

export const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;
