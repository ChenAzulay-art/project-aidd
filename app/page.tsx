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
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            href="/about"
            className="flex h-12 w-full items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-700 dark:hover:bg-[#ccc] dark:focus-visible:ring-zinc-200 md:w-[158px]"
          >
            About Me
          </Link>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
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
