import React from 'react'
import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Server,
  Terminal,
  FileText,
  BrainCircuit,
  GraduationCap,
  University,
  ScanSearch,
  Zap,
  MapPin,
  Sparkles,
  Cpu
} from 'lucide-react'

import { SiPython, SiJavascript, SiMysql, SiGit, SiGithub } from 'react-icons/si'

const ease = [0.16, 1, 0.3, 1]

// ---------------- SECTION TITLE ----------------
const SectionTitle = ({ children, subtitle }) => (
  <div className="mb-24 text-center">

    <motion.h2
      initial={{ opacity: 0, y: 40, letterSpacing: '0.4em' }}
      whileInView={{ opacity: 1, y: 0, letterSpacing: '0.15em' }}
      viewport={{ once: false }}
      transition={{ duration: 1.4, ease }}
      className="text-4xl md:text-7xl font-extralight uppercase text-white mb-6"
    >
      {children}
    </motion.h2>

    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: '100px' }}
      transition={{ duration: 1 }}
      className="h-[1px] bg-blue-500 mx-auto mb-6"
    />

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.6 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="text-gray-400 text-lg md:text-xl italic"
    >
      {subtitle}
    </motion.p>

  </div>
)

// ---------------- HERO ----------------
const ActOrigin = () => {
  const words = 'Exploring the intersection of data and vision_'.split(' ')

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-black px-6">

      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, #111 0%, #000 100%)',
            'radial-gradient(circle at 50% 50%, #1a1a2e 0%, #000 100%)',
            'radial-gradient(circle at 50% 50%, #111 0%, #000 100%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 -z-10"
      />

      <div className="text-center max-w-5xl">

        <div className="flex flex-wrap justify-center gap-x-4 mb-6">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: i * 0.12, duration: 1.4, ease }}
              className={`text-1xl md:text-2xl font-light ${word.endsWith('_') ? 'text-blue-500' : 'text-gray-400'}`}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.h1
          initial={{ letterSpacing: '0.8em', opacity: 0 }}
          animate={{ letterSpacing: '0.15em', opacity: 1 }}
          transition={{ delay: 1.4, duration: 2.5, ease }}
          className="text-5xl md:text-8xl font-black text-white uppercase leading-none whitespace-nowrap"
        >
          MAAZ ANSARI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 3, duration: 2 }}
          className="mt-6 text-sm md:text-xl tracking-[0.5em] text-blue-400 uppercase"
        >
          Innovating at the Intersection of AI and Data
        </motion.p>

      </div>

      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>

    </section>
  )
}

// ---------------- EDUCATION ----------------
const ActGrowth = () => {

  const edu = [
    {
      period: 'Expected 2026',
      degree: 'B.E in Information Technology',
      institution: 'Shree L.R. Tiwari College of Engineering',
      sub: 'University of Mumbai',
      tag: 'CGPA: 7.5',
      desc: '' ,
      icon: <University className="text-gray-400 transition-colors duration-300 group-hover:text-blue-500" />
    },
    {
      period: '2021 – 2023',
      degree: 'Diploma in Information Technology',
      institution: 'M.H. Saboo Siddik Polytechnic',
      sub: 'MSBTE',
      tag: '82.50%',
      desc: 'Built fundamental knowledge of programming, computer networks, database systems and web technologies through practical labs and academic coursework.',
      icon: <GraduationCap className="text-gray-400 transition-colors duration-300 group-hover:text-blue-500" />
    }
  ]

  return (
    <section className="py-40 px-6 max-w-5xl mx-auto">

      <SectionTitle subtitle="Structured foundations for complex systems.">
        Education
      </SectionTitle>

      <div className="space-y-16">
        {edu.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 1 }}
            className="group p-10 border border-white/5 rounded-3xl"
          >

            <div className="flex gap-6">

              <div className="w-12 h-12 border border-white/10 rounded-xl flex items-center justify-center">
                {e.icon}
              </div>

              <div>

                <span className="text-xs text-blue-500 font-mono tracking-widest uppercase">
                  {e.period}
                </span>

                <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-500">
                  {e.degree}
                </h3>

                <div className="flex gap-4 mt-3">
                  <div className="w-[2px] bg-blue-500" />

                  <div>
                    <p className="text-gray-400 italic">{e.institution}</p>

                    <div className="flex gap-3 items-center mt-2">
                      <span className="text-gray-500 text-sm">{e.sub}</span>

                      <span className="px-2 py-1 text-xs bg-blue-500/20 border border-blue-500 text-blue-400 rounded">
                        {e.tag}
                      </span>
                    </div>
                  </div>
                </div>

                

              </div>

            </div>

          </motion.div>
        ))}
      </div>

    </section>
  )
}

// ---------------- SKILLS ----------------
const ActEvolution = () => {

  const skills = [
    { name: 'Python', icon: <SiPython className="w-10 h-10 text-gray-400 transition-colors duration-300 group-hover:text-blue-500" /> },
    { name: 'JavaScript', icon: <SiJavascript className="w-10 h-10 text-gray-400 transition-colors duration-300 group-hover:text-blue-500" /> },
    { name: 'Git', icon: <SiGit className="w-10 h-10 text-gray-400 transition-colors duration-300 group-hover:text-blue-500" /> },
    { name: 'GitHub', icon: <SiGithub className="w-10 h-10 text-gray-400 transition-colors duration-300 group-hover:text-blue-500" /> },
    { name: 'MySQL', icon: <SiMysql className="w-10 h-10 text-gray-400 transition-colors duration-300 group-hover:text-blue-500" /> },
    { name: 'Computer Vision', icon: <ScanSearch className="w-10 h-10 text-gray-400 transition-colors duration-300 group-hover:text-blue-500" /> },
    { name: 'Server Basics', icon: <Server className="w-10 h-10 text-gray-400 transition-colors duration-300 group-hover:text-blue-500" /> },
    { name: 'Networking', icon: <Zap className="w-10 h-10 text-gray-400 transition-colors duration-300 group-hover:text-blue-500" /> },
    { name: 'NLP', icon: <BrainCircuit className="w-10 h-10 text-gray-400 transition-colors duration-300 group-hover:text-blue-500" /> },
    { name: 'Problem Solving', icon: <Sparkles className="w-10 h-10 text-gray-400 transition-colors duration-300 group-hover:text-blue-500" /> }
  ]

  return (
    <section className="py-40 px-6 bg-white/[0.01]">

      <SectionTitle subtitle="A technical toolkit evolving with every project.">
        Skills
      </SectionTitle>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, duration: 0.6 }}
            className="group p-8 border border-white/5 rounded-2xl text-center"
          >

            <div className="flex justify-center mb-4">
              {s.icon}
            </div>

            <span className="text-white uppercase text-sm tracking-widest transition-colors duration-300 group-hover:text-blue-500">
              {s.name}
            </span>

          </motion.div>
        ))}
      </div>

    </section>
  )
}

// ---------------- EXPERIENCE ----------------
const ActExperience = () => {

  const exp = [
    {
      company: '@Aptech Ltd.',
      role: 'Junior Server Administrator - Trainee',
      date: 'JAN 2026 – FEB 2026',
      desc: 'Configured and maintained enterprise server environments while supporting network setup, system troubleshooting, and SQL database management. Gained hands‑on experience in server monitoring, performance optimization, and maintaining stable infrastructure for internal applications.',
      icon: <Server className="text-gray-400 transition-colors duration-300 group-hover:text-blue-500" />
    },
    {
      company: '@Filament AI',
      role: 'Model Trainer - Intern',
      date: 'AUG 2023 – JAN 2024',
      desc: 'Trained and optimized computer vision models using YOLOv5 for object detection tasks. Worked with large annotated datasets, performed data preprocessing, and evaluated model performance to improve detection accuracy for real‑world scenarios.',
      icon: <Cpu className="text-gray-400 transition-colors duration-300 group-hover:text-blue-500" />
    }
  ]

  return (
    <section className="py-40 px-6 max-w-5xl mx-auto">

      <SectionTitle subtitle="Real-world application of technical theory.">
        Experience
      </SectionTitle>

      <div className="space-y-16">
        {exp.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 1 }}
            className="group p-10 border border-white/5 rounded-3xl"
          >

            <div className="flex gap-6">

              <div className="w-12 h-12 border border-white/10 rounded-xl flex items-center justify-center">
                {e.icon}
              </div>

              <div>

                <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-500">
                  {e.role}
                </h3>

                <p className="text-gray-400 italic">{e.company}</p>

                <div className="flex gap-4 mt-4">
                  <div className="w-[2px] bg-blue-500" />
                  <p className="text-gray-400">{e.desc}</p>
                </div>

                <p className="text-blue-500 text-xs font-mono mt-4">{e.date}</p>

              </div>

            </div>

          </motion.div>
        ))}
      </div>

    </section>
  )
}

// ---------------- PROJECTS ----------------
const ActCreations = () => {

  const projects = [
    {
      title: 'CV Object Detection',
      tags: ['PYTHON', 'YOLOV5', 'ROBOFLOW'],
      desc: 'Collected raw datasets from Kaggle and manually annotated images using Roboflow to create custom training labels. The model was trained using YOLOv5 on Google Colab GPU, enabling detection of multiple real‑world objects including cat, dog, face, person, fire, and smoke. The project focused on building a complete computer vision pipeline from dataset preparation to model training and evaluation.',
      icon: <ScanSearch className="text-gray-400 transition-colors duration-300 group-hover:text-blue-500" />
    },
    {
      title: 'Chat with PDF',
      tags: ['PYTHON', 'NLP', 'PYPDF2'],
      desc: 'Built an NLP powered document interaction tool that allows users to ask natural language questions about PDF files. Implemented text extraction, intelligent document chunking, and semantic search techniques to quickly retrieve relevant information from large documents and improve information accessibility.',
      icon: <FileText className="text-gray-400 transition-colors duration-300 group-hover:text-blue-500" />
    },
    {
      title: 'Web Tech Learner',
      tags: ['HTML', 'CSS', 'JS', 'PHP'],
      desc: 'Developed a collection of reusable UI components to help users quickly build custom web interfaces. Created multiple design elements such as button‑1, button‑2, loader‑1, loader‑2 and other styled components, each with dedicated class names so developers can easily mix, customize, and implement them across different layouts.',
      icon: <Terminal className="text-gray-400 transition-colors duration-300 group-hover:text-blue-500" />
    }
  ]

  return (
    <section className="py-40 px-6 bg-white/[0.01]">

      <SectionTitle subtitle="Turning logic into functional software solutions.">
        Projects
      </SectionTitle>

      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 1 }}
            className="group p-10 border border-white/5 rounded-3xl"
          >

            <div className="flex items-center gap-4 mb-6">

              <div className="w-12 h-12 border border-white/10 rounded-xl flex items-center justify-center">
                {p.icon}
              </div>

              <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-500">
                {p.title}
              </h3>

            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-xs border border-white/10 rounded-full text-gray-400 transition-colors duration-300 group-hover:text-blue-400 group-hover:border-blue-500">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <div className="w-[2px] bg-blue-500" />
              <p className="text-gray-400">{p.desc}</p>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  )
}

// ---------------- MAIN APP ----------------
export default function App() {

  return (
    <div className="text-white font-sans antialiased bg-black">

      <ActOrigin />
      <ActGrowth />
      <ActEvolution />
      <ActExperience />
      <ActCreations />

      <footer className="py-32 text-center border-t border-white/5">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-black mb-6"
        >
          Let's Build Something <span className="text-blue-500">Impactful</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-2xl mx-auto mb-12"
        >
          I'm always interested in working on challenging problems involving AI and Data.
          <br />If you have an opportunity or collaboration idea, feel free to reach out.
        </motion.p>

        <a
          href="mailto:ansarimaaz1710@gmail.com"
          className="px-10 py-5 bg-white text-black rounded-full font-bold"
        >
          Initiate Contact
        </a>

        <div className="mt-16 flex justify-center gap-8 text-gray-500">

          <a href="https://github.com/Ansari-Maaz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
            <Github />
          </a>

          <a href="https://www.linkedin.com/in/maazansari1710/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
            <Linkedin />
          </a>

        </div>

        <div className="mt-8 text-xs text-gray-600 flex justify-center items-center gap-2">
          <MapPin size={12} /> Mumbai, Maharashtra
        </div>

        <p className="text-[10px] text-gray-700 mt-4">Maaz Ansari © 2026</p>

      </footer>

    </div>
  )
}
