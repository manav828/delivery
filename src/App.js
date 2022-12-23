//npm start


import './App.css';
import Homepage from "./components/homepage/homepage"
import Register from "./components/register/register"
import Login from './components/login/login';
import Contact from './components/contact_us/contact_us';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState} from 'react'
import Shreeji from './components/shop_page/shops/Shreeji';
import Yogi from './components/shop_page/shops/Yogi';
import Iceberg from './components/shop_page/shops/Iceberg';
import WaghBakri from './components/shop_page/shops/WaghBakri';
import Hot_Spicy from './components/shop_page/shops/Hot_Spicy';
import Patel from './components/shop_page/shops/Patel';
import TPH from './components/shop_page/shops/TPH';
import SweetSpot from './components/shop_page/shops/SweetSpot';
import Pinki from './components/shop_page/shops/Pinki';

function App() {

  const [user , setLoginUser] = useState({
    name : "",
    email: "",
    password:""
  })

  return (
    <div className="App">

      <Router>
        <Routes>

          <Route exact path="/" element={<Homepage/>}/>
          <Route  path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
          <Route  path="/register" element={<Register/>}/>
          <Route path="/contact_us" element={<Contact />}/>
          <Route path="/shreeji" element={<Shreeji />}/>
          <Route path="/Yogi" element={<Yogi/>}/>
          <Route path="/Iceberg" element={<Iceberg />}/>
          <Route path="/WaghBakri" element={<WaghBakri />}/>
          <Route path="/Hot_Spicy" element={<Hot_Spicy />}/>
          <Route path="/Patel" element={<Patel />}/>
          <Route path="/TPH" element={<TPH />}/>
          <Route path="/Sweet Spot" element={<SweetSpot />}/>
          <Route path="/Pinki" element={<Pinki />}/>
          {/* <Route path="/aboutUs" element={<About />}/> */}
          {/* <Route exact path="/" ><Homepage /></Route>
          <Route exact path="/login" ><Login /></Route>

          <Route exact path="/register" ><Register /></Route> */}

          
        </Routes>
      </Router>
      {/* <Homepage /> */}
      
      
      {/* <Register /> */}
    </div>
  );
}

export default App;
