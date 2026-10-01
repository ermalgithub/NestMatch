// NestMatch — shared components + mock data

const YELLOW = '#FFCB2F';
const YELLOW_LIGHT = '#FFF9E0';
const DARK = '#1C1917';
const MED = '#78716C';
const LIGHT = '#F5F4F2';
const BORDER = '#E7E5E4';
const WHITE = '#FFFFFF';
const GREEN = '#16A34A';
const RED = '#EF4444';

// ── MOCK DATA ─────────────────────────────────────────────────

const NM_PROPERTIES = [
  { id:1, img:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&auto=format', imgs:['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&auto=format','https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&auto=format','https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&auto=format'], price:485000, location:'Jordaan, Amsterdam', country:'NL', beds:2, baths:1, sqm:78, type:'Apartment', year:1923, desc:'Beautifully renovated canal-facing apartment in the heart of the Jordaan. Original wooden beams, a sleek modern kitchen, and a private courtyard garden. Steps from Amsterdam\'s finest cafés, galleries, and cycling routes.', features:['Canal view','Renovated kitchen','Hardwood floors','Courtyard'], seller:{name:'Jan de Vries', img:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format', verified:true} },
  { id:2, img:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&auto=format', imgs:['https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&auto=format','https://images.unsplash.com/photo-1613977257363-707ba9348227?w=700&auto=format'], price:1250000, location:'Sarrià, Barcelona', country:'ES', beds:4, baths:2, sqm:185, type:'Villa', year:1965, desc:'Stunning Modernist villa with private heated pool and sweeping panoramic views over Barcelona. Completely refurbished with bespoke Italian kitchen and smart home technology throughout.', features:['Private pool','City views','Smart home','Garage'], seller:{name:'Carla Ruiz', img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format', verified:true} },
  { id:3, img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&auto=format', imgs:['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&auto=format'], price:320000, location:'Alfama, Lisbon', country:'PT', beds:2, baths:1, sqm:68, type:'Apartment', year:1940, desc:'Charming renovated apartment in historic Alfama. Breathtaking Tagus river views, traditional azulejo-tiled walls, a sunny south-facing terrace, and two blocks from the tram stop.', features:['River view','Terrace','Original tiles','Near tram'], seller:{name:'Sofia Costa', img:'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&auto=format', verified:true} },
  { id:4, img:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&auto=format', imgs:['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&auto=format'], price:890000, location:'Le Marais, Paris', country:'FR', beds:3, baths:2, sqm:120, type:'Apartment', year:1882, desc:'Haussmann-style apartment on the second floor of a prestigious building in Le Marais. Original parquet floors, 3.4m ceilings, and a chef\'s kitchen opening onto a Juliet balcony.', features:['High ceilings','Parquet floors','Chef kitchen','Concierge'], seller:{name:'Pierre Dupont', img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format', verified:false} },
  { id:5, img:'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=700&auto=format', imgs:['https://images.unsplash.com/photo-1449844908441-8829872d2607?w=700&auto=format'], price:540000, location:'Schwabing, Munich', country:'DE', beds:3, baths:2, sqm:95, type:'House', year:2001, desc:'Modern townhouse with a private south-facing garden in sought-after Schwabing. Open-plan living, underfloor heating, and an EV charging point. Walking distance to the English Garden.', features:['Private garden','EV charger','Smart home','Near English Garden'], seller:{name:'Klaus Weber', img:'', verified:false} },
];

const NM_ROOMMATES = [
  { id:1, type:'person', name:'Sophie L.', age:26, img:'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=700&auto=format', job:'UX Designer', budget:900, city:'Berlin', tags:['Quiet','Non-smoker','Cat lover'], bio:'Freelance designer seeking a calm flat with good natural light. Tidy, respectful, loves a good film night and the occasional gallery visit.' },
  { id:2, type:'room', img:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=700&auto=format', price:850, location:'Berlin-Mitte', available:'1 May 2026', sqm:18, rules:['No smoking','Professionals only','Quiet after 22:00'], owner:{name:'Marcus K.', img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format', verified:true} },
  { id:3, type:'person', name:'Lena M.', age:29, img:'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=700&auto=format', job:'Marketing Manager', budget:1100, city:'Amsterdam', tags:['Social','Pet-friendly','Foodie'], bio:'Friendly Amsterdammer who loves cooking, cycling and hosting dinner parties. Looking for a like-minded flatmate.' },
  { id:4, type:'room', img:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=700&auto=format', price:1050, location:'Amsterdam-West', available:'1 Jun 2026', sqm:22, rules:['LGBTQ+ friendly','Social household','No parties'], owner:{name:'Anouk V.', img:'', verified:true} },
  { id:5, type:'person', name:'Tom R.', age:31, img:'https://images.unsplash.com/photo-1463453091185-61582044d556?w=700&auto=format', job:'Software Engineer', budget:1200, city:'Berlin', tags:['Tidy','Night owl','Gym-goer'], bio:'Dev looking for a central flat with fast internet. Quiet during the week, love getting out at weekends. Very tidy.' },
];

const NM_MESSAGES = [
  { id:1, name:'Jan de Vries', img:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format', preview:'Would you like to schedule a viewing this week?', time:'2m', unread:2, propImg:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=80&auto=format', thread:[{from:'them',text:'Hi! Thanks so much for liking my Amsterdam listing 😊',time:'10:22'},{from:'them',text:'Would you like to schedule a viewing this week?',time:'10:23'}] },
  { id:2, name:'Marcus K.', img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format', preview:'Happy to answer any questions about the room!', time:'1h', unread:1, propImg:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=80&auto=format', thread:[{from:'them',text:'Hi! I saw you liked my room in Berlin-Mitte 🏠',time:'09:14'},{from:'me',text:'Yes! It looks amazing. Is it still available?',time:'09:45'},{from:'them',text:'Yes it is! Happy to answer any questions 😊',time:'10:02'}] },
  { id:3, name:'Carla Ruiz', img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format', preview:'The Barcelona villa is still available!', time:'3h', unread:0, propImg:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80&auto=format', thread:[{from:'them',text:'Hola! Thanks for liking the Barcelona villa 🌞',time:'07:30'},{from:'me',text:'It\'s absolutely gorgeous. Still available?',time:'08:00'},{from:'them',text:'Yes! Would love to show you around this Saturday?',time:'08:15'},{from:'me',text:'Saturday works perfectly for me.',time:'08:30'},{from:'them',text:'Great! I\'ll send you the address tonight.',time:'08:32'}] },
];

// ── ATOMS ────────────────────────────────────────────────────

function NMTag({ label, accent }) {
  return (
    <span style={{ display:'inline-flex', alignItems:'center', padding:'4px 10px', borderRadius:20, fontSize:12, fontWeight:600, background: accent ? YELLOW_LIGHT : LIGHT, color: accent ? '#92600A' : MED, letterSpacing:0.1 }}>
      {label}
    </span>
  );
}

function NMAvatar({ img, name='', size=40, verified }) {
  const initials = name.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase();
  return (
    <div style={{ position:'relative', display:'inline-block', flexShrink:0 }}>
      <div style={{ width:size, height:size, borderRadius:'50%', overflow:'hidden', background:YELLOW, display:'flex', alignItems:'center', justifyContent:'center', fontSize:size*0.35, fontWeight:700, color:'#7A5C00' }}>
        {img ? <img src={img} alt={name} style={{ width:'100%', height:'100%', objectFit:'cover' }} onError={e=>{e.target.style.display='none'}} /> : initials}
      </div>
      {verified && (
        <div style={{ position:'absolute', bottom:-1, right:-1, width:size*0.38, height:size*0.38, borderRadius:'50%', background:GREEN, border:'2px solid white', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <svg viewBox="0 0 10 10" width={size*0.22} height={size*0.22}><path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      )}
    </div>
  );
}

// ── CARD CONTENT ─────────────────────────────────────────────

function PropertyCardContent({ item, onTap }) {
  const fmt = (n) => n >= 1000000 ? `€${(n/1000000).toFixed(2)}M` : `€${(n/1000).toFixed(0)}K`;
  return (
    <div onClick={onTap} style={{ width:'100%', height:'100%', borderRadius:24, overflow:'hidden', background:WHITE, boxShadow:'0 12px 40px rgba(0,0,0,0.18)', position:'relative', cursor:'pointer' }}>
      <img src={item.img} alt="" style={{ width:'100%', height:'62%', objectFit:'cover', display:'block' }} />
      <div style={{ position:'absolute', top:0, left:0, right:0, height:'62%', background:'linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 100%)' }} />
      <div style={{ position:'absolute', top:16, right:16, background:YELLOW, borderRadius:20, padding:'4px 10px', fontSize:12, fontWeight:700, color:'#7A5C00' }}>{item.type}</div>
      <div style={{ padding:'16px 18px 18px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:6 }}>
          <div style={{ fontSize:26, fontWeight:800, color:DARK }}>{fmt(item.price)}</div>
          <NMTag label={item.country} />
        </div>
        <div style={{ fontSize:15, color:MED, marginBottom:12, display:'flex', alignItems:'center', gap:4 }}>
          <svg width="14" height="14" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill={MED}/></svg>
          {item.location}
        </div>
        <div style={{ display:'flex', gap:16 }}>
          {[['🛏', item.beds+' beds'], ['🛁', item.baths+' bath'], ['📐', item.sqm+'m²']].map(([ico,val]) => (
            <div key={val} style={{ display:'flex', alignItems:'center', gap:4, fontSize:13, color:DARK, fontWeight:600 }}>
              <span style={{ fontSize:15 }}>{ico}</span>{val}
            </div>
          ))}
        </div>
        <div style={{ marginTop:14, display:'flex', alignItems:'center', gap:8 }}>
          <NMAvatar img={item.seller.img} name={item.seller.name} size={28} verified={item.seller.verified} />
          <span style={{ fontSize:12, color:MED }}>Listed by <strong style={{ color:DARK }}>{item.seller.name}</strong></span>
          <span style={{ marginLeft:'auto', fontSize:12, color:MED, fontStyle:'italic' }}>Tap for details</span>
        </div>
      </div>
    </div>
  );
}

function RoommateCardContent({ item, onTap }) {
  if (item.type === 'person') {
    return (
      <div onClick={onTap} style={{ width:'100%', height:'100%', borderRadius:24, overflow:'hidden', background:DARK, boxShadow:'0 12px 40px rgba(0,0,0,0.25)', position:'relative', cursor:'pointer' }}>
        <img src={item.img} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', position:'absolute', inset:0 }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(20,15,10,0.95) 30%, rgba(0,0,0,0) 65%)' }} />
        <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'20px 20px 24px' }}>
          <div style={{ display:'flex', alignItems:'baseline', gap:8, marginBottom:4 }}>
            <span style={{ fontSize:24, fontWeight:800, color:WHITE }}>{item.name}</span>
            <span style={{ fontSize:20, fontWeight:600, color:'rgba(255,255,255,0.75)' }}>{item.age}</span>
          </div>
          <div style={{ fontSize:14, color:'rgba(255,255,255,0.7)', marginBottom:10 }}>{item.job} · Budget €{item.budget}/mo · {item.city}</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
            {item.tags.map(t => <span key={t} style={{ padding:'4px 10px', borderRadius:20, background:'rgba(255,255,255,0.18)', fontSize:12, fontWeight:600, color:WHITE, backdropFilter:'blur(4px)' }}>{t}</span>)}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div onClick={onTap} style={{ width:'100%', height:'100%', borderRadius:24, overflow:'hidden', background:WHITE, boxShadow:'0 12px 40px rgba(0,0,0,0.18)', position:'relative', cursor:'pointer' }}>
      <img src={item.img} alt="" style={{ width:'100%', height:'58%', objectFit:'cover', display:'block' }} />
      <div style={{ position:'absolute', top:16, left:16, background:YELLOW, borderRadius:20, padding:'4px 12px', fontSize:12, fontWeight:700, color:'#7A5C00' }}>Room Available</div>
      <div style={{ padding:'16px 18px 18px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:6 }}>
          <div style={{ fontSize:26, fontWeight:800, color:DARK }}>€{item.price}<span style={{ fontSize:14, fontWeight:500, color:MED }}>/mo</span></div>
          <span style={{ fontSize:12, color:GREEN, fontWeight:700, background:'#DCFCE7', padding:'4px 8px', borderRadius:20 }}>From {item.available}</span>
        </div>
        <div style={{ fontSize:14, color:MED, marginBottom:8, display:'flex', alignItems:'center', gap:4 }}>
          <svg width="13" height="13" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill={MED}/></svg>
          {item.location} · {item.sqm}m²
        </div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:5, marginBottom:12 }}>
          {item.rules.map(r => <NMTag key={r} label={r} />)}
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <NMAvatar img={item.owner.img} name={item.owner.name} size={28} verified={item.owner.verified} />
          <span style={{ fontSize:12, color:MED }}>Posted by <strong style={{ color:DARK }}>{item.owner.name}</strong></span>
        </div>
      </div>
    </div>
  );
}

// ── SWIPE CARD ───────────────────────────────────────────────

function SwipeCard({ children, onSwipe, onTap, zIndex=3 }) {
  const [d, setD] = React.useState({ active:false, startX:0, startY:0, x:0 });
  const ref = React.useRef();
  const moved = React.useRef(false);

  const onPD = (e) => { moved.current = false; setD({ active:true, startX:e.clientX, startY:e.clientY, x:0 }); ref.current?.setPointerCapture(e.pointerId); };
  const onPM = (e) => {
    if (!d.active) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 5) moved.current = true;
    setD(s => ({ ...s, x: dx }));
  };
  const onPU = () => {
    if (!d.active) return;
    const dir = d.x > 90 ? 'right' : d.x < -90 ? 'left' : null;
    if (dir) { setD(s => ({ ...s, active:false, x: dir==='right' ? 700 : -700 })); setTimeout(() => onSwipe && onSwipe(dir), 280); }
    else { setD({ active:false, startX:0, startY:0, x:0 }); }
  };
  const onClick = (e) => { if (!moved.current) onTap && onTap(); };

  const rot = d.x * 0.055;
  const likeOp = Math.max(0, Math.min(1, d.x / 60));
  const nopeOp = Math.max(0, Math.min(1, -d.x / 60));

  return (
    <div ref={ref} onPointerDown={onPD} onPointerMove={onPM} onPointerUp={onPU} onClick={onClick}
      style={{ position:'absolute', inset:'0 12px', transform:`translateX(${d.x}px) rotate(${rot}deg)`, transition: d.active ? 'none' : d.x===0 ? 'transform 0.4s cubic-bezier(0.175,0.885,0.32,1.2)' : 'transform 0.28s ease', cursor: d.active ? 'grabbing' : 'grab', userSelect:'none', touchAction:'none', zIndex }}>
      <div style={{ position:'absolute', top:22, left:16, zIndex:20, border:'3px solid '+GREEN, borderRadius:8, padding:'3px 10px', color:GREEN, fontSize:20, fontWeight:900, opacity:likeOp, transform:'rotate(-14deg)', pointerEvents:'none' }}>LIKE</div>
      <div style={{ position:'absolute', top:22, right:16, zIndex:20, border:'3px solid '+RED, borderRadius:8, padding:'3px 10px', color:RED, fontSize:20, fontWeight:900, opacity:nopeOp, transform:'rotate(14deg)', pointerEvents:'none' }}>NOPE</div>
      {children}
    </div>
  );
}

// ── ACTION BAR ───────────────────────────────────────────────

function ActionBar({ onSkip, onLike }) {
  const Btn = ({ onClick, bg, shadow, children, size=58 }) => (
    <button onClick={onClick} style={{ width:size, height:size, borderRadius:'50%', background:bg, border:'none', boxShadow:shadow, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', transition:'transform 0.15s, box-shadow 0.15s' }}
      onMouseEnter={e=>{e.currentTarget.style.transform='scale(1.12)';e.currentTarget.style.boxShadow=shadow.replace('0.18','0.3');}}
      onMouseLeave={e=>{e.currentTarget.style.transform='scale(1)';e.currentTarget.style.boxShadow=shadow;}}>
      {children}
    </button>
  );
  return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:20, padding:'0 0 16px' }}>
      <Btn onClick={onSkip} bg={WHITE} shadow="0 4px 20px rgba(239,68,68,0.22)">
        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke={RED} strokeWidth="2.8" strokeLinecap="round"/></svg>
      </Btn>
      <Btn onClick={onLike} bg={YELLOW} shadow="0 4px 24px rgba(255,203,47,0.5)" size={68}>
        <svg width="28" height="28" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill={WHITE}/></svg>
      </Btn>
      <Btn onClick={()=>{}} bg={WHITE} shadow="0 4px 20px rgba(99,102,241,0.22)">
        <svg width="22" height="22" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" fill="#6366F1"/></svg>
      </Btn>
    </div>
  );
}

// ── BOTTOM NAV ───────────────────────────────────────────────

function BottomNav({ active, onNav }) {
  const tabs = [
    { key:'discover', label:'Discover', path:'M3 12l9-9 9 9v9H15v-5h-6v5H3v-9z' },
    { key:'matches', label:'Matches', path:'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' },
    { key:'chat', label:'Messages', path:'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z' },
    { key:'profile', label:'Profile', isProfile:true },
  ];
  return (
    <div style={{ position:'absolute', bottom:0, left:0, right:0, height:74, background:WHITE, borderTop:`1px solid ${BORDER}`, display:'flex', alignItems:'flex-start', justifyContent:'space-around', paddingTop:8, zIndex:100 }}>
      {tabs.map(t => {
        const a = active === t.key;
        return (
          <button key={t.key} onClick={()=>onNav(t.key)} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:3, background:'none', border:'none', cursor:'pointer', padding:'4px 12px', color: a ? YELLOW : MED, minWidth:60 }}>
            {t.isProfile ? (
              <div style={{ width:26, height:26, borderRadius:'50%', background: a ? YELLOW : LIGHT, border: a ? `2px solid ${YELLOW}` : '2px solid '+BORDER, overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill={a?WHITE:MED}/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={a?WHITE:MED} strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
              </div>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24"><path d={t.path} fill={a?YELLOW:'none'} stroke={a?YELLOW:MED} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"/></svg>
            )}
            <span style={{ fontSize:10, fontWeight: a ? 700 : 500, letterSpacing:0.2 }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ── MATCH MODAL ──────────────────────────────────────────────

function MatchModal({ item, onClose, onMessage }) {
  const name = item.type === 'person' ? item.name : item.seller?.name || item.owner?.name || 'them';
  const img = item.type === 'person' ? item.img : item.seller?.img || item.owner?.img;
  const [particles] = React.useState(() => Array.from({length:45},(_,i) => ({ id:i, x:5+Math.random()*90, delay:Math.random()*0.6, dur:1.6+Math.random()*0.8, color:[YELLOW,'#FF6B6B','#4ECDC4','#A8E6CF','#FF8C94','#C3B1E1'][i%6], size:5+Math.random()*9, shape: i%4===0?'50%':'2px' })));
  return (
    <div style={{ position:'absolute', inset:0, zIndex:300, background:'rgba(15,10,5,0.93)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:28 }}>
      <style>{`@keyframes cfall{0%{transform:translateY(-20px) rotate(0deg);opacity:1}100%{transform:translateY(130vh) rotate(720deg);opacity:0}}`}</style>
      {particles.map(p => <div key={p.id} style={{ position:'absolute', left:`${p.x}%`, top:-16, width:p.size, height:p.size, borderRadius:p.shape, background:p.color, animation:`cfall ${p.dur}s ${p.delay}s ease-in forwards`, pointerEvents:'none' }} />)}
      <div style={{ fontSize:13, fontWeight:800, color:YELLOW, letterSpacing:4, textTransform:'uppercase', marginBottom:10 }}>It's a Match!</div>
      <div style={{ fontSize:26, fontWeight:800, color:WHITE, textAlign:'center', lineHeight:1.3, marginBottom:28 }}>You and {name}<br/>liked each other 🎉</div>
      <div style={{ display:'flex', gap:-10, marginBottom:32, position:'relative' }}>
        <div style={{ width:88, height:88, borderRadius:'50%', border:`4px solid ${YELLOW}`, overflow:'hidden', background:YELLOW_LIGHT, display:'flex', alignItems:'center', justifyContent:'center', fontSize:36 }}>👤</div>
        <div style={{ width:88, height:88, borderRadius:'50%', border:`4px solid ${YELLOW}`, overflow:'hidden', marginLeft:-12, background:YELLOW }}>
          {img ? <img src={img} style={{ width:'100%', height:'100%', objectFit:'cover' }} /> : <div style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:36 }}>🏠</div>}
        </div>
      </div>
      <button onClick={onMessage} style={{ width:'100%', padding:'16px', background:YELLOW, border:'none', borderRadius:14, fontSize:17, fontWeight:700, color:'#7A5C00', cursor:'pointer', marginBottom:10 }}>Send a Message</button>
      <button onClick={onClose} style={{ width:'100%', padding:'13px', background:'transparent', border:'2px solid rgba(255,255,255,0.25)', borderRadius:14, fontSize:15, fontWeight:600, color:'rgba(255,255,255,0.75)', cursor:'pointer' }}>Keep Browsing</button>
    </div>
  );
}

Object.assign(window, { YELLOW, YELLOW_LIGHT, DARK, MED, LIGHT, BORDER, WHITE, GREEN, RED, NM_PROPERTIES, NM_ROOMMATES, NM_MESSAGES, NMTag, NMAvatar, PropertyCardContent, RoommateCardContent, SwipeCard, ActionBar, BottomNav, MatchModal });
