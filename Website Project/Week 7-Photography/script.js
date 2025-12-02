// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Modal logic (ESC to close, click-outside to close, caption/alt)
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modalImage');
const modalMeta = document.getElementById('modalMeta');

function openModal(src, caption){
  modalImg.src = src;
  modalImg.alt = caption || 'Photo';
  modalMeta.textContent = caption || '';
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
}
function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  modalImg.src = '';
  modalImg.alt = '';
  modalMeta.textContent = '';
}
// Click outside image to close
modal.addEventListener('click', (e)=>{
  if(e.target === modal) closeModal();
});
// ESC to close
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});
