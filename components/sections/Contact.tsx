"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

const serviceOptions = [
  "UI Engineering",
  "Frontend Development",
  "Design Systems",
  "Performance & Accessibility",
  "Something else",
];

type Errors = Partial<Record<"name" | "email" | "message", string>>;

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-light text-accent"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p role="alert" className="mt-2 text-sm font-light text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Errors = {};
    if (!name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email.trim()))
      nextErrors.email = "Please enter a valid email address.";
    if (!message.trim())
      nextErrors.message = "Please tell me a little about your project.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(`Portfolio inquiry from ${name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\nService needed: ${service || "Not specified"}\n\n${message.trim()}`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="scroll-mt-28 py-24 md:py-32">
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-[520px_1fr] lg:gap-10">
          <div className="flex justify-center pb-10 lg:pb-0">
            <div className="relative w-[180px] md:w-[340px]">
              <Reveal>
                <Image
                  src="/images/portrait.png"
                  alt="Abstract monogram artwork standing in for a portrait of Mohtisham Khan"
                  width={340}
                  height={476}
                  className="aspect-[340/476] w-full rounded-[20px] object-cover"
                />
              </Reveal>

              <div
                aria-hidden="true"
                className="absolute -bottom-16 left-[-18px] flex flex-col items-center gap-2 md:left-[-30px]"
              >
                <span className="font-display text-[40px] leading-none font-normal text-white">
                  Hi
                </span>
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-14 w-14 text-foreground"
                >
                  <path d="M10 8c22 4 36 16 42 40" />
                  <path d="M43 43l9 7-1-11" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              title="Let's Work Together"
              intro="Let's build something great together • whether it's a product UI, a design system, or your next web experience."
              introWidth="max-w-[560px]"
            />

            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-10 flex flex-col gap-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" htmlFor="name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="field"
                  />
                </Field>

                <Field label="Email" htmlFor="email" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="field"
                  />
                </Field>
              </div>

              <Field label="Service Needed ?" htmlFor="service">
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={`field appearance-none pr-10 ${service ? "" : "text-muted"}`}
                  >
                    <option value="">Select…</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="pointer-events-none absolute top-1/2 right-5 h-4 w-4 -translate-y-1/2 text-foreground"
                  >
                    <path d="m4 6 4 4 4-4" />
                  </svg>
                </div>
              </Field>

              <Field
                label="What Can I Help You With?"
                htmlFor="message"
                error={errors.message}
              >
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="field field-area"
                />
              </Field>

              <div className="mt-1">
                <button type="submit" className="btn btn-accent cursor-pointer">
                  Submit
                </button>
              </div>

              {sent ? (
                <p
                  role="status"
                  className="flex items-center gap-2.5 text-base font-light"
                >
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-good" />
                  Your email app should have opened. If it didn&apos;t, write
                  directly to{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="font-semibold underline underline-offset-4"
                  >
                    {site.email}
                  </a>
                  .
                </p>
              ) : null}

              <p className="text-sm font-light text-muted">
                This form opens your email app • nothing is stored on this site.
                You can also reach me at{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-foreground underline underline-offset-4"
                >
                  {site.email}
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
