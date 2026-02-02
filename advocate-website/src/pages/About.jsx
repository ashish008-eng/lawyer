// export default function About() {
//   return (
//     <div className="p-10">
//       <h2 className="text-3xl font-bold mb-4">About Advocate</h2>
//       <p>
//         Advocate Surender Sharma is an experienced criminal and civil lawyer
//         with over 6+ years of practice.
//       </p>
//     </div>
//   )
// }


//import lawyer from "../assets/hero-lawyer.png";
import aboutImage from "../assets/about-profile.png";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-2">
                {/* <img
                  src={lawyer}
                  alt="Advocate Surender Sharma"
                  className="w-full h-auto rounded-xl object-cover transform group-hover:scale-105 transition duration-300"
                /> */}
                <img
                  src={aboutImage}
                  alt="Advocate Profile"
                  //className="w-full max-w-sm rounded-xl shadow-lg mx-auto"
                  className="w-full h-auto rounded-xl object-cover transform group-hover:scale-105 transition duration-300"
                />

              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Advocate Surender Sharma
                </h1>
                <p className="text-xl text-gray-600 font-medium">
                  Advocate & Legal Consultant
                </p>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  A distinguished legal professional with over 6+ years of 
                  comprehensive experience in Criminal, Civil, Family, Corporate, 
                  and Property Law. Known for exceptional legal acumen and 
                  unwavering commitment to justice.
                </p>
                
                <p className="text-lg">
                  Advocate Sharma has established a remarkable track record of 
                  success, consistently delivering favorable outcomes for clients 
                  through strategic legal representation and meticulous case preparation.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                <StatCard number="6+" label="Years Experience" icon="⚖️" />
                <StatCard number="500+" label="Cases Handled" icon="💼" />
                <StatCard number="300+" label="Happy Clients" icon="😊" />
                <StatCard number="95%" label="Success Rate" icon="🏆" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to upholding the principles of justice with integrity, 
              professionalism, and a client-centered approach
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Legal Expertise"
              description="Comprehensive knowledge across multiple legal domains with a focus on strategic case management and client advocacy"
              icon="🏛️"
            />
            <FeatureCard
              title="Client Commitment"
              description="Personalized legal solutions with transparent communication and dedicated support throughout the legal process"
              icon="🤝"
            />
            <FeatureCard
              title="Proven Results"
              description="Consistently high success rate through thorough preparation, legal analysis, and effective courtroom representation"
              icon="✅"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <blockquote className="text-2xl lg:text-3xl font-light text-gray-800 italic leading-relaxed">
            "Justice is not a matter of chance, but of preparation, dedication, 
            and unwavering commitment to the truth."
          </blockquote>
          <div className="mt-8 text-gray-600 font-medium">
            — Advocate Surender Sharma
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ number, label, icon }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 group">
      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-1">{number}</div>
      <div className="text-sm text-gray-600 font-medium">{label}</div>
    </div>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
