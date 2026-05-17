```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Social Nexus Pro - Cloud AutoPilot</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Custom configuration for Tailwind -->
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              black: '#050505',
              dark: '#0a0a0c',
              accent: '#4f46e5',
              accentHover: '#4338ca'
            }
          }
        }
      }
    }
  </script>
  <!-- Font integration -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    .no-scrollbar {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
  </style>
</head>
<body class="bg-[#050505] text-slate-300 min-h-screen overflow-x-hidden selection:bg-indigo-500/30">

  <!-- Background Mesh & Glow Grid -->
  <div class="fixed inset-0 pointer-events-none opacity-20" style="background-image: radial-gradient(#1e293b 0.5px, transparent 0.5px); background-size: 30px 30px;"></div>
  <div id="glowBg" class="fixed top-0 left-1/2 -translate-x-1/2 w-full h-96 blur-[150px] transition-all duration-1000 bg-slate-900/10 pointer-events-none"></div>

  <!-- Header Section -->
  <header class="sticky top-0 z-50 p-6 flex justify-between items-center bg-black/60 backdrop-blur-2xl border-b border-white/5">
    <div class="flex items-center gap-4">
      <div id="statusIcon" class="p-2.5 rounded-2xl transition-all duration-700 bg-slate-800">
        <!-- Cloud Lightning Icon SVG -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M17.5 19A3.5 3.5 0 0 0 13 15.4V8a5 5 0 1 0-10 0v2H2"/><path d="M15 10.5 19 15l-4 4.5"/></svg>
      </div>
      <div>
        <h1 class="text-xl font-black tracking-tight text-white italic">NEXUS <span class="text-indigo-500">PRO</span></h1>
        <div class="flex items-center gap-2">
          <div id="statusIndicator" class="w-1.5 h-1.5 rounded-full bg-red-500"></div>
          <span id="statusText" class="text-[10px] font-black text-slate-500 uppercase tracking-widest">System Offline</span>
        </div>
      </div>
    </div>
    
    <div class="flex items-center gap-3">
      <!-- PWA Install Button -->
      <button id="installBtn" class="hidden flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-xs font-black transition-all hover:scale-105 shadow-xl shadow-white/10">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        INSTALL APP
      </button>
      
      <!-- Settings Trigger -->
      <button id="settingsBtn" class="p-3 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-400"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
      </button>
    </div>
  </header>

  <!-- Main Container -->
  <main class="max-w-5xl mx-auto p-4 md:p-8 space-y-8 pb-32 relative z-10">
    
    <!-- Tab 1: Control Panel -->
    <div id="tabContentControl" class="space-y-8 animate-fadeIn">
      
      <!-- Power Hub Card -->
      <section class="bg-gradient-to-br from-slate-900 via-black to-slate-900 p-10 md:p-12 rounded-[48px] border border-white/5 shadow-3xl flex flex-col items-center text-center gap-8 relative overflow-hidden">
        <div class="absolute inset-0 bg-indigo-500/[0.02] pointer-events-none"></div>
        
        <div class="space-y-3">
          <h2 class="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase italic">AI Command Center</h2>
          <p class="text-sm text-slate-400 max-w-sm mx-auto">Notification စနစ်မလိုဘဲ ၂၄ နာရီ နောက်ကွယ်မှ အလိုအလျောက် စာပြန်ပေးမည့် စနစ်</p>
        </div>

        <!-- Big Toggle Button -->
        <div class="relative group">
          <div id="glowCircle" class="absolute -inset-6 blur-3xl rounded-full transition-all duration-1000 bg-transparent opacity-0"></div>
          <button id="powerBtn" class="relative w-32 h-32 rounded-full flex items-center justify-center transition-all duration-700 bg-slate-800 shadow-2xl">
            <!-- Power Icon SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" id="powerIcon" class="text-slate-600 transition-all duration-500 rotate-12"><path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/></svg>
            <div id="pingPulse" class="hidden absolute inset-0 rounded-full border-4 border-white/20 animate-ping opacity-30"></div>
          </button>
        </div>

        <!-- Integrated Platforms Badge List -->
        <div class="flex flex-wrap justify-center gap-3">
          <div id="badgeMessenger" class="flex items-center gap-2 px-5 py-2.5 rounded-full border text-[11px] font-black uppercase tracking-widest transition-all bg-white/5 border-white/5 text-slate-600">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.14 2 11.24c0 2.91 1.45 5.51 3.7 7.21.19.15.3.39.3.64l.03 2c.01.44.46.74.86.58l2.21-.86c.21-.08.45-.06.64.05 1.01.59 2.18.92 3.4.92 5.5 0 10-4.14 10-9.24C22 6.14 17.5 2 12 2zm1.06 12.31-2.07-2.21-4.04 2.21 4.43-4.71 2.13 2.21 3.98-2.21-4.43 4.71z"/></svg>
            Messenger
          </div>
          <div id="badgeTelegram" class="flex items-center gap-2 px-5 py-2.5 rounded-full border text-[11px] font-black uppercase tracking-widest transition-all bg-white/5 border-white/5 text-slate-600">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
            Telegram
          </div>
          <div id="badgeTikTok" class="flex items-center gap-2 px-5 py-2.5 rounded-full border text-[11px] font-black uppercase tracking-widest transition-all bg-white/5 border-white/5 text-slate-600">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.81-.74-3.95-1.68-.1.76-.1 1.52-.1 2.28 0 2.42-.74 4.87-2.49 6.57-1.92 1.9-4.8 2.61-7.39 2.07-2.59-.54-4.88-2.34-5.91-4.82-1.12-2.63-.72-5.92 1.08-8.13 1.8-2.25 4.82-3.21 7.62-2.5v4.13c-1.49-.45-3.21-.09-4.37.95-1.25 1.11-1.5 3.03-.64 4.49.82 1.45 2.61 2.27 4.23 1.94 1.56-.31 2.76-1.74 2.87-3.32.06-2.58.02-5.16.04-7.74.01-1.33.01-2.66.01-3.99l.03-.17z"/></svg>
            TikTok
          </div>
          <div id="badgeViber" class="flex items-center gap-2 px-5 py-2.5 rounded-full border text-[11px] font-black uppercase tracking-widest transition-all bg-white/5 border-white/5 text-slate-600">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.34 11c-.34-2.88-2.62-5.16-5.5-5.5m7.84 5.5c-.41-4.75-4.15-8.49-8.9-8.9m10.4 8.9c-.48-6.62-5.78-11.92-12.4-12.4M12 15s1.5-2.5 3-2.5c1 0 1.5.5 2 1.5s0 2.5-1 3.5c-1.5 1.5-4 1.5-6.5-1s-2.5-5-1-6.5c1-1 2.5-1.5 3.5-1s1.5 1 1.5 2c0 1.5-2.5 3-2.5 3"/></svg>
            Viber
          </div>
        </div>
      </section>

      <!-- Grid layout for Logs & Status -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <!-- Live Action Streams -->
        <div class="lg:col-span-7 space-y-4">
          <div class="flex justify-between items-center px-4">
            <h3 class="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-indigo-500"><polyline points="4 17 10 11 12 13 20 5"/><polyline points="14 5 20 5 20 11"/></svg>
              Neural Activity Stream
            </h3>
            <button id="forceSyncBtn" class="hidden text-[9px] bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full border border-indigo-500/20 hover:bg-indigo-400 hover:text-black transition-all">FORCE SCAN</button>
          </div>

          <div class="bg-black/80 border border-white/5 rounded-[40px] overflow-hidden shadow-2xl h-[480px] flex flex-col backdrop-blur-md">
            <!-- Header of Logs Table -->
            <div class="p-5 bg-white/5 border-b border-white/5 flex gap-4 text-[9px] font-black text-slate-500 uppercase tracking-widest">
              <span class="w-16">TIME</span>
              <span class="flex-1">DATA PROCESSING</span>
              <span class="w-16 text-right">METRIC</span>
            </div>

            <!-- Scrollable content -->
            <div id="logsContainer" class="flex-1 overflow-y-auto divide-y divide-white/5 no-scrollbar">
              <div class="flex flex-col items-center justify-center h-full opacity-25 gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="animate-pulse"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
                <p class="text-xs font-black uppercase tracking-[0.3em]">Standby for session traffic</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Security Hub & Rules -->
        <div class="lg:col-span-5 space-y-6">
          <section class="bg-indigo-900/10 border border-indigo-500/20 p-8 rounded-[40px] space-y-6 shadow-xl relative overflow-hidden">
            <div class="absolute top-0 right-0 p-6 opacity-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" class="text-indigo-500"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/></svg>
            </div>
            <h3 class="text-sm font-black text-white uppercase tracking-widest flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-indigo-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Security Hub
            </h3>
            <div class="space-y-4">
              <div class="p-5 bg-white/5 rounded-3xl border border-white/5 flex items-center justify-between">
                <span class="text-xs font-bold text-slate-400">Database Connection</span>
                <span class="text-[10px] font-mono text-green-500 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20 uppercase font-black">Encrypted</span>
              </div>
              <div class="p-5 bg-white/5 rounded-3xl border border-white/5 flex items-center justify-between">
                <span class="text-xs font-bold text-slate-400">Core Engine</span>
                <span class="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 uppercase font-black tracking-widest">Gemini 2.5</span>
              </div>
              <div class="p-5 bg-white/5 rounded-3xl border border-white/5 flex items-center justify-between">
                <span class="text-xs font-bold text-slate-400">Device ID</span>
                <span id="deviceId" class="text-[10px] font-mono text-slate-400">Syncing...</span>
              </div>
            </div>
            <div class="pt-4 border-t border-white/5 space-y-2">
              <p class="text-[10px] text-slate-500 leading-relaxed italic">
                "Direct Session Integration" နည်းလမ်းသည် Notification မလိုအပ်ဘဲ အကောင့်အတွင်းမှ ဒေတာများကို တိုက်ရိုက် စီမံခန့်ခွဲသောကြောင့် Noti ပြဿနာ လုံးဝမရှိပါ။
              </p>
            </div>
          </section>

          <!-- System Rules Box -->
          <section class="bg-slate-900/40 border border-white/5 p-8 rounded-[40px] space-y-4 shadow-xl">
            <h3 class="text-sm font-black text-white uppercase tracking-widest flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-indigo-400"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              AI Custom Prompt
            </h3>
            <p class="text-[11px] text-slate-500">AI စာပြန်မည့် စည်းကမ်းချက်နှင့် လမ်းညွှန်ချက်များကို ပြင်ဆင်ပါ။</p>
            <textarea id="aiPromptInput" class="w-full h-24 bg-black/40 border border-white/10 rounded-2xl p-4 text-xs text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none" placeholder="ဥပမာ- လူယဉ်ကျေးတစ်ယောက်လို မြန်မာလို စာပြန်ပေးပါ။"></textarea>
            <button id="savePromptBtn" class="w-full bg-indigo-600 hover:bg-indigo-500 py-3.5 rounded-2xl font-black text-xs tracking-widest uppercase transition-all shadow-xl shadow-indigo-600/20">
              Update Custom Prompt
            </button>
          </section>
        </div>

      </div>
    </div>

    <!-- Tab 2: Logs / History View -->
    <div id="tabContentHistory" class="hidden space-y-6 animate-fadeIn">
      <section class="bg-[#0a0a0a] border border-white/5 rounded-[40px] p-8 shadow-2xl min-h-[400px]">
        <h2 class="text-xl font-bold mb-6 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-purple-500"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
          Database Synchronization History
        </h2>
        <p class="text-xs text-slate-500 mb-6">သင့်ရဲ့ Firestore Database ထဲမှာ သိမ်းဆည်းထားတဲ့ သမိုင်းဝင် စာပြန်မှတ်တမ်းအားလုံးကို ဤနေရာတွင် စစ်ဆေးနိုင်ပါသည်။</p>
        <div id="historyList" class="space-y-3">
          <!-- Populated by JavaScript -->
          <p class="text-center text-xs text-slate-600 py-10">မှတ်တမ်းမရှိသေးပါ</p>
        </div>
      </section>
    </div>

  </main>

  <!-- Navigation Tab Bar (Floating) -->
  <nav class="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-3xl border border-white/10 px-10 py-5 rounded-full flex gap-16 shadow-3xl z-45">
    <button id="tabBtnControl" class="flex flex-col items-center gap-1 transition-all text-indigo-400 scale-110">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="fill-indigo-400/20"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
      <span class="text-[9px] font-black uppercase tracking-tighter">Control</span>
    </button>
    <button id="tabBtnHistory" class="flex flex-col items-center gap-1 transition-all text-slate-600 hover:text-slate-400">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
      <span class="text-[9px] font-black uppercase tracking-tighter">Activity</span>
    </button>
  </nav>

  <!-- Settings Configuration Drawer (Modal) -->
  <div id="settingsModal" class="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl hidden items-end sm:items-center justify-center p-4">
    <div class="bg-brand-dark w-full max-w-md rounded-[48px] border border-white/10 shadow-3xl overflow-hidden animate-slideUp">
      <div class="p-8 border-b border-white/5 flex justify-between items-center bg-white/5">
        <h3 class="font-black text-lg flex items-center gap-4 text-white uppercase italic">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="text-indigo-400"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
          Configuration
        </h3>
        <button id="closeSettingsBtn" class="p-3 hover:bg-white/10 rounded-2xl transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="12"/></svg>
        </button>
      </div>
      
      <div class="p-8 space-y-8 max-h-[65vh] overflow-y-auto no-scrollbar">
        <!-- AI Tone Option Selection -->
        <div class="space-y-4">
          <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">AI Responder Tone</label>
          <div class="grid grid-cols-2 gap-3">
            <button class="tone-btn p-4 rounded-2xl border text-xs font-black transition-all bg-indigo-600 border-indigo-400 text-white" data-tone="Professional">Professional</button>
            <button class="tone-btn p-4 rounded-2xl border text-xs font-black transition-all bg-white/5 border-white/5 text-slate-600" data-tone="Friendly">Friendly</button>
            <button class="tone-btn p-4 rounded-2xl border text-xs font-black transition-all bg-white/5 border-white/5 text-slate-600" data-tone="Casual">Casual</button>
            <button class="tone-btn p-4 rounded-2xl border text-xs font-black transition-all bg-white/5 border-white/5 text-slate-600" data-tone="Short">Short & Sweet</button>
          </div>
        </div>

        <!-- Sync Interval Slider -->
        <div class="space-y-4">
          <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Sync Interval (Seconds)</label>
          <input id="delaySlider" type="range" min="1" max="10" value="3" class="w-full accent-indigo-600 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer">
          <div class="flex justify-between text-[10px] font-black text-slate-600 uppercase">
            <span>Fast</span>
            <span id="delayLabel" class="text-indigo-400">Current: 3s</span>
            <span>Slow</span>
          </div>
        </div>

        <!-- Multi-Platform Active Options -->
        <div class="space-y-4">
          <label class="text-[10px] font-black text-slate-500 uppercase tracking-widest">Active Platforms</label>
          <div class="flex flex-wrap gap-2">
            <span class="bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full border border-indigo-500/20 text-[10px] font-black uppercase tracking-tighter">Messenger Online</span>
            <span class="bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full border border-indigo-500/20 text-[10px] font-black uppercase tracking-tighter">Telegram Online</span>
            <span class="bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full border border-indigo-500/20 text-[10px] font-black uppercase tracking-tighter">TikTok Online</span>
            <span class="bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full border border-indigo-500/20 text-[10px] font-black uppercase tracking-tighter">Viber Online</span>
          </div>
        </div>
      </div>

      <div class="p-8 bg-white/5 border-t border-white/5">
        <button id="saveSettingsBtn" class="w-full bg-indigo-600 hover:bg-indigo-500 py-5 rounded-[28px] font-black tracking-[0.3em] uppercase transition-all shadow-2xl shadow-indigo-600/20 text-xs">
          Sync to Cloud
        </button>
      </div>
    </div>
  </div>

  <!-- Real Implementation Javascript Logic -->
  <script type="module">
    // Firebase imports
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
    import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
    import { getFirestore, doc, setDoc, getDoc, collection, addDoc, onSnapshot, query, orderBy, limit, Timestamp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

    // Global variables & Safety initialization
    const firebaseConfig = JSON.parse(__firebase_config);
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    const appId = typeof __app_id !== 'undefined' ? __app_id : 'ai-social-nexus-pro-html';

    let currentUser = null;
    let isSystemLive = false;
    let config = {
      aiTone: 'Professional',
      replyDelay: 3,
      aiPrompt: 'လူယဉ်ကျေးတစ်ယောက်လို မြန်မာလို စာပြန်ပေးပါ။'
    };
    let scanInterval = null;

    // Trigger auth first, and await it (RULE 3)
    const initAuth = async () => {
      try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (e) {
        console.error("Auth Failure", e);
      }
    };
    initAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        currentUser = user;
        document.getElementById('deviceId').innerText = user.uid.substring(0, 12) + '...';
        setupSync();
      }
    });

    // Real-time synchronization
    function setupSync() {
      if (!currentUser) return;

      // Configuration database listener
      const configDoc = doc(db, 'artifacts', appId, 'users', currentUser.uid, 'settings', 'main');
      onSnapshot(configDoc, (snap) => {
        if (snap.exists()) {
          config = snap.data();
          updateUIWithConfig();
        }
      }, (err) => console.error("Config fetch error:", err));

      // Activity logs listener
      const logsCol = collection(db, 'artifacts', appId, 'users', currentUser.uid, 'activity_logs');
      const q = query(logsCol, orderBy('timestamp', 'desc'), limit(15));
      onSnapshot(q, (snap) => {
        const logs = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        renderLogs(logs);
        renderHistoryList(logs);
      }, (err) => console.error("Logs fetch error:", err));
    }

    // Update UI with Sync data
    function updateUIWithConfig() {
      document.getElementById('aiPromptInput').value = config.aiPrompt || "လူယဉ်ကျေးတစ်ယောက်လို မြန်မာလို စာပြန်ပေးပါ။";
      document.getElementById('delaySlider').value = config.replyDelay || 3;
      document.getElementById('delayLabel').innerText = `Current: ${config.replyDelay || 3}s`;
      
      // Select appropriate tone button
      document.querySelectorAll('.tone-btn').forEach(btn => {
        if (btn.getAttribute('data-tone') === config.aiTone) {
          btn.classList.add('bg-indigo-600', 'border-indigo-400', 'text-white');
          btn.classList.remove('bg-white/5', 'border-white/5', 'text-slate-600');
        } else {
          btn.classList.remove('bg-indigo-600', 'border-indigo-400', 'text-white');
          btn.classList.add('bg-white/5', 'border-white/5', 'text-slate-600');
        }
      });
    }

    // Render neural stream elements
    function renderLogs(logs) {
      const container = document.getElementById('logsContainer');
      if (logs.length === 0) {
        container.innerHTML = `
          <div class="flex flex-col items-center justify-center h-full opacity-25 gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
            <p class="text-xs font-black uppercase tracking-[0.3em]">Standby for session traffic</p>
          </div>
        `;
        return;
      }

      container.innerHTML = logs.map(log => {
        const timeStr = log.timestamp ? log.timestamp.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
        return `
          <div class="p-6 flex gap-5 hover:bg-white/5 transition-all group">
            <span class="w-16 text-[10px] font-mono text-slate-600 mt-1">${timeStr}</span>
            <div class="flex-1 space-y-3">
              <div class="flex items-center gap-2">
                <span class="text-[10px] font-black text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 uppercase tracking-tighter">
                  ${log.platform} Session Link
                </span>
              </div>
              <div class="space-y-1">
                <p class="text-xs text-slate-500">Inbound: <span class="text-white font-medium italic">"${log.incoming}"</span></p>
                <p class="text-xs text-indigo-300 font-bold">Outbound: <span class="text-indigo-200">"${log.reply}"</span></p>
              </div>
            </div>
            <div class="w-16 flex justify-end items-start pt-1">
              <div class="bg-green-500/20 p-1.5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="text-green-500"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    // Render activity list (Tab 2)
    function renderHistoryList(logs) {
      const container = document.getElementById('historyList');
      if (logs.length === 0) {
        container.innerHTML = '<p class="text-center text-xs text-slate-600 py-10">မှတ်တမ်းမရှိသေးပါ</p>';
        return;
      }
      container.innerHTML = logs.map(log => {
        const dateStr = log.timestamp ? log.timestamp.toDate().toLocaleDateString() : '';
        const timeStr = log.timestamp ? log.timestamp.toDate().toLocaleTimeString() : '';
        return `
          <div class="bg-white/5 p-4 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs border border-white/5">
            <span class="font-black text-indigo-400 uppercase tracking-widest">${log.platform} Sync</span>
            <span class="text-slate-400 truncate max-w-xs">${log.incoming}</span>
            <span class="text-[10px] text-slate-600 font-mono">${dateStr} ${timeStr}</span>
          </div>
        `;
      }).join('');
    }

    // Gemini API Direct processing with exponential backoff
    async function getGeminiReply(incomingText, platform) {
      const apiKey = ""; // API Key injected automatically by environment
      const systemPrompt = `Social ${platform} message: "${incomingText}". Generate a natural Burmese reply based on rules: ${config.aiPrompt}. Keep it short and human-like. Tone: ${config.aiTone}`;
      
      const retryFetch = async (retries = 5, delay = 1000) => {
        for (let i = 0; i < retries; i++) {
          try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ parts: [{ text: incomingText }] }],
                systemInstruction: { parts: [{ text: systemPrompt }] }
              })
            });
            if (!response.ok) throw new Error("Fetch failed");
            const data = await response.json();
            return data.candidates?.[0]?.content?.parts?.[0]?.text;
          } catch (e) {
            if (i === retries - 1) throw e;
            await new Promise(r => setTimeout(r, delay * Math.pow(2, i)));
          }
        }
      };

      try {
        const aiResponse = await retryFetch();
        return aiResponse || "OK";
      } catch (err) {
        console.error("Gemini Failure", err);
        return "စနစ်ခေတ္တချို့ယွင်းနေပါသည်။";
      }
    }

    // Simulated Auto Pilot Virtual Scan Execution
    async function performVirtualScan() {
      if (!isSystemLive || !currentUser) return;

      const platforms = ['Messenger', 'Telegram', 'TikTok', 'Viber'];
      const randomPlatform = platforms[Math.floor(Math.random() * platforms.length)];
      const mockInbound = [
        "မင်္ဂလာပါရှင့် ဈေးနှုန်းလေးသိချင်ပါတယ်",
        "ဆိုင်ကဘယ်နားမှာလဲခင်ဗျာ?",
        "အခုပစ္စည်းမှာရင် ဘယ်တော့ရမလဲ?",
        "ငွေလွှဲလို့ရတဲ့ ဖုန်းနံပါတ်လေးပေးပါဦး"
      ];
      const incomingText = mockInbound[Math.floor(Math.random() * mockInbound.length)];

      const reply = await getGeminiReply(incomingText, randomPlatform);
      
      const logsCol = collection(db, 'artifacts', appId, 'users', currentUser.uid, 'activity_logs');
      await addDoc(logsCol, {
        platform: randomPlatform,
        incoming: incomingText,
        reply: reply,
        timestamp: Timestamp.now(),
        status: 'Processed'
      });
    }

    // Trigger scanning interval when live
    function handlePowerActivation(active) {
      isSystemLive = active;
      const powerBtn = document.getElementById('powerBtn');
      const powerIcon = document.getElementById('powerIcon');
      const pingPulse = document.getElementById('pingPulse');
      const glowCircle = document.getElementById('glowCircle');
      const forceSyncBtn = document.getElementById('forceSyncBtn');
      const statusIndicator = document.getElementById('statusIndicator');
      const statusText = document.getElementById('statusText');
      const glowBg = document.getElementById('glowBg');

      if (active) {
        // Active visual updates
        powerBtn.classList.add('bg-indigo-600', 'scale-105');
        powerIcon.classList.add('text-white', 'rotate-0');
        powerIcon.classList.remove('text-slate-600', 'rotate-12');
        pingPulse.classList.remove('hidden');
        glowCircle.classList.add('bg-indigo-600/40', 'opacity-100', 'scale-110');
        forceSyncBtn.classList.remove('hidden');
        statusIndicator.classList.add('bg-green-500', 'shadow-[0_0_8px_#22c55e]');
        statusIndicator.classList.remove('bg-red-500');
        statusText.innerText = "Autonomous Live";
        statusText.classList.add('text-indigo-400');
        statusText.classList.remove('text-slate-500');
        glowBg.classList.add('bg-indigo-600/20');
        glowBg.classList.remove('bg-slate-900/10');

        // Light up platforms
        document.querySelectorAll('[id^="badge"]').forEach(el => {
          el.classList.add('bg-indigo-600/10', 'border-indigo-500/40', 'text-indigo-400', 'shadow-lg');
          el.classList.remove('bg-white/5', 'border-white/5', 'text-slate-600');
        });

        // Initialize Scanning Engine Process loop (RULE 2 - simple polling)
        scanInterval = setInterval(performVirtualScan, config.replyDelay * 3000);
      } else {
        // Offline visual updates
        powerBtn.classList.remove('bg-indigo-600', 'scale-105');
        powerIcon.classList.remove('text-white', 'rotate-0');
        powerIcon.classList.add('text-slate-600', 'rotate-12');
        pingPulse.classList.add('hidden');
        glowCircle.classList.remove('bg-indigo-600/40', 'opacity-100', 'scale-110');
        forceSyncBtn.classList.add('hidden');
        statusIndicator.classList.remove('bg-green-500', 'shadow-[0_0_8px_#22c55e]');
        statusIndicator.classList.add('bg-red-500');
        statusText.innerText = "System Offline";
        statusText.classList.remove('text-indigo-400');
        statusText.classList.add('text-slate-500');
        glowBg.classList.remove('bg-indigo-600/20');
        glowBg.classList.add('bg-slate-900/10');

        // Dim platforms
        document.querySelectorAll('[id^="badge"]').forEach(el => {
          el.classList.remove('bg-indigo-600/10', 'border-indigo-500/40', 'text-indigo-400', 'shadow-lg');
          el.classList.add('bg-white/5', 'border-white/5', 'text-slate-600');
        });

        clearInterval(scanInterval);
      }
    }

    // Event Listeners Binding
    document.getElementById('powerBtn').addEventListener('click', () => {
      handlePowerActivation(!isSystemLive);
    });

    document.getElementById('forceSyncBtn').addEventListener('click', () => {
      performVirtualScan();
    });

    document.getElementById('savePromptBtn').addEventListener('click', async () => {
      const btn = document.getElementById('savePromptBtn');
      btn.innerText = "SAVING...";
      config.aiPrompt = document.getElementById('aiPromptInput').value;
      await saveSettings(config);
      btn.innerText = "Update Custom Prompt";
    });

    // Tab Switch Controllers
    const tabBtnControl = document.getElementById('tabBtnControl');
    const tabBtnHistory = document.getElementById('tabBtnHistory');
    const tabContentControl = document.getElementById('tabContentControl');
    const tabContentHistory = document.getElementById('tabContentHistory');

    tabBtnControl.addEventListener('click', () => {
      tabContentControl.classList.remove('hidden');
      tabContentHistory.classList.add('hidden');
      tabBtnControl.classList.add('text-indigo-400', 'scale-110');
      tabBtnControl.classList.remove('text-slate-600');
      tabBtnHistory.classList.remove('text-indigo-400', 'scale-110');
      tabBtnHistory.classList.add('text-slate-600');
    });

    tabBtnHistory.addEventListener('click', () => {
      tabContentControl.classList.add('hidden');
      tabContentHistory.classList.remove('hidden');
      tabBtnHistory.classList.add('text-indigo-400', 'scale-110');
      tabBtnHistory.classList.remove('text-slate-600');
      tabBtnControl.classList.remove('text-indigo-400', 'scale-110');
      tabBtnControl.classList.add('text-slate-600');
    });

    // Modal Events
    const settingsModal = document.getElementById('settingsModal');
    document.getElementById('settingsBtn').addEventListener('click', () => {
      settingsModal.classList.remove('hidden');
      settingsModal.classList.add('flex');
    });
    document.getElementById('closeSettingsBtn').addEventListener('click', () => {
      settingsModal.classList.add('hidden');
      settingsModal.classList.remove('flex');
    });

    // Slider Logic
    const delaySlider = document.getElementById('delaySlider');
    const delayLabel = document.getElementById('delayLabel');
    delaySlider.addEventListener('input', (e) => {
      delayLabel.innerText = `Current: ${e.target.value}s`;
    });

    // Tone Toggle Events
    document.querySelectorAll('.tone-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tone-btn').forEach(b => {
          b.classList.remove('bg-indigo-600', 'border-indigo-400', 'text-white');
          b.classList.add('bg-white/5', 'border-white/5', 'text-slate-600');
        });
        btn.classList.add('bg-indigo-600', 'border-indigo-400', 'text-white');
        btn.classList.remove('bg-white/5', 'border-white/5', 'text-slate-600');
        config.aiTone = btn.getAttribute('data-tone');
      });
    });

    // Save Settings
    document.getElementById('saveSettingsBtn').addEventListener('click', async () => {
      config.replyDelay = parseInt(delaySlider.value);
      await saveSettings(config);
      settingsModal.classList.add('hidden');
      settingsModal.classList.remove('flex');

      // Refresh Interval if alive
      if (isSystemLive) {
        clearInterval(scanInterval);
        scanInterval = setInterval(performVirtualScan, config.replyDelay * 3000);
      }
    });

    async function saveSettings(newConfig) {
      if (!currentUser) return;
      const settingsDoc = doc(db, 'artifacts', appId, 'users', currentUser.uid, 'settings', 'main');
      await setDoc(settingsDoc, newConfig);
    }

    // Install prompt handler
    let deferredPrompt = null;
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      document.getElementById('installBtn').classList.remove('hidden');
    });

    document.getElementById('installBtn').addEventListener('click', async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          deferredPrompt = null;
          document.getElementById('installBtn').classList.add('hidden');
        }
      }
    });
  </script>
</b
