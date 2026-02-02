// export default function PracticeCard({ title, img }) {
//   return (
//     <div className="bg-white rounded shadow hover:shadow-lg transition p-6 text-center">
//       <img src={img} alt={title} className="h-14 mx-auto mb-4" />
//       <h3 className="font-semibold text-lg">{title}</h3>
//     </div>
//   );
// }
export default function PracticeCard({ icon, title, description, services }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 group">
      {/* Icon Section */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center group-hover:from-slate-200 group-hover:to-slate-300 transition-colors duration-300">
          <img
            src={icon}
            alt={title}
            className="w-12 h-12 object-contain"
          />
        </div>
      </div>

      {/* Title Section */}
      <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center group-hover:text-slate-800 transition-colors">
        {title}
      </h3>

      {/* Description Section */}
      {description && (
        <p className="text-slate-600 text-center mb-6 leading-relaxed">
          {description}
        </p>
      )}

      {/* Services List */}
      {services && (
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wide text-center mb-3">
            Services
          </h4>
          <ul className="space-y-2">
            {services.map((service, index) => (
              <li key={index} className="flex items-center justify-center text-slate-700 group-hover:text-slate-900 transition-colors">
                <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                <span className="text-sm">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/0 to-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
}
