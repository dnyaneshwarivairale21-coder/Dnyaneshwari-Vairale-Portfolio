import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-4 text-center bg-[#090c14]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <div>
          <span className="font-semibold text-white">{PERSONAL_INFO.name}</span>
          <span className="mx-2">·</span>
          <span>Electronics & Telecommunication Engineering · SPPU</span>
        </div>

        <div>
          <span>© {new Date().getFullYear()} · All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
