import styled from "styled-components";
import { FaTrash, FaCheckCircle } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.p`
  font-size: 24px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const TodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #eee;
  border-radius: 8px;
  padding: 8px 14px;
  margin: 4px;
  height: 30px;
  width: 300px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);

  overflow: hidden;
`;

export const TodoTitle = styled.p``;

export const UpdateTodoContainer = styled.div`
  margin-left: auto;
  display: ${({ toggleEdit }) => (toggleEdit ? "block" : "none")};
`;

export const ButtonContainer = styled.div``;

export const TodoInput = styled.input`
  background: transparent;
  border: none;
  outline: 1px solid #212121;
  font-size: 16px;
  width: 100px;
`;
export const DoneButton = styled(FaCheckCircle)`
  margin-left: 10px;
  font-size: 18px;
  color: green;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

export const EditButton = styled.p`
  font-size: 18px;
  color: #212121;
  cursor: pointer;
  margin-left: 200px;
  &:hover {
    transform: scale(1.2);
  }
`;

export const DeleteButton = styled(FaTrash)`
  margin-left: 10px;
  font-size: 18px;
  color: #ff2929;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;
