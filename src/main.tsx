import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import arabic from "../src/locales/ar/translation.json";
import english from "../src/locales/en/translation.json";
i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      translation: english,
    },
    ar: {
      translation: arabic,
    },
  },
});
const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </QueryClientProvider>{" "}
  </Provider>
);
