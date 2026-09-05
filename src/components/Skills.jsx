import { Code2, Cpu, Wrench, BookOpen, Users, Palette } from 'lucide-react';
import { SectionHeader } from './shared/Ui';
import { SKILLS } from '../data/portfolioData';

const ICON_MAP = {
  'Programming Languages': Code2,
  'Technologies & Frameworks': Cpu,
  'Developer Tools': Wrench,
  'Relevant Coursework': BookOpen,
  'Soft Skills & Leadership': Users,
  'Creative Pursuits': Palette,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          subtitle="Technical Arsenal"
          title="Skills & Core Competencies"
          description="A solid technical toolkit spanning software development in Java and Python, backend engineering, AI/ML, and decentralized Web3 applications."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map(({ category, items }) => {
            const Icon = ICON_MAP[category] || Code2;

            return (
              <div
                key={category}
                className="card-normal p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-bold text-white text-base">
                      {category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
