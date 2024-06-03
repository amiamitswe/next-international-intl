import { useTranslations } from "next-intl";

function News({ params }) {
  const t = useTranslations("News");
  return <h1>{t("title", { articleSlug: params.articleSlug })}</h1>;
}

export default News;
