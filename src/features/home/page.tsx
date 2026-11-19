import { Link } from "@tanstack/react-router";
import {
  GithubIcon,
  Linkedin01Icon,
  Mail01Icon,
  Facebook01Icon,
  Doc01Icon,
  MailSend01Icon,
} from "hugeicons-react";
import TypingText from "@/components/common/typing-text";
import { Reveal } from "@/components/common/reveal";
import { motion, useReducedMotion } from "motion/react";

const TECH_STACK = [
  { name: "TypeScript", color: "bg-cyan-600" },
  { name: "React", color: "bg-cyan-600" },
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
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-w-0 min-h-[62vh] w-full flex-col items-center gap-10 overflow-hidden py-8 md:flex-row md:justify-between md:gap-8 lg:gap-16 lg:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]"
      />
      <div className="relative min-w-0 w-full max-w-3xl space-y-7 md:flex-1">
        <Reveal>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
            Frontend developer · Building for the web
          </p>
        </Reveal>
        <div className="space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="whitespace-nowrap text-[clamp(1rem,5vw,1.5rem)] font-bold leading-tight tracking-tight text-zinc-50 sm:text-2xl md:text-[clamp(1.5rem,3vw,2rem)] lg:text-4xl xl:text-5xl"
          >
            <TypingText texts={["Hi, I'm Frontend Developer"]} />
          </motion.h1>
        </div>

        <Reveal delay={0.1}>
          <p className="max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
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
        </Reveal>

        <Reveal delay={0.18}>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              download="Kaung_Htet_Zan_Thar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-400 px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-blue-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
            >
              <Doc01Icon size={20} />
              Download Resume
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 px-4 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-600 hover:text-white"
            >
              <MailSend01Icon size={20} />
              Get in touch
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-md text-zinc-500 transition hover:-translate-y-0.5 hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-blue-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <motion.img
        src="/animations/developer-mascot-slow.gif"
        alt="Animated developer working on a laptop"
        width={443}
        height={394}
        initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
        animate={
          reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -8, 0] }
        }
        transition={
          reduceMotion
            ? { opacity: { duration: 0.6 } }
            : {
                opacity: { duration: 0.7 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }
        }
        className="relative z-0 h-auto w-full max-w-[20rem] shrink-0 object-contain md:w-64 lg:w-[22rem]"
      />
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
