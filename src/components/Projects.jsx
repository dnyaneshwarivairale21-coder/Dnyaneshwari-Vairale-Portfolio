import { Layers, Activity, ExternalLink, CheckCircle2, Calendar } from 'lucide-react';
import { SectionHeader, Github } from './shared/Ui';
import { PROJECTS } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-950/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          subtitle="Featured Engineering"
          title="Technical Projects"
          description="Real-world engineering projects demonstrating decentralized Web3 application development and vision-based predictive AI."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PROJECTS.map((project, idx) => {
            const Icon = idx === 0 ? Layers : Activity;

            return (
              <div
                key={project.title}
                className="card-normal p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Top Category and Date */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                        <Icon size={16} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                        {project.category}
                      </span>
                    </div>

                    {project.date && (
                      <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{project.date}</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white mb-1.5 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="border-t border-slate-800 pt-4 mb-6">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Key Highlights
                    </p>
                    <ul className="space-y-2.5 list-none p-0 m-0">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                          <CheckCircle2 size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* GitHub Action Link */}
                <div className="pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors text-decoration-none"
                  >
                    <Github size={15} />
                    <span>View Repository on GitHub</span>
                    <ExternalLink size={13} className="text-slate-400" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
