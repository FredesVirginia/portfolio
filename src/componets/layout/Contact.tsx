import { useState } from "react";
import { motion } from "framer-motion";



export default function ContactForm2() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="mt-24 px-4 md:px-0 max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Contame sobre tu proyecto
        </h2>
        <span className="block h-1 w-32 bg-cyan-400 rounded-full mt-3 mb-8 mx-auto"></span>
      </motion.div>

       <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white/90 backdrop-blur shadow-xl rounded-2xl px-6 py-8 flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500 transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500 transition"
        />
        <textarea
          name="message"
          placeholder="Cuéntame sobre tu proyecto..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          className="w-full bg-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500 transition resize-none"
        />

        <motion.button
        style={{color:"white" , fontWeight: "bold" , fontSize:"18px" , borderRadius:"10px"} }
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-white text-lg font-semibold py-3 rounded-lg shadow-md hover:brightness-110 transition"
        >
          Solicitar presupuesto
        </motion.button>

        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-green-600 font-medium pt-2"
          >
            ¡Gracias! Pronto me pondré en contacto contigo.
          </motion.div>
        )}
      </motion.form>
    </div>
  );
}

