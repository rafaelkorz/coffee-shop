import styled from 'styled-components';

export const LayoutContainer = styled.div`
  /* max-width: 150rem; */

  height: 100vh;
  /* margin: 5rem auto; */
  padding-right: 12rem;
  padding-left: 12rem;

  background: ${(props) => props.theme.colors['white']};  

  display: flex;
  flex-direction: column;
`