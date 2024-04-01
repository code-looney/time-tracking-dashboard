import Container from "./Components/Container"
import Cards from "./Components/Cards"
import { BrowserRouter } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Container className={`bg-very-dark-blue h-screen pb-[1100px]  pt-[100px]`}>
        <Cards />
      </Container>
    </BrowserRouter>
  )
}