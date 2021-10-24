import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
`;

export const SubmitStyles = styled.input`
  min-width: 80px;
  position: relative;
  font-weight: 400;
  background: rgb(3, 169, 244);
  color: rgb(255, 255, 255);
  border: 2px solid rgb(3, 169, 244);
  padding: 0 20px;
  font-size: 16px;
  min-height: 40px;
  line-height: 1.4;
  outline: 0;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 0;
  margin-left: auto;
`;

export const InputStyles = styled.input`
  border: 1px solid rgb(221, 230, 234);
  color: rgb(111, 110, 110);
  background: rgb(255, 255, 255);
  padding: 4px 7px;
  outline: 0;
  margin-right: 10px;

  &::placeholder { 
    color: #ddd;
  }
`;
