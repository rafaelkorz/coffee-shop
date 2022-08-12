import { CartContainer, HeaderContainer, LocalizationContainer } from "./styles";
import logo from '../../assets/Logo.svg'
import cart from '../../assets/Cart.svg'
import vector from '../../assets/Vector.svg'
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { NavLink } from "react-router-dom";

export function Header() {
  const { totalItems } = useContext(CartContext)

  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <LocalizationContainer>
          <img src={vector} alt="" />
          <span>Porto Alegre, RS</span>
        </LocalizationContainer>
        <NavLink to="/checkout">
          <CartContainer>
            <img src={cart} alt="" />
            {totalItems > 0 ? <span>{totalItems}</span> : null}
          </CartContainer>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}