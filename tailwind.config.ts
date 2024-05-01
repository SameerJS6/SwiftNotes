import type { Config } from "tailwindcss";
// import { withOpacity } from "./utils/withOpacity";

function withOpacity(variableName: string): string {
  return ({ opacityValue }: { opacityValue: number | undefined }): string => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: withOpacity("--primary"),
      onPrimary: withOpacity("--on-primary"),
      primaryContainer: withOpacity("--primary-container"),
      onPrimaryContainer: withOpacity("--on-primary-container"),
      secondary: withOpacity("--secondary"),
      onSecondary: withOpacity("--on-secondary"),
      secondaryContainer: withOpacity("--secondary-container"),
      onSecondaryContainer: withOpacity("--on-secondary-container"),
      tertiary: withOpacity("--tertiary"),
      onTertiary: withOpacity("--on-tertiary"),
      tertiaryContainer: withOpacity("--tertiary-container"),
      onTertiaryContainer: withOpacity("--on-tertiary-container"),
      error: withOpacity("--error"),
      errorContainer: withOpacity("--error-container"),
      onError: withOpacity("--on-error"),
      onErrorContainer: withOpacity("--on-error-container"),
      outline: withOpacity("--outline"),
      outlineVariant: withOpacity("--outline-variant"),
      background: withOpacity("--background"),
      onBackground: withOpacity("--on-background"),
      surface: withOpacity("--surface"),
      onSurface: withOpacity("--on-surface"),
      inverseSurface: withOpacity("--inverse-surface"),
      inverseOnSurface: withOpacity("--inverse-on-surface"),
      surfaceContainerLowest: withOpacity("--surface-container-lowest"),
      surfaceContainerLow: withOpacity("--surface-container-low"),
      surfaceContainer: withOpacity("--surface-container"),
      surfaceContainerHigh: withOpacity("--surface-container-high"),
      surfaceContainerHighest: withOpacity("--surface-container-highest"),
      surfaceDim: withOpacity("--surface-dim"),
      surfaceBright: withOpacity("--surface-bright"),
      surfaceVariant: withOpacity("--surface-variant"),
      onSurfaceVariant: withOpacity("--on-surface-variant"),
      overlay: withOpacity("--overlay"),
      transparent: "transparent",
    },
    fontSize: {
      "display-lg": [
        "57px",
        { fontWeight: 400, lineHeight: "64px", letterSpacing: "-0.015625em" },
      ],
      "display-md": [
        "45px",
        { fontWeight: 400, lineHeight: "52px", letterSpacing: "0px" },
      ],
      "display-sm": [
        "36px",
        { fontWeight: 400, lineHeight: "44px", letterSpacing: "0" },
      ],
      "headline-lg": [
        "32px",
        { fontWeight: 400, lineHeight: "40px", letterSpacing: "0" },
      ],
      "headline-md": [
        "28px",
        { fontWeight: 400, lineHeight: "36px", letterSpacing: "0px" },
      ],
      "headline-sm": [
        "24px",
        { fontWeight: 400, lineHeight: "32px", letterSpacing: "0px" },
      ],
      "title-lg": [
        "22px",
        { fontWeight: 400, lineHeight: "28px", letterSpacing: "0px" },
      ],
      "title-md": [
        "16px",
        { fontWeight: 500, lineHeight: "24px", letterSpacing: "0.009375em" },
      ],
      "title-sm": [
        "14px",
        { fontWeight: 500, lineHeight: "20px", letterSpacing: "0.00625em" },
      ],
      "body-lg": [
        "16px",
        { fontWeight: 400, lineHeight: "24px", letterSpacing: "0.03125em" },
      ],
      "body-md": [
        "14px",
        { fontWeight: 400, lineHeight: "20px", letterSpacing: "0.015625em" },
      ],
      "body-sm": [
        "12px",
        { fontWeight: 400, lineHeight: "16px", letterSpacing: "0.025em" },
      ],
      "label-lg": [
        "14px",
        { fontWeight: 500, lineHeight: "20px", letterSpacing: "0.00625em" },
      ],
      "label-md": [
        "12px",
        { fontWeight: 500, lineHeight: "16px", letterSpacing: "0.03125em" },
      ],
      "label-sm": [
        "11px",
        { fontWeight: 500, lineHeight: "16px", letterSpacing: "0.03125em" },
      ],
    },
    extend: {
      boxShadow: {
        "elevation-1": "var(--elevation-1)",
        "elevation-2": "var(--elevation-2)",
        "elevation-3": "var(--elevation-3)",
      },
      transitionDuration: {
        250: "250ms",
      },
    },
  },
  plugins: [],
};
export default config;
