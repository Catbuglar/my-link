import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-zinc-50 font-sans overflow-hidden selection:bg-purple-500/30">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />

      {/* Main Container */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center p-6 sm:p-24 max-w-4xl mx-auto w-full">
        <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Avatar Section */}
          <div className="relative group cursor-pointer mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-white/10 bg-zinc-900 flex items-center justify-center">
              {/* Placeholder Avatar */}
              <div className="text-4xl">✨</div>
            </div>
          </div>

          {/* Bio Section */}
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            안녕하세요, 개발자입니다.
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed font-light">
            아름답고 직관적인 사용자 경험을 만드는 프론트엔드 엔지니어입니다.
            최신 웹 기술과 인터랙티브한 디자인 요소에 관심이 많습니다.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mb-16">
            <SocialLink href="https://github.com" label="GitHub" icon={GitHubIcon} />
            <SocialLink href="https://linkedin.com" label="LinkedIn" icon={LinkedInIcon} />
            <SocialLink href="mailto:hello@example.com" label="Email" icon={MailIcon} />
          </div>

          {/* Projects / Tech Stack Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-left">
            <GlassCard title="💡 Frontend" desc="React, Next.js, TypeScript, Tailwind CSS를 주로 활용하여 웹을 개발합니다." />
            <GlassCard title="🎨 UI/UX Design" desc="Framer Motion 등 애니메이션 라이브러리로 생동감 있는 인터페이스를 설계합니다." />
            <GlassCard title="🚀 Performance" desc="웹 성능 최적화와 접근성 향상에 깊은 관심을 가지고 있습니다." />
            <GlassCard title="⚡ Productivity" desc="AI 도구와 자동화 파이프라인으로 생산적인 개발 문화를 지향합니다." />
          </div>
        </div>
      </main>
    </div>
  );
}

function SocialLink({ href, label, icon: Icon }: { href: string; label: string; icon: React.FC<React.SVGProps<SVGSVGElement>> }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center h-12 w-12 rounded-full bg-zinc-900 border border-zinc-800 transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-700 hover:scale-110"
      aria-label={label}
    >
      <Icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
    </a>
  );
}

function GlassCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all duration-500 hover:bg-zinc-800/50">
      <h3 className="text-xl font-medium text-zinc-100 mb-2 group-hover:text-purple-400 transition-colors">{title}</h3>
      <p className="text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  );
}

// Icons (Lucide-style SVGs)
const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);
