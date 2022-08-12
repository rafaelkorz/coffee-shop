import { ItensCoffee } from "./components/ItensCoffee";
import { Welcome } from "./components/Welcome";

import { coffeeData } from '../../data/coffee';
import { CoffeeListContainer } from "./styles";


export function Home() {
  return (
    <div>
      <Welcome />
      <>
        <CoffeeListContainer>
          <h1>Nosso cafés</h1>
          <ul>
            {coffeeData &&
              coffeeData.map((coffee) => (
                <ItensCoffee key={coffee.id} coffee={coffee} />
              ))}
          </ul>
        </CoffeeListContainer>
      </> 
    </div>
  )
}