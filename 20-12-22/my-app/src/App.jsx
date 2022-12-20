import "./style.css"
import {Button} from "./components/button"

export default function App() {
  const name = "World";

  return (
    <div className ="App">
      <h1>Hello {name} !</h1>
      <Button />
    </div>
  )
}