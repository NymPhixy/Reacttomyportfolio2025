import { RevealOnScroll } from "./RevealOnScroll";
import emailjs from "emailjs-com";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_xzxy1zf";
  const TEMPLATE_ID = "template_bnqom81";
  const PUBLIC_KEY = "MCW6PoPJ6ikBfiyDP";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        alert("Bericht verzonden, ik neem snel contact met je op.");
      })
      .catch(() => {
        alert("Er is een fout opgetreden, probeer het opnieuw.");
      });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="Contact"
      className="w-full min-h-screen flex py-10 sm:py-20 justify-center items-center"
    >
      <RevealOnScroll>
        <div className="w-full px-4 sm:px-8 max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r text-transparent from-purple-400 to-pink-400 bg-clip-text">
            Neem contact op
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <div className="relative w-full">
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  className="w-full glass-card border rounded-lg px-4 py-3 text-white placeholder:text-gray-300 transition focus:outline-none focus:border-pink-500"
                  placeholder="Jouw naam"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  className="w-full glass-card border rounded-lg px-4 py-3 text-white placeholder:text-gray-300 transition focus:outline-none focus:border-pink-500"
                  placeholder="your@email.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                autoComplete="off"
                required
                value={formData.message}
                rows={6}
                className="w-full glass-card border rounded-lg px-4 py-3 text-white placeholder:text-gray-300 transition focus:outline-none focus:border-pink-500 resize-none"
                placeholder="Jouw bericht..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-pink-500/50"
            >
              Verstuur bericht
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
