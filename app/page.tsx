import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/chen-azulay-737500244?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    icon: FaLinkedin,
    className:
      "bg-[#0A66C2] text-white hover:bg-[#004182] focus-visible:ring-[#0A66C2]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/chenazolay?igsh=ZzAzdDQyOGQ1ZTFw&utm_source=qr",
    icon: FaInstagram,
    className:
      "bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white hover:brightness-110 focus-visible:ring-[#DD2A7B]",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1BpBUtiitN/?mibextid=wwXIfr",
    icon: FaFacebook,
    className:
      "bg-[#1877F2] text-white hover:bg-[#0D65D9] focus-visible:ring-[#1877F2]",
  },
  {
    name: "GitHub",
    href: "https://github.com/ChenAzulay-art",
    icon: FaGithub,
    className:
      "bg-[#24292F] text-white hover:bg-[#000000] focus-visible:ring-[#24292F]",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center gap-10 bg-white px-6 py-20 sm:items-start sm:px-12 dark:bg-black">
        <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-full border-2 border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900">
          {/* Replace public/profile.svg with your photo (e.g. profile.jpg) and update src */}
          <Image
            src="/profile.svg"
            alt="Chen Azulay"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col items-center gap-5 text-center sm:items-start sm:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
            About Me
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            My name is Chen Azulay Stavisky, I am a driven software developer
            and a 3rd-year Computer Science student at the Holon Institute of
            Technology (HIT). I bring a unique blend of analytical thinking and
            technical execution, combining a strong foundation in software
            engineering with four years of hands-on experience in digital
            marketing and data analysis. I am passionate about solving complex
            problems, building scalable architecture, and leveraging data to
            drive impactful solutions.
          </p>
        </div>

        <Link
          href="/about"
          className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-base font-medium text-background transition-colors hover:bg-[#383838] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-700 dark:hover:bg-[#ccc] dark:focus-visible:ring-zinc-200"
        >
          View full experience
        </Link>

        <div className="w-full">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Connect with me
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {socialLinks.map(({ name, href, icon: Icon, className }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${name} profile`}
                className={`inline-flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${className}`}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                <span>{name}</span>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
