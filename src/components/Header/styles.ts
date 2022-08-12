import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 6.5rem;
  left: 0px;
  top: 0px;
  padding: 32px 160px 32px 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    gap: 12px
  }
`

export const LocalizationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: #EBE5F9;
  height: 38px;
  width: 143px;
  left: 0px;
  top: 0px;
  border-radius: 6px;
  padding: 8px;
  gap: 4px;

  span {
    color: #4B2995;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;    
  }
`
const BaseNavItem = styled.div`
  border-radius: 6px;
  padding: 0.5rem;
  font-size: 0.875rem;
`

export const CartContainer = styled(BaseNavItem)`
  background: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};
  position: relative;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors.yellow};
    color: ${(props) => props.theme.colors['yellow-light']};
  }

  span {
    background: ${(props) => props.theme.colors['yellow-dark']};
    color: ${(props) => props.theme.colors['yellow-light']};
    font-size: 0.75rem;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    top: -10px;
    right: -10px;
  }
`

