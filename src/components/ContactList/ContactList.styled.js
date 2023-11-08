import styled from "styled-components";

export const List = styled.ul`
  font-size: ${p => p.theme.spacing(4)};
`;
export const Items = styled.li`
  margin-bottom: 5px;
  :last-child{
    margin-bottom: 0;
  }
`;
