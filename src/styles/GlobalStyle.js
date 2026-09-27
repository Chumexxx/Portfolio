import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #09090b;
    --bg-elev: #111114;
    --surface: #16161a;
    --surface-2: #1d1d22;
    --border: rgba(255, 255, 255, 0.08);
    --border-strong: rgba(255, 255, 255, 0.16);
    --text: #f4f4f5;
    --text-muted: #a1a1aa;
    --text-faint: #71717a;
    --accent: #8b7bff;
    --accent-2: #4fd1c5;
    --accent-grad: linear-gradient(120deg, #8b7bff 0%, #5eb5ff 50%, #4fd1c5 100%);
    --glow: rgba(139, 123, 255, 0.35);
    --nav-bg: rgba(9, 9, 11, 0.7);
    --shadow: 0 20px 60px -20px rgba(0, 0, 0, 0.6);
    --radius: 20px;
    --maxw: 1180px;
    --font-display: 'Space Grotesk', 'Inter', system-ui, sans-serif;
    --font-body: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
    color-scheme: dark;
  }

  :root[data-theme='light'] {
    --bg: #fafafa;
    --bg-elev: #ffffff;
    --surface: #ffffff;
    --surface-2: #f4f4f5;
    --border: rgba(9, 9, 11, 0.08);
    --border-strong: rgba(9, 9, 11, 0.16);
    --text: #0b0b0f;
    --text-muted: #52525b;
    --text-faint: #71717a;
    --accent: #6a55f5;
    --accent-2: #0f9d8f;
    --accent-grad: linear-gradient(120deg, #6a55f5 0%, #2f86e8 50%, #0f9d8f 100%);
    --glow: rgba(106, 85, 245, 0.2);
    --nav-bg: rgba(250, 250, 250, 0.75);
    --shadow: 0 20px 50px -24px rgba(9, 9, 11, 0.25);
    color-scheme: light;
  }

  *, *::before, *::after { box-sizing: border-box; }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 88px;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  h1, h2, h3, h4 {
    font-family: var(--font-display);
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin: 0;
  }

  p { margin: 0; }
  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }
  button { font: inherit; }

  ::selection { background: var(--accent); color: #fff; }

  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
    border-radius: 8px;
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`

export default GlobalStyle
