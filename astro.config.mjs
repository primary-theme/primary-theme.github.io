import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://primary-theme.github.io",
  integrations: [
    starlight({
      title: "Primary",
      description:
        "Primary is a theme for people looking for a certain nostalgic warmness now available again for Obsidian. Read the docs to learn how to customize!",
      social: {
        "x.com": "https://dub.sh/x/primary",
        github: "https://git.new/primary/obsidian",
      },
      customCss: ["./src/globals.css"],
      sidebar: [
        {
          label: "Start Here",
          link: "/start-here/",
        },
        {
          label: "Features",
          items: [
            {
              label: "Custom Icons",
              link: "/features/custom-icons/",
            },
            {
              label: "Animations",
              link: "/features/animations/",
            },
            {
              label: "Colorful Folders",
              link: "/features/colorful-folders/",
            },
            {
              label: "Editor Background Pattern",
              link: "/features/editor-background/",
            },
            {
              label: "Active Line Highlighting",
              link: "/features/active-line-highlighting/",
            },
            {
              label: "Multicolored Highlights",
              link: "/features/multicolored-highlights/",
            },
            {
              label: "Checklists and Checkbox Icons",
              link: "/features/checkboxes/",
            },
            {
              label: "Progress Bars",
              link: "/features/progress-bars/",
            },
            {
              label: "Ribbon Styles",
              link: "/features/ribbon-styles/",
            },
            {
              label: "Status Bar Styles",
              link: "/features/status-bar-styles/",
            },
          ],
        },
        {
          label: "Supported Plugins",
          link: "/supported-plugins/",
        },
        {
          label: "Guides",
          items: [
            {
              label: "Overview",
              link: "/guides/overview",
            },
            {
              label: "General Typography",
              link: "/guides/general-typography",
            },
            {
              label: "Font Recommendations",
              items: [
                {
                  label: "Overview",
                  link: "/guides/font-recommendations/overview",
                },
                {
                  label: "Karla",
                  link: "/guides/font-recommendations/karla",
                },
              ],
            },
            {
              label: "Presets",
              items: [
                {
                  label: "Overview",
                  link: "/guides/presets/overview",
                },
                {
                  label: "Note Embed",
                  link: "/guides/presets/note-embed",
                },
              ],
            },
          ],
        },
        {
          label: "Help",
          link: "/help/",
        },
        {
          label: "Contributing",
          link: "/contribute/",
        },
        {
          label: "About",
          link: "/about/",
        },
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
