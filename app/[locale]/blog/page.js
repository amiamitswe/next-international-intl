import { useTranslations } from "next-intl";
import React from "react";

function Blog() {
  const t = useTranslations("Blog");
  return <h1>{t("title")}</h1>;
}

export default Blog;
