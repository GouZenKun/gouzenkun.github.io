interface PlatformIconProps {
  platform: "steam" | "ios" | "android" | "web" | "boardgame";
  className?: string;
}

export default function PlatformIcon({ platform, className }: PlatformIconProps) {
  if (platform === "steam") {
    return (
      <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2a10 10 0 0 0-9.85 8.28l5.3 2.2a2.9 2.9 0 0 1 1.66-.54h.16l2.36-3.42v-.05a3.76 3.76 0 1 1 3.76 3.76h-.08l-3.37 2.4v.13a2.9 2.9 0 0 1-5.76.45l-3.8-1.58A10 10 0 1 0 12 2Z"
          fill="currentColor"
        />
        <path
          d="m7.78 16.46-1.22-.5a2.2 2.2 0 1 0 1.22-3.16l1.2.5a1.59 1.59 0 1 1-1.2 3.16Zm7.61-5.48a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-.63a1.87 1.87 0 1 1 0-3.74 1.87 1.87 0 0 1 0 3.74Z"
          fill="var(--bg-primary)"
        />
      </svg>
    );
  }

  if (platform === "ios") {
    return (
      <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.47-2.09-.49-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.33-.07 2.27.73 3.05.73 1.17-.24 2.29-.93 3.54-.84 1.5.12 2.63.72 3.38 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.45 4.15ZM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3c.29 2.58-2.34 4.5-3.74 4.25Z" />
      </svg>
    );
  }

  if (platform === "android") {
    return (
      <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
        <path d="m8 5-1.5-2M16 5l1.5-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 10a6 6 0 0 1 12 0v7.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 17.5V10Z" fill="currentColor" />
        <circle cx="9.5" cy="8" r="0.8" fill="var(--bg-primary)" />
        <circle cx="14.5" cy="8" r="0.8" fill="var(--bg-primary)" />
        <path d="M4 11v6M20 11v6M9 19v2M15 19v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (platform === "boardgame") {
    return (
      <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="8" cy="8" r="1.35" fill="currentColor" />
        <circle cx="12" cy="12" r="1.35" fill="currentColor" />
        <circle cx="16" cy="16" r="1.35" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M3.5 12h17M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21C9.6 18.5 8.4 15.5 8.4 12S9.6 5.5 12 3Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
