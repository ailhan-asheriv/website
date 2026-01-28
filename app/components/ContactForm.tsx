"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          role: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSuccess) {
    return (
      <div className="bg-cream-light border border-steel/30 p-6 text-center">
        <p className="text-maritime font-medium">
          Your inquiry has been received. A&apos;SHERIV will respond shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-maritime mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-cream-light border border-steel/30 text-maritime focus:border-steel focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-maritime mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-cream-light border border-steel/30 text-maritime focus:border-steel focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-maritime mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-cream-light border border-steel/30 text-maritime focus:border-steel focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="role" className="block text-sm font-medium text-maritime mb-2">
          Role
        </label>
        <input
          type="text"
          id="role"
          name="role"
          required
          value={formData.role}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-cream-light border border-steel/30 text-maritime focus:border-steel focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-maritime mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-cream-light border border-steel/30 text-maritime focus:border-steel focus:outline-none resize-none transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto px-8 py-3 bg-maritime text-cream font-medium hover:bg-maritime/90 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Submit inquiry"}
      </button>
    </form>
  );
}

