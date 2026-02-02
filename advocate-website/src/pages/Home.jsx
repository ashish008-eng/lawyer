// import Hero from "../components/Hero"

// export default function Home() {
//   return <Hero />
// }


// export default function Home() {
//   return (
//     <div className="text-center py-20">
//       <h1 className="text-4xl font-bold">
//         Experienced Criminal & Civil Lawyer
//       </h1>
//     </div>
//   );
// }


import { Link } from "react-router-dom";
import PracticeCard from "../components/PracticeCard";
import hero from "../assets/hero-lawyer.png";
import criminal from "../assets/criminal.png";
import civil from "../assets/civil.png";
import family from "../assets/family.png";
import corporate from "../assets/corporate.png";
import property from "../assets/property.png";
import supremeCourt from "../assets/supreme-court.png";





export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      {/* <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white"> */}

      <section
        className="relative text-white"
        style={{
          backgroundImage: `
      linear-gradient(rgba(15,23,42,0.85), rgba(15,23,42,0.85)),
      url(${supremeCourt})
    `,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
        }}
      >

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center px-8 py-20 gap-10">
          
          <div>
            {/* <h1 className="text-5xl font-bold mb-4"> */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold"> 
              Advocate Surender Sharma
            </h1>
            {/* <p className="text-xl mb-2"> */}
            <p className="text-sm md:text-base lg:text-lg">
              Experienced Criminal & Civil Lawyer
            </p>
            <p className="mb-6 text-gray-200">
              Over 6+ Years of Legal Expertise
            </p>

            <Link to="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-semibold inline-block">
              Book a Consultation
            </Link>
          </div>

          <div>
            <img src={hero} alt="Advocate" className="rounded-lg shadow-lg bg-transparent" />
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      {/* <section className="bg-gray-100 py-16"> */}
      <section className="bg-gray-100 pt-24 pb-16 relative z-30 -mt-28">

        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-2">
            Practice Areas
          </h2>
          <p className="text-center text-gray-600 mb-10">
            How I Can Help You
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            <PracticeCard title="Criminal Law" icon={criminal} />
            <PracticeCard title="Civil Law" icon={civil} />
            <PracticeCard title="Family Law" icon={family} />
            <PracticeCard title="Corporate Law" icon={corporate} />
            <PracticeCard title="Property Disputes" icon={property} />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">
          <Stat value="6+" label="Years of Experience" />
          <Stat value="500+" label="Cases Handled" />
          <Stat value="300+" label="Satisfied Clients" />
          <Stat value="95%" label="Success Rate" />
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

            <p className="mb-3">📞 Call Us: +91 88600xxxxx</p>
            <p className="mb-3">✉ Email: info@surendersharma.com</p>
            <p className="mb-6">📍 M73W+QP6, Court Rd, Vishwas Nagar Extension, Vishwas Nagar, Shahdara, Delhi, 110032</p>

            <Link to="/contact" className="bg-yellow-500 text-black px-6 py-3 rounded font-semibold">
              Send Message
            </Link>
          </div>

          <div className="bg-white rounded-lg overflow-hidden">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=karkardooma%20court%20delhi&output=embed"
              className="w-full h-64 border-0"
            />
          </div>

        </div>
      </section>
    </>
  );
}

function Stat({ value, label }) {
  return (
    <div className="shadow p-6 rounded">
      <h3 className="text-3xl font-bold text-blue-900">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}
