import { Mail, Phone, MapPin, FileText, Download, ChevronDown } from 'lucide-react';
import { ParticleBg, Linkedin, Github } from './shared/Ui';
import { PERSONAL_INFO } from '../data/portfolioData';
import avatarImg from '../assets/DV.jpeg';

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const topOffset = 70;
      const elPos = el.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top: elPos, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <ParticleBg />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column: Bio & Actions (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">

            {/* Status Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>E&TC Graduate · KJCOEMR · SPPU</span>
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
              Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </h1>

            {/* Role */}
            <p className="text-lg sm:text-xl font-medium text-slate-300 mb-4">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              {['Java', 'Python', 'SQL', 'React.js', 'Solidity', 'AI / ML', 'OpenCV'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Summary */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Electronics and Telecommunication engineering graduate (<strong className="text-white font-semibold">{PERSONAL_INFO.cgpa} CGPA</strong>) at <strong className="text-slate-200">Savitribai Phule Pune University (KJCOEMR)</strong> with a strong foundation in Java and Python. Actively expanding expertise in software development, backend engineering, and machine learning.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm bg-blue-600 hover:bg-blue-500 text-white transition-colors"
              >
                <FileText size={16} />
                <span>View Resume</span>
              </a>

              <a
                href="/resume.pdf"
                download="Dnyaneshwari_Vairale_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/60 transition-colors"
              >
                <Mail size={16} />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-400">
              <a
                href={`tel:${PERSONAL_INFO.rawPhone}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-slate-400"
              >
                <Phone size={13} className="text-emerald-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <span className="inline-flex items-center gap-1.5 text-slate-400">
                <MapPin size={13} className="text-rose-400" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-slate-400"
              >
                <Github size={13} />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-slate-400"
              >
                <Linkedin size={13} className="text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Glowing Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              className="relative w-full max-w-sm rounded-2xl p-6"
              style={{
                background: 'linear-gradient(160deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.85) 100%)',
                border: '1px solid rgba(99,102,241,0.25)',
                boxShadow: '0 0 60px rgba(99,102,241,0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              {/* Photo + Badges area */}
              <div className="relative flex justify-center mb-5">

                {/* CGPA Badge — top-right of circle */}
                <div
                  className="absolute -top-2 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white whitespace-nowrap"
                  style={{
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(59,130,246,0.2))',
                    border: '1px solid rgba(99,102,241,0.5)',
                    borderRadius: '999px',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span className="text-yellow-400 text-sm">🏅</span>
                  <span>{PERSONAL_INFO.cgpa} CGPA</span>
                </div>

                {/* Glowing gradient ring */}
                <div
                  className="w-44 h-44 rounded-full p-[3px]"
                  style={{
                    background: 'linear-gradient(135deg, #818cf8, #6366f1, #3b82f6, #06b6d4, #a78bfa)',
                    boxShadow: '0 0 35px 4px rgba(99,102,241,0.5), 0 0 70px 8px rgba(59,130,246,0.2)',
                  }}
                >
                  {/* Dark gap ring */}
                  <div className="w-full h-full rounded-full p-[4px] bg-slate-950">
                    <img
                      src={avatarImg}
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full rounded-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Specialty badge — bottom of ring */}
                <div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white whitespace-nowrap"
                  style={{
                    background: 'rgba(15,23,42,0.95)',
                    border: '1px solid rgba(99,102,241,0.4)',
                    borderRadius: '999px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                  }}
                >
                  <span style={{ color: '#818cf8' }}>⚙</span>
                  <span>Software & E&TC</span>
                </div>
              </div>

              {/* Name & College */}
              <div className="text-center mt-6 mb-5">
                <h2 className="text-xl font-bold text-white tracking-tight">{PERSONAL_INFO.name}</h2>
                <p className="text-sm font-medium mt-1" style={{ color: '#22d3ee' }}>
                  KJCOEMR · SPPU Graduate
                </p>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(99,102,241,0.15)', marginBottom: '16px' }} />

              {/* Info Boxes */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div
                  className="rounded-xl p-3"
                  style={{ background: 'rgba(30,41,59,0.6)', border: '1px solid rgba(71,85,105,0.4)' }}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-1">Domain</p>
                  <p className="text-sm font-bold text-white">Software & E&TC</p>
                </div>
                <div
                  className="rounded-xl p-3"
                  style={{ background: 'rgba(30,41,59,0.6)', border: '1px solid rgba(71,85,105,0.4)' }}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-1">Activity</p>
                  <p className="text-sm font-bold" style={{ color: '#4ade80' }}>IEEE Council</p>
                </div>
              </div>

              {/* Hackathon highlight bar */}
              <div
                className="flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-white"
                style={{
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(59,130,246,0.1))',
                  border: '1px solid rgba(99,102,241,0.3)',
                }}
              >
                <span style={{ color: '#fbbf24' }}>⚡</span>
                <span>Hackathon Qualifier · BlockPay dApp</span>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Academic CGPA', value: '9.0', detail: 'SPPU (KJCOEMR)' },
            { label: 'Featured Projects', value: '2', detail: 'Web3 dApp & AI Vision' },
            { label: 'Student Council', value: 'IEEE', detail: 'Active Member (2025–Present)' },
            { label: 'Hackathon', value: 'Finalist', detail: 'BlockPay Presentation' },
          ].map((item) => (
            <div key={item.label} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <p className="text-2xl font-bold text-white">{item.value}</p>
              <p className="text-xs font-semibold text-slate-300 mt-1">{item.label}</p>
              <p className="text-[11px] text-slate-500 mt-0.5">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Scroll link */}
        <div className="mt-10 text-center">
          <button
            onClick={() => scrollToSection('#skills')}
            className="text-slate-500 hover:text-slate-300 text-xs inline-flex items-center gap-1 bg-transparent border-0 cursor-pointer transition-colors"
          >
            <span>Explore Skills & Projects</span>
            <ChevronDown size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}
