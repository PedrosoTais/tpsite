const portal=document.querySelector('.portal');
const admin=document.querySelector('.admin');
const design=document.querySelector('.design');
const finePointer=matchMedia('(hover:hover) and (pointer:fine)').matches;
if(finePointer){
  admin.addEventListener('mouseenter',()=>portal.className='portal hover-admin');
  design.addEventListener('mouseenter',()=>portal.className='portal hover-design');
  portal.addEventListener('mouseleave',()=>portal.className='portal');
}
