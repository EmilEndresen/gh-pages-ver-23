import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"

function App() {
   const [count, setCount] = useState(0)

   return (
      <div className="App">
         <div>
            <h1>God jul</h1>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa esse
               rem deleniti, id eius repellendus autem alias explicabo aut commodi.
            </p>
         </div>
      </div>
   )
}

export default App
