"use client";

import { useLanguageContext } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguageContext();

  return (
    <div className="container max-w-5xl w-full text-center mx-auto py-10">
      <p className="text-xs md:text-sm">
        &copy; 2024 | {t("footer.copyright")} | {t("footer.developedBy")}{" "}
        <strong>{t("footer.author")}</strong>
      </p>
    </div>
  );
}
