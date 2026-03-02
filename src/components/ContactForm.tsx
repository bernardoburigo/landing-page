import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    await fetch("https://script.google.com/macros/s/AKfycbyH2ascpJDsXU5rgpwvWbCelgcNhx7aop9_ZrA3mr5WZe6X8CWWl2fkTswDmdYQQdBw/exec", {
      method: "POST",
      body: JSON.stringify(form)
    });

    setLoading(false);

    alert("Mensagem enviada!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4"
    >

      <input
        name="nome"
        placeholder="Nome"
        onChange={handleChange}
        required
        className="w-full border p-3 rounded"
      />

      <input
        name="email"
        placeholder="Email"
        type="email"
        onChange={handleChange}
        required
        className="w-full border p-3 rounded"
      />

      <input
        name="telefone"
        placeholder="Telefone"
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <textarea
        name="mensagem"
        placeholder="Mensagem"
        onChange={handleChange}
        className="w-full border p-3 rounded"
      />

      <button
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>

    </form>
  );
}