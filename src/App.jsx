import Container from "./Components/Container"
import Cards from "./Components/Cards"

export default function App() {
  return (
    <Container className={`bg-very-dark-blue h-screen overflow-hidden`}>
      <Cards />
    </Container>
  )
}