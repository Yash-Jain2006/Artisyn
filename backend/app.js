// Local storage helpers and small utilities
window.APP = (function(){
  const LS_FOLLOWS = 'artisyn_follows';
  const LS_THREADS = 'artisyn_forum_threads';

  function getFollows(){ try { return new Set(JSON.parse(localStorage.getItem(LS_FOLLOWS) || '[]')); } catch { return new Set(); } }
  function setFollows(set){ localStorage.setItem(LS_FOLLOWS, JSON.stringify(Array.from(set))); }

  function isFollowing(id){ return getFollows().has(id); }
  function toggleFollow(id){ const s=getFollows(); s.has(id) ? s.delete(id) : s.add(id); setFollows(s); return s.has(id); }

  function getThreads(){ try { return JSON.parse(localStorage.getItem(LS_THREADS) || '[]'); } catch { return []; } }
  function addThread(t){ const arr=getThreads(); arr.unshift({ id: 't'+Date.now(), ...t, createdAt: new Date().toISOString()}); localStorage.setItem(LS_THREADS, JSON.stringify(arr)); return arr; }

  function byId(arr, id){ return arr.find(x=>x.id===id); }

  return { getFollows, setFollows, isFollowing, toggleFollow, getThreads, addThread, byId };
})();
