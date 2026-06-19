import type { ReactNode } from "react";

type SocialLink = {
  name: string;
  handle: string;
  url: string;
  icon: ReactNode;
};

const profile = {
  brand: "",//"SANAD ALMNASEER",
  name: "Sanad Almnaseer",
  bio: "Dev .lua .html .css .js .py",
  avatarUrl:
    "https://i.top4top.io/p_3822xl5z60.jpg",
};

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    handle: "sanadxX@",
    url: "https://github.com/sanadxX",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    handle: "962781051981+",
    url: "https://t.me/+962781051981",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.11.03-1.9 1.22-5.36 3.56-.51.35-.97.52-1.38.51-.46-.01-1.34-.26-2.01-.48-.82-.27-1.47-.41-1.42-.87.03-.24.36-.48.98-.74 3.86-1.68 6.44-2.79 7.74-3.33 3.68-1.54 4.44-1.8 4.93-1.81.11 0 .36.03.49.16.11.11.14.26.15.38-.01.07.01.21 0 .28z" />
      </svg>
    ),
  },
  {
    name: "Discord",
    handle: ".sa21@",
    url: "https://discord.com/users/yourdiscord",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M20.32 4.37A19.8 19.8 0 0 0 15.4 2.8c-.21.38-.46.9-.63 1.3a18.41 18.41 0 0 0-5.54 0c-.17-.4-.43-.92-.64-1.3A19.76 19.76 0 0 0 3.66 4.37C.55 9.06-.28 13.62.14 18.12a19.91 19.91 0 0 0 6.02 3.06c.48-.65.9-1.34 1.25-2.06-.69-.26-1.35-.58-1.96-.95.16-.12.31-.25.46-.38 3.79 1.78 7.9 1.78 11.64 0 .15.13.3.26.46.38-.61.37-1.27.69-1.96.95.35.72.77 1.4 1.25 2.06a19.83 19.83 0 0 0 6.02-3.06c.5-5.22-.85-9.74-3-13.75ZM8.02 15.38c-1.14 0-2.08-1.06-2.08-2.36 0-1.3.92-2.36 2.08-2.36 1.17 0 2.1 1.07 2.08 2.36 0 1.3-.92 2.36-2.08 2.36Zm7.96 0c-1.14 0-2.08-1.06-2.08-2.36 0-1.3.92-2.36 2.08-2.36 1.17 0 2.1 1.07 2.08 2.36 0 1.3-.91 2.36-2.08 2.36Z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    handle: "962781051981+",
    url: "https://wa.me/962781051981",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.56 0 .25 5.3.25 11.82c0 2.08.54 4.1 1.57 5.9L0 24l6.46-1.7a11.79 11.79 0 0 0 5.62 1.43h.01c6.51 0 11.83-5.3 11.83-11.82 0-3.16-1.23-6.13-3.4-8.43ZM12.1 21.74h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.22-3.83 1 1.02-3.73-.23-.38a9.86 9.86 0 0 1-1.5-5.2c0-5.45 4.44-9.9 9.9-9.9 2.64 0 5.12 1.03 6.99 2.9a9.81 9.81 0 0 1 2.9 7c0 5.46-4.44 9.9-9.89 9.9Zm5.42-7.43c-.3-.15-1.8-.88-2.07-.98-.28-.1-.48-.15-.68.15-.2.29-.78.98-.96 1.18-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.37-1.46-.87-.77-1.46-1.73-1.63-2.02-.17-.3-.02-.45.13-.6.13-.13.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.94-2.24-.25-.6-.5-.51-.68-.52h-.58c-.2 0-.53.08-.8.38-.28.29-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.48 1.69.62.71.23 1.35.2 1.86.12.57-.08 1.8-.73 2.05-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    ),
  }
];

export default function App() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#050505] text-white selection:bg-white/20 relative overflow-hidden">
      
      {}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_100%)]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-12 text-center fade-in-up z-10">
        
        {}
        <div className="mx-auto mt-4 h-32 w-32 overflow-hidden rounded-full border-2 border-white/10 avatar-float shadow-[0_0_30px_rgba(255,255,255,0.05)] ring-4 ring-black">
          <img src={profile.avatarUrl} alt="Avatar" className="h-full w-full object-cover" />
        </div>
        
        {}
        <p className="mt-8 text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">{profile.brand}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white/95">{profile.name}</h1>
        <p className="mt-3 text-base text-white/60 font-medium">{profile.bio}</p>

        {}
        <div className="mt-8 flex items-center justify-center gap-3">
          {socialLinks.slice(0, 4).map((link) => (
            <a
              key={`quick-${link.name}`}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={link.name}
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {}
        <div className="mt-10 space-y-4">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              style={{ animationDelay: `${index * 80 + 120}ms` }}
              className="link-row group relative flex items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_5px_20px_rgba(0,0,0,0.3)]"
            >
              {}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              
              <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/90">
                {link.icon}
              </span>
              
              <span className="relative z-10 flex-1 px-4">
                <span className="block text-base font-semibold text-white/90">{link.name}</span>
                <span className="block text-xs font-medium text-white/50">{link.handle}</span>
              </span>
              
              <span className="relative z-10 text-xl text-white/30 transition-colors duration-300 group-hover:text-white/80">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </a>
          ))}
        </div>

        <p className="mt-auto pt-12 text-xs font-medium tracking-wider text-white/30">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </section>
    </main>
  );
}
