"use client";

export function ThemeToggle() {
  function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme;
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  }

  return (
    <button
      type="button"
      aria-label="Cambiar modo claro u oscuro"
      onClick={toggleTheme}
      className="theme-toggle relative h-11 w-[76px] rounded-full border border-[color:var(--color-border)] bg-[var(--color-surface-2)] p-1 transition"
    >
      <span className="theme-thumb absolute left-1 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-accent-strong)] shadow-md transition-all">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="sun-icon h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>

        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="moon-icon hidden h-5 w-5"
          fill="currentColor"
        >
          <path d="M20.3 14.4A8.5 8.5 0 0 1 9.6 3.7a.8.8 0 0 0-1-.9A9.7 9.7 0 1 0 21.2 15.4a.8.8 0 0 0-.9-1Z" />
        </svg>
      </span>
    </button>
  );
}
