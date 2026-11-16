import {FaGithub} from "react-icons/fa"

import Weather from './weather'
function clicked(){
  console.log("clicked!!")
}
const Buttons=()=>{
  return(
    <button onClick={clicked}>hey</button>
  )
}

const App = () => {
  return (
    
       <div>
        <Weather/>
         <i><FaGithub size={60} color={"maroon"}/></i>
         <Buttons/>
       </div>

       
    
    
     
   
  )
}

export default App