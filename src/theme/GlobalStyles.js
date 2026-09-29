import { createGlobalStyle } from 'styled-components';

// Publishes the active theme as CSS custom properties so the plain CSS files in
// src/css/* can consume the same tokens via var(--…). Spacing / radius / shadow
// / motion / font tokens give the bento UI a consistent rhythm and one place to
// retune the whole look.
const GlobalStyles = createGlobalStyle`
  :root {
    /* Colour (theme-driven) */
    --bg: ${({ theme }) => theme.background};
    --text: ${({ theme }) => theme.color};
    --text-muted: ${({ theme }) => theme.textMuted};
    --accent: ${({ theme }) => theme.accentColor};
    --accent-2: ${({ theme }) => theme.accentColor2};
    --accent-soft: ${({ theme }) => theme.accentSoft};
    --surface: ${({ theme }) => theme.cardBackground};
    --surface-2: ${({ theme }) => theme.cardFooterBackground};
    --border: ${({ theme }) => theme.cardBorderColor};
    --navbar-bg: ${({ theme }) => theme.navbarBackground};
    --timeline-line: ${({ theme }) => theme.timelineLineColor};
    --gradient: linear-gradient(135deg, var(--accent), var(--accent-2));

    /* Elevation */
    --shadow-sm: ${({ theme }) => theme.shadowSm};
    --shadow-md: ${({ theme }) => theme.shadowMd};

    /* Spacing scale (4px base) */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.5rem;
    --space-6: 2rem;
    --space-7: 3rem;
    --space-8: 4rem;

    /* Radius */
    --radius-sm: 10px;
    --radius-md: 16px;
    --radius-lg: 22px;

    /* Motion */
    --ease: cubic-bezier(0.4, 0, 0.2, 1);
    --dur: 0.25s;
    --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
    --dur-slow: 0.55s;

    /* Type */
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Helvetica Neue', sans-serif;
    --font-display: 'Fraunces', Georgia, 'Times New Roman', serif;
    --font-mono: 'JetBrains Mono', source-code-pro, Menlo, Monaco, Consolas, monospace;
  }

  html {
    scrollbar-color: var(--border) transparent;
    scroll-behavior: smooth;
  }

  body {
    /* Direct theme values (as the original did) plus Bootstrap's own body
       variables so its reboot rules resolve to the active theme regardless of
       stylesheet order. A pair of soft accent glows adds depth to the page. */
    --bs-body-bg: ${({ theme }) => theme.background};
    --bs-body-color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.background};
    background-image:
      radial-gradient(48rem 48rem at 100% -8%, ${({ theme }) => theme.glow1}, transparent 60%),
      radial-gradient(42rem 42rem at -10% 8%, ${({ theme }) => theme.glow2}, transparent 55%);
    background-attachment: fixed;
    background-repeat: no-repeat;
    color: ${({ theme }) => theme.color};
    transition: background-color 0.3s var(--ease), color 0.3s var(--ease);
  }

  body::before,
  body::after {
    content: '';
    position: fixed;
    z-index: -1;
    width: 22rem;
    height: 22rem;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(70px);
    opacity: 0.12;
    animation: ambient-drift 18s ease-in-out infinite alternate;
  }

  body::before {
    top: 18%;
    right: -12rem;
    background: ${({ theme }) => theme.accentColor};
  }

  body::after {
    bottom: 4%;
    left: -14rem;
    background: ${({ theme }) => theme.accentColor2};
    animation-delay: -7s;
  }

  @keyframes ambient-drift {
    from { transform: translate3d(0, -14px, 0) scale(0.94); }
    to { transform: translate3d(-18px, 18px, 0) scale(1.06); }
  }

  a {
    color: var(--accent);
    text-decoration: none;
  }

  ::selection {
    background: var(--accent);
    color: #fff;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--text-muted);
  }

  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
    border-radius: 4px;
  }

  ::selection {
    background: var(--accent);
    color: #fff;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.001ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyles;
