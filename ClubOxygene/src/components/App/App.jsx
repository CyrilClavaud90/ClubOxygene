import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Header/Index";
import Home from "../Home";
import Escalade from "../Escalade";
import CoursEscalade from "../Escalade/CoursEscalade";
import BlocPark from "../Escalade/BlocPark";
import Anniversaires from "../Escalade/Anniversaires";
import CardioMuscu from "../CardioMuscu";
import CoursCollectifs from "../CoursCollectifs";
import SmallGroup from "../SmallGroup";
import Coachs from "../Coachs";
import CoachDetails from "../Coachs/CoachDetails";
import Tarifs from "../Tarifs";
import Contact from "../Contact";
import Legal from "../Copyright/legal";
import Rule from "../Copyright/rule";
import Footer from "../Footer";

function App() {
      const routePath = useLocation();

      useEffect(() => {
            window.scroll(0, 0);
      }, [routePath]);

  return (
    <div className="body__container">
      <Header />

      <Routes>
            <Route path="/" element={ <Home /> } />
            
            <Route path="/escalade" element={ <Escalade /> } />
            <Route path="/coursescalade" element={ <CoursEscalade /> } />
            <Route path="/blocpark" element={ <BlocPark /> } />
            <Route path="/anniversaires" element={ <Anniversaires /> } />
            
            <Route path="/cardiomuscu" element={ <CardioMuscu /> } />
            
            <Route path="/courscollectifs" element={ <CoursCollectifs /> } />

            <Route path="/smallgroup" element={ <SmallGroup /> } />


            <Route path="/coach/:id" element={ <CoachDetails /> } />
            <Route path="/coachs" element={ <Coachs /> } />

            <Route path="/tarifs" element={ <Tarifs /> } />

            <Route path="/contact" element={ <Contact /> } />

            <Route path="/legal" element={ <Legal /> } />
            <Route path="/rule" element={ <Rule /> } />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
