export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* 1. NAVBAR */}
      <nav className="w-full py-6 px-8 flex justify-between items-center border-b border-slate-800">
        {/* LOGO DENGAN FUNGSI REFRESH HALAMAN */}
        <a 
          href="/" 
          onClick={(e) => {
            e.preventDefault();
            window.location.reload();
          }} 
          className="cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
        </a>

        {/* MENU NAVBAR */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
          <a href="#certificates" className="hover:text-indigo-400 transition-colors">Certificates</a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
        </div>
      </nav>


      {/* 2. HERO SECTION */}
      <main className="max-w-5xl mx-auto px-8 py-12 flex flex-col-reverse md:flex-row justify-between items-center min-h-[85vh] gap-12">
        
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <p className="text-indigo-400 font-semibold tracking-wide mb-4">
            Hello, Welcome to My Portfolio
          </p>
          
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Hizkia Filbert Chrismaadi. <br />
            <span className="text-slate-500">Informatics Engineering Student</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          I'm an Informatics Engineering student focused on building scalable and efficient applications. Experienced in creating modern web platforms using <span className="text-slate-200 font-semibold">ReactJS & NestJS</span>, 
          as well as integrated mobile applications with <span className="text-slate-200 font-semibold">Flutter</span>.
          </p>
          
          <div className="flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-indigo-500/20">
              View Case Studies
            </a>
            <a href="#contact" className="px-6 py-3 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold rounded-lg transition-all flex items-center">
              Contact Me
            </a>
          </div>
        </div>

        {/* Photo Section */}
        <div className="relative w-52 h-52 md:w-52 md:h-52 flex-shrink-0 mb-8 md:mb-0 -mt-8 md:-mt-16">
          <div className="absolute inset-0 bg-indigo-500 rounded-full blur-[60px] opacity-20 animate-pulse"></div>
          <img 
            src="/PROFILE.jpeg" 
            alt="Profile"
            className="relative z-10 w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl transition-transform hover:scale-105 duration-300 cursor-pointer"
          />
        </div>
      </main>

     {/* 3. ABOUT SECTION */}
      <section id="about" className="max-w-5xl mx-auto px-8 py-24 border-t border-slate-800/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Bagian Kiri: Teks */}
          <div>
            <div className="mb-4">
              <span className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-bold tracking-widest uppercase">
                Get To Know Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-slate-400">
              About Me
            </h2>
            <div className="space-y-6 text-slate-400 leading-relaxed">
              <p>
                I'm an Informatics Engineering student, deeply driven by the opportunity to create digital solutions that deliver a meaningful impact. For me, software development isn't just about writing code; it's about building scalable products and creating the most efficient solutions to real-world problems. 
              </p>
              <p>
                Recently, as a Software Engineer Intern at Ekasa Technology, I developed an event management platform with ReactJS, NestJS, and Flutter to enhance the overall event management experience.  
              </p>
            </div>
          </div>

          {/* Bagian Kanan: Tech Stack Card */}
          <div className="relative group p-8 md:p-10 bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 rounded-[2rem] hover:border-indigo-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 overflow-hidden">
             
             {/* Efek Cahaya (Ambient Glow) */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-50 pointer-events-none"></div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-50 pointer-events-none"></div>

             <h3 className="text-xl font-bold text-slate-200 mb-8 relative z-10 flex items-center gap-3">
               <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
               Technical Focus Areas
             </h3>
             
             <ul className="space-y-3 text-slate-300 relative z-10">
               {/* Frontend Web */}
               <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-800/50 border border-transparent hover:border-slate-700/50 transition-all duration-300 group/item cursor-default">
                 <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 group-hover/item:scale-105 transition-transform">
                   <span className="w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]"></span> 
                 </div>
                 <div>
                   <div className="text-xs text-slate-500 mb-1 font-medium tracking-wide uppercase">Frontend Web</div>
                   <div className="text-sm font-semibold tracking-wide text-slate-200">HTML, ReactJS, Tailwind CSS</div>
                 </div>
               </li>
               
               {/* Backend & Database */}
               <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-800/50 border border-transparent hover:border-slate-700/50 transition-all duration-300 group/item cursor-default">
                 <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover/item:scale-105 transition-transform">
                   <span className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span> 
                 </div>
                 <div>
                   <div className="text-xs text-slate-500 mb-1 font-medium tracking-wide uppercase">Backend & Database</div>
                   <div className="text-sm font-semibold tracking-wide text-slate-200">Python, NestJS, PostgreSQL</div>
                 </div>
               </li>
               
               {/* Mobile Development */}
               <li className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-800/50 border border-transparent hover:border-slate-700/50 transition-all duration-300 group/item cursor-default">
                 <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-sky-400/10 border border-sky-400/20 group-hover/item:scale-105 transition-transform">
                   <span className="w-3 h-3 bg-sky-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]"></span> 
                 </div>
                 <div>
                   <div className="text-xs text-slate-500 mb-1 font-medium tracking-wide uppercase">Mobile Development</div>
                   <div className="text-sm font-semibold tracking-wide text-slate-200">Dart, Flutter</div>
                 </div>
               </li>
             </ul>
          </div>
        </div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section id="projects" className="max-w-5xl mx-auto px-8 py-6 border-t border-slate-800/50">
        <div className="mb-1">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            Recent Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project Card 1: EventRent Web Platform */}
          <div className="group relative flex flex-col justify-between p-8 bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/15 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 group-hover:opacity-100 opacity-0 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="mb-5">
                <span className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-bold tracking-widest uppercase">
                  WEB APP
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-indigo-400 transition-colors">
                EventRent Web Platform
              </h3>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                A platform to digitalize the entire operational workflow of event organizers. Designed with a modular approach and service separation (agent-facing & user-facing) to ensure long-term scalability.
              </p>
            </div>

            <div className="relative z-10 mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-950/50 border border-slate-800/80 text-slate-300 text-xs rounded-full font-medium tracking-wide">ReactJS</span>
                <span className="px-3 py-1 bg-slate-950/50 border border-slate-800/80 text-slate-300 text-xs rounded-full font-medium tracking-wide">NestJS</span>
                <span className="px-3 py-1 bg-slate-950/50 border border-slate-800/80 text-slate-300 text-xs rounded-full font-medium tracking-wide">PostgreSQL</span>
              </div>
              <div className="h-px w-full bg-slate-800/50 mb-5"></div>
              <a href="https://github.com/Hizkia25" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-indigo-400 transition-colors">
                View Repository 
              </a>
            </div>
          </div>

          {/* Project Card 2: EventRent Mobile App */}
          <div className="group relative flex flex-col justify-between p-8 bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/15 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 group-hover:opacity-100 opacity-0 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="mb-5">
                <span className="inline-block px-4 py-1.5 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full text-[10px] font-bold tracking-widest uppercase">
                  MOBILE APP
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-sky-400 transition-colors">
                EventRent Mobile App
              </h3>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                Cross-platform mobile application development integrated with Backend-as-a-Service (BaaS). Optimized with real-time data synchronization.
              </p>
            </div>

            <div className="relative z-10 mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-950/50 border border-slate-800/80 text-slate-300 text-xs rounded-full font-medium tracking-wide">Flutter</span>
                <span className="px-3 py-1 bg-slate-950/50 border border-slate-800/80 text-slate-300 text-xs rounded-full font-medium tracking-wide">Dart</span>
              </div>
              <div className="h-px w-full bg-slate-800/50 mb-5"></div>
              <a href="https://github.com/hizkiafch/Magang-ER-Agent" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-sky-400 transition-colors">
                View Repository 
              </a>
            </div>
          </div>

          {/* Project Card 3: Portfolio Website */}
          <div className="group relative flex flex-col justify-between p-8 bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/15 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity duration-500 group-hover:opacity-100 opacity-0 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="mb-5">
                <span className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-full text-[10px] font-bold tracking-widest uppercase">
                  WEBSITE
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-indigo-400 transition-colors">
                Personal Portfolio Website
              </h3>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                A personal portfolio website to showcase my skills, projects, and experience as a Informatics Engineering Student.
              </p>
            </div>

            <div className="relative z-10 mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-950/50 border border-slate-800/80 text-slate-300 text-xs rounded-full font-medium tracking-wide">ReactJS</span>
                <span className="px-3 py-1 bg-slate-950/50 border border-slate-800/80 text-slate-300 text-xs rounded-full font-medium tracking-wide">NestJS</span>
              </div>
              <div className="h-px w-full bg-slate-800/50 mb-5"></div>
              <a href="https://github.com/hizkiafch/Portfolio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-indigo-400 transition-colors">
                View Repository 
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CERTIFICATES SECTION */}
      <section id="certificates" className="max-w-5xl mx-auto px-8 py-8 border-t border-slate-800/50">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-slate-400 max-w-2xl leading-relaxed">
            Validation of my technical skills and commitment to continuous learning and growth in the tech industry.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Certificate 1 */}
          <div className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 shadow-lg">
            <img src="SERTIF_IYEN.jpeg" alt="Certificate 1" className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500 bg-slate-900" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-sm font-bold text-slate-200">Indonesian Delegates in Malaysia</p>
            </div>
          </div>

          {/* Certificate 2 */}
          <div className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 shadow-lg">
            <img src="SERTIF_MAGANG.jpeg" alt="Certificate 2" className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500 bg-slate-900" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-sm font-bold text-slate-200">Software Engineering Intern</p>
            </div>
          </div>

          {/* Certificate 3 */}
          <div className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 shadow-lg">
            <img src="SERTIF_BESTPROJECT2.jpeg" alt="Certificate 3" className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500 bg-slate-900" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-sm font-bold text-slate-200">Best Project Award</p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CONTACT & FOOTER SECTION */}
      <footer id="contact" className="border-t border-slate-800/50 bg-slate-950 pt-20 pb-10">
        <div className="max-w-5xl mx-auto px-8 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6">
            Let's Collaborate!
          </h2>
          <p className="text-slate-400 max-w-xl mb-10 leading-relaxed">
            Looking for a developer to make your ideas become reality? I am always open to new opportunities.
          </p>
          <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hizkiafch@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-all shadow-lg shadow-indigo-500/20 mb-20 inline-block">
            Send an Email
          </a>
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800 text-sm text-slate-500">
            <p>© 2026 H. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="https://github.com/Hizkia25" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/hizkiafch" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">LinkedIn</a>
              <a href="https://instagram.com/hizkiafch_" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

