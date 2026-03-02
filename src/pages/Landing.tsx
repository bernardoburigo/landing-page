import ContactForm from "../components/ContactForm";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">

      <h1 className="text-4xl font-bold mb-4">
        Sua solução começa aqui
      </h1>

      <p className="text-gray-600 mb-10 text-center max-w-xl">
        Deixe seu contato e nossa equipe falará com você.
      </p>

      <ContactForm />

    </div>
  );
}