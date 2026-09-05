import { Users, Trophy, Code2, Building2, Calendar } from 'lucide-react';
import { SectionHeader } from './shared/Ui';
import { EXPERIENCES } from '../data/portfolioData';

const ICONS = [Users, Trophy, Code2];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          subtitle="Leadership & Track Record"
          title="Extracurricular & Experience"
          description="Active student branch leadership with IEEE, competitive hackathon qualification, and continuous software development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCES.map(({ role, company, highlights, status }, idx) => {
            const Icon = ICONS[idx] || Users;

            return (
              <div
                key={role}
                className="card-normal p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Icon size={18} />
                    </div>

                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60 flex items-center gap-1">
                      <Calendar size={11} />
                      <span>{status}</span>
                    </span>
                  </div>

                  <h3 className="font-bold text-white text-base mb-1">
                    {role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-blue-400 font-medium mb-4">
                    <Building2 size={13} />
                    <span>{company}</span>
                  </div>

                  <ul className="space-y-2.5 list-none p-0 m-0 border-t border-slate-800 pt-4">
                    {highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
