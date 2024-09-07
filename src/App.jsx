import {Routes, Route} from "react-router-dom"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import { routes } from "./Components/utils/routes";

function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
              <Route path={routes.home} element={<Home />} />
              <Route path={routes.contact} element={<Contact/>} />
              <Route path="detail/:id" element={<Detail/>}/>
              <Route path={routes.favs} element={<Favs/>} />
              <Route path={routes.notFound} element={<h1>Error 404 - Page not Found</h1>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
