import { CoffeeType } from "../../../../data/coffee";
import { CardContainer } from "./styles";
import { ShoppingCart } from 'phosphor-react'
import { Counter } from "../../../../components/Counter";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { formatPriceWithoutCurrency } from "../../../../utils/formatPriceWithoutCurrency";

interface CoffeeCardProps {
  coffee: CoffeeType
}

export function ItensCoffee({ coffee }: CoffeeCardProps) : JSX.Element  {
  const [counter, setCounter] = useState(0)
  const { addItemToCart } = useContext(CartContext)

  function handleIncreaseCounter() {
    setCounter((counter) => counter + 1);
  }

  function handleDecreaseCounter() {
    setCounter((counter) => counter - 1);
  }

  const handleAddItemToCart = () => {
    const newItem = {
      id: coffee.id,
      name: coffee.name,
      price: coffee.price,
      quantity: counter,
      imageUrl: coffee.imageUrl,
    }

    addItemToCart(newItem)
  }

  return (
    <CardContainer>
      <img src={coffee.imageUrl} alt="" />
      <ul>
        {coffee.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <strong>{coffee.name}</strong>
      <p>{coffee.description}</p>
      <form>
        <p>
          R$ <span style={{ fontWeight: 600}}>{formatPriceWithoutCurrency(coffee.price)}</span>
        </p>
        <Counter value={counter} decrementor={handleDecreaseCounter} incrementor={handleIncreaseCounter}/>
        <button type="button" onClick={() => handleAddItemToCart()}>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </form>
    </CardContainer>
  )
}