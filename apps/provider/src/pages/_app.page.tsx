import "@fontsource/ibm-plex-sans/latin.css";
import { Layout, loadLocale, setupI18n } from "@impfen/common";
import { I18nProvider } from "@lingui/react";
import "app.css";
import { HeaderContent } from "components/HeaderContent";
import dayjs from "dayjs";
import { AppProvider } from "lib/AppProvider";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";

const SafeHydrate: React.FC = ({ children }) => {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
};

const i18n = setupI18n();

const App = ({ Component, pageProps }: AppProps) => {
  const [locale, setLocale] = useState(i18n.locale || "de");

  useEffect(() => {
    import(`../locales/${locale}/messages`).then(({ messages }) =>
      loadLocale(locale, messages)
    );
    dayjs.locale(locale);
  }, [locale]);

  return (
    <SafeHydrate>
      <I18nProvider i18n={i18n}>
        <AppProvider>
          <Layout header={HeaderContent} locale={locale} setLocale={setLocale}>
            <Component {...pageProps} />
          </Layout>
        </AppProvider>
      </I18nProvider>
    </SafeHydrate>
  );
};

export default App;
