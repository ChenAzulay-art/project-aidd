import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Chen Azulay",
  description:
    "Software developer and Computer Science student — experience, education, technologies, and projects.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 justify-center bg-background font-sans">
      <main className="w-full max-w-3xl bg-background px-6 py-16 sm:px-12 sm:py-20">
        <Link
          href="/"
          className="mb-10 inline-block text-sm font-medium text-foreground/60 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-700 dark:focus-visible:ring-zinc-200"
        >
          ← Home
        </Link>

        <article className="flex flex-col gap-14">
          <section>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              About Me
            </h1>
            <p className="text-lg leading-relaxed text-foreground/80">
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

          <section className="border-t border-foreground/15 pt-14">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Education &amp; Coursework
            </h2>
            <h3 className="mb-1 text-xl font-semibold text-foreground">
              B.Sc. in Computer Science
            </h3>
            <p className="mb-5 text-base font-medium text-foreground/60">
              Holon Institute of Technology (HIT) | 3rd Year Student
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              <span className="font-semibold text-foreground">
                Specialized Training:
              </span>{" "}
              Completed a dedicated professional course in AIDD (AI-Driven
              Development), focusing on integrating artificial intelligence into
              software creation and problem-solving.
            </p>
          </section>

          <section className="border-t border-foreground/15 pt-14">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Technical Arsenal
            </h2>
            <div className="flex flex-col gap-7">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Programming Languages &amp; Paradigms
                </h3>
                <p className="text-lg leading-relaxed text-foreground/80">
                  C, C++ (Object-Oriented Programming), Java, SQL.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  AI, Data &amp; Analytics
                </h3>
                <p className="text-lg leading-relaxed text-foreground/80">
                  AIDD Methodologies, Statistical Modeling, Machine Learning
                  Algorithms, Data Processing Pipelines.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Software Engineering &amp; Systems
                </h3>
                <p className="text-lg leading-relaxed text-foreground/80">
                  Software Engineering Methodologies, System Modeling, Linux
                  Process Architecture, Database Operations.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Marketing Technology (MarTech)
                </h3>
                <p className="text-lg leading-relaxed text-foreground/80">
                  Google Tag Manager, WooCommerce, Analytics Tracking Setups.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-foreground/15 pt-14">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Academic &amp; Personal Projects
            </h2>
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Fake News Detection Model (Machine Learning)
                </h3>
                <p className="text-lg leading-relaxed text-foreground/80">
                  Developed and trained a machine learning classifier to analyze
                  and categorize news articles as true or fabricated, utilizing
                  data processing pipelines and statistical modeling algorithms.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Library Management System (Software Engineering)
                </h3>
                <p className="text-lg leading-relaxed text-foreground/80">
                  Designed and built appropriate software models and
                  architecture for a comprehensive library management system,
                  applying advanced software engineering methodologies and
                  object-oriented principles.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Personal Portfolio Website (AIDD &amp; Web Development)
                </h3>
                <p className="text-lg leading-relaxed text-foreground/80">
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
