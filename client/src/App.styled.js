import styled from "styled-components";

export const Container = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.p`
  font-size: 33px;
  text-align: center;
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 10px 20px;
  font-size: 16px;
  width: 200px;
  margin: 10px 0;
  border-radius: 12px;
  outline: none;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border-radius: 12px;
  width: 100px;
  background: #212121;
  border: none;
  color: #fff;
  cursor: pointer;
  outline: none;

  &:hover {
    background: #fff;
    color: #212121;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
  }
`;
