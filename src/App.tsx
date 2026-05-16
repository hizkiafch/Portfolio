export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* 1. NAVBAR */}
      <nav className="w-full py-6 px-8 flex justify-between items-center border-b border-slate-800">
        <div className="text-2xl font-extrabold tracking-tighter text-indigo-400">
          Hizkia Filbert Chrismaadi.
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-indigo-400 transition-colors">Tentang</a>
          <a href="#projects" className="hover:text-indigo-400 transition-colors">Proyek</a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors">Kontak</a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <main className="max-w-5xl mx-auto px-8 py-24 flex flex-col justify-center items-start min-h-[85vh]">
        <p className="text-indigo-400 font-semibold tracking-wide mb-4">
          Halo, selamat datang di ruang kerja saya.
        </p>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Membangun Ekosistem Digital. <br />
          <span className="text-slate-500">Solid, Terukur, & Teruji.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Saya adalah seorang Full-Stack Developer yang berfokus membangun arsitektur sistem yang andal. Berpengalaman merancang web platform modern menggunakan <span className="text-slate-200 font-semibold">ReactJS & NestJS</span>, serta aplikasi mobile terintegrasi dengan <span className="text-slate-200 font-semibold">Flutter & Supabase</span>.
        </p>
        
        <div className="flex gap-4">
          <a href="#projects" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-indigo-500/20">
            Lihat Studi Kasus
          </a>
          <a href="#contact" className="px-6 py-3 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold rounded-lg transition-all flex items-center">
            Hubungi Saya
          </a>
        </div>
      </main>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="max-w-5xl mx-auto px-8 py-24 border-t border-slate-800/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6">
              Lebih dari Sekadar Menulis Kode.
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Saya percaya bahwa arsitektur perangkat lunak yang baik berawal dari pemahaman mendalam terhadap logika dan struktur data. Sebagai seorang mahasiswa IT, saya secara aktif mengeksplorasi pengembangan sistem end-to-end, memastikan setiap aplikasi yang dibangun tidak hanya berfungsi, tapi juga stabil dan aman.
              </p>
              <p>
                Bagi saya, kolaborasi dan standar operasional adalah kunci. Baik itu berbagi peran dalam tim pengembang maupun memastikan kualitas perangkat lunak dengan standar evaluasi pengujian (QA) yang ketat. Setiap baris kode harus memberikan dampak yang terukur.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl relative overflow-hidden shadow-xl">
             <h3 className="text-xl font-bold text-slate-200 mb-6">Area Fokus Teknis:</h3>
             <ul className="space-y-4 text-slate-400 font-medium">
               <li className="flex items-center gap-4">
                 <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span> 
                 Web Platform (ReactJS, Tailwind)
               </li>
               <li className="flex items-center gap-4">
                 <span className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span> 
                 Backend API (NestJS, PostgreSQL)
               </li>
               <li className="flex items-center gap-4">
                 <span className="w-2.5 h-2.5 bg-sky-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span> 
                 Mobile Development (Flutter, Supabase)
               </li>
               <li className="flex items-center gap-4">
                 <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span> 
                 Software QA & Testing Standards
               </li>
             </ul>
          </div>
        </div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section id="projects" className="max-w-5xl mx-auto px-8 py-24 border-t border-slate-800/50">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            Studi Kasus & Proyek
          </h2>
          <p className="text-slate-400 max-w-2xl leading-relaxed">
            Deretan solusi digital yang saya rancang. Tidak sekadar menulis kode, tetapi membangun arsitektur, merencanakan database, hingga memastikan kualitas aplikasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Kartu Proyek 1: EventRent Platform */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-slate-200 group-hover:text-indigo-400 transition-colors">
                  EventRent Platform
                </h3>
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-lg text-xs font-bold tracking-wide">
                  WEB APP
                </span>
              </div>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Platform komprehensif untuk mendigitalkan seluruh workflow operasional event organizer. Dirancang dengan pendekatan modular dengan pemisahan service (agent-facing & user-facing) guna memastikan skalabilitas jangka panjang.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1.5 bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-md font-medium">ReactJS</span>
                <span className="px-3 py-1.5 bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-md font-medium">NestJS</span>
                <span className="px-3 py-1.5 bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-md font-medium">PostgreSQL</span>
              </div>
              <a href="#" className="text-sm font-semibold text-slate-300 hover:text-indigo-400 flex items-center gap-2 transition-colors">
                Lihat Repository ↗
              </a>
            </div>
          </div>

          {/* Kartu Proyek 2: Mobile Integration App */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-slate-200 group-hover:text-indigo-400 transition-colors">
                  Mobile Integration App
                </h3>
                <span className="px-3 py-1 bg-sky-500/10 text-sky-400 rounded-lg text-xs font-bold tracking-wide">
                  MOBILE APP
                </span>
              </div>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Pengembangan aplikasi mobile lintas platform dengan integrasi Backend-as-a-Service (BaaS). Dioptimalkan dengan implementasi arsitektur kode yang modular menggunakan bahasa Dart untuk memastikan sinkronisasi data real-time yang aman.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1.5 bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-md font-medium">Flutter</span>
                <span className="px-3 py-1.5 bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-md font-medium">Dart</span>
                <span className="px-3 py-1.5 bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-md font-medium">Supabase</span>
              </div>
              <a href="#" className="text-sm font-semibold text-slate-300 hover:text-sky-400 flex items-center gap-2 transition-colors">
                Lihat Repository ↗
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CONTACT & FOOTER SECTION */}
      <footer id="contact" className="border-t border-slate-800/50 bg-slate-950 pt-20 pb-10">
        <div className="max-w-5xl mx-auto px-8 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6">
            Mari Berkolaborasi!
          </h2>
          <p className="text-slate-400 max-w-xl mb-10 leading-relaxed">
            Sedang mencari developer untuk mendigitalkan ide Anda, atau sekadar ingin berdiskusi soal arsitektur sistem dan teknologi? Saya selalu terbuka untuk peluang baru.
          </p>
          <a href="mailto:email-lu-disini@gmail.com" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-all shadow-lg shadow-indigo-500/20 mb-20">
            Kirimkan Email
          </a>
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800 text-sm text-slate-500">
            <p>© 2026 Hizkia Filbert Chrismaadi. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-300 transition-colors">GitHub</a>
              <a href="#" className="hover:text-slate-300 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}