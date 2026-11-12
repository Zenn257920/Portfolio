import { Link } from "@tanstack/react-router";
import {
  GithubIcon,
  Linkedin01Icon,
  Mail01Icon,
  Facebook01Icon,
  Doc01Icon,
  MailSend01Icon,
} from "hugeicons-react";
import MyImage from "@/assets/me.jpg";

const TECH_STACK = [
  { name: "TypeScript", color: "bg-cyan-600" },
  { name: "React", color: "bg-cyan-600" },
  { name: "Next.js", color: "bg-zinc-700" },
  { name: "Tailwind CSS", color: "bg-cyan-600" },
];

const SOCIAL_LINKS = [
  {
    icon: GithubIcon,
    href: "https://github.com/Zenn257920",
    label: "GitHub",
  },
  {
    icon: Linkedin01Icon,
    href: "https://linkedin.com/in/kaung-htet-zan-thar",
    label: "LinkedIn",
  },
  {
    icon: Mail01Icon,
    href: "mailto:kkaunghtetzanthar@gmail.com",
    label: "Email",
  },
  {
    icon: Facebook01Icon,
    href: "https://facebook.com/aaa",
    label: "Facebook",
  },
];

export default function HomePage() {
  return (
    <section className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">
      <div className="max-w-xl space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold md:text-5xl whitespace-nowrap">
            Hi, I'm Kaung Htet Zan Thar
          </h1>
          <h2 className="text-2xl font-bold text-zinc-300 md:text-3xl">
            A Frontend Developer.
          </h2>
        </div>

        <p className="leading-relaxed text-zinc-400">
          A Fresh graduate Frontend developer passionate about building great
          user experiences using{" "}
          {TECH_STACK.map((tech, i) => (
            <span key={tech.name}>
              <TechBadge name={tech.name} color={tech.color} />
              {i < TECH_STACK.length - 2 && " , "}
              {i === TECH_STACK.length - 2 && " and "}
              {i === TECH_STACK.length - 1 && " ."}
            </span>
          ))}
        </p>

        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            download="Kaung_Htet_Zan_Thar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-800"
          >
            <Doc01Icon size={20} />
            Download Resume
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
          >
            <MailSend01Icon size={20} />
            Get in touch
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-zinc-500 transition-colors hover:text-zinc-100"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <div className="shrink-0">
        <img
          src={MyImage}
          alt="Kaung Htet Zan Thar"
          className="h-54 w-54 rounded-full object-cover ring-2 ring-zinc-800"
        />
      </div>
    </section>
  );
}

function TechBadge({ name, color }: { name: string; color: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full ${color} px-2.5 py-0.5 text-xs font-medium text-white`}
    >
      {name}
    </span>
  );
}
