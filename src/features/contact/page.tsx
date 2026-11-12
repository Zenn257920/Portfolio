import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";

export default function ContactPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold leading-tight text-blue-400 sm:text-4xl">
          Hire Me!
          <br />
          Let's work together
        </h1>

        <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base">
          I'm always open to new opportunities and collaborations.
        </p>
      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[2fr_3fr] lg:gap-12">
          <div className="min-w-0">
            <ContactInfo />
          </div>

          <div className="min-w-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
