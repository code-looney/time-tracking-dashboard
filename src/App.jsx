import Container from "./Components/Container"
import Cards from "./Components/Cards"

export default function App() {
  return (
    <Container className={`bg-very-dark-blue w-full h-screen`}>
      <Cards />
    </Container>
  )
}