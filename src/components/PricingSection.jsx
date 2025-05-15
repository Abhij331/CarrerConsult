// PricingSection.jsx
export default function PricingSection() {
  const plans = [
    {
      title: "Classic Services",
      price: "$25",
      popular: true,
      features: ["Career Assessment & Guidance", "Resume Assistance ", "Job Search Strategies"],
    },
    {
      title: "Premium Services",
      price: "$35",
      features: ["Personal Branding", "Career Transition Support", "Skill Development & Upskilling Guidance", "Industry Connections"],
    },
    {
      title: "Packages",
      price: "$50",
      features: ["Full Career Coaching Program", "Resume, Cover Letter & LinkedIn Overhaul", "Interview Mastery Program", "Job Placement Assistance"],
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="text-center mb-10">
        <p className="text-blue-400 text-lg font-medium">Expert Career Consulting at Competitive Rates</p>
        <h2 className="text-4xl font-bold underline decoration-purple-500 mb-2">Our Service Prices</h2>
        <p className="text-gray-400 max-w-xl mx-auto">Choose from our range of expert career consulting services.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl border-2 ${
              plan.popular ? "border-purple-400 bg-[#1c1c1c]" : "border-gray-700 bg-[#121212]"
            }`}
          >
            {plan.popular && (
              <div className="bg-blue-400 text-black font-semibold px-4 py-1 rounded-full inline-block mb-3">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
            <div className="text-3xl font-bold text-blue-400 mb-4">{plan.price} <span className="text-base text-gray-400">/mo</span></div>
            <ul className="space-y-2 text-gray-300">
              {plan.features.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-yellow-400">✔</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
