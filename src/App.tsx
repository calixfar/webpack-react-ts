import './styles.css'
import blackWeekend from './assets/black-weekend.png'
import logo from './assets/icono-tarjetaoh.svg'

export const App = () => {
  return (
    <div>
      <h1>React App</h1>
      <img src={blackWeekend} alt="as" />
      <img src={logo} alt="as1" />
    </div>
  )
}