import { Mail, Phone, FileText, Download, ArrowUpRight } from 'lucide-react';
import { Linkedin, Github } from './shared/Ui';
import { CONTACT_LINKS, PERSONAL_INFO } from '../data/portfolioData';

const ICON_MAP = {
  'Phone': Phone,
  'Email': Mail,
  'GitHub': Github,
  'LinkedIn': Linkedin,
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto text-center">

        {/* Section Header */}
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-block mb-3">
          Get In Touch
        </span>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Let's Connect & Collaborate
        </h2>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-10">
          I'm actively seeking internship and full-time entry-level opportunities in Software Development, Backend Engineering, and AI/ML. Feel free to reach out directly!
        </p>

        {/* 4 Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {CONTACT_LINKS.map(({ label, value, href }) => {
            const Icon = ICON_MAP[label] || Mail;

            return (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="card-normal p-5 flex flex-col items-center text-center text-decoration-none group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-110 transition-transform">
                  <Icon size={18} />
                </div>

                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  {label}
                </span>

                <span className="text-xs font-medium text-white truncate max-w-full px-1 group-hover:text-blue-400 transition-colors">
                  {value}
                </span>

                <span className="text-[11px] text-blue-400 font-semibold mt-3 flex items-center gap-0.5">
                  <span>Connect</span>
                  <ArrowUpRight size={12} />
                </span>
              </a>
            );
          })}
        </div>

        {/* Resume Download Box */}
        <div className="card-normal p-6 sm:p-8 max-w-xl mx-auto">
          <h3 className="text-lg font-bold text-white mb-2">
            Looking for my full resume?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">
            View the verified PDF resume or download a copy for recruitment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            >
              <FileText size={15} />
              <span>View Resume (PDF)</span>
            </a>

            <a
              href="/resume.pdf"
              download="Dnyaneshwari_Vairale_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              <Download size={15} />
              <span>Download CV</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/60 transition-colors"
            >
              <Mail size={15} />
              <span>Send Email</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
