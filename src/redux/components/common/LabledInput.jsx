import React from "react";
import styled from "styled-components";
function LabledInput({ id, label, placeholder, value, onChange, height }) {
  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        height={height}
      />
    </>
  );
}

export default LabledInput;

const StyledInput = styled.textarea`
  height: 30px;
  width: 99%;
  border: 1px solid gray;
  border-radius: 5px;
  padding-left: 10px;
  height:${(props) => props.height};
  resize: none;
`;

const StyledLabel = styled.label`
  margin-right: 10px;
  font-weight: 700;
`;
