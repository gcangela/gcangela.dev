"use client";

import { FormEvent, useState } from "react";
import type { ContactFormLabels } from "./content/types";

const cardClass = "rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm";

export function ContactForm({ labels }: { labels: ContactFormLabels }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(labels.successMessage);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className={cardClass}>
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-lg font-semibold leading-none tracking-tight">{labels.title}</h3>
        <p className="text-sm text-slate-500">{labels.subtitle}</p>
      </div>
      <div className="p-6 pt-0">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium leading-none block mb-2">
              {labels.name}
            </label>
            <input
              id="name"
              className="cc-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium leading-none block mb-2">
              {labels.email}
            </label>
            <input
              id="email"
              type="email"
              className="cc-input"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label htmlFor="company" className="text-sm font-medium leading-none block mb-2">
              {labels.company}
            </label>
            <input
              id="company"
              className="cc-input"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium leading-none block mb-2">
              {labels.message}
            </label>
            <textarea
              id="message"
              rows={4}
              className="cc-textarea"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="cc-btn-primary w-full">
            {labels.submit}
          </button>
        </form>
      </div>
    </div>
  );
}
