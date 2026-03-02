import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-200 flex items-center justify-center px-6">

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Lado esquerdo */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
            Transforme sua ideia em realidade
          </h1>

          <p className="text-lg text-slate-600">
            Deixe seu contato e nossa equipe entrará em contato com você o mais rápido possível.
          </p>

          <ul className="space-y-2 text-slate-600">
            <li>✔ Atendimento rápido</li>
            <li>✔ Soluções personalizadas</li>
            <li>✔ Sem compromisso</li>
          </ul>
        </div>

        {/* Formulário */}
        <ContactForm />

      </div>

    </div>
  );
}