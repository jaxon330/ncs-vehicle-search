import styled from "styled-components";
import { Input, Button } from "antd";

export const InputStyled = styled(Input)`
  width: 300px;
  height: 40px;
`;

export const ButtonStyled = styled(Button)`
  width: 300px;
  height: 40px;
  margin-top: 10px;
  font-size: 1rem;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #1677ff;
`