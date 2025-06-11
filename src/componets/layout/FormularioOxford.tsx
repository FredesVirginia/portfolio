import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de envío
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="mt-20 px-6 md:px-0 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-3xl font-bold text-gray-700">
          ¿Quieres un sistema de gestión de  como este?
        </h2>
        <span className="block h-1 w-52 bg-cyan-400 rounded-full mt-2 mb-8"></span>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white shadow-md rounded-xl p-8 space-y-6"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
        </div>

        <textarea
          name="message"
          placeholder="Cuéntame sobre tu proyecto..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
        />

        <motion.button
        style={{color:"white" , fontWeight: "bold" , fontSize:"18px"} }
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          type="submit"
          className="w-full text-2xl bg-cyan-400 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-cyan-500 transition"
        >
          Solicitar presupuesto
        </motion.button>

        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-green-600 font-medium pt-4"
          >
            ¡Gracias! Pronto me pondré en contacto contigo.
          </motion.div>
        )}
      </motion.form>
    </div>
  );
}
