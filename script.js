const filters=[...document.querySelectorAll('.filter')],cases=[...document.querySelectorAll('.case')];
filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;cases.forEach(c=>c.classList.toggle('hidden',f!=='all'&&c.dataset.type!==f));}));
const modal=document.getElementById('modal');const title=document.getElementById('modal-title');const text=document.getElementById('modal-text');
cases.forEach(c=>c.addEventListener('click',()=>{title.textContent=c.dataset.title;text.textContent=c.dataset.text;modal.classList.add('open');}));
modal.addEventListener('click',e=>{if(e.target===modal||e.target.closest('.close'))modal.classList.remove('open')});document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('open')});
