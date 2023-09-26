import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import Footer from "./components/Footer";
import ThemedImage from "./components/ThemedImage";

export default {
  banner: {
    key: "banner",
    text: (
      <a
        href="https://github.com/cobmin/Maize/releases"
        target="_blank"
      >
        Maize v1.6.0 is out 🌽 Download now ✅
      </a>
    ),
  },
  chat: {
    link: "https://discord.gg/gKxvUjRpvw",
  },
  darkMode: true,
  docsRepositoryBase:
    "https://github.com/cobmin/MaizeDocumentation",
  editLink: {
    text: "Edit this page ↗",
  },
  feedback: {
    content: null,
  },
  footer: {
    component: Footer,
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta property="og:url" content={`https://maizehelps.art${asPath}`} />
        <meta property="og:title" content={frontMatter.title || "Maize"} />
        <meta
          property="og:description"
          content={frontMatter.description || "An open sourced, NFT Toolkit."}
        />
        <link rel="icon" href="/images/favicon.png" />
      </>
    );
  },
  logo: <ThemedImage />,
  nextThemes: {
    defaultTheme: "system",
  },
  primaryHue: { light: 107, dark: 48 },
  project: {
    link: "https://github.com/cobmin",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Maize",
    };
  },
};
