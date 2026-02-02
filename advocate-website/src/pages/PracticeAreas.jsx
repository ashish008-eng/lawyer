// export default function Practice() {
//   return (
//     <div className="p-10">
//       <h2 className="text-3xl font-bold mb-4">Practice Areas</h2>
//       <ul className="list-disc pl-6 space-y-2">
//         <li>Criminal Law</li>
//         <li>Civil Law</li>
//         <li>Family Law</li>
//         <li>Property Disputes</li>
//       </ul>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import PracticeCard from "../components/PracticeCard";

import criminal from "../assets/criminal.png";
import civil from "../assets/civil.png";
import family from "../assets/family.png";
import corporate from "../assets/corporate.png";
import property from "../assets/property.png";

export default function PracticeAreas() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Areas of Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            With decades of experience across various legal domains, I provide comprehensive 
            legal solutions tailored to your unique needs. Each practice area represents my 
            commitment to excellence and client satisfaction.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <PracticeCard
            icon={criminal}
            title="Criminal Law"
            description="Expert defense and legal representation for criminal charges, ensuring your rights are protected throughout the legal process."
            services={["Bail Applications", "Trial Defense", "Appeals", "Legal Consultation"]}
          />

          <PracticeCard
            icon={civil}
            title="Civil Litigation"
            description="Strategic legal solutions for civil disputes, contract matters, and property conflicts with a focus on favorable outcomes."
            services={["Contract Disputes", "Property Matters", "Injunctions", "Damages Claims"]}
          />

          <PracticeCard
            icon={family}
            title="Family Law"
            description="Compassionate legal guidance for family matters, prioritizing your family's well-being and legal rights."
            services={["Divorce Proceedings", "Child Custody", "Maintenance", "Property Settlement"]}
          />

          <PracticeCard
            icon={corporate}
            title="Corporate Law"
            description="Comprehensive legal support for businesses, from formation to compliance and dispute resolution."
            services={["Company Formation", "Compliance", "Contract Drafting", "Legal Advisory"]}
          />

          <PracticeCard
            icon={property}
            title="Property Disputes"
            description="Specialized expertise in property law matters, ensuring your property rights are protected and enforced."
            services={["Title Disputes", "Partition Suits", "Land Acquisition", "Property Registration"]}
          />

          <PracticeCard
            icon={criminal}
            title="Constitutional Law"
            description="Expertise in constitutional matters and fundamental rights, providing strong legal representation for constitutional issues."
            services={["Writ Petitions", "Fundamental Rights", "Public Interest Litigation", "Constitutional Challenges"]}
          />

        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Need Legal Assistance?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Schedule a consultation to discuss your case with personalized attention 
              and expert legal guidance.
            </p>
            <Link to="/contact" className="bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Contact for Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
