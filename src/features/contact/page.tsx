import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";

export default function ContactPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-blue-400">
          Hire Me!
          <br /> Let's work together
        </h1>
        <p className="mt-3 max-w-lg text-zinc-400">
          I'm always open to new opportunities and collaborations.
        </p>
      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
