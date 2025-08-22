'use strict';
const showBtn = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');


function close(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
function open()
{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

showBtn.forEach(item => item.addEventListener('click',open));
closeBtn.addEventListener('click',close);
overlay.addEventListener('click',close);
document.addEventListener('keydown',(e)=>
{
    if(e.key=== 'Escape' && !modal.classList.contains('hidden')){
        close();
    }
})
