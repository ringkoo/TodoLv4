import styled from "styled-components";

const Buttonwrap = styled.div`
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
  justify-content: ${(props)=> props.justifycontent};
  padding: 20px;
  font-size: 30px;
`;

export { Buttonwrap, StyledSpan };
