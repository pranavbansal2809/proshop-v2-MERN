import { Container } from "react-bootstrap"
import Header from "./components/Header"

const App = () => {
  return (
    <>
      <Header/>
      <main className='py-3'>
        <Container>
          <p>Hello</p>
        </Container>
      </main>
    </>
  )
}

export default App