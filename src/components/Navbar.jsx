import { useState, useEffect } from 'react';
import { Menu, X, FileText, Mail } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolioData';
import avatarImg from '../assets/DV.jpeg';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const topOffset = 70;
      const elPos = el.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top: elPos, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0b0f19]/95 backdrop-blur-md border-b border-slate-800 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Name & Avatar */}
        <a
          href="#about"
          onClick={(e) => handleNav(e, '#about')}
          className="flex items-center gap-3 text-decoration-none group"
        >
          <img
            src={avatarImg}
            alt={PERSONAL_INFO.name}
            className="w-8 h-8 rounded-full border border-slate-700 object-cover"
          />
          <div className="flex flex-col">
            <span className="text-white font-bold text-base group-hover:text-blue-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] text-slate-400 hidden sm:block">
              E&TC Student · SPPU
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
          >
            <FileText size={14} className="text-blue-400" />
            <span>Resume</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-sm transition-colors"
          >
            <Mail size={14} />
            <span>Contact</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 border-0 bg-transparent cursor-pointer"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#0e1422] border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="block py-2 text-sm font-medium text-slate-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-sm font-semibold text-blue-400"
            >
              View Resume (PDF) →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
