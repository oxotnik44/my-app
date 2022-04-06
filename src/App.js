import Mobile from "./Project/Jsx/Mobile";
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element = {<Mobile/>}/>
     </Routes>
    </div>
  );
}

export default App;
