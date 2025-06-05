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
        alert("Message Sent, I will get back to you shortly");
      })
      .catch(() => {
        alert("An error occurred, Please try again");
      });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="Contact"
      className="w-full min-h-screen flex py-20 justify-center items-center"
    >
      <RevealOnScroll>
        <div className="w-full px-8">
          <h2 className="bg-purple-500 border-pink-500/50 text-white py-3 px-6 rounded font-medium transition-al duration-200 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,38,92,0.8)]">
            Get In Touch
          </h2>
          <form className="space-y-6 " onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-8 w-full">
              <div className="w-full grid grid-cols-1 gap-6">
                <div className="relative w-full">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-pink-500 focus:bg-purple-500/5"
                    placeholder="Name..."
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
                    required
                    value={formData.email}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-pink-500 focus:bg-purple-500/5"
                    placeholder="example@gmail.com."
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
                  required
                  value={formData.message}
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-pink-500 focus:bg-purple-500/5"
                  placeholder="Your Message..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-700 to-pink-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,38,92,0.8)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
