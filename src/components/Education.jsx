import { GraduationCap, Trophy, Star, BookOpen, Palette } from 'lucide-react';
import { SectionHeader } from './shared/Ui';
import { EDUCATION, RELEVANT_COURSEWORK, ACHIEVEMENTS } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-950/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          subtitle="Qualifications"
          title="Education & Coursework"
          description="Consistent academic distinction at Savitribai Phule Pune University complemented by core computer science subjects and collegiate achievements."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column: Education & Coursework (6 cols) */}
          <div className="lg:col-span-6 space-y-6">

            {/* University Degree */}
            {EDUCATION.map(({ degree, institution, year, score, details }) => (
              <div key={degree} className="card-normal p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <GraduationCap size={20} />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {score}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {degree}
                </h3>
                <p className="text-sm text-blue-400 font-medium mb-2">
                  {institution}
                </p>
                {details && (
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {details}
                  </p>
                )}
                <p className="text-xs text-slate-500 font-mono">
                  {year}
                </p>
              </div>
            ))}

            {/* Relevant Coursework */}
            <div className="card-normal p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <BookOpen size={16} />
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Relevant Coursework
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {RELEVANT_COURSEWORK.map(({ name, category }) => (
                  <div
                    key={name}
                    className="p-3 rounded-lg bg-slate-900/60 border border-slate-800"
                  >
                    <span className="text-[10px] text-blue-400 font-semibold uppercase block">
                      {category}
                    </span>
                    <span className="text-xs font-medium text-slate-200 mt-0.5 block">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Achievements & Creative Pursuits (6 cols) */}
          <div className="lg:col-span-6 space-y-6">

            {/* Achievements */}
            <div className="card-normal p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Trophy size={16} />
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Achievements & Recognition
                </h4>
              </div>

              <div className="space-y-3">
                {ACHIEVEMENTS.map(({ text, type }) => {
                  const Icon = type === 'star' ? Star : Trophy;
                  const iconColor = type === 'star' ? 'text-blue-400' : 'text-amber-400';

                  return (
                    <div
                      key={text}
                      className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-start gap-3"
                    >
                      <Icon size={16} className={`${iconColor} mt-0.5 flex-shrink-0`} />
                      <p className="text-xs text-slate-300 leading-relaxed m-0">
                        {text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Creative Pursuits */}
            <div className="card-normal p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                  <Palette size={16} />
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Creative Pursuits & Balance
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-0">
                Enjoys <strong className="text-white font-medium">Painting</strong> and <strong className="text-white font-medium">Singing</strong>. These creative pursuits naturally foster attention to detail, aesthetic harmony, and balanced problem solving in engineering.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
