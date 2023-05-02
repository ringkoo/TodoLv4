import styled from "styled-components";

const Boxwrap = styled.div`
  border: 1px solid gray;
  background-color: ${(props) => props.backgroundcolor};
  width: 98%;
  margin: 20px;
  border-radius: 10px;
  height: 100px;
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  cursor:pointer;
`;

const StyledSpan = styled.span`
  display:flex;
  justify-content:space-between;
  align-items:top;
  padding: 10px;
  font-size: 20px;
`;

export { Boxwrap, StyledSpan };
