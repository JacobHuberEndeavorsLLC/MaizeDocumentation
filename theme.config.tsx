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
        Maize v1.11.3 is out 🌽 Download now ✅
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
        <meta name="description" content={frontMatter.description || 'An open sourced, NFT Toolkit.'} />
        <meta property="og:image" content="https://github.com/cobmin/Maize/assets/97369738/4db3a21f-11aa-4cb6-8214-aa5655332c1f" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="%s - Maize" />
        <meta name="twitter:description" content={frontMatter.description || 'An open sourced, NFT Toolkit.'} />
        <meta name="twitter:image" content="https://github.com/cobmin/Maize/assets/97369738/4db3a21f-11aa-4cb6-8214-aa5655332c1f" />
        <meta name="twitter:site" content="@cobmin" />
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
