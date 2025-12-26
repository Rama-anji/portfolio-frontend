import { useState } from "react";
import emailjs from "@emailjs/browser";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";
import Reveal from "../components/common/Reveal";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        "service_61dug2u",
        "template_lk7egqh",
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        "yIB48Kocc4jW_SWb1"
      );

      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-10 bg-gradient-to-br from-brand-50 via-brand-100 to-brand-200">
      <Container>
        <SectionHeader
          title="Get In"
          highlight="Touch"
          subtitle="Let’s collaborate and build something impactful"
        />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* LEFT INFO */}
          <Reveal>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full">
              <h3 className="text-xl font-semibold mb-4">Let’s Work Together</h3>
              <p className="text-slate-600 mb-6">
                Have a project or idea? I’d love to hear from you. Fill the form
                or contact me directly.
              </p>

              <div className="space-y-4 text-slate-700">
                <div className="flex items-center gap-3">
                  <Mail className="text-indigo-600" /> anjaneyuluravi64@gmail.com
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-indigo-600" /> +91 6301932501
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-indigo-600" /> India
                </div>
              </div>
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-slate-200 rounded-2xl p-8 space-y-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="text-sm text-center mt-2 text-green-600">
                  {status}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
