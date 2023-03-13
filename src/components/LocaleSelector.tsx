import { useRouter } from "next/router";
import { localeOptions, useI18n } from "~/i18n";

export default function LocaleSelector() {
  const { locale } = useI18n();
  const router = useRouter();

  const { pathname, asPath, query } = router;

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    void router.push({ pathname, query }, asPath, { locale: e.target.value });
  }

  return (
    <select onChange={handleChange} defaultValue={locale}>
      {localeOptions.map((locale) => (
        <option key={locale.value} value={locale.value}>
          {locale.label}
        </option>
      ))}
    </select>
  );
}
