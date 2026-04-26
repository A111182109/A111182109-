import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Map, 
  Anchor, 
  Award, 
  Navigation, 
  Ship, 
  ExternalLink,
  MapPin,
  Clock,
  Info,
  DollarSign,
  Cuboid,
  FileText,
  Play
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'about' | 'travel'>('about');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#c9a063]/30">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 md:px-6 h-16 flex items-end justify-between pb-4 pt-6">
          <div className="flex items-center gap-2 font-light tracking-tighter italic font-serif text-2xl" style={{ fontFamily: 'Georgia, serif' }}>
            <Anchor className="w-6 h-6 text-[#c9a063]" />
            <span>Li You-Jie</span>
          </div>
          <nav className="flex gap-4 sm:gap-6 text-[11px] uppercase tracking-widest text-white/60 mb-1">
            <button
              onClick={() => setActiveTab('about')}
              className={`flex items-center gap-1.5 pb-1 border-b transition-colors ${
                activeTab === 'about'
                  ? 'border-white text-white'
                  : 'border-transparent hover:text-white'
              }`}
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">個人介紹</span>
              <span className="sm:hidden">介紹</span>
            </button>
            <button
              onClick={() => setActiveTab('travel')}
              className={`flex items-center gap-1.5 pb-1 border-b transition-colors ${
                activeTab === 'travel'
                  ? 'border-white text-white'
                  : 'border-transparent hover:text-white'
              }`}
            >
              <Map className="w-4 h-4" />
              <span className="hidden sm:inline">旅遊規劃</span>
              <span className="sm:hidden">旅遊</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <AnimatePresence mode="wait">
          {activeTab === 'about' && <AboutSection key="about" />}
          {activeTab === 'travel' && <TravelSection key="travel" />}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 uppercase tracking-[0.2em] py-8 border-t border-white/10 max-w-5xl mx-auto px-4 md:px-6">
        <p>© {new Date().getFullYear()} 李宥杰. All rights reserved.</p>
        <p className="mt-4 md:mt-0 flex items-center justify-center gap-2">
          <Ship className="w-4 h-4" /> 國立高雄科技大學航運技術系
        </p>
      </footer>
    </div>
  );
}

// ------------------------------
// About Me Section Component
// ------------------------------
function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      {/* Hero / Profile */}
      <section className="flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
        {/* Profile Image & 3D Model Button */}
        <div className="flex-shrink-0 flex flex-col items-center gap-6 w-56 bg-white/5 border border-white/10 rounded-2xl p-6 relative group">
          <div className="aspect-square w-full bg-gradient-to-br from-[#1a1a1a] to-[#050505] rounded-xl flex items-center justify-center border border-white/5 relative overflow-hidden">
            {/* Fallback image utilizing user uploaded file placeholder pattern */}
            <User className="w-24 h-24 text-white/30 absolute" />
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#c9a063]"></div>
                <div className="absolute left-1/2 top-0 w-[1px] h-full bg-[#c9a063]"></div>
            </div>
            <div className="absolute inset-0 mix-blend-multiply rounded-xl z-20" />
            <img 
               src="https://lh3.googleusercontent.com/d/1O9rA3xYF-zxg8j9X8O4N93O1s0cW1_1T=w1000" 
               alt="李宥杰" 
               className="w-full h-full object-cover relative z-10"
               onError={(e) => {
                 (e.target as HTMLImageElement).style.display = 'none';
               }}
            />
          </div>
          
          <a 
            href="https://studio.tripo3d.ai/3d-model/bbf18813-d274-484e-8633-32f06042e19b?invite_code=NPJXC9"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 bg-[#c9a063] text-black text-center text-xs font-bold uppercase tracking-widest rounded hover:bg-[#d9b073] transition-colors mt-2"
          >
            <div className="flex items-center justify-center gap-2">
              <Cuboid className="w-4 h-4" />
              <span>看我的 3D 公仔</span>
            </div>
          </a>
        </div>

        {/* Bio Text */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="mb-8">
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#c9a063] mb-4 justify-center md:justify-start">
              <Navigation className="w-4 h-4" />
              <span>未來航海家</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-light tracking-tighter italic font-serif mb-2 text-white" style={{ fontFamily: 'Georgia, serif' }}>
              我叫李宥杰
            </h1>
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-white/50 mt-4 flex items-center justify-center md:justify-start gap-2">
              <Ship className="w-3 h-3" /> 國立高雄科技大學航運技術系
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-relaxed text-white/80 font-light">
            <p>
              自從進入大學後，我對海上事業產生了濃厚的興趣，對船舶的運作與航行過程充滿了好奇與熱情。大海的廣闊與航海工作的挑戰性，讓我立志未來可以成為一名<strong className="text-[#c9a063] font-normal">專業且值得信任的船長</strong>。
            </p>
            <p className="text-white/50">
              在學期間，我積極修習航海學、海事法規與船舶管理等課程，並<strong className="text-[#c9a063] font-normal border-b border-[#c9a063]/30 px-1">已取得四小證</strong>，為將來從事海上工作奠定了良好基礎。透過課堂學習與模擬實作，我體會到航海工作不僅需要專業技能，更需要冷靜的判斷力、嚴謹的紀律與強烈的責任感。
            </p>
            <p className="text-white/50">
              我認為，一位優秀的航海人員必須在面對各種狀況時保持穩定心態，並與團隊密切合作。未來我希望能進公司實習、工作，親身體驗船上運作及航線管理，學習專業技術與團隊合作的經驗，朝成為優秀船員與船長的目標邁進。
            </p>
          </div>
        </div>
      </section>

      {/* Highlights / Skills Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {[
          { icon: Navigation, title: '航海學', desc: '專業知識基礎' },
          { icon: Award, title: '四小證', desc: '基本安全訓練合格' },
          { icon: Anchor, title: '船舶管理', desc: '團隊營運與管理' },
          { icon: Ship, title: '海事法規', desc: '熟悉國際法規' },
        ].map((item, idx) => (
          <div key={idx} className="relative rounded-2xl overflow-hidden bg-[#151515] border border-white/5 flex flex-col items-center text-center gap-4 p-8 group">
            <div className="p-3 bg-white/5 text-[#c9a063] rounded-full border border-white/10">
              <item.icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-serif italic mb-1 text-white/90" style={{ fontFamily: 'Georgia, serif' }}>{item.title}</h3>
              <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">{item.desc}</p>
            </div>
            <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#c9a063] group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}
      </section>
    </motion.div>
  );
}

// ------------------------------
// Travel Itinerary Section Component
// ------------------------------
function TravelSection() {
  const itineraryData = [
    {
      date: '4/2 (四)',
      events: [
        { time: '10:00 - 15:00', text: '抵達 LAX 機場，專車接送至飯店 Check-in', stay: 'The Beverly Hills Hotel', note: '天氣晴。機場周邊車流正常。' },
        { time: '16:00 - 20:00', text: '聖塔莫尼卡碼頭 (Santa Monica) 散步看夕陽', stay: '(經典粉紅宮殿)', note: '人潮中等。傍晚海風較大。' },
      ],
    },
    {
      date: '4/3 (五)',
      events: [
        { time: '10:00 - 14:00', text: '馬里布 (Malibu) 海岸慢跑與奢華早午餐', stay: '同上', note: '警示：週五下午聯外公路極塞，建議留在西邊。' },
        { time: '18:00 - 21:00', text: '晚餐：Nobu Malibu (全球最美景觀餐廳之一)', stay: '', note: '需提前 3 個月訂位。' },
      ],
    },
    {
      date: '4/4 (六)',
      events: [
        { time: '09:00 - 13:00', text: 'Getty Center (蓋蒂中心)：欣賞世界級藝術與建築', stay: '同上', note: '清明節當日，LA 華人區車流多，此區較安靜。' },
        { time: '16:00 - 20:00', text: '格里斐斯天文台 看 LA 夜景', stay: '', note: '人流極多，建議搭乘 Uber 避免停車位地獄。' },
      ],
    },
    {
      date: '4/5 (日)',
      events: [
        { time: '10:00 - 12:00', text: '自駕前往「美國里維埃拉」聖塔芭芭拉', stay: 'Ritz-Carlton Bacara', note: '走 PCH 1 號公路，風景無敵。' },
        { time: '14:00 - 18:00', text: '飯店 Spa 或 州立街 (State Street) 購物', stay: '(五星海濱度假村)', note: '聖塔芭芭拉氛圍慵懶，人流適中。' },
      ],
    },
    {
      date: '4/6 (一)',
      events: [
        { time: '10:00 - 14:00', text: '前往 Solvang (丹麥村) 感受北歐風情', stay: 'Beverly Hills Waldorf', note: '回程避開 16:00 尖峰。' },
        { time: '18:00 - 21:00', text: '晚餐：Spago Beverly Hills (米其林經典)', stay: '(市區頂級飯店)', note: '天氣穩定。' },
      ],
    },
    {
      date: '4/7 (二)',
      events: [
        { time: '10:00 - 13:00', text: 'Rodeo Drive 最後血拼/精品採購', stay: '準備返家', note: '市區車流量大，預留 3 小時前往機場。' },
        { time: '14:00 - ', text: '前往 LAX 辦理登機，結束旅程', stay: '', note: '' },
      ],
    },
  ];

  const budgetData = [
    { name: '國際機票', cost: '$100,000', desc: '2026 清明旺季之豪經艙/早鳥商務艙' },
    { name: '奢華飯店 (5晚)', cost: '$120,000', desc: '平均一晚 $24,000，體驗頂級住宿服務' },
    { name: '餐飲美食', cost: '$45,000', desc: '含 2 頓米其林/高級餐廳與日常精緻餐點' },
    { name: '交通 (Uber)', cost: '$15,000', desc: '租賃敞篷車或 SUV + 專車接送' },
    { name: '門票與雜支', cost: '$20,000', desc: '蓋蒂中心、購物消費、Spa、旅遊保險' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="space-y-10"
    >
      <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-white/10 pb-6 mb-8 gap-4">
        <h2 className="text-3xl md:text-4xl font-light tracking-tighter italic font-serif text-white" style={{ fontFamily: 'Georgia, serif' }}>洛杉磯 (LA) 奢華六日遊規劃</h2>
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a063] hidden sm:inline-block">2026 春季 · 完美掌握預算</span>
          <a href="https://sites.google.com/nkust.edu.tw/bababoy/%E9%A6%96%E9%A0%81/%E6%97%85%E9%81%8A%E7%B0%A1%E5%A0%B1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-black bg-[#c9a063] px-5 py-2.5 rounded hover:bg-white transition-colors font-bold shadow-[0_0_20px_rgba(201,160,99,0.2)]">
            <FileText className="w-4 h-4" /> 旅遊PPT
          </a>
        </div>
      </div>

      {/* Video Hero Section */}
      <a 
        href="https://sites.google.com/nkust.edu.tw/bababoy/%E9%A6%96%E9%A0%81/%E6%97%85%E9%81%8A%E5%BD%B1%E7%89%87"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full aspect-video md:aspect-[21/9] min-h-[250px] bg-[#151515] rounded-2xl border border-white/10 overflow-hidden mb-12 relative group shadow-2xl"
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-1000 scale-105 group-hover:scale-100"
          poster="https://images.unsplash.com/photo-1540859871754-0eb75d84c68e?q=80&w=2000&auto=format&fit=crop"
        >
          {/* 使用 Mixkit 免費授權素材作為影片佔位示意 */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4" type="video/mp4" />
        </video>
        
        {/* Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:bg-[#c9a063] group-hover:text-black group-hover:border-[#c9a063] transition-all duration-500 scale-90 group-hover:scale-100 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" />
          </div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent">
          <div className="flex justify-between items-end">
            <div>
              <div className="text-[#c9a063] text-[10px] uppercase tracking-[0.3em] mb-2 md:mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a063] animate-pulse"></span>
                Travel Cinematic Reel
              </div>
              <div className="text-white font-serif italic text-2xl md:text-5xl font-light tracking-tighter" style={{ fontFamily: 'Georgia, serif' }}>
                California Experiences
              </div>
            </div>
          </div>
        </div>
      </a>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Itinerary Timeline */}
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-12">
            {itineraryData.map((day, idx) => (
              <div key={idx} className="relative group">
                {/* Connecting Line */}
                {idx !== itineraryData.length - 1 && (
                  <div className="absolute left-[1.45rem] top-12 bottom-[-3rem] w-[1px] bg-white/10" />
                )}
                
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#151515] border border-[#c9a063]/30 text-[#c9a063] flex items-center justify-center font-serif text-lg flex-shrink-0 relative z-10 transition-colors group-hover:border-[#c9a063]">
                    {idx + 1}
                  </div>
                  <div className="flex-1 space-y-4 pt-2">
                    <h3 className="text-2xl font-serif italic text-white/90 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>{day.date}</h3>
                    <div className="space-y-3">
                      {day.events.map((ev, eIdx) => (
                        <div key={eIdx} className="bg-[#151515] p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                          <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-5">
                            <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#c9a063] whitespace-nowrap bg-[#c9a063]/5 px-3 py-1.5 rounded w-fit">
                              <Clock className="w-3.5 h-3.5" /> {ev.time}
                            </span>
                            <div className="flex-1 space-y-3">
                              <p className="font-light text-white/90 text-lg leading-relaxed">{ev.text}</p>
                              
                              {(ev.stay || ev.note) && (
                                <div className="flex flex-col sm:flex-row gap-3 pt-2 text-xs">
                                  {ev.stay && (
                                    <span className="flex items-center gap-1.5 text-white/50 bg-white/5 border border-white/5 px-2.5 py-1.5 rounded">
                                      <MapPin className="w-3.5 h-3.5 text-white/30" /> {ev.stay}
                                    </span>
                                  )}
                                  {ev.note && (
                                    <span className="flex items-center gap-1.5 text-white/60 bg-[#c9a063]/10 border border-[#c9a063]/20 px-2.5 py-1.5 rounded">
                                      <Info className="w-3.5 h-3.5 text-[#c9a063]" /> {ev.note}
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Card */}
        <div className="lg:col-span-1 sticky top-24">
          <div className="bg-[#151515] p-6 md:p-8 rounded-2xl border border-white/5 shadow-2xl">
            <div className="font-serif italic text-xl mb-8 flex items-center gap-2 text-white" style={{ fontFamily: 'Georgia, serif' }}>
              <DollarSign className="w-5 h-5 text-[#c9a063]" />
              估算費用 (TWD)
            </div>
            
            <ul className="space-y-5 mb-8">
              {budgetData.map((item, idx) => (
                <li key={idx} className="flex justify-between items-start pt-5 border-t border-white/5 first:pt-0 first:border-0 text-sm">
                  <div className="space-y-1.5 max-w-[65%]">
                    <div className="font-light text-white/80">{item.name}</div>
                    <div className="text-[9px] uppercase tracking-wider text-white/40 leading-relaxed">{item.desc}</div>
                  </div>
                  <div className="font-serif tracking-widest text-[#c9a063] ml-4 text-sm mt-0.5">
                    {item.cost}
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-white/10 flex flex-col items-center justify-center text-center">
              <div className="text-[10px] uppercase tracking-widest text-white/40 mb-3">總計金額</div>
              <div className="text-4xl font-light text-white font-serif tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                $300,000
              </div>
              <div className="mt-6 flex gap-2">
                 <div className="w-1 h-1 rounded-full bg-white/20"></div>
                 <div className="w-1 h-1 rounded-full bg-[#c9a063]"></div>
                 <div className="w-1 h-1 rounded-full bg-white/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
// END
