// export default function Hero() {
//   return (
//     <section className="relative h-[85vh] overflow-hidden bg-[#0b1f3a]">

//       {/* 🔵 Supreme Court – right corner shadow */}
//       <img
//         src={supremeCourt}
//         className="
//           absolute 
//           right-0 bottom-0
//           w-full h-full
//           object-contain
//           opacity-20
//           hidden md:block
//         "
//       />

//       {/* 🧾 CONTENT GRID */}
//       <div className="relative z-20 max-w-7xl mx-auto h-full px-10">
//         <div className="grid md:grid-cols-2 gap-8 h-full items-center">

//           {/* 👨‍⚖️ Client Image – left side */}
//           <div className="flex justify-center md:justify-start">
//             <img
//               src={hero}
//               alt="Advocate"
//               // className="w-full max-w-md h-auto object-contain"


//               className="
//     absolute
//     left-20
//     bottom-[-20px]
//     h-[420px]
//     object-contain
//     drop-shadow-2xl
//   "
//             />


//           </div>

//           {/* 📋 CONTENT */}
//           <div className="flex flex-col justify-center">
//             <h1 className="text-5xl font-bold text-white mb-4">
//               Advocate Sameer Sharma
//             </h1>

//             <p className="text-xl text-gray-200 mb-2">
//               Experienced Criminal & Civil Lawyer
//             </p>

//             <p className="text-gray-300 mb-6">
//               Over 10 Years of Legal Expertise
//             </p>

//             <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-semibold shadow-lg w-fit">
//               Book a Consultation
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>

//     //     <section
//     //   className="relative text-white"
//     //   style={{
//     //     backgroundImage: `
//     //       linear-gradient(rgba(15,23,42,0.85), rgba(15,23,42,0.85)),
//     //       url(${supremeCourt})
//     //     `,
//     //     backgroundSize: "cover",
//     //     backgroundPosition: "right center",
//     //   }}
//     // >
//     //   <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center px-8 py-24 gap-10">

//     //     {/* LEFT CONTENT */}
//     //     <div>
//     //       <h1 className="text-5xl font-bold mb-4">
//     //         Advocate Surender Sharma
//     //       </h1>
//     //       <p className="text-xl mb-2">
//     //         Experienced Criminal & Civil Lawyer
//     //       </p>
//     //       <p className="mb-6 text-gray-300">
//     //         Over 6+ Years of Legal Expertise
//     //       </p>

//     //       <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-semibold">
//     //         Book a Consultation
//     //       </button>
//     //     </div>

//     //     {/* RIGHT IMAGE (CLIENT PHOTO) */}
//     //     <div className="flex justify-center">
//     //       <img
//     //         src={hero}
//     //         alt="Advocate"
//     //         className="w-80 rounded-lg shadow-2xl"
//     //       />
//     //     </div>

//     //   </div>
//     // </section>


//   )
// }



// import hero from "../assets/hero-lawyer.png";
// import supremeCourt from "../assets/supreme-court.png";

// export default function Hero() {
//   return (
//     <section className="relative h-[85vh] bg-[#0b1f3a] overflow-hidden">

//       {/* 🔵 Supreme Court background */}
//       <img
//         src={supremeCourt}
//         alt="Supreme Court"
//         className="
//           absolute right-0 bottom-0
//           w-full h-full
//           object-contain
//           opacity-20
//           hidden md:block
//         "
//       />

//       {/* 🧾 CONTENT */}
//       <div className="relative z-20 max-w-7xl mx-auto h-full px-6">
//         <div className="grid md:grid-cols-2 h-full items-center">

//           {/* 👨‍⚖️ LAWYER IMAGE (LEFT + SLIGHT DOWN) */}
//           <div className="relative flex justify-center md:justify-start">
//             <img
//               src={hero}
//               alt="Advocate"
//               className="
//                 relative
//                 top-10
//                 h-[420px]
//                 object-contain
//                 drop-shadow-2xl
//               "
//             />
//           </div>

//           {/* 📋 TEXT CONTENT (CENTER RIGHT) */}
//           <div className="flex flex-col justify-center text-center md:text-left">
//             <h1 className="text-5xl font-bold text-white mb-4">
//               Advocate Sameer Sharma
//             </h1>

//             <p className="text-xl text-gray-200 mb-2">
//               Experienced Criminal & Civil Lawyer
//             </p>

//             <p className="text-gray-300 mb-6">
//               Over 10 Years of Legal Expertise
//             </p>

//             <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-semibold shadow-lg w-fit mx-auto md:mx-0">
//               Book a Consultation
//             </button>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



// import hero from "../assets/hero-lawyer.png";
// import supremeCourt from "../assets/supreme-court.png";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen bg-[#0b1f3a] overflow-hidden pt-24">

//       {/* 🏛 Supreme Court Background (Desktop only) */}
//       <img
//         src={supremeCourt}
//         alt="Supreme Court"
//         className="
//           absolute right-0 bottom-0
//           w-full h-full
//           object-contain
//           opacity-20
//           hidden md:block
//         "
//       />

//       {/* 🔹 MAIN CONTENT */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between">

//         {/* 🧾 TEXT */}
//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Advocate Surender Sharma
//           </h1>

//           <p className="text-lg md:text-xl text-gray-200 mb-2">
//             Criminal & Civil Lawyer
//           </p>

//           <p className="text-gray-300 mb-6">
//             6+ Years of Legal Expertise
//           </p>

//           <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-semibold shadow-lg">
//             Book a Consultation
//           </button>
//         </div>

//         {/* 👨‍⚖️ MOBILE IMAGE */}
//         <div className="mt-10 md:hidden">
//           <img
//             src={hero}
//             alt="Advocate"
//             className="h-[280px] mx-auto drop-shadow-xl"
//           />
//         </div>
//       </div>

//       {/* 👨‍⚖️ DESKTOP IMAGE */}
//       <img
//         src={hero}
//         alt="Advocate"
//         className="
//           absolute
//           right-10
//           bottom-0
//           h-[420px]
//           object-contain
//           drop-shadow-2xl
//           hidden md:block
//         "
//       />
//     </section>
//   );
// }





import hero from "../assets/hero-lawyer.png";
import supremeCourt from "../assets/supreme-court.png";

export default function Hero() {
  return (
    // <section
    //   className="
    //     relative
    //     bg-[#0b1f3a]
    //     overflow-hidden
    //     pt-24
        
    //     md:min-h-screen
    //   "
    // >

    <section
  className="
    relative
    bg-[#0b1f3a]
    overflow-visible
    pt-28
    h-[90vh]
    md:h-[100vh]
  "
>

      {/* 🏛 Background (Desktop only) */}
      <img
        src={supremeCourt}
        alt="Supreme Court"
        className="
          absolute right-0 bottom-0
          w-full h-full
          object-contain
          opacity-20
          hidden md:block
        "
      />

      {/* 🔹 CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between">

        {/* 🧾 TEXT */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Advocate Surender Sharma
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-2">
            Criminal & Civil Lawyer
          </p>

          <p className="text-gray-300 mb-6">
            6+ Years of Legal Expertise
          </p>

          {/* 🔘 PULSE BUTTON */}
          <button
            className="
              relative
              bg-yellow-500
              hover:bg-yellow-600
              text-black
              px-7
              py-3
              rounded
              font-semibold
              shadow-lg
              transition
              duration-300
              hover:scale-105
              before:absolute
              before:inset-0
              before:rounded
              before:bg-yellow-400
              before:opacity-0
              hover:before:opacity-20
              before:animate-ping
            "
          >
            Book a Consultation
          </button>
        </div>

        {/* 👨‍⚖️ MOBILE IMAGE */}
        <div className="mt-12 md:hidden">
          {/* <img
            src={hero}
            alt="Advocate"
            className="h-[260px] mx-auto drop-shadow-xl"
          /> */}

          <img
  src={hero}
  alt="Advocate"
  // className="
  //   absolute
  //   right-6
  //   bottom-0
  //   h-[520px]
  //   md:h-[560px]
  //   object-contain
  //   drop-shadow-2xl
  //   z-20
  //   hidden md:block
  // "
  className="h-[300px] mx-auto drop-shadow-xl"
/>

        </div>
      </div>

      {/* 👨‍⚖️ DESKTOP IMAGE */}
      <img
        src={hero}
        alt="Advocate"
        className="
          absolute
    right-6
    -bottom-16
    h-[440px]
    object-contain
    drop-shadow-2xl
    hidden md:block
        "
      />
    </section>
  );
}
