import { Route, Routes, useLocation } from "react-router-dom"
import Legal from "../Copyright/legal"
import Rule from "../Copyright/rule"
import Footer from "../Footer"
import Header from "../Header/Index"
import { useEffect } from "react"

function App() {
      const routePath = useLocation();

      useEffect(() => {
            window.scroll(0, 0);
      }, [routePath]);

  return (
    <div className="body__container">
      <Header />

      <Routes>
            <Route path="/" element={ <p>test</p> } />
            <Route path="/legal" element={ <Legal /> } />
            <Route path="/rule" element={ <Rule /> } />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
