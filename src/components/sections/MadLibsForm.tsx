"use client";

import { useState } from "react";
import { profile } from "@/data/content";

// Inline auto-sizing input used inside the sentence.
function Blank({
  value,
  onChange,
  placeholder,
  wide,
  textarea,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  wide?: boolean;
  textarea?: boolean;
}) {
  const shared =
    "mx-1 border-b-2 border-line bg-transparent text-center text-accent placeholder:text-faint focus:border-accent focus:outline-none";
  if (textarea) {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={1}
        className={`${shared} block w-full resize-none py-1`}
      />
    );
  }
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`${shared} ${wide ? "w-72" : "w-52"} max-w-full py-1`}
    />
  );
}

export function MadLibsForm() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  function send() {
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject || "Portfolio enquiry"
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="font-display text-2xl font-medium leading-relaxed tracking-tight md:text-4xl md:leading-[1.5]">
      Hey Rahul <span className="align-middle">👋</span>, my name is
      <Blank value={name} onChange={setName} placeholder="your name" />. I&apos;d like to
      talk about
      <Blank value={subject} onChange={setSubject} placeholder="the subject" wide />. Here&apos;s
      the gist:
      <Blank value={message} onChange={setMessage} placeholder="your message" textarea />
      You can reach me back at
      <Blank value={email} onChange={setEmail} placeholder="your email" wide />.
      <div className="mt-10">
        <button
          onClick={send}
          className="rounded-full bg-accent px-8 py-4 text-base font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
        >
          Send Message →
        </button>
      </div>
    </div>
  );
}
