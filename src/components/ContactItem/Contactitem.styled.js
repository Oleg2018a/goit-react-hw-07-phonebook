import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items: center;
`

export const DeleteButton = styled.button`
  margin-left: ${p => p.theme.spacing(4)};
  background-color: #0a0a23;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
  display: inline-block;
`;