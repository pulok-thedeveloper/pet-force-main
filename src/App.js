import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes";

function App() {
  const [preLoader, setPreLoader] = useState(true);
  const loader = document.getElementById('pre-loader');
  if(loader){
    setTimeout(() =>{
      loader.style.display="none";
      setPreLoader(false);
    }, 2000)
  }
  return (
    !preLoader && (
      <div className="App mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
    )
  );
}

export default App;
