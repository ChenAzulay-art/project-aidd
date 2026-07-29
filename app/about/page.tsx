import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Chen Azulay",
  description:
    "Software developer and Computer Science student — experience, education, technologies, and projects.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl bg-white px-6 py-16 sm:px-12 sm:py-20 dark:bg-black">
        <Link
          href="/"
          className="mb-10 inline-block text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-100 dark:focus-visible:ring-zinc-200"
        >
          ← Home
        </Link>

        <article className="flex flex-col gap-14">
          <section>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
              About Me
            </h1>
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              I am a driven software developer and a 3rd-year Computer Science
              student at the Holon Institute of Technology (HIT). I bring a
              unique blend of analytical thinking and technical execution,
              combining a strong foundation in software engineering with four
              years of hands-on experience in digital marketing and data
              analysis. I am passionate about solving complex problems, building
              scalable architecture, and leveraging data to drive impactful
              solutions.
            </p>
          </section>

          <section className="border-t border-zinc-200 pt-14 dark:border-zinc-800">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              Education &amp; Coursework
            </h2>
            <h3 className="mb-1 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              B.Sc. in Computer Science
            </h3>
            <p className="mb-5 text-base font-medium text-zinc-500 dark:text-zinc-400">
              Holon Institute of Technology (HIT) | 3rd Year Student
            </p>
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                Specialized Training:
              </span>{" "}
              Completed a dedicated professional course in AIDD (AI-Driven
              Development), focusing on integrating artificial intelligence into
              software creation and problem-solving.
            </p>
          </section>

          <section className="border-t border-zinc-200 pt-14 dark:border-zinc-800">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              Technical Arsenal
            </h2>
            <div className="flex flex-col gap-7">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Programming Languages &amp; Paradigms
                </h3>
                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  C, C++ (Object-Oriented Programming), Java, SQL.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  AI, Data &amp; Analytics
                </h3>
                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  AIDD Methodologies, Statistical Modeling, Machine Learning
                  Algorithms, Data Processing Pipelines.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Software Engineering &amp; Systems
                </h3>
                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  Software Engineering Methodologies, System Modeling, Linux
                  Process Architecture, Database Operations.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Marketing Technology (MarTech)
                </h3>
                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  Google Tag Manager, WooCommerce, Analytics Tracking Setups.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-zinc-200 pt-14 dark:border-zinc-800">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              Academic &amp; Personal Projects
            </h2>
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Fake News Detection Model (Machine Learning)
                </h3>
                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  Developed and trained a machine learning classifier to analyze
                  and categorize news articles as true or fabricated, utilizing
                  data processing pipelines and statistical modeling algorithms.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Library Management System (Software Engineering)
                </h3>
                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  Designed and built appropriate software models and
                  architecture for a comprehensive library management system,
                  applying advanced software engineering methodologies and
                  object-oriented principles.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Personal Portfolio Website (AIDD &amp; Web Development)
                </h3>
                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  Designed and developed a personal website as part of the AIDD
                  course to effectively showcase technical skills, professional
                  experience, and academic projects to future employers,
                  applying AI-driven development principles.
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
