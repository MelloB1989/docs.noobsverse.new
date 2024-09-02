import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <img
      src="https://cdn.global.noobsverse.com/logos/nvai/Noobsverse.png"
      width={50}
      alt="Logo"
    />
  ),
  project: {
    link: "https://github.com/Avidia-Cohort",
  },
  chat: {
    link: "https://discord.gg/b5XqR8yJgu",
  },
  docsRepositoryBase: "https://github.com/mellob1989/docs.noobsverse.new",
  footer: {
    text: "CoffeeCodes API Docs",
  },
  faviconGlyph: "📚",
  banner: {
    key: "Hackspace Launch",
    text: (
      <a href="https://hackspace.in" target="_blank">
        🎉 Hackspace version 1 is launched! <strong>Read more →</strong>
      </a>
    ),
  },
};

export default config;
