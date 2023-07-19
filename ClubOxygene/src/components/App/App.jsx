import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Header/Index";
import CardioMuscu from "../CardioMuscu";
import Coachs from "../Coachs";
import CoachDetails from "../Coachs/CoachDetails";
import Tarifs from "../Tarifs";
import Footer from "../Footer";
import Legal from "../Copyright/legal";
import Rule from "../Copyright/rule";

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

            <Route path="/cardiomuscu" element={ <CardioMuscu /> } />

            <Route path="/coach/:id" element={ <CoachDetails /> } />
            <Route path="/coachs" element={ <Coachs /> } />

            
            <Route path="/tarifs" element={ <Tarifs /> } />

            <Route path="/legal" element={ <Legal /> } />
            <Route path="/rule" element={ <Rule /> } />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
