import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import EarthCanvas from "./canvas/Computers.jsx";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-6 relative">
      <div className="mx-auto max-w-7xl py-20">
        <div className="flex flex-col xl:flex-row gap-12 items-center">
          
          {/* Contact Form */}
          <div className="w-full xl:w-1/2">
            <div className="bg-white/10 backdrop-blur-md shadow-2xl rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                📩 Get in Touch
              </h2>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-6"
              >
                <div>
                  <label htmlFor="name" className="block mb-1 font-semibold text-white">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    className="w-full p-3 rounded-lg bg-black/30 text-white border border-transparent focus:border-cyan-400 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1 font-semibold text-white">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your email address?"
                    className="w-full p-3 rounded-lg bg-black/30 text-white border border-transparent focus:border-cyan-400 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1 font-semibold text-white">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    className="w-full p-3 rounded-lg bg-black/30 text-white border border-transparent focus:border-cyan-400 outline-none transition-all"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-black font-semibold py-3 rounded-xl shadow-lg hover:scale-105 transition-all"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* 3D Model Viewer */}
          <div className="w-full xl:w-1/2 h-[400px] xl:h-[500px]">
            <EarthCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
