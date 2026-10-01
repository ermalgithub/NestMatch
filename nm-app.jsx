// NestMatch — screens + app router

// ── SPLASH ───────────────────────────────────────────────────
function SplashScreen({ onContinue }) {
  return (
    <div style={{ height:'100%', background:YELLOW, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between', padding:'60px 28px 48px' }}>
      <div />
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
        <div style={{ width:88, height:88, borderRadius:26, background:WHITE, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:20, boxShadow:'0 12px 40px rgba(0,0,0,0.12)' }}>
          <svg viewBox="0 0 56 56" width="60" height="60">
            <path d="M28 8 L6 30 L11 30 L11 48 L22 48 L22 36 L34 36 L34 48 L45 48 L45 30 L50 30 Z" fill={YELLOW} stroke="#1C1917" strokeWidth="2.5" strokeLinejoin="round"/>
            <circle cx="36" cy="22" r="7" fill={RED} opacity="0.85"/>
            <path d="M33 22l2 2 4-4" stroke={WHITE} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div style={{ fontSize:40, fontWeight:900, color:DARK, letterSpacing:-1, marginBottom:8 }}>NestMatch</div>
        <div style={{ fontSize:17, color:'#92600A', textAlign:'center', lineHeight:1.6 }}>Find your perfect home<br/>or flatmate across Europe</div>
      </div>
      <div style={{ width:'100%' }}>
        <button onClick={onContinue} style={{ width:'100%', padding:'17px', background:DARK, border:'none', borderRadius:16, fontSize:17, fontWeight:700, color:WHITE, cursor:'pointer', marginBottom:14 }}>Get Started →</button>
        <p style={{ textAlign:'center', fontSize:14, color:'rgba(122,92,0,0.75)' }}>Already have an account? <span onClick={onContinue} style={{ fontWeight:700, textDecoration:'underline', cursor:'pointer' }}>Log in</span></p>
      </div>
    </div>
  );
}

// ── ONBOARDING ───────────────────────────────────────────────
function OnboardingScreen({ onComplete }) {
  const [step, setStep] = React.useState(0);
  const [intent, setIntent] = React.useState(null);
  const intents = [
    { key:'buy', emoji:'🏡', label:'Buy a home', desc:'Looking to purchase' },
    { key:'sell', emoji:'💰', label:'Sell my home', desc:'List my property' },
    { key:'rent', emoji:'🔑', label:'Rent a place', desc:'Looking to rent' },
    { key:'roommate', emoji:'🤝', label:'Find a flatmate', desc:'Share a home' },
  ];
  if (step === 0) return (
    <div style={{ height:'100%', background:WHITE, padding:'56px 24px 32px', overflowY:'auto' }}>
      <div style={{ fontSize:30, fontWeight:800, color:DARK, marginBottom:6, lineHeight:1.2 }}>What brings you<br/>to NestMatch?</div>
      <div style={{ fontSize:15, color:MED, marginBottom:28 }}>We'll personalise your experience</div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:28 }}>
        {intents.map(i => (
          <button key={i.key} onClick={() => { setIntent(i.key); setStep(1); }} style={{ padding:'20px 14px', background: intent===i.key ? YELLOW_LIGHT : LIGHT, border:`2px solid ${intent===i.key ? YELLOW : 'transparent'}`, borderRadius:18, cursor:'pointer', textAlign:'left', transition:'all 0.15s' }}>
            <div style={{ fontSize:30, marginBottom:8 }}>{i.emoji}</div>
            <div style={{ fontSize:14, fontWeight:700, color:DARK, marginBottom:2 }}>{i.label}</div>
            <div style={{ fontSize:12, color:MED }}>{i.desc}</div>
          </button>
        ))}
      </div>
    </div>
  );
  return (
    <div style={{ height:'100%', background:WHITE, padding:'56px 24px 32px', overflowY:'auto' }}>
      <button onClick={()=>setStep(0)} style={{ background:'none', border:'none', cursor:'pointer', color:MED, fontSize:14, marginBottom:16, display:'flex', alignItems:'center', gap:4 }}>
        <svg width="16" height="16" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke={MED} strokeWidth="2" fill="none" strokeLinecap="round"/></svg> Back
      </button>
      <div style={{ fontSize:30, fontWeight:800, color:DARK, marginBottom:6 }}>Set up your<br/>profile</div>
      <div style={{ fontSize:15, color:MED, marginBottom:28 }}>Just the basics to get you started</div>
      <div style={{ display:'flex', justifyContent:'center', marginBottom:28 }}>
        <div style={{ width:96, height:96, borderRadius:'50%', background:YELLOW_LIGHT, border:`3px dashed ${YELLOW}`, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', cursor:'pointer', gap:4 }}>
          <svg width="28" height="28" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" fill={YELLOW}/></svg>
          <span style={{ fontSize:11, color:'#92600A', fontWeight:600 }}>Add photo</span>
        </div>
      </div>
      {[['First name','Alex'],['Email','alex@email.com'],['City','Amsterdam']].map(([lbl,ph]) => (
        <div key={lbl} style={{ marginBottom:14 }}>
          <label style={{ fontSize:13, fontWeight:600, color:MED, display:'block', marginBottom:5 }}>{lbl}</label>
          <input placeholder={ph} style={{ width:'100%', padding:'13px 14px', border:`1.5px solid ${BORDER}`, borderRadius:12, fontSize:15, outline:'none', color:DARK, fontFamily:'DM Sans, sans-serif', background:WHITE }} />
        </div>
      ))}
      <button onClick={() => onComplete(intent)} style={{ width:'100%', padding:'16px', background:YELLOW, border:'none', borderRadius:14, fontSize:17, fontWeight:700, color:'#7A5C00', cursor:'pointer', marginTop:8 }}>Start Matching →</button>
    </div>
  );
}

// ── DISCOVER ─────────────────────────────────────────────────
function DiscoverScreen({ mode, onMatch, onDetail }) {
  const items = mode === 'buy' ? NM_PROPERTIES : NM_ROOMMATES;
  const [idx, setIdx] = React.useState(0);
  const [filterOpen, setFilterOpen] = React.useState(false);

  const handleSwipe = (dir, item) => {
    if (dir === 'right' && Math.random() > 0.45) setTimeout(() => onMatch(item), 320);
    setIdx(i => i + 1);
  };

  const cur = items[idx], nxt = items[idx+1], nxt2 = items[idx+2];

  const CardWrap = ({ item, scale, y, z }) => (
    <div style={{ position:'absolute', inset:'0 12px', transform:`scale(${scale}) translateY(${y}px)`, transformOrigin:'center bottom', transition:'transform 0.3s ease', zIndex:z, borderRadius:24, overflow:'hidden' }}>
      {mode==='buy' ? <PropertyCardContent item={item} onTap={()=>{}} /> : <RoommateCardContent item={item} onTap={()=>{}} />}
    </div>
  );

  return (
    <div style={{ height:'100%', display:'flex', flexDirection:'column', background:LIGHT }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 18px 10px', paddingTop:60, background:WHITE, borderBottom:`1px solid ${BORDER}` }}>
        <div style={{ fontSize:22, fontWeight:800, color:DARK }}>NestMatch</div>
        <div style={{ display:'flex', gap:6 }}>
          {['buy','roommate'].map(m => (
            <button key={m} onClick={() => {}} style={{ padding:'6px 14px', borderRadius:20, background: mode===m ? YELLOW : LIGHT, border:'none', cursor:'pointer', fontSize:13, fontWeight:700, color: mode===m ? '#7A5C00' : MED }}>
              {m==='buy' ? '🏡 Buy' : '🤝 Rooms'}
            </button>
          ))}
        </div>
        <button onClick={() => setFilterOpen(f=>!f)} style={{ width:38, height:38, borderRadius:'50%', background:LIGHT, border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <svg width="18" height="18" viewBox="0 0 24 24"><path d="M4 6h16M7 12h10M10 18h4" stroke={DARK} strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>

      {filterOpen && (
        <div style={{ background:WHITE, padding:'14px 18px', borderBottom:`1px solid ${BORDER}` }}>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {['Amsterdam','Berlin','Lisbon','Barcelona','Paris'].map(c => (
              <button key={c} style={{ padding:'5px 12px', borderRadius:20, background:LIGHT, border:'none', cursor:'pointer', fontSize:13, fontWeight:600, color:MED }}>{c}</button>
            ))}
            <button style={{ padding:'5px 12px', borderRadius:20, background:YELLOW_LIGHT, border:`1px solid ${YELLOW}`, cursor:'pointer', fontSize:13, fontWeight:600, color:'#92600A' }}>€300K–€1M</button>
            <button style={{ padding:'5px 12px', borderRadius:20, background:LIGHT, border:'none', cursor:'pointer', fontSize:13, fontWeight:600, color:MED }}>2+ beds</button>
          </div>
        </div>
      )}

      <div style={{ flex:1, position:'relative', padding:'14px 0 0', minHeight:0 }}>
        {!cur ? (
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100%', gap:12 }}>
            <div style={{ fontSize:48 }}>🏘️</div>
            <div style={{ fontSize:18, fontWeight:700, color:DARK }}>You've seen them all!</div>
            <div style={{ fontSize:14, color:MED }}>Check back tomorrow for new listings</div>
            <button onClick={()=>setIdx(0)} style={{ padding:'12px 24px', background:YELLOW, border:'none', borderRadius:12, fontWeight:700, color:'#7A5C00', cursor:'pointer', marginTop:8 }}>Start Over</button>
          </div>
        ) : (
          <>
            {nxt2 && <CardWrap item={nxt2} scale={0.88} y={16} z={1} />}
            {nxt && <CardWrap item={nxt} scale={0.94} y={8} z={2} />}
            <SwipeCard key={cur.id} onSwipe={(dir)=>handleSwipe(dir,cur)} onTap={()=>onDetail(cur)} zIndex={3}>
              {mode==='buy' ? <PropertyCardContent item={cur} onTap={()=>onDetail(cur)} /> : <RoommateCardContent item={cur} onTap={()=>onDetail(cur)} />}
            </SwipeCard>
          </>
        )}
      </div>

      {cur && <div style={{ paddingBottom:78 }}><ActionBar onSkip={()=>handleSwipe('left',cur)} onLike={()=>handleSwipe('right',cur)} /></div>}
    </div>
  );
}

// ── PROPERTY DETAIL ──────────────────────────────────────────
function PropertyDetailScreen({ item, onClose, onLike }) {
  const [imgIdx, setImgIdx] = React.useState(0);
  const allImgs = [item.img, ...(item.imgs||[]).slice(1)].filter(Boolean);
  const isRoom = item.type === 'room';
  const isPerson = item.type === 'person';

  const fmt = (n) => n >= 1000000 ? `€${(n/1000000).toFixed(2)}M` : `€${(n/1000).toFixed(0)}K`;
  const price = isPerson ? `€${item.budget}/mo budget` : isRoom ? `€${item.price}/mo` : fmt(item.price);
  const title = isPerson ? `${item.name}, ${item.age}` : isRoom ? item.location : item.location;
  const seller = isPerson ? { name:item.name, img:item.img, verified:false } : isRoom ? item.owner : item.seller;

  return (
    <div style={{ position:'absolute', inset:0, zIndex:200, background:WHITE, overflowY:'auto', display:'flex', flexDirection:'column' }}>
      <div style={{ position:'relative', height:280, flexShrink:0 }}>
        <img src={allImgs[imgIdx] || item.img} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.3) 100%)' }} />
        <button onClick={onClose} style={{ position:'absolute', top:52, left:16, width:38, height:38, borderRadius:'50%', background:'rgba(0,0,0,0.4)', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', backdropFilter:'blur(4px)' }}>
          <svg width="18" height="18" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke={WHITE} strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>
        </button>
        {allImgs.length > 1 && (
          <div style={{ position:'absolute', bottom:12, left:'50%', transform:'translateX(-50%)', display:'flex', gap:6 }}>
            {allImgs.map((_,i) => <div key={i} onClick={()=>setImgIdx(i)} style={{ width: i===imgIdx?20:6, height:6, borderRadius:3, background: i===imgIdx?WHITE:'rgba(255,255,255,0.5)', transition:'width 0.2s', cursor:'pointer' }} />)}
          </div>
        )}
        <div style={{ position:'absolute', bottom:16, right:16, background:YELLOW, borderRadius:20, padding:'4px 12px', fontSize:13, fontWeight:700, color:'#7A5C00' }}>{isPerson ? item.job : isRoom ? 'Room' : item.type}</div>
      </div>

      <div style={{ padding:'20px 20px 100px' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:6 }}>
          <div style={{ fontSize:28, fontWeight:800, color:DARK, lineHeight:1.1 }}>{price}</div>
          {!isPerson && <span style={{ fontSize:13, color:GREEN, fontWeight:700, background:'#DCFCE7', padding:'5px 10px', borderRadius:20 }}>{isRoom ? `From ${item.available}` : item.country}</span>}
        </div>
        <div style={{ fontSize:15, color:MED, marginBottom:16, display:'flex', alignItems:'center', gap:4 }}>
          <svg width="14" height="14" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill={MED}/></svg>
          {title}
        </div>

        {!isPerson && (
          <div style={{ display:'flex', gap:0, marginBottom:20, background:LIGHT, borderRadius:14, overflow:'hidden' }}>
            {(isRoom
              ? [['📐', item.sqm+'m²', 'Size'], ['📋', (item.rules||[]).length+' rules', 'House rules']]
              : [['🛏', item.beds+' beds', 'Bedrooms'], ['🛁', item.baths+' bath', 'Bathrooms'], ['📐', item.sqm+'m²', 'Size'], ['🏠', item.year, 'Built']]
            ).map(([ico,val,lbl],i,arr) => (
              <div key={lbl} style={{ flex:1, padding:'12px 8px', textAlign:'center', borderRight: i<arr.length-1 ? `1px solid ${BORDER}` : 'none' }}>
                <div style={{ fontSize:18, marginBottom:2 }}>{ico}</div>
                <div style={{ fontSize:14, fontWeight:700, color:DARK }}>{val}</div>
                <div style={{ fontSize:11, color:MED }}>{lbl}</div>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginBottom:20 }}>
          <div style={{ fontSize:16, fontWeight:700, color:DARK, marginBottom:8 }}>{isPerson ? 'About me' : 'About this property'}</div>
          <div style={{ fontSize:14, color:MED, lineHeight:1.7 }}>{isPerson ? item.bio : item.desc}</div>
        </div>

        {((isPerson ? item.tags : item.features || item.rules) || []).length > 0 && (
          <div style={{ marginBottom:20 }}>
            <div style={{ fontSize:16, fontWeight:700, color:DARK, marginBottom:10 }}>{isPerson ? 'Lifestyle' : isRoom ? 'House rules' : 'Features'}</div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
              {(isPerson ? item.tags : item.features || item.rules).map(f => <NMTag key={f} label={f} accent />)}
            </div>
          </div>
        )}

        {!isPerson && (
          <div style={{ borderRadius:16, overflow:'hidden', height:120, background:`repeating-linear-gradient(45deg, #f0ede8, #f0ede8 10px, #e8e4de 10px, #e8e4de 20px)`, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:20, position:'relative' }}>
            <div style={{ background:'rgba(255,255,255,0.85)', borderRadius:10, padding:'8px 14px', fontSize:13, fontWeight:600, color:MED, backdropFilter:'blur(4px)' }}>📍 {title}</div>
          </div>
        )}

        {seller && (
          <div style={{ display:'flex', alignItems:'center', gap:12, padding:'14px', background:LIGHT, borderRadius:14, marginBottom:20 }}>
            <NMAvatar img={seller.img} name={seller.name} size={44} verified={seller.verified} />
            <div style={{ flex:1 }}>
              <div style={{ fontSize:14, fontWeight:700, color:DARK }}>{seller.name}</div>
              <div style={{ fontSize:12, color:MED }}>{isRoom ? 'Room owner' : isPerson ? 'Looking for room' : 'Seller'} {seller.verified ? '· ✅ Verified' : ''}</div>
            </div>
            <button style={{ padding:'8px 14px', background:WHITE, border:`1.5px solid ${BORDER}`, borderRadius:10, fontSize:13, fontWeight:600, color:DARK, cursor:'pointer' }}>View</button>
          </div>
        )}
      </div>

      <div style={{ position:'fixed', bottom:0, left:'50%', transform:'translateX(-50%)', width:390, padding:'12px 20px 28px', background:WHITE, borderTop:`1px solid ${BORDER}`, display:'flex', gap:10, zIndex:10 }}>
        <button onClick={onClose} style={{ flex:1, padding:'14px', background:LIGHT, border:'none', borderRadius:12, fontSize:15, fontWeight:700, color:MED, cursor:'pointer' }}>✕ Skip</button>
        <button onClick={onLike} style={{ flex:2, padding:'14px', background:YELLOW, border:'none', borderRadius:12, fontSize:15, fontWeight:700, color:'#7A5C00', cursor:'pointer' }}>♥ Like this {isRoom ? 'Room' : isPerson ? 'Person' : 'Property'}</button>
      </div>
    </div>
  );
}

// ── MATCHES ──────────────────────────────────────────────────
function MatchesScreen({ mode, onOpenChat }) {
  const items = mode === 'buy' ? NM_PROPERTIES.slice(0,3) : NM_ROOMMATES.slice(0,3);
  const fmt = (n) => n >= 1000000 ? `€${(n/1000000).toFixed(1)}M` : `€${(n/1000).toFixed(0)}K`;
  return (
    <div style={{ height:'100%', background:WHITE, overflowY:'auto', paddingBottom:78 }}>
      <div style={{ padding:'56px 18px 16px' }}>
        <div style={{ fontSize:26, fontWeight:800, color:DARK, marginBottom:4 }}>Your Matches</div>
        <div style={{ fontSize:14, color:MED, marginBottom:20 }}>Start a conversation — sellers message first</div>
        {items.map((item, i) => {
          const isPerson = item.type === 'person';
          const isRoom = item.type === 'room';
          const name = isPerson ? item.name : isRoom ? item.owner?.name : item.seller?.name;
          const img = item.img;
          const verified = isPerson ? false : isRoom ? item.owner?.verified : item.seller?.verified;
          const sub = isPerson ? `€${item.budget}/mo · ${item.city}` : isRoom ? `€${item.price}/mo · ${item.location}` : `${fmt(item.price)} · ${item.location}`;
          return (
            <div key={item.id} onClick={()=>onOpenChat(NM_MESSAGES[i])} style={{ display:'flex', alignItems:'center', gap:12, padding:'14px', background:LIGHT, borderRadius:16, marginBottom:10, cursor:'pointer', transition:'background 0.15s' }}
              onMouseEnter={e=>e.currentTarget.style.background='#EEEAE5'}
              onMouseLeave={e=>e.currentTarget.style.background=LIGHT}>
              <div style={{ position:'relative' }}>
                <div style={{ width:60, height:60, borderRadius:16, overflow:'hidden', background:YELLOW_LIGHT }}>
                  <img src={img} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                </div>
                <div style={{ position:'absolute', bottom:-4, right:-4, width:20, height:20, borderRadius:'50%', background:YELLOW, border:'2px solid white', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill={DARK}/></svg>
                </div>
              </div>
              <div style={{ flex:1 }}>
                <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                  <span style={{ fontSize:15, fontWeight:700, color:DARK }}>{name}</span>
                  {verified && <svg viewBox="0 0 12 12" width="14" height="14"><circle cx="6" cy="6" r="6" fill={GREEN}/><path d="M3 6l2 2 4-4" stroke={WHITE} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </div>
                <div style={{ fontSize:13, color:MED }}>{sub}</div>
              </div>
              <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:4 }}>
                <span style={{ fontSize:12, color:MED }}>{['2m','1h','3h'][i]}</span>
                {[2,1,0][i] > 0 && <span style={{ width:18, height:18, borderRadius:'50%', background:YELLOW, display:'flex', alignItems:'center', justifyContent:'center', fontSize:10, fontWeight:700, color:DARK }}>{[2,1,0][i]}</span>}
              </div>
            </div>
          );
        })}
        <div style={{ textAlign:'center', padding:'20px 0 10px' }}>
          <div style={{ fontSize:14, color:MED }}>Like more properties to get more matches ✨</div>
        </div>
      </div>
    </div>
  );
}

// ── CHAT LIST ────────────────────────────────────────────────
function ChatListScreen({ onOpenChat }) {
  return (
    <div style={{ height:'100%', background:WHITE, overflowY:'auto', paddingBottom:78 }}>
      <div style={{ padding:'56px 18px 8px' }}>
        <div style={{ fontSize:26, fontWeight:800, color:DARK, marginBottom:18 }}>Messages</div>
        {NM_MESSAGES.map(m => (
          <div key={m.id} onClick={()=>onOpenChat(m)} style={{ display:'flex', alignItems:'center', gap:12, padding:'14px 0', borderBottom:`1px solid ${BORDER}`, cursor:'pointer' }}>
            <div style={{ position:'relative' }}>
              <NMAvatar img={m.img} name={m.name} size={50} />
              <div style={{ width:10, height:10, borderRadius:'50%', background:GREEN, border:'2px solid white', position:'absolute', bottom:0, right:0 }} />
            </div>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:3 }}>
                <span style={{ fontSize:15, fontWeight:700, color:DARK }}>{m.name}</span>
                <span style={{ fontSize:12, color:MED, flexShrink:0 }}>{m.time}</span>
              </div>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:8 }}>
                <span style={{ fontSize:13, color:m.unread>0?DARK:MED, fontWeight:m.unread>0?600:400, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', flex:1 }}>{m.preview}</span>
                {m.unread > 0 && <span style={{ minWidth:20, height:20, borderRadius:10, background:YELLOW, display:'flex', alignItems:'center', justifyContent:'center', fontSize:11, fontWeight:700, color:DARK, padding:'0 5px', flexShrink:0 }}>{m.unread}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── CHAT DETAIL ──────────────────────────────────────────────
function ChatDetailScreen({ convo, onBack }) {
  const [input, setInput] = React.useState('');
  const [msgs, setMsgs] = React.useState(convo.thread);
  const endRef = React.useRef();
  React.useEffect(() => { endRef.current?.scrollIntoView({ block:'nearest' }); }, [msgs]);
  const send = () => {
    if (!input.trim()) return;
    setMsgs(m => [...m, { from:'me', text:input.trim(), time:'Now' }]);
    setInput('');
  };
  return (
    <div style={{ height:'100%', display:'flex', flexDirection:'column', background:WHITE }}>
      <div style={{ display:'flex', alignItems:'center', gap:10, padding:'50px 14px 12px', background:WHITE, borderBottom:`1px solid ${BORDER}`, flexShrink:0 }}>
        <button onClick={onBack} style={{ background:'none', border:'none', cursor:'pointer', padding:4 }}>
          <svg width="22" height="22" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke={DARK} strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>
        </button>
        <NMAvatar img={convo.img} name={convo.name} size={40} />
        <div style={{ flex:1 }}>
          <div style={{ fontSize:15, fontWeight:700, color:DARK }}>{convo.name}</div>
          <div style={{ fontSize:12, color:GREEN }}>● Online</div>
        </div>
        <div style={{ width:44, height:44, borderRadius:12, overflow:'hidden', border:`1.5px solid ${BORDER}` }}>
          <img src={convo.propImg} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
        </div>
      </div>
      <div style={{ flex:1, overflowY:'auto', padding:'16px 14px' }}>
        {msgs.map((msg, i) => {
          const isMe = msg.from === 'me';
          return (
            <div key={i} style={{ display:'flex', justifyContent: isMe?'flex-end':'flex-start', marginBottom:8 }}>
              <div style={{ maxWidth:'78%', background: isMe?YELLOW:LIGHT, borderRadius: isMe?'18px 18px 4px 18px':'18px 18px 18px 4px', padding:'10px 14px' }}>
                <div style={{ fontSize:14, color: isMe?'#7A5C00':DARK, lineHeight:1.5 }}>{msg.text}</div>
                <div style={{ fontSize:10, color: isMe?'rgba(122,92,0,0.6)':MED, marginTop:3, textAlign: isMe?'right':'left' }}>{msg.time}</div>
              </div>
            </div>
          );
        })}
        <div ref={endRef} />
      </div>
      <div style={{ display:'flex', gap:8, padding:'10px 14px 14px', background:WHITE, borderTop:`1px solid ${BORDER}`, flexShrink:0 }}>
        <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder="Type a message..." style={{ flex:1, padding:'11px 14px', border:`1.5px solid ${BORDER}`, borderRadius:22, fontSize:14, outline:'none', color:DARK, fontFamily:'DM Sans, sans-serif', background:LIGHT }} />
        <button onClick={send} style={{ width:42, height:42, borderRadius:'50%', background: input?YELLOW:LIGHT, border:'none', cursor: input?'pointer':'default', display:'flex', alignItems:'center', justifyContent:'center', transition:'background 0.2s', flexShrink:0 }}>
          <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke={input?'#7A5C00':MED} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
}

// ── PROFILE ──────────────────────────────────────────────────
function ProfileScreen() {
  const stats = [['12','Liked'],['3','Matches'],['1','Viewed']];
  return (
    <div style={{ height:'100%', background:WHITE, overflowY:'auto', paddingBottom:78 }}>
      <div style={{ background:`linear-gradient(160deg, ${YELLOW} 0%, #FFE066 100%)`, padding:'56px 0 0', display:'flex', flexDirection:'column', alignItems:'center' }}>
        <div style={{ width:90, height:90, borderRadius:'50%', border:'4px solid white', overflow:'hidden', background:YELLOW_LIGHT, display:'flex', alignItems:'center', justifyContent:'center', fontSize:40, marginBottom:12, boxShadow:'0 4px 20px rgba(0,0,0,0.12)' }}>👤</div>
        <div style={{ fontSize:22, fontWeight:800, color:DARK }}>Alex Martin</div>
        <div style={{ fontSize:14, color:'#92600A', marginBottom:4 }}>Amsterdam · Buyer</div>
        <div style={{ display:'flex', alignItems:'center', gap:4, marginBottom:20 }}>
          <svg viewBox="0 0 12 12" width="14" height="14"><circle cx="6" cy="6" r="6" fill={GREEN}/><path d="M3 6l2 2 4-4" stroke={WHITE} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span style={{ fontSize:12, fontWeight:600, color:GREEN }}>ID Verified</span>
        </div>
        <div style={{ display:'flex', gap:0, background:'rgba(255,255,255,0.6)', borderRadius:16, margin:'0 20px 20px', overflow:'hidden', backdropFilter:'blur(8px)' }}>
          {stats.map(([n,l],i) => (
            <div key={l} style={{ flex:1, padding:'12px 16px', textAlign:'center', borderRight: i<stats.length-1 ? '1px solid rgba(255,255,255,0.6)' : 'none' }}>
              <div style={{ fontSize:22, fontWeight:800, color:DARK }}>{n}</div>
              <div style={{ fontSize:12, color:'#92600A' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding:'20px 18px' }}>
        {[['🏡 Preferences', 'Apartment · 2 beds · up to €600K'],['🔔 Notifications', 'New matches, messages'],['🔒 Privacy', 'Profile visible to matches'],['💳 Membership', 'NestMatch Free'],['⚙️ Settings', ''],['🚪 Log out', '']].map(([label, detail]) => (
          <div key={label} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'15px 0', borderBottom:`1px solid ${BORDER}`, cursor:'pointer' }}>
            <span style={{ fontSize:15, color:DARK }}>{label}</span>
            <div style={{ display:'flex', alignItems:'center', gap:8 }}>
              {detail && <span style={{ fontSize:13, color:MED }}>{detail}</span>}
              <svg width="8" height="14" viewBox="0 0 8 14"><path d="M1 1l6 6-6 6" stroke={BORDER} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── APP ──────────────────────────────────────────────────────
function App() {
  const saved = JSON.parse(localStorage.getItem('nm_state') || '{}');
  const [appPhase, setAppPhase] = React.useState(saved.phase || 'splash');
  const [tab, setTab] = React.useState(saved.tab || 'discover');
  const [mode, setMode] = React.useState(saved.mode || 'buy');
  const [match, setMatch] = React.useState(null);
  const [detail, setDetail] = React.useState(null);
  const [activeChat, setActiveChat] = React.useState(null);

  React.useEffect(() => {
    localStorage.setItem('nm_state', JSON.stringify({ phase:appPhase, tab, mode }));
  }, [appPhase, tab, mode]);

  const handleNav = (key) => {
    setTab(key);
    setDetail(null);
    setActiveChat(null);
  };

  const renderScreen = () => {
    if (activeChat) return <ChatDetailScreen convo={activeChat} onBack={()=>setActiveChat(null)} />;
    if (detail) return <PropertyDetailScreen item={detail} onClose={()=>setDetail(null)} onLike={()=>{setMatch(detail);setDetail(null);}} />;
    if (tab==='discover') return <DiscoverScreen mode={mode} onMatch={setMatch} onDetail={setDetail} />;
    if (tab==='matches') return <MatchesScreen mode={mode} onOpenChat={c=>{setActiveChat(c);setTab('chat');}} />;
    if (tab==='chat') return <ChatListScreen onOpenChat={setActiveChat} />;
    if (tab==='profile') return <ProfileScreen />;
  };

  const TWEAK_DEFAULTS = {"mode":"buy","accentColor":"#FFCB2F","darkNav":false};
  const [tweaks, setTweaks] = React.useState(TWEAK_DEFAULTS);
  const [tweakOpen, setTweakOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setTweakOpen(true);
      if (e.data?.type === '__deactivate_edit_mode') setTweakOpen(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  const applyTweak = (k, v) => {
    const next = { ...tweaks, [k]:v };
    setTweaks(next);
    window.parent.postMessage({ type:'__edit_mode_set_keys', edits:{ [k]:v } }, '*');
  };

  return (
    <div style={{ minHeight:'100vh', background:'#1C1917', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'DM Sans', sans-serif" }}>
      <IOSDevice width={390} height={844} dark={tweaks.darkNav}>
        <div style={{ height:'100%', position:'relative', overflow:'hidden' }}>
          {appPhase === 'splash' && <SplashScreen onContinue={()=>setAppPhase('onboard')} />}
          {appPhase === 'onboard' && <OnboardingScreen onComplete={(intent)=>{ setMode(intent==='roommate'?'roommate':'buy'); setAppPhase('main'); }} />}
          {appPhase === 'main' && (
            <>
              {renderScreen()}
              {!activeChat && !detail && <BottomNav active={tab} onNav={handleNav} />}
              {match && <MatchModal item={match} onClose={()=>setMatch(null)} onMessage={()=>{ setMatch(null); setActiveChat(NM_MESSAGES[0]); setTab('chat'); }} />}
            </>
          )}
        </div>
      </IOSDevice>

      {appPhase === 'main' && (
        <div style={{ position:'fixed', bottom:28, left:'50%', transform:'translateX(-50%)', display:'flex', gap:8, background:'rgba(28,25,23,0.85)', borderRadius:30, padding:'6px 8px', backdropFilter:'blur(12px)', zIndex:1000 }}>
          {[['🏡 Buy/Sell','buy'],['🤝 Roommate','roommate']].map(([lbl,m]) => (
            <button key={m} onClick={()=>setMode(m)} style={{ padding:'8px 18px', borderRadius:22, background: mode===m ? YELLOW : 'transparent', border:'none', cursor:'pointer', fontSize:13, fontWeight:700, color: mode===m ? '#7A5C00' : 'rgba(255,255,255,0.7)', transition:'all 0.2s' }}>{lbl}</button>
          ))}
        </div>
      )}

      {tweakOpen && (
        <div style={{ position:'fixed', right:24, top:'50%', transform:'translateY(-50%)', background:'rgba(28,25,23,0.92)', borderRadius:20, padding:'20px', backdropFilter:'blur(20px)', border:'1px solid rgba(255,255,255,0.12)', color:WHITE, zIndex:2000, minWidth:200 }}>
          <div style={{ fontSize:14, fontWeight:800, letterSpacing:2, textTransform:'uppercase', marginBottom:16, color:'rgba(255,255,255,0.5)' }}>Tweaks</div>
          <div style={{ fontSize:13, color:'rgba(255,255,255,0.6)', marginBottom:6 }}>App screen</div>
          {['splash','onboard','main'].map(p => (
            <button key={p} onClick={()=>setAppPhase(p)} style={{ display:'block', width:'100%', padding:'8px 12px', marginBottom:4, background: appPhase===p ? YELLOW : 'rgba(255,255,255,0.08)', border:'none', borderRadius:8, cursor:'pointer', fontSize:13, fontWeight:600, color: appPhase===p ? '#7A5C00' : WHITE, textAlign:'left', textTransform:'capitalize' }}>{p}</button>
          ))}
          <div style={{ fontSize:13, color:'rgba(255,255,255,0.6)', margin:'12px 0 6px' }}>Mode</div>
          {[['buy','🏡 Buy/Sell'],['roommate','🤝 Roommate']].map(([m,l]) => (
            <button key={m} onClick={()=>{setMode(m);applyTweak('mode',m);}} style={{ display:'block', width:'100%', padding:'8px 12px', marginBottom:4, background: mode===m ? YELLOW : 'rgba(255,255,255,0.08)', border:'none', borderRadius:8, cursor:'pointer', fontSize:13, fontWeight:600, color: mode===m ? '#7A5C00' : WHITE, textAlign:'left' }}>{l}</button>
          ))}
          <div style={{ fontSize:13, color:'rgba(255,255,255,0.6)', margin:'12px 0 6px' }}>Dark nav</div>
          <button onClick={()=>applyTweak('darkNav',!tweaks.darkNav)} style={{ padding:'8px 16px', background: tweaks.darkNav ? YELLOW : 'rgba(255,255,255,0.08)', border:'none', borderRadius:8, cursor:'pointer', fontSize:13, fontWeight:600, color: tweaks.darkNav ? '#7A5C00' : WHITE }}>{tweaks.darkNav ? 'On' : 'Off'}</button>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
