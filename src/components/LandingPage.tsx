import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Clock, Target, Users, Zap, ChevronRight, ExternalLink, Phone, MessageCircle, Instagram, Quote } from 'lucide-react';

const GOOGLE_FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSdKRM7wXrG_F-mQyrAdKOM6A8FRKgH3ydPtQXiWaf3u01L0JQ/viewform?usp=publish-editor";
const INSTAGRAM_LINK = "https://www.instagram.com/ecell_riet?igsh=MThvZHdlOThwbXJxeQ==";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20px" }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Section = ({ className, children, id }: { className?: string; children: React.ReactNode; id?: string }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={`py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}
  >
    {children}
  </motion.section>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <header className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
        {/* Immersive Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] opacity-20"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        <FadeIn>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700/50 backdrop-blur-md text-indigo-300 text-xs font-mono tracking-widest mb-8 shadow-2xl shadow-indigo-900/20 transition-all duration-500 hover:bg-slate-800/80 hover:border-indigo-500/40 hover:shadow-indigo-500/10 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            E-CELL RIET STARTUP PROGRAM
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.95] mb-8 text-white">
            Building RIET’s <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-slate-400 animate-gradient-x drop-shadow-sm">
              First Unicorn.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-2xl font-light text-slate-400 mb-4 tracking-wide">
            Rajasthan Institute of Engineering & Technology, Jaipur
          </p>
          
          <p className="text-lg text-slate-500 max-w-xl mb-12 leading-relaxed border-l-2 border-indigo-500/30 pl-6">
            A disciplined system to turn ideas into execution-ready startups. 
            Join the movement to build the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-indigo-500 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] border border-white/10"
            >
              JOIN NOW
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-lg font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all border border-slate-700 hover:border-slate-500"
            >
              Contact Us
            </a>
          </div>
        </FadeIn>
      </header>

      {/* 2. OUR MISSION */}
      <Section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent -z-10 blur-3xl"></div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">Our Mission</h2>
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-slate-300">
              Build <span className="text-indigo-400 font-normal">execution-ready founders</span> from RIET.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-10 relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-indigo-500/0"></div>
              
              <div className="pl-8 relative">
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                <h3 className="text-sm font-mono uppercase text-indigo-400 mb-4 tracking-wider font-semibold">3-Year Vision</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 group">
                    <CheckCircle className="w-6 h-6 mt-0.5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                    <span className="text-lg text-slate-300 group-hover:text-white transition-colors">Multiple validated startups launching from campus.</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <CheckCircle className="w-6 h-6 mt-0.5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                    <span className="text-lg text-slate-300 group-hover:text-white transition-colors">Investment-ready teams pitching to real VCs.</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <CheckCircle className="w-6 h-6 mt-0.5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                    <span className="text-lg text-slate-300 group-hover:text-white transition-colors">A recognized, startup-active campus ecosystem.</span>
                  </li>
                </ul>
              </div>
              
              <div className="pl-8 relative">
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                <h3 className="text-sm font-mono uppercase text-slate-500 mb-2">Long-term Ambition</h3>
                <p className="text-2xl font-bold text-white tracking-tight">RIET’s first unicorn.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* 3. HOW IT WORKS */}
      <Section id="how-it-works">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-20 text-center">From Idea to Execution</h2>
        </FadeIn>
        
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/0 via-indigo-500/30 to-indigo-500/0 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {[
              { phase: "01", title: "Problem Discovery", desc: "Students validate real problems through structured user interviews." },
              { phase: "02", title: "Validation Sprint", desc: "Build and test an MVP with real users." },
              { phase: "03", title: "Mentorship", desc: "Weekly reviews and strategic refinement." },
              { phase: "04", title: "Demo Day", desc: "Present progress to faculty and external mentors." },
              { phase: "05", title: "Advanced Track", desc: "Top teams continue toward traction and growth." }
            ].map((step, i) => (
              <FadeIn key={step.phase} delay={i * 0.1}>
                <div className={`flex flex-col md:flex-row gap-8 items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content */}
                  <div className="flex-1 w-full md:w-auto pl-16 md:pl-0">
                    <div className={`p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/50 hover:border-indigo-500/30 transition-all duration-500 group ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-indigo-300 transition-colors">{step.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center Marker */}
                  <div className="absolute left-[4px] md:left-1/2 w-12 h-12 -translate-x-0 md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#020617] border border-indigo-500/50 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                      <span className="text-xs font-mono font-bold text-indigo-400">{step.phase}</span>
                    </div>
                  </div>

                  {/* Empty Space for alignment */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. WHO SHOULD APPLY */}
      <Section className="relative overflow-hidden">
         {/* Abstract shapes */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl font-bold tracking-tight mb-6">Who Should Apply</h2>
            <p className="text-lg text-slate-300 mb-12 leading-relaxed">
              This program is designed for serious builders who care about execution over certificates.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Target, title: "Goal Oriented", desc: "Want to build real startups before graduation.", color: "blue" },
                { icon: Clock, title: "Committed", desc: "Willing to prioritize consistent progress every week.", color: "indigo" },
                { icon: Zap, title: "Action Takers", desc: "Ready for accountability and rapid execution.", color: "violet" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className={`w-14 h-14 bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-600/20 border border-${item.color}-500/30 text-${item.color}-400 flex items-center justify-center rounded-2xl shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-white group-hover:text-indigo-300 transition-colors">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-gradient-to-br from-slate-900/80 to-black/80 backdrop-blur-md border border-red-500/20 p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-8 text-red-400 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 border border-red-500/30 text-sm">!</span>
                What this is NOT:
              </h3>
              <ul className="space-y-6 font-medium text-slate-300">
                {["A casual club", "A passive membership", "A resume filler"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* 5. EXPECTATIONS */}
      <Section className="border-y border-slate-800 bg-slate-900/20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4 text-white">Expectations & Accountability</h2>
            <p className="text-slate-400 text-lg">We hold high standards to ensure high quality output.</p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Weekly Reviews", desc: "Mandatory milestone check-ins." },
            { title: "Progress Tracking", desc: "Transparent logging of all activities." },
            { title: "Performance Based", desc: "Continuation depends on execution." },
            { title: "Active Status", desc: "Inactive teams may be removed." }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 h-full hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-300 group">
                <h3 className="font-bold text-lg mb-3 text-white group-hover:text-indigo-300 transition-colors">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS SECTION */}
      <Section>
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Voices of Leadership</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Insights from mentors and industry experts supporting the E-Cell initiative.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "The structured approach of this program is exactly what early-stage student founders need to bridge the gap between idea and execution.",
              author: "Dulari Ma'am & Avani Ma'am",
              role: "Faculty Advisors",
              initials: "DA"
            },
            {
              quote: "E-Cell RIET is creating a culture of innovation that will define the next decade of the institute. This is where the future is built.",
              author: "Industry Mentor",
              role: "Startup Consultant",
              initials: "IM"
            },
            {
              quote: "A disciplined system for startups was missing. This cohort is the answer for anyone serious about building a real company.",
              author: "Alumni Founder",
              role: "Tech Entrepreneur",
              initials: "AF"
            }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl relative h-full hover:bg-slate-800/60 transition-colors">
                <Quote className="w-10 h-10 text-indigo-500/20 absolute top-6 right-6" />
                <p className="text-slate-300 mb-8 leading-relaxed relative z-10">"{item.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center text-indigo-300 font-bold text-sm">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{item.author}</h4>
                    <p className="text-xs text-indigo-400">{item.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* 6. FOUNDING COHORT */}
      <Section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 to-slate-950 rounded-3xl border border-slate-800 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1),transparent_70%)]"></div>
        </div>
        
        <div className="text-center py-20 relative z-10 px-6">
          <FadeIn>
            <div className="inline-block border border-indigo-400/30 bg-indigo-500/10 px-6 py-2 rounded-full text-sm font-mono text-indigo-300 mb-8 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
              BATCH 01 • APPLICATIONS OPEN
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white drop-shadow-2xl">
              Founding Cohort
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              The first builders. The culture setters. <br/>The ones who define RIET’s startup future.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-8 text-sm font-mono text-slate-400 mb-12">
              <span className="flex items-center gap-2 justify-center">
                <Users className="w-4 h-4 text-indigo-400" /> LIMITED SEATS
              </span>
              <span className="flex items-center gap-2 justify-center">
                <Target className="w-4 h-4 text-indigo-400" /> SELECTION-BASED ENTRY
              </span>
            </div>
            
            <a 
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-blue-700 text-white px-10 py-5 rounded-full text-xl font-bold hover:from-indigo-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(79,70,229,0.4)] border border-white/10"
            >
              JOIN NOW
              <ArrowRight className="w-6 h-6" />
            </a>
          </FadeIn>
        </div>
      </Section>

      {/* FAQ SECTION */}
      <Section>
        <FadeIn>
          <h2 className="text-4xl font-bold tracking-tight mb-12 text-white">Frequently Asked Questions</h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {[
            { q: "Do I need a fully formed startup idea?", a: "You need a clear problem statement. Phase 1 is dedicated to validating that problem. You don't need a full business plan yet, but you must have a direction." },
            { q: "Is this open to all branches?", a: "Yes. We believe great founders come from every discipline. We actively encourage cross-disciplinary teams." },
            { q: "Can I apply as a solo founder?", a: "Yes. While teams can execute faster, solo founders with high drive are welcome. You might even find potential co-founders within the cohort." },
            { q: "What is the time commitment?", a: "Expect to spend 8–10 hours per week. This includes weekly reviews, customer interviews, and building your product. It is not a passive club." },
            { q: "Does the program provide funding?", a: "We focus on making you investment-ready. Top teams from the Advanced Track will have opportunities to pitch to external investors and VCs." },
            { q: "What if I miss the weekly reviews?", a: "Attendance is mandatory. This program is modeled after high-performance accelerators. Inactive or absent teams will be removed." }
          ].map((faq, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 h-full hover:border-indigo-500/30 transition-colors">
                <h3 className="text-lg font-bold mb-3 text-indigo-200">{faq.q}</h3>
                <p className="text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* LEADERSHIP & CONTACT SECTION */}
      <Section id="contact" className="mb-12">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4">Leadership & Contact</h2>
            <p className="text-slate-400">Connect with the team driving E-Cell RIET.</p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Founder 1 */}
          <FadeIn delay={0.1}>
            <div className="bg-gradient-to-b from-white/[0.05] to-transparent p-10 rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300 text-center group relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] group-hover:scale-110 transition-transform duration-300">
                  AG
                </div>
                <h3 className="text-2xl font-bold mb-1 text-white">Alok Gupta</h3>
                <p className="text-indigo-400 font-mono text-sm mb-8 tracking-widest uppercase">Founder</p>
                
                <div className="flex flex-col gap-4 items-center">
                  <a href="tel:9451901542" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5 w-full justify-center">
                    <Phone className="w-4 h-4" /> 9451901542
                  </a>
                  <a 
                    href="https://wa.me/919451901542" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#20bd5a] transition-all shadow-lg shadow-green-900/20 w-full justify-center"
                  >
                    <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Founder 2 */}
          <FadeIn delay={0.2}>
            <div className="bg-gradient-to-b from-white/[0.05] to-transparent p-10 rounded-3xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300 text-center group relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:scale-110 transition-transform duration-300">
                  LK
                </div>
                <h3 className="text-2xl font-bold mb-1 text-white">Lakshya Khatri</h3>
                <p className="text-violet-400 font-mono text-sm mb-8 tracking-widest uppercase">Co-Founder</p>
                
                <div className="flex flex-col gap-4 items-center">
                  <a href="tel:9251072575" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5 w-full justify-center">
                    <Phone className="w-4 h-4" /> 9251072575
                  </a>
                  <a 
                    href="https://wa.me/919251072575" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#20bd5a] transition-all shadow-lg shadow-green-900/20 w-full justify-center"
                  >
                    <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Faculty 1 */}
          <FadeIn delay={0.3}>
            <div className="bg-gradient-to-b from-white/[0.05] to-transparent p-10 rounded-3xl border border-white/10 hover:border-pink-500/50 transition-all duration-300 text-center group relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-[0_0_20px_rgba(236,72,153,0.3)] group-hover:scale-110 transition-transform duration-300">
                  AM
                </div>
                <h3 className="text-2xl font-bold mb-1 text-white">Avani Ma'am</h3>
                <p className="text-pink-400 font-mono text-sm mb-8 tracking-widest uppercase">Faculty Advisor</p>
                
                <div className="flex flex-col gap-4 items-center">
                  <a href="tel:7891506418" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5 w-full justify-center">
                    <Phone className="w-4 h-4" /> +91 78915 06418
                  </a>
                  <a 
                    href="https://wa.me/917891506418" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#20bd5a] transition-all shadow-lg shadow-green-900/20 w-full justify-center"
                  >
                    <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Faculty 2 */}
          <FadeIn delay={0.4}>
            <div className="bg-gradient-to-b from-white/[0.05] to-transparent p-10 rounded-3xl border border-white/10 hover:border-pink-500/50 transition-all duration-300 text-center group relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-rose-500 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-[0_0_20px_rgba(244,63,94,0.3)] group-hover:scale-110 transition-transform duration-300">
                  DM
                </div>
                <h3 className="text-2xl font-bold mb-1 text-white">Dulari Ma'am</h3>
                <p className="text-rose-400 font-mono text-sm mb-8 tracking-widest uppercase">Faculty Advisor</p>
                
                <div className="flex flex-col gap-4 items-center">
                  <a href="tel:8094559777" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5 w-full justify-center">
                    <Phone className="w-4 h-4" /> +91 80945 59777
                  </a>
                  <a 
                    href="https://wa.me/918094559777" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#20bd5a] transition-all shadow-lg shadow-green-900/20 w-full justify-center"
                  >
                    <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* 8. FOOTER */}
      <footer className="py-16 border-t border-white/10 text-center bg-[#020617] relative">
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 to-transparent pointer-events-none"></div>
        <div className="space-y-6 text-sm text-slate-500 relative z-10">
          <div className="mb-8">
            <p className="font-bold text-white text-2xl tracking-tight mb-2">E-Cell RIET</p>
            <p className="text-indigo-400 font-mono text-xs tracking-widest uppercase">Innovation • Execution • Growth</p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
             <a 
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-pink-500 hover:bg-white/10 hover:border-pink-500/50 transition-all duration-300"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="mailto:riet.ecell@gmail.com"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-slate-400">riet.ecell@gmail.com</p>
          </div>

          <div className="pt-8 border-t border-white/5 max-w-md mx-auto mt-8 px-6">
            <p className="font-medium text-slate-300">Rajasthan Institute of Engineering & Technology, Jaipur</p>
            <p className="text-xs opacity-40 mt-4">© {new Date().getFullYear()} E-Cell RIET. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
