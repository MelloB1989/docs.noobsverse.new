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
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://coffeecodes.in" target="_blank">
          CoffeeCodes API Docs
        </a>
        .
      </span>
    ),
  },
  faviconGlyph: "📚",
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    float: true,
  },
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
