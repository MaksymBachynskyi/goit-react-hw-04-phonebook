import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
export const StyledForm = styled(Form)`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 10px;

  align-items: center;
`;
export const StyledField = styled(Field)`
  padding: 3px;
`;
export const StyledErrMsg = styled(ErrorMessage)`
  font-size: medium;
  color: red;
`;
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
export const StyledBtn = styled.button`
  max-width: 250px;
  margin: 0px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: blue;
  }
`;
