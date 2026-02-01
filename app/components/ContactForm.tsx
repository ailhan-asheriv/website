"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact");
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
      <div className="bg-dark-lighter border border-primary/30 p-6 text-center rounded-xl">
        <p className="text-white font-medium">
          {t("success")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-light mb-2">
          {t("name")}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-lighter border border-dark-lighter text-white placeholder-gray-dark rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          placeholder={t("namePlaceholder")}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-light mb-2">
          {t("email")}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-lighter border border-dark-lighter text-white placeholder-gray-dark rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          placeholder={t("emailPlaceholder")}
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-light mb-2">
          {t("company")}
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-lighter border border-dark-lighter text-white placeholder-gray-dark rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          placeholder={t("companyPlaceholder")}
        />
      </div>

      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-light mb-2">
          {t("role")}
        </label>
        <input
          type="text"
          id="role"
          name="role"
          required
          value={formData.role}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-lighter border border-dark-lighter text-white placeholder-gray-dark rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          placeholder={t("rolePlaceholder")}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-light mb-2">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-lighter border border-dark-lighter text-white placeholder-gray-dark rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none transition-all"
          placeholder={t("messagePlaceholder")}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-primary to-accent text-dark font-semibold hover:from-primary-dark hover:to-accent-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-lg shadow-primary/20"
      >
        {isSubmitting ? t("sending") : t("submit")}
      </button>
    </form>
  );
}
