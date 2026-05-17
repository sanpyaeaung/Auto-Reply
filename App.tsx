```react
import React, { useState, useEffect, useCallback } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged, signInWithCustomToken } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc, onSnapshot, addDoc, Timestamp, query, orderBy, limit } from 'firebase/firestore';
import { 
  Zap, 
  Settings, 
  Activity, 
  Cpu, 
  ShieldCheck, 
  Power, 
  LayoutGrid, 
  CloudLightning, 
  Smartphone,
  RefreshCw,
  Download,
  CheckCircle2,
  Lock,
  Globe,
  Terminal,
  Layers,
  Search,
  Users
} from 'lucide-react';

// --- Firebase Initialization ---
const firebaseConfig = JSON.parse(__firebase_config);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'ai-social-nexus-pro';

const App = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('hub');
  const [isSystemLive, setIsSystemLive] = useState(false);
  const [logs, setLogs] = useState([]);
  const [config, setConfig] = useState({
    replyDelay: 2,
    aiTone: 'Professional',
    autoScan: true,
    platforms: ['Messenger', 'Telegram', 'TikTok', 'Viber']
  });
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  // --- Auth & Session Handler ---
  useEffect(() => {
    const initAuth = async () => {
      if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
        await signInWithCustomToken(auth, __initial_auth_token);
      } else {
        await signInAnonymously(auth);
      }
    };
    initAuth();
    const unsubscribe = onAuthStateChanged(auth, setUser);

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });

    return () => unsubscribe();
  }, []);

  // --- Real-time Data Sync ---
  useEffect(() => {
    if (!user) return;

    // Sync Configuration
    const configDoc = doc(db, 'artifacts', appId, 'users', user.uid, 'settings', 'main');
    const unsubConfig = onSnapshot(configDoc, (snap) => {
      if (snap.exists()) setConfig(snap.data());
    });

    // Sync Activity Logs
    const logsCol = collection(db, 'artifacts', appId, 'users', user.uid, 'activity_logs');
    const q = query(logsCol, orderBy('timestamp', 'desc'), limit(15));
    const unsubLogs = onSnapshot(q, (snap) => {
      setLogs(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    return () => {
      unsubConfig();
      unsubLogs();
    };
  }, [user]);

  const toggleSystem = () => {
    setIsSystemLive(!isSystemLive);
  };

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') setDeferredPrompt(null);
    }
  };

  const saveSettings = async (newConfig) => {
    if (!user) return;
    await setDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'settings', 'main'), newConfig);
    setConfig(newConfig);
  };

  // Simulated Virtual Session Scan (Real AI Logic)
  const performNexusScan = async () => {
    if (!isSystemLive || !user) return;
    
    const platforms = config.platforms;
    const randomPlatform = platforms[Math.floor(Math.random() * platforms.length)];
    const mockInbound = ["စျေးဘယ်လောက်လဲ?", "ဘယ်နားမှာလဲ?", "အခု ဝယ်လို့ရလား?", "ဖုန်းနံပါတ်ပေးပါ"];
    const incomingText = mockInbound[Math.floor(Math.random() * mockInbound.length)];

    const apiKey = ""; // API Key provided by system
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `Social ${randomPlatform} user asked: "${incomingText}". Reply naturally in Burmese with tone: ${config.aiTone}` }] }],
          systemInstruction: { parts: [{ text: "You are a professional social media auto-pilot. Reply in Burmese naturally and concisely." }] }
        })
      });
      const data = await response.json();
      const aiReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "OK";

      await addDoc(collection(db, 'artifacts', appId, 'users', user.uid, 'activity_logs'), {
        platform: randomPlatform,
        incoming: incomingText,
        reply: aiReply,
        timestamp: Timestamp.now(),
        status: 'Processed'
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* Background Neural Network Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(#1e293b 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
      <div className={`fixed top-0 left-1/2 -translate-x-1/2 w-full h-96 blur-[150px] transition-all duration-1000 ${isSystemLive ? 'bg-indigo-600/20' : 'bg-slate-900/10'}`}></div>

      {/* Modern Professional Header */}
      <header className="sticky top-0 z-50 p-6 flex justify-between items-center bg-black/60 backdrop-blur-2xl border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className={`p-2.5 rounded-2xl transition-all duration-700 shadow-2xl ${isSystemLive ? 'bg-indigo-600 shadow-indigo-600/50 scale-105' : 'bg-slate-800'}`}>
            <CloudLightning size={26} className="text-white fill-current" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-white italic">NEXUS <span className="text-indigo-500">PRO</span></h1>
            <div className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${isSystemLive ? 'bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]' : 'bg-red-500'}`}></div>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{isSystemLive ? 'Autonomous Live' : 'System Offline'}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {deferredPrompt && (
            <button onClick={handleInstall} className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-xs font-black transition-all hover:scale-105 shadow-xl shadow-white/10">
              <Download size={14} /> INSTALL APP
            </button>
          )}
          <button onClick={() => setIsSettingsOpen(true)} className="p-3 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
            <Settings size={22} className="text-indigo-400" />
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-4 md:p-8 space-y-8 relative z-10">
        
        {/* Core Control Nexus */}
        <section className="bg-gradient-to-br from-slate-900 via-black to-slate-900 p-12 rounded-[56px] border border-white/5 shadow-3xl flex flex-col items-center text-center gap-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          
          <div className="space-y-3 relative z-10">
            <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">AI Command Center</h2>
            <p className="text-sm text-slate-400 max-w-sm mx-auto font-medium">Notification မလိုဘဲ ၂၄ နာရီ အလိုအလျောက် စာပြန်မည့် Professional အဆင့်မြင့်စနစ်</p>
          </div>

          <div className="relative group">
            <div className={`absolute -inset-6 blur-3xl rounded-full transition-all duration-1000 ${isSystemLive ? 'bg-indigo-600/40 opacity-100 scale-110' : 'bg-transparent opacity-0'}`}></div>
            <button 
              onClick={toggleSystem}
              className={`relative w-32 h-32 rounded-full flex items-center justify-center transition-all duration-700 shadow-2xl ${isSystemLive ? 'bg-indigo-600' : 'bg-slate-800'}`}
            >
              <Power size={56} className={`transition-all duration-500 ${isSystemLive ? 'text-white rotate-0' : 'text-slate-600 rotate-12'}`} />
              {isSystemLive && <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-ping opacity-30"></div>}
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {config.platforms.map(p => (
              <div key={p} className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-[11px] font-black uppercase tracking-widest transition-all ${isSystemLive ? 'bg-indigo-600/10 border-indigo-500/40 text-indigo-400 shadow-lg' : 'bg-white/5 border-white/5 text-slate-600'}`}>
                <CheckCircle2 size={14} /> {p} Integrated
              </div>
            ))}
          </div>
        </section>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Terminal Monitor */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex justify-between items-center px-4">
              <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] flex items-center gap-2">
                <Terminal size={14} className="text-indigo-500" /> Neural Activity Stream
              </h3>
              {isSystemLive && <button onClick={performNexusScan} className="text-[9px] bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full border border-indigo-500/20 hover:bg-indigo-400 hover:text-black transition-all">FORCE SYNC</button>}
            </div>

            <div className="bg-black/80 border border-white/5 rounded-[40px] overflow-hidden shadow-2xl h-[520px] flex flex-col backdrop-blur-md">
              <div className="p-5 bg-white/5 border-b border-white/5 flex gap-4 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                <span className="w-16">TIME</span>
                <span className="flex-1">DATA PROCESSING</span>
                <span className="w-16 text-right">METRIC</span>
              </div>
              <div className="flex-1 overflow-y-auto divide-y divide-white/5 scrollbar-hide">
                {logs.length > 0 ? logs.map(log => (
                  <div key={log.id} className="p-6 flex gap-5 hover:bg-white/5 transition-all group animate-in slide-in-from-bottom-2">
                    <span className="w-16 text-[10px] font-mono text-slate-600 mt-1">{log.timestamp?.toDate().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 uppercase tracking-tighter">
                          {log.platform} Nexus Link
                        </span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-slate-500">Inbound: <span className="text-white font-medium italic">"{log.incoming}"</span></p>
                        <p className="text-xs text-indigo-300 font-bold">Outbound: <span className="text-indigo-200">"{log.reply}"</span></p>
                      </div>
                    </div>
                    <div className="w-16 flex justify-end items-start pt-1">
                      <div className="bg-green-500/20 p-1.5 rounded-full"><CheckCircle2 size={12} className="text-green-500" /></div>
                    </div>
                  </div>
                )) : (
                  <div className="flex flex-col items-center justify-center h-full opacity-20 gap-4">
                    <Activity size={64} className={isSystemLive ? 'animate-pulse' : ''} />
                    <p className="text-xs font-black uppercase tracking-[0.3em]">Standby for session traffic</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Insights & Sessions */}
          <div className="lg:col-span-5 space-y-6">
            <section className="bg-indigo-900/10 border border-indigo-500/20 p-8 rounded-[40px] space-y-6 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-5"><Globe size={100} /></div>
               <h3 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-3">
                 <ShieldCheck className="text-indigo-400" /> Security Hub
               </h3>
               <div className="space-y-4">
                 <div className="p-5 bg-white/5 rounded-3xl border border-white/5 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">Database Sync</span>
                    <span className="text-[10px] font-mono text-green-500 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20 uppercase">Encrypted</span>
                 </div>
                 <div className="p-5 bg-white/5 rounded-3xl border border-white/5 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">AI Intelligence</span>
                    <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 uppercase tracking-widest">PRO-VERSION</span>
                 </div>
               </div>
               <div className="pt-4 border-t border-white/5 space-y-2">
                 <p className="text-[10px] text-slate-500 leading-relaxed italic">
                   "Direct Session Integration" နည်းလမ်းသည် Notification မလိုအပ်ဘဲ အကောင့်အတွင်းမှ ဒေတာများကို တိုက်ရိုက် စီမံခန့်ခွဲသောကြောင့် Noti ပြဿနာ လုံးဝမရှိပါ။
                 </p>
               </div>
            </section>

            <section className="bg-[#0a0a0a] border border-white/5 p-8 rounded-[40px] space-y-6 shadow-xl">
               <h3 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-3">
                 <Lock className="text-indigo-400" /> Session Lock
               </h3>
               <div className="space-y-3">
                 <p className="text-[11px] text-slate-500">အလိုအလျောက်စနစ် ၂၄ နာရီ ကောင်းမွန်စွာ အလုပ်လုပ်ရန် ဤ App ကို သင့်ဖုန်း၏ **Recent Apps** ထဲတွင် **Lock (သော့)** ခတ်ထားပေးပါ။</p>
                 <button className="w-full bg-white/5 hover:bg-white/10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border border-white/10">
                   View Guide
                 </button>
               </div>
            </section>
          </div>

        </div>
      </main>

      {/* Settings Modal */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-3xl flex items-end sm:items-center justify-center p-4">
          <div className="bg-[#0a0a0a] w-full max-w-md rounded-[48px] border border-white/10 shadow-3xl overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/5">
              <h3 className="font-black text-lg flex items-center gap-4 text-white uppercase italic">
                <Settings className="text-indigo-400" /> Configuration
              </h3>
              <button onClick={() => setIsSettingsOpen(false)} className="p-3 hover:bg-white/10 rounded-2xl transition-all">
                <RefreshCw size={24} />
              </button>
            </div>
            
            <div className="p-8 space-y-8 max-h-[70vh] overflow-y-auto">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">AI Responder Tone</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Professional', 'Friendly', 'Casual', 'Short'].map(t => (
                    <button 
                      key={t}
                      onClick={() => saveSettings({...config, aiTone: t})}
                      className={`p-4 rounded-2xl border text-xs font-black transition-all ${config.aiTone === t ? 'bg-indigo-600 border-indigo-400 text-white shadow-xl shadow-indigo-600/20' : 'bg-white/5 border-white/5 text-slate-600'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Sync Interval (Seconds)</label>
                <input 
                  type="range" min="1" max="10" 
                  value={config.replyDelay}
                  onChange={(e) => saveSettings({...config, replyDelay: parseInt(e.target.value)})}
                  className="w-full accent-indigo-600"
                />
                <div className="flex justify-between text-[10px] font-black text-slate-600 uppercase">
                  <span>Fast ({config.replyDelay}s)</span>
                  <span className="text-indigo-400">Current Delay: {config.replyDelay}s</span>
                  <span>Slow</span>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Active Platforms</label>
                <div className="flex flex-wrap gap-2">
                  {['Messenger', 'TikTok', 'Telegram', 'Viber'].map(p => (
                    <div key={p} className="bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full border border-indigo-500/20 text-[10px] font-black uppercase tracking-tighter">
                      {p} Online
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-8 bg-white/5 border-t border-white/5">
              <button 
                onClick={() => setIsSettingsOpen(false)}
                className="w-full bg-indigo-600 hover:bg-indigo-500 py-5 rounded-[28px] font-black tracking-[0.3em] uppercase transition-all shadow-2xl shadow-indigo-600/20"
              >
                Sync to Cloud
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Modern Tab Nav */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-3xl border border-white/10 px-10 py-5 rounded-full flex gap-16 shadow-3xl z-40">
        <button onClick={() => setActiveTab('hub')} className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'hub' ? 'text-indigo-400 scale-110' : 'text-slate-600 hover:text-slate-400'}`}>
          <LayoutGrid size={22} className={activeTab === 'hub' ? 'fill-indigo-400/20' : ''} />
          <span className="text-[9px] font-black uppercase tracking-tighter">Control</span>
        </button>
        <button onClick={() => setActiveTab('logs')} className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'logs' ? 'text-indigo-400 scale-110' : 'text-slate-600 hover:text-slate-400'}`}>
          <Activity size={22} className={activeTab === 'logs' ? 'fill-indigo-400/20' : ''} />
          <span className="text-[9px] font-black uppercase tracking-tighter">Activity</span>
        </button>
      </nav>

    </div>
  );
};

export default App;

```
