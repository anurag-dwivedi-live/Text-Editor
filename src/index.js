import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from './components/Main'
import About from './components/About'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState } from "react";

function App() {
  const [mode, setMode] = useState({
    backgroundColor: "#111827",
    color: "white",
  })
  
  const [secMode, setSecMode] = useState({
    backgroundColor: "#111827",
    color: "#9ca3af",
  })
  
  const toggleMode = () => {
    if (mode.color === "white") {
      setMode({
        backgroundColor: "white",
        color: "black",
      })
      setSecMode({
        backgroundColor: "white",
        color: "black",
      })
    } else {
      setSecMode({
        backgroundColor: "#111827",
        color: "#9ca3af",
      })
      setMode({
        backgroundColor: "#111827",
        color: "white",
      })
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar mode={mode} toggleMode={toggleMode}/><Main mode={mode} secMode={secMode}/><Footer mode={mode}/></>,
    },
    {
      path: "/about",
      element: <><Navbar mode={mode} toggleMode={toggleMode}/><About mode={mode}/><Footer mode={mode}/></>,
    },
    {
      path: "/pricing",
      element: <><Navbar mode={mode} toggleMode={toggleMode}/><Pricing mode={mode} secMode={secMode}/><Footer mode={mode}/></>,
    },
    {
      path: "/contact",
      element: <><Navbar mode={mode} toggleMode={toggleMode}/><Contact mode={mode} secMode={secMode}/><Footer mode={mode}/></>,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
