import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const services = ["Career Assessment & Guidance", "Interview Preparation", "Job Search", "Career Growth Planning", "Personal Branding"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Your Name is required.";
    if (!form.phone) newErrors.phone = "Phone Number is required.";
    if (!form.email) newErrors.email = "Email is required.";
    if (!form.service) newErrors.service = "Service selection is required.";
    if (!form.date) newErrors.date = "Preferred date is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", form);
      // Optionally reset
      setForm({ name: "", phone: "", email: "", service: "", date: "", message: "" });
    }
  };

  return (
    <section className="bg-black text-white py-16 px-6" id="contact">
      <div className="text-center mb-10">
        <p className="text-blue-400 text-lg font-medium">Book Your Appointment</p>
        <h2 className="text-4xl font-bold mb-2 underline decoration-purple-500">Contact Us</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Ready for a fresh look? Book your appointment today or contact us for any questions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Side: Contact Info */}
        <div className="bg-[#1a1a1a] p-6 rounded-2xl space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-yellow-400 text-black p-3 rounded-full">
              📍
            </div>
            <div>
              <h4 className="font-bold text-lg">Address</h4>
              <p className="text-gray-400">5th Cross, MSR Nagar, Banaglore, India</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-yellow-400 text-black p-3 rounded-full">📞</div>
            <div>
              <h4 className="font-bold text-lg">Phone</h4>
              <p className="text-gray-400">+91 1234567890</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-yellow-400 text-black p-3 rounded-full">⏰</div>
            <div>
              <h4 className="font-bold text-lg">Business Hours</h4>
              <p className="text-gray-400">Mon-Fri: 9:00 AM - 7:00 PM<br />Sat: 9:00 AM - 5:00 PM<br />Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#1a1a1a] p-6 rounded-2xl space-y-5"
          noValidate
        >
          {[
            { name: "name", type: "text", label: "Your Name", placeholder: "Enter your full name" },
            { name: "phone", type: "tel", label: "Phone Number", placeholder: "Enter your phone number" },
            { name: "email", type: "email", label: "Email", placeholder: "Enter your email address" },
          ].map(({ name, type, label, placeholder }) => (
            <div key={name}>
              <label className="block font-medium mb-1">{label}</label>
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className={`w-full p-3 rounded-lg bg-black text-white border ${
                  errors[name] ? "border-red-600" : "border-gray-700"
                }`}
              />
              {errors[name] && <p className="text-red-600 text-sm mt-1">{errors[name]}</p>}
            </div>
          ))}

          <div>
            <label className="block font-medium mb-1">Service Interested In</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-black text-white border ${
                errors.service ? "border-red-600" : "border-gray-700"
              }`}
            >
              <option value="">Select an option</option>
              {services.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
            </select>
            {errors.service && <p className="text-red-600 text-sm mt-1">{errors.service}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Preferred Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-black text-white border ${
                errors.date ? "border-red-600" : "border-gray-700"
              }`}
            />
            {errors.date && <p className="text-red-600 text-sm mt-1">{errors.date}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Message (Optional)</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Any special request or questions?"
              rows="3"
              className="w-full p-3 rounded-lg bg-black text-white border border-gray-700"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-300 text-black py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
}
