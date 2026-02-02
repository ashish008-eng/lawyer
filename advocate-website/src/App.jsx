// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// export default function App() {
//   return (
//     <div className="text-3xl text-center text-blue-600 mt-20">
//       Tailwind Working ✅
//     </div>
//   )
// }
// import Navbar from "./components/Navbar"
// import Home from "./pages/Home"
// import Footer from "./components/Footer"

// export default function App() {
//   return (
//     <>
//       <Navbar />
//       <Home />
//       <Footer />
//     </>
//   )
// }
// import { Routes, Route } from "react-router-dom"
// import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"

// import Home from "./pages/Home"
// import About from "./pages/About"
// import Practice from "./pages/Practice"
// import Contact from "./pages/Contact"
// import Disclaimer from "./pages/Disclaimer"

// export default function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/practice" element={<Practice />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/disclaimer" element={<Disclaimer />} />
//       </Routes>

//       <Footer />
//     </>
//   )
// }
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Practice from "./pages/Practice";
// import Contact from "./pages/Contact";
// import Disclaimer from "./pages/Disclaimer";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/practice" element={<Practice />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/disclaimer" element={<Disclaimer />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;




import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import PracticeAreas from "./pages/PracticeAreas";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import Footer from "./components/Footer";




function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/practice-areas" element={<PracticeAreas />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/disclaimer" element={<Disclaimer />} />

        

      </Routes>

      <Footer />
    </>
  );
}

export default App;
