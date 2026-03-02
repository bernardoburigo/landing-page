import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nome: "string",
    email: "string",
    telefone: "number",
    mensagem: "string",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      await fetch(
        "https://script.google.com/macros/s/AKfycbyH2ascpJDsXU5rgpwvWbCelgcNhx7aop9_ZrA3mr5WZe6X8CWWl2fkTswDmdYQQdBw/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(form),
        },
      );

      alert("Mensagem enviada!");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-xl space-y-4 w-full"
    >
      <h2 className="text-2xl font-semibold text-slate-800">
        Entre em contato
      </h2>

      <input
        name="nome"
        placeholder="Seu nome"
        required
        onChange={handleChange}
        className="w-full border border-slate-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <input
        name="email"
        type="email"
        placeholder="Seu email"
        required
        onChange={handleChange}
        className="w-full border border-slate-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <input
        name="telefone"
        placeholder="Telefone"
        onChange={handleChange}
        className="w-full border border-slate-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <textarea
        name="mensagem"
        placeholder="Mensagem"
        rows={4}
        onChange={handleChange}
        className="w-full border border-slate-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <button
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
      >
        {loading ? "Enviando..." : "Enviar mensagem"}
      </button>
    </form>
  );
}
