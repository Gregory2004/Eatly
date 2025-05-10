import { useState } from 'react'
import Navbar from '../src/assets/components/Navbar/Navbar'
import MainEnjoy from './assets/components/Main/EnjoyFoods/Enjoys'
import Quantity from './assets/components/Main/Quantity/Quantity'
import Phone from './assets/components/Main/PhoneScreen/Phone'
import Restorants from './assets/components/Main/Restorants'
import './App.css'
import Footer from './assets/components/Footer/Footer'

function Container({ children }) {
  return (
    <div className="w-[80%] m-auto block">
      {children}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="App-header bg-[#F9F9F9] pt-[30px]">
        <Container>
          <Navbar />
        </Container>
      </header>
      <main className="App-main bg-[#F9F9F9] pt-[30px]">
        <Container>
          <MainEnjoy />
        </Container>
        <Quantity />
        <Container>
          <Phone />
        </Container>
        <Container>
          <Restorants />
        </Container>
        <Container>
          <Footer />
        </Container>
      </main>
    </>
  )
}

export default App
