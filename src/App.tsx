import './styles.css'
import blackWeekend from './assets/black-weekend.png'
import logo from './assets/icono-tarjetaoh.svg'
import { ClickCounter } from './ClickCounter'


export const App = () => {
  return (
    <div>
      <h1>React App {process.env.name}</h1>
      <img src={blackWeekend} alt="as" />
      <img src={logo} alt="as1" />
      <ClickCounter />
    </div>
  )
}