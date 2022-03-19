import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Keys from './component/Buttonl/Keys';
import  AOS  from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';
function App() {
useEffect(()=>{
  AOS.init();
},[])
  return (
    <div className="App">
      <Keys></Keys>
    </div>
  );
}

export default App;
