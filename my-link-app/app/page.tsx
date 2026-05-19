"use client";

import { useState, useEffect } from "react";
import { LinkItem, dummyLinks } from "../data/links";
import { Card, CardContent } from "@/components/ui/card";
import { IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { AddLinkDialog } from "@/components/AddLinkDialog";

export default function Page() {
  const [links, setLinks] = useState<LinkItem[]>(dummyLinks);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAddLink = (title: string, url: string) => {
    const newLink: LinkItem = {
      id: `link-${Date.now()}`,
      title,
      url,
    };
    setLinks([newLink, ...links]);
  };

  const getFaviconUrl = (url: string) => {
    try {
      const domain = new URL(url).hostname;
      return `https://s2.googleusercontent.com/s2/favicons?domain=${domain}&sz=128`;
    } catch {
      return null;
    }
  };

  if (!mounted) return null;

  return (
    <div className="relative min-h-svh overflow-hidden bg-slate-50 dark:bg-slate-950 font-sans selection:bg-primary/20 pb-20">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-50 dark:opacity-40">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-200/50 dark:bg-purple-900/20 blur-[100px] animate-mesh" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-200/50 dark:bg-blue-900/20 blur-[100px] animate-mesh [animation-delay:2s]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[45%] h-[45%] rounded-full bg-emerald-200/50 dark:bg-emerald-900/20 blur-[100px] animate-mesh [animation-delay:4s]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-start p-8 md:p-12 min-h-svh max-w-2xl mx-auto w-full">
        {/* Profile Section */}
        <header className="flex flex-col items-center mb-12 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-purple-600 p-1 mb-6 shadow-xl shadow-primary/20">
            <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden">
              <IconUser className="w-12 h-12 text-slate-400 dark:text-slate-500" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 ml-1">
            @username
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-center max-w-sm leading-relaxed px-4">
            개발하고 디자인하는 크리에이터입니다. <br />
            저와 함께 멋진 프로젝트를 만들어봐요! 🚀
          </p>
        </header>

        {/* Links List */}
        <main className="w-full flex-1 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <AddLinkDialog onAdd={handleAddLink} />
          
          <div className="space-y-4 pt-2">
            {links.map((link, index) => {
              const favicon = getFaviconUrl(link.url);
              return (
                <Link 
                  key={link.id} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group block outline-none"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="relative overflow-hidden transition-all duration-300 border-slate-200/50 dark:border-slate-800/50 bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 group-active:scale-95 rounded-2xl">
                    <CardContent className="flex items-center p-5 gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-primary/10 transition-all overflow-hidden p-2">
                        {favicon ? (
                          <img 
                            src={favicon} 
                            alt={link.title} 
                            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22 fill%3D%22none%22 stroke%3D%22currentColor%22 stroke-width%3D%222%22 stroke-linecap%3D%22round%22 stroke-linejoin%3D%22round%22%3E%3Cpath d%3D%22M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71%22%3E%3C%2Fpath%3E%3Cpath d%3D%22M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E';
                            }}
                          />
                        ) : (
                          <IconUser className="w-6 h-6 text-slate-400" />
                        )}
                      </div>
                      <span className="font-semibold text-lg flex-1 text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">
                        {link.title}
                      </span>
                      <div className="w-6 h-6 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-primary">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </CardContent>
                    
                    {/* Subtle Gradient Line on Hover */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Card>
                </Link>
              );
            })}
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-16 text-slate-400 dark:text-slate-600 text-sm font-medium animate-in fade-in duration-1000 delay-500">
          Powered by MyLink
        </footer>
      </div>
    </div>
  );
}
