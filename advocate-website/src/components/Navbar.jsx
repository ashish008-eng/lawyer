// export default function Navbar() {
//   return (
//     <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold">⚖ Advocate Surender Sharma</h1>

//       <ul className="flex gap-6 text-sm">
//         <li className="hover:text-yellow-400 cursor-pointer">Home</li>
//         <li className="hover:text-yellow-400 cursor-pointer">About</li>
//         <li className="hover:text-yellow-400 cursor-pointer">Practice Areas</li>
//         <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
//         <li className="hover:text-yellow-400 cursor-pointer">Disclaimer</li>
//       </ul>
//     </nav>
//   )
// }
// import { Link } from "react-router-dom"

// export default function Navbar() {
//   return (
//     <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold">⚖ Advocate Surender Sharma</h1>

//       <ul className="flex gap-6 text-sm">
//         <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
//         <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
//         <li><Link to="/practice" className="hover:text-yellow-400">Practice Areas</Link></li>
//         <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
//         <li><Link to="/disclaimer" className="hover:text-yellow-400">Disclaimer</Link></li>
//       </ul>
//     </nav>
//   )
// }


// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between">
//       <h1 className="font-bold">⚖️ Advocate Surender Sharma</h1>
//       <div className="space-x-4">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/practice">Practice Areas</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/disclaimer">Disclaimer</Link>
//       </div>
//     </nav>
//   );
// }

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between">
      <h1 className="text-lg font-bold">⚖ Advocate Surender Sharma</h1>

      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/practice-areas">Practice Areas</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/disclaimer">Disclaimer</Link>

        

      </div>
    </nav>
  );
}

