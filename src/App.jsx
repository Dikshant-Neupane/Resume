import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  PROFILE,
  SKILLS,
  PROJECTS,
  EXPERIENCE,
  EDUCATION,
  ACTIVITIES,
  CURRENTLY_LEARNING,
  getAcademicYear,
} from './data/profileSeed'

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education & Honors' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)
  const [projectFilter, setProjectFilter] = useState('Selected (4)')

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handlePrint = () => {
    window.print()
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    if (document.documentElement) document.documentElement.scrollTop = 0
    if (document.body) document.body.scrollTop = 0
  }

  const switchTab = (index) => {
    setActiveTab(index)
    scrollToTop()
  }

  const nextTab = useCallback(() => {
    setActiveTab((prev) => (prev < TABS.length - 1 ? prev + 1 : 0))
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    if (document.documentElement) document.documentElement.scrollTop = 0
    if (document.body) document.body.scrollTop = 0
  }, [])

  const prevTab = useCallback(() => {
    setActiveTab((prev) => (prev > 0 ? prev - 1 : TABS.length - 1))
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    if (document.documentElement) document.documentElement.scrollTop = 0
    if (document.body) document.body.scrollTop = 0
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    if (document.documentElement) document.documentElement.scrollTop = 0
    if (document.body) document.body.scrollTop = 0
  }, [activeTab])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      if (e.key === 'ArrowRight') {
        nextTab()
      } else if (e.key === 'ArrowLeft') {
        prevTab()
      } else if (e.key >= '1' && e.key <= '5') {
        const index = parseInt(e.key, 10) - 1
        if (index >= 0 && index < TABS.length) {
          switchTab(index)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextTab, prevTab])

  const projectCategories = [
    'Selected (4)',
    'All (25+)',
    'AI & Agents',
    'Machine Learning & Data',
    'Scientific & Algorithms',
    'Web & Full Stack',
    'Systems & Core CS',
  ]

  const filteredProjects =
    projectFilter === 'Selected (4)'
      ? PROJECTS.filter((p) => p.selected)
      : projectFilter === 'All (25+)'
      ? PROJECTS
      : PROJECTS.filter(
          (p) => p.category.toLowerCase() === projectFilter.toLowerCase()
        )

  return (
    <div className="min-h-screen bg-[#f7f5f1] text-[#1a1714] font-sans antialiased flex flex-col justify-between selection:bg-[#c4a57b]/30 selection:text-[#503b1a]">
      {/* Paper Grain Texture Overlay */}
      <svg className="paper-grain" aria-hidden="true">
        <filter id="paper-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paper-noise)" />
      </svg>

      {/* Sleek Floating Island Navbar (Unified, No Blank Space) */}
      <header className="no-print sticky top-3 z-50 max-w-5xl mx-auto w-full px-3 sm:px-6">
        <div className="bg-white/95 backdrop-blur-xl border border-[#e2dcd2] shadow-[0_6px_24px_rgba(20,18,15,0.06)] rounded-2xl p-2 sm:px-4 sm:py-2 transition-all flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5">
          
          {/* Segmented Capsule Tabs */}
          <nav className="flex items-center bg-[#f0ebe2] p-1 rounded-xl border border-[#ded5c7] overflow-x-auto no-scrollbar">
            {TABS.map((tab, idx) => {
              const isActive = activeTab === idx
              return (
                <button
                  key={tab.id}
                  onClick={() => switchTab(idx)}
                  className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                    isActive
                      ? 'bg-white text-[#1a1714] shadow-[0_2px_8px_rgba(0,0,0,0.05)] font-semibold'
                      : 'text-[#6b6256] hover:text-[#1a1714] hover:bg-white/50'
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-1.5 sm:gap-2">
            <button
              onClick={copyEmail}
              className="flex-1 md:flex-initial text-center px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-medium border border-[#d8cfc3] bg-[#faf7f2] hover:bg-white text-[#4e453b] hover:text-[#1a1714] hover:border-[#735a36]/40 transition shadow-2xs active:scale-95"
              title="Copy email to clipboard"
            >
              <span>{copied ? 'Copied' : 'Email'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex-1 md:flex-initial text-center px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-medium border border-[#d8cfc3] bg-[#faf7f2] hover:bg-white text-[#4e453b] hover:text-[#1a1714] hover:border-[#735a36]/40 transition shadow-2xs active:scale-95"
              title="Print full resume or save as PDF"
            >
              <span>Print / PDF</span>
            </button>

            <a
              href="/CV_dikshant_neupane.pdf"
              download="Dikshant_Neupane_CV.pdf"
              className="flex-1 md:flex-initial text-center px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[#735a36] hover:bg-[#5f492b] text-white shadow-[0_2px_8px_rgba(115,90,54,0.22)] active:scale-95 transition whitespace-nowrap"
            >
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </header>

      {/* Screen Content: Paginated / Tabbed View */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-5 sm:py-7 flex-1 w-full">
        
        {/* Screen Page Card (Hidden on Print) */}
        <div className="no-print bg-white border border-[#e5ded4] rounded-2xl p-6 sm:p-8 paper-card min-h-[460px] flex flex-col justify-between">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
            {/* PAGE 1: OVERVIEW */}
            {activeTab === 0 && (
              <div className="">
                <div className="border-b border-[#ece5da] pb-5 mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#735a36]">
                        Curriculum Vitae
                      </span>
                      <h1 className="text-2xl sm:text-3xl font-heading font-bold text-[#1a1714] mt-1 tracking-tight">
                        {PROFILE.name}
                      </h1>
                      <p className="text-sm sm:text-base font-semibold text-[#735a36] mt-0.5">
                        {PROFILE.title}
                      </p>
                      <p className="text-xs text-[#7f756a] mt-1">
                        {PROFILE.location} · Open to AI / ML & Software Engineering Roles
                      </p>
                    </div>

                    <div className="flex flex-wrap sm:flex-col gap-1.5 sm:items-end text-xs text-[#52493e]">
                      <a
                        href={`mailto:${PROFILE.email}`}
                        className="hover:text-[#735a36] underline-offset-2 hover:underline"
                      >
                        {PROFILE.email}
                      </a>
                      <a
                        href={`tel:${PROFILE.phone}`}
                        className="hover:text-[#735a36] underline-offset-2 hover:underline"
                      >
                        {PROFILE.phone}
                      </a>
                      <a
                        href={PROFILE.github}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#735a36] underline-offset-2 hover:underline font-mono text-[11px]"
                      >
                        github.com/Dikshant-Neupane
                      </a>
                      <a
                        href={PROFILE.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#735a36] underline-offset-2 hover:underline font-mono text-[11px]"
                      >
                        linkedin.com/in/dikshant-neupane
                      </a>
                    </div>
                  </div>
                </div>

                {/* Open for Work Status Card (Unique Beacon Effect) */}
                <div className="mb-6 p-4 rounded-xl border border-emerald-300/60 bg-gradient-to-r from-emerald-50/60 via-amber-50/30 to-emerald-50/60 animate-gradient-shift relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
                    <div className="flex items-start gap-3">
                      <div className="relative flex items-center justify-center w-4 h-4 mt-0.5">
                        <span className="animate-beacon absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                            Open for Work
                          </span>
                          <span className="text-xs font-semibold text-[#1a1714]">
                            Available for Internship & Full-time Roles
                          </span>
                        </div>
                        <p className="text-xs text-[#52493e] mt-1 leading-relaxed">
                          Actively seeking opportunities in AI / Machine Learning engineering, scientific computing pipelines, and computational software development.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={copyEmail}
                      className="self-start sm:self-center whitespace-nowrap text-xs font-semibold text-emerald-900 bg-white border border-emerald-200 hover:bg-emerald-50 px-3 py-1.5 rounded-lg transition shadow-2xs active:scale-95"
                    >
                      {copied ? 'Email Copied' : 'Get in Touch →'}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h2 className="text-xs font-bold uppercase tracking-wider text-[#735a36] mb-2 font-heading">
                        Executive Summary
                      </h2>
                      <p className="text-sm sm:text-base leading-relaxed text-[#3a342c]">
                        {PROFILE.bio}
                      </p>
                    </div>

                    <div className="pt-3">
                      <h2 className="text-xs font-bold uppercase tracking-wider text-[#735a36] mb-2 font-heading">
                        Core Competencies & Focus
                      </h2>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-3 rounded-xl bg-[#faf7f2] border border-[#eee6da]">
                          <span className="font-semibold block text-[#1a1714]">Machine Learning & AI</span>
                          <span className="text-[11px] text-[#6b5f52]">Regression, EDA, scikit-learn, Feature Engineering</span>
                        </div>
                        <div className="p-3 rounded-xl bg-[#faf7f2] border border-[#eee6da]">
                          <span className="font-semibold block text-[#1a1714]">Scientific Computing</span>
                          <span className="text-[11px] text-[#6b5f52]">Nonlinear Dynamics, SciPy, Numerical Methods</span>
                        </div>
                        <div className="p-3 rounded-xl bg-[#faf7f2] border border-[#eee6da]">
                          <span className="font-semibold block text-[#1a1714]">Algorithmic Problem Solving</span>
                          <span className="text-[11px] text-[#6b5f52]">Graph Theory, Bellman-Ford, Optimization</span>
                        </div>
                        <div className="p-3 rounded-xl bg-[#faf7f2] border border-[#eee6da]">
                          <span className="font-semibold block text-[#1a1714]">Software Engineering</span>
                          <span className="text-[11px] text-[#6b5f52]">TypeScript, Python, C, Git, Linux</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 border-t md:border-t-0 md:border-l border-[#ece5da] pt-4 md:pt-0 md:pl-6">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#735a36] mb-2 font-heading">
                        Currently Advancing
                      </h3>
                      <ul className="space-y-1.5 text-xs text-[#4e453b]">
                        {CURRENTLY_LEARNING.map((item) => (
                          <li key={item} className="flex items-start gap-1.5">
                            <span className="text-[#735a36] font-bold">-</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#735a36] mb-2 font-heading">
                        Education Status
                      </h3>
                      <div className="text-xs text-[#4e453b] bg-[#faf7f2] p-3 rounded-xl border border-[#eee6da]">
                        <span className="font-semibold block text-[#1a1714]">
                          {getAcademicYear() === 'Graduate' ? 'BSc. CSIT Graduate' : `BSc. CSIT (${getAcademicYear()})`}
                        </span>
                        <span>Samriddhi College · Kathmandu</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PAGE 2: EXPERIENCE */}
            {activeTab === 1 && (
              <div className="">
                <div className="border-b border-[#ece5da] pb-3 mb-6 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#735a36]">
                      Section 02
                    </span>
                    <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#1a1714]">
                      Experience & Leadership
                    </h2>
                  </div>
                  <span className="text-xs text-[#7f756a]">
                    {EXPERIENCE.length} Roles Listed
                  </span>
                </div>

                <div className="space-y-5">
                  {EXPERIENCE.map((exp) => (
                    <div
                      key={exp.id}
                      className="p-4 sm:p-5 rounded-xl border border-[#e5ded4] bg-[#fdfcf9] hover:border-[#735a36]/50 hover:-translate-y-0.5 transition-all duration-200 paper-card"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                        <div>
                          <h3 className="text-base font-bold text-[#1a1714] font-heading">
                            {exp.role}
                          </h3>
                          <div className="text-xs sm:text-sm font-medium text-[#735a36]">
                            <span>{exp.organization}</span>
                            {exp.employment_type && (
                              <span className="text-[#7f756a] font-normal ml-1">
                                · {exp.employment_type}
                              </span>
                            )}
                            {exp.location && (
                              <span className="text-[#7f756a] font-normal ml-1">
                                ({exp.location})
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="text-xs font-mono text-[#7f756a]">
                          {exp.duration_label || `${exp.start_date} — ${exp.end_date || 'Present'}`}
                        </span>
                      </div>

                      <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-[#4e453b]">
                        {exp.description.map((bullet, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      {exp.skills && (
                        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#f0eae1]">
                          {exp.skills.map((sk) => (
                            <span
                              key={sk}
                              className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#f4eee4] text-[#6b583f]"
                            >
                              {sk}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PAGE 3: PROJECTS */}
            {activeTab === 2 && (
              <div className="">
                <div className="border-b border-[#ece5da] pb-3 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#735a36]">
                      Section 03
                    </span>
                    <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#1a1714]">
                      Technical Projects & Open Source
                    </h2>
                  </div>

                  {/* Filter Pills with Counts */}
                  <div className="flex flex-wrap gap-1.5">
                    {projectCategories.map((cat) => {
                      const count =
                        cat === 'Selected (4)'
                          ? PROJECTS.filter((p) => p.selected).length
                          : cat === 'All (25+)'
                          ? PROJECTS.length
                          : PROJECTS.filter(
                              (p) => p.category.toLowerCase() === cat.toLowerCase()
                            ).length
                      return (
                        <button
                          key={cat}
                          onClick={() => setProjectFilter(cat)}
                          className={`text-[11px] px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                            projectFilter === cat
                              ? 'bg-[#735a36] text-white font-semibold shadow-2xs'
                              : 'bg-[#f0ebe2] text-[#554b40] hover:bg-[#e4ddd0]'
                          }`}
                        >
                          <span>{cat}</span>
                          <span
                            className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                              projectFilter === cat
                                ? 'bg-white/25 text-white'
                                : 'bg-[#e2dacb] text-[#5f5446]'
                            }`}
                          >
                            {count}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredProjects.map((proj) => (
                    <div
                      key={proj.id}
                      className={`p-4 rounded-xl border bg-[#fdfcf9] flex flex-col justify-between hover:border-[#735a36]/50 hover:-translate-y-0.5 transition-all duration-200 paper-card ${
                        proj.featured
                          ? 'border-[#c4a57b]/60 ring-1 ring-[#c4a57b]/20'
                          : 'border-[#e5ded4]'
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-sm font-bold text-[#1a1714] font-heading">
                              {proj.title}
                            </h3>
                            {proj.featured && (
                              <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 border border-amber-200">
                                Featured
                              </span>
                            )}
                          </div>
                          {proj.github && (
                            <a
                              href={proj.github}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[11px] font-medium text-[#735a36] hover:underline whitespace-nowrap"
                            >
                              GitHub →
                            </a>
                          )}
                        </div>

                        <span className="inline-block text-[10px] font-semibold text-[#735a36] bg-[#f4eee4] px-2 py-0.5 rounded-md mb-2">
                          {proj.category}
                        </span>

                        <p className="text-xs text-[#4e453b] leading-relaxed mb-2.5">
                          {proj.description}
                        </p>

                        <ul className="list-disc list-outside pl-4 space-y-0.5 text-[11px] text-[#5c5347] mb-3">
                          {proj.highlights.map((h, i) => (
                            <li key={i}>{h}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-1 pt-2.5 border-t border-[#f0eae1]">
                        {proj.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white border border-[#e2dcd2] text-[#4e453b]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PAGE 4: SKILLS */}
            {activeTab === 3 && (
              <div className="">
                <div className="border-b border-[#ece5da] pb-3 mb-6 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#735a36]">
                      Section 04
                    </span>
                    <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#1a1714]">
                      Technical Skills Matrix
                    </h2>
                  </div>
                  <span className="text-xs text-[#7f756a]">
                    Verified Competencies
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#fdfcf9] border border-[#e5ded4] hover:-translate-y-0.5 transition-all duration-200 paper-card">
                    <h3 className="text-xs uppercase tracking-wider font-bold text-[#1a1714] font-heading mb-3 pb-1 border-b border-[#f0eae1]">
                      Programming Languages
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {SKILLS.languages.map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-lg bg-white border border-[#e2dcd2] text-xs font-mono text-[#3a342c]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#fdfcf9] border border-[#e5ded4] hover:-translate-y-0.5 transition-all duration-200 paper-card">
                    <h3 className="text-xs uppercase tracking-wider font-bold text-[#1a1714] font-heading mb-3 pb-1 border-b border-[#f0eae1]">
                      AI & Machine Learning
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {[...SKILLS.data_ml, ...SKILLS.ai].map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-lg bg-white border border-[#e2dcd2] text-xs text-[#3a342c]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#fdfcf9] border border-[#e5ded4] hover:-translate-y-0.5 transition-all duration-200 paper-card">
                    <h3 className="text-xs uppercase tracking-wider font-bold text-[#1a1714] font-heading mb-3 pb-1 border-b border-[#f0eae1]">
                      Scientific Computing & Math
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {[...SKILLS.scientific, ...SKILLS.visualization].map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-lg bg-white border border-[#e2dcd2] text-xs text-[#3a342c]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#fdfcf9] border border-[#e5ded4] hover:-translate-y-0.5 transition-all duration-200 paper-card">
                    <h3 className="text-xs uppercase tracking-wider font-bold text-[#1a1714] font-heading mb-3 pb-1 border-b border-[#f0eae1]">
                      Tools & Developer Environments
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {SKILLS.tools.map((s) => (
                        <span key={s} className="px-2.5 py-1 rounded-lg bg-white border border-[#e2dcd2] text-xs font-mono text-[#3a342c]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PAGE 5: EDUCATION & HONORS */}
            {activeTab === 4 && (
              <div className="">
                <div className="border-b border-[#ece5da] pb-3 mb-6 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#735a36]">
                      Section 05
                    </span>
                    <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#1a1714]">
                      Education & Honors
                    </h2>
                  </div>
                  <span className="text-xs text-[#7f756a]">
                    Academic & Competitions
                  </span>
                </div>

                <div className="space-y-6">
                  {/* Education */}
                  {EDUCATION.map((edu, index) => (
                    <div key={index} className="p-5 rounded-xl border border-[#e5ded4] bg-[#fdfcf9] hover:-translate-y-0.5 transition-all duration-200 paper-card">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                        <div>
                          <h3 className="text-base font-bold text-[#1a1714] font-heading">
                            {edu.degree}
                          </h3>
                          <div className="text-xs sm:text-sm font-medium text-[#735a36]">
                            <span>{edu.institution}</span>
                            <span className="text-[#7f756a] font-normal ml-1">
                              · {edu.location}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-[#7f756a]">
                          {edu.status}
                        </span>
                      </div>

                      <div className="mt-3">
                        <span className="text-xs font-semibold text-[#1a1714] block mb-1.5">
                          Relevant Coursework:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="text-xs px-2.5 py-1 rounded-lg bg-white border border-[#e2dcd2] text-[#4e453b]"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Competitions & Initiatives */}
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-bold text-[#735a36] mb-3 font-heading">
                      Notable Competitions & Initiatives
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {ACTIVITIES.filter((a) => a.featured).map((act) => (
                        <div
                          key={act.id}
                          className="p-3.5 rounded-xl border border-[#e5ded4] bg-[#fdfcf9] flex flex-col justify-between hover:-translate-y-0.5 transition-all duration-200 paper-card"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-semibold text-[#1a1714] text-xs">
                                {act.title}
                              </span>
                              <span className="text-[10px] text-[#7f756a] uppercase font-mono">
                                {act.platform}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {act.tags.map((t) => (
                                <span
                                  key={t}
                                  className="text-[10px] px-1.5 py-0.5 rounded bg-[#f4eee4] text-[#6b583f]"
                                >
                                  #{t}
                                </span>
                              ))}
                            </div>
                          </div>
                          {act.url && (
                            <a
                              href={act.url}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-2 text-[11px] text-[#735a36] hover:underline inline-flex items-center"
                            >
                              View post/event →
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
          </AnimatePresence>

          {/* Bottom Page Navigation Controls */}
          <div className="pt-6 mt-6 border-t border-[#ece5da] flex items-center justify-between text-xs text-[#7f756a]">
            <button
              onClick={prevTab}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#dcd4c7] bg-[#faf7f2] hover:bg-[#eee6da] text-[#4e453b] transition font-medium"
            >
              <span>← Previous</span>
            </button>

            {/* Step Indicators */}
            <div className="flex items-center gap-1.5">
              {TABS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => switchTab(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeTab === i ? 'w-6 bg-[#735a36]' : 'bg-[#dcd4c7] hover:bg-[#c4bdb1]'
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
              <span className="ml-2 font-mono text-[11px]">
                {activeTab + 1} / {TABS.length}
              </span>
            </div>

            <button
              onClick={nextTab}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#dcd4c7] bg-[#faf7f2] hover:bg-[#eee6da] text-[#4e453b] transition font-medium"
            >
              <span>Next →</span>
            </button>
          </div>
        </div>

        {/* PRINT DOCUMENT: Rendered Only When Printing (Ctrl+P / Print Button) */}
        <div className="hidden print:block resume-container bg-white text-black p-0">
          
          {/* Header */}
          <div className="border-b border-black pb-4 mb-4">
            <h1 className="text-2xl font-bold">{PROFILE.name}</h1>
            <p className="text-sm font-semibold">{PROFILE.title} · {PROFILE.location}</p>
            <p className="text-xs text-gray-700 mt-1">
              Email: {PROFILE.email} | Phone: {PROFILE.phone} | GitHub: github.com/Dikshant-Neupane | LinkedIn: linkedin.com/in/dikshant-neupane
            </p>
          </div>

          {/* Summary */}
          <div className="mb-4 page-break-inside-avoid">
            <h2 className="text-xs uppercase font-bold tracking-wider border-b border-gray-400 pb-1 mb-1.5">
              Summary
            </h2>
            <p className="text-xs leading-relaxed">{PROFILE.bio}</p>
          </div>

          {/* Skills */}
          <div className="mb-4 page-break-inside-avoid">
            <h2 className="text-xs uppercase font-bold tracking-wider border-b border-gray-400 pb-1 mb-1.5">
              Technical Skills
            </h2>
            <div className="text-xs space-y-1">
              <div><strong>Languages:</strong> {SKILLS.languages.join(', ')}</div>
              <div><strong>AI & Machine Learning:</strong> {[...SKILLS.data_ml, ...SKILLS.ai].join(', ')}</div>
              <div><strong>Scientific Computing:</strong> {[...SKILLS.scientific, ...SKILLS.visualization].join(', ')}</div>
              <div><strong>Tools:</strong> {SKILLS.tools.join(', ')}</div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-4 page-break-inside-avoid">
            <h2 className="text-xs uppercase font-bold tracking-wider border-b border-gray-400 pb-1 mb-1.5">
              Experience & Leadership
            </h2>
            <div className="space-y-3">
              {EXPERIENCE.map((exp) => (
                <div key={exp.id} className="text-xs">
                  <div className="flex justify-between font-bold">
                    <span>{exp.role} — {exp.organization}</span>
                    <span>{exp.duration_label || `${exp.start_date} - ${exp.end_date || 'Present'}`}</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-0.5 mt-1">
                    {exp.description.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects (Print Document) */}
          <div className="mb-4 page-break-inside-avoid">
            <h2 className="text-xs uppercase font-bold tracking-wider border-b border-gray-400 pb-1 mb-1.5">
              Selected Technical Projects
            </h2>
            <div className="space-y-2.5">
              {PROJECTS.filter((p) => p.selected).map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex justify-between font-bold">
                    <span>{proj.title} ({proj.category})</span>
                    <span>{proj.tech.join(', ')}</span>
                  </div>
                  <p className="text-[11px] text-gray-800">{proj.description}</p>
                  <ul className="list-disc pl-4 space-y-0.5">
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-4 page-break-inside-avoid">
            <h2 className="text-xs uppercase font-bold tracking-wider border-b border-gray-400 pb-1 mb-1.5">
              Education
            </h2>
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="text-xs">
                <div className="flex justify-between font-bold">
                  <span>{edu.degree} — {edu.institution}, {edu.location}</span>
                  <span>{edu.status}</span>
                </div>
                <p className="text-[11px] mt-0.5"><strong>Coursework:</strong> {edu.coursework.join(', ')}</p>
              </div>
            ))}
          </div>

        </div>

      </main>

      {/* Screen Footer */}
      <footer className="no-print border-t border-[#e2dcd2] bg-[#eae3d7]/60 py-4 text-xs text-[#7f756a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            {PROFILE.name} · Official Curriculum Vitae
          </span>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">Navigate: [←] / [→] keys</span>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-[#735a36]">
              GitHub
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#735a36]">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
