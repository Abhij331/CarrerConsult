// ServicesSection.jsx
export default function ServicesSection() {
  const services = [
    {
      title: "Career Assessment & Guidance",
      icon: "👩🏻‍💻",
      description: "Helping individuals identify their strengths, interests, and suitable career paths through assessments and expert advice.",
    },
    {
      title: "Resume & Interview Preparation",
      icon: "🧔",
      description: "Assisting with resume building, cover letter writing, and interview coaching to enhance job prospects.",
    },
    {
      title: "Job Search ",
      icon: "💆‍♂️",
      description: "Providing insights on effective job search techniques, networking strategies, and industry trends to secure the right opportunities.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="text-center mb-10">
        <p className="text-blue-400 text-lg font-medium"></p>
        <h2 className="text-4xl font-bold mb-2 underline decoration-purple-500">Our Services</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Expert career consulting services to empower you with the right guidance for everyday success or pivotal career moves. Whether you're navigating challenges or seizing new opportunities, we help you stay ahead with confidence
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="bg-[#1c1c1c] p-6 rounded-2xl shadow-md">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
