/* Общая оболочка: нижняя навигация между разделами. Работает без интернета. */
(function(){
  var file=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  var sec={'3es5k.html':'faults','electrical.html':'schemes','tormoza_83.html':'brakes','notebook.html':'notebook'}[file]||'profile';
  document.documentElement.setAttribute('data-sec',sec);
  var I={
    home:'<svg viewBox="0 0 24 24"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9.5h13V10"/><path d="M10 19.5v-5h4v5"/></svg>',
    profile:'<svg viewBox="0 0 24 24"><path d="M3 18h18"/><path d="M4 14.5l4.5-4.5 3.5 2.5 4-6.5 4 3"/><circle cx="8.5" cy="10" r=".6" fill="currentColor"/></svg>',
    faults:'<svg viewBox="0 0 24 24"><path d="M13 3 5 13.5h6L10 21l8-10.5h-6z"/></svg>',
    schemes:'<svg viewBox="0 0 24 24"><rect x="3.5" y="4" width="6" height="5" rx="1"/><rect x="14.5" y="4" width="6" height="5" rx="1"/><rect x="9" y="15" width="6" height="5" rx="1"/><path d="M6.5 9v3h11V9M12 12v3"/></svg>',
    brakes:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 4v2M12 18v2M4 12h2M18 12h2"/></svg>',
    notebook:'<svg viewBox="0 0 24 24"><rect x="5" y="3" width="15" height="18" rx="2"/><path d="M8 3v18M11 8h6M11 12h6M11 16h4M3 7h2M3 12h2M3 17h2"/></svg>'
  };
  var tabs=[
    {id:'home',t:'Главная',h:'index.html',c:'#f2c14e'},
    {id:'profile',t:'Профиль',h:'index.html#profile',c:'#f2c14e'},
    {id:'notebook',t:'Блокнот',h:'notebook.html',c:'#f2c14e'},
    {id:'faults',t:'3ЭС5К',h:'3ES5K.html',c:'#f2c14e'},
    {id:'schemes',t:'Схемы',h:'electrical.html',c:'#f2c14e'},
    {id:'brakes',t:'Тормоза',h:'Tormoza_83.html',c:'#f2c14e'}
  ];
  var onIndex=sec==='profile';var wrap=document.createElement('div');wrap.className='tabbar';var nav=document.createElement('nav');nav.setAttribute('aria-label','Разделы');
  tabs.forEach(function(x){var a=document.createElement('a');a.href=x.h;a.dataset.id=x.id;a.style.setProperty('--c',x.c);a.innerHTML=I[x.id]+'<span>'+x.t+'</span>';nav.appendChild(a)});
  wrap.appendChild(nav);document.body.appendChild(wrap);
  function inProfile(){var p=document.getElementById('profileApp');return !!p&&!p.hidden}
  function mark(){var cur=onIndex?(inProfile()?'profile':'home'):sec;nav.querySelectorAll('a').forEach(function(a){if(a.dataset.id===cur)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});if(onIndex)document.documentElement.setAttribute('data-view',cur)}
  if(onIndex){nav.addEventListener('click',function(e){var a=e.target.closest('a');if(!a)return;var id=a.dataset.id;if(id!=='home'&&id!=='profile')return;e.preventDefault();var open=document.getElementById('openProfile'),back=document.getElementById('backMenu');if(id==='profile'&&!inProfile()&&open)open.click();if(id==='home'&&inProfile()&&back)back.click();if(id==='home')try{history.replaceState(null,'','index.html')}catch(_){}window.scrollTo(0,0);mark()});var p=document.getElementById('profileApp');if(p&&window.MutationObserver)new MutationObserver(mark).observe(p,{attributes:true,attributeFilter:['hidden']});if(location.hash==='#profile'){var o=document.getElementById('openProfile');if(o)setTimeout(function(){o.click()},0)}}
  mark();
})();