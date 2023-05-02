import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 20px;
  background-color: #ebeffc;
`;

const StyledInput = styled.input`
  height: 30px;
  border: 0;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  position:relative;
  top:400px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 10px;
  width: 99%;
  color: black;
  font-size: 20px;
  cursor: pointer;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export { StyledDiv, StyledInput, StyledButton, FlexDiv };
