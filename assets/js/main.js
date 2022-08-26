const exprianceSec = document.querySelector('#expriance');
const experianceInfo = document.querySelector('.experiance-info');
const callbackSec = document.querySelector('#callback');
const callbackNum = document.querySelectorAll('.callback-box-num');
let start = false;


window.addEventListener('scroll', () => {
  window.scrollY >= exprianceSec.offsetTop - 250 ? experianceInfo.classList.add('active') 
  : experianceInfo.classList.remove('active');


  if (window.scrollY >= callbackSec.offsetTop) {

    if (!start) {
      callbackNum.forEach(el => {
        let endNum = parseInt(el.dataset.num);
        let num = 0;
        
        let numInterval = setInterval(() => {
          num++;
          el.innerHTML = `${num}+`;
          if (num === endNum) {
            clearInterval(numInterval);
          }
        } ,2000 / endNum);
      } );
    }
    start = true;
  }
});

// filter gallery

const filterBtn = document.querySelectorAll('.gallery-contint .filter-btns button');
const filterBox = document.querySelectorAll('.gallery-contint .gallery-items .gallery-box');

filterBtn.forEach(el => {
  el.addEventListener('click', () => {
    document.querySelector('.filter-btns button.active').classList.remove('active');
    el.classList.add('active');

    const filter = el.dataset.filter;
    
    filterBox.forEach(el => {
      el.classList.remove('hide')

      if (!el.classList.contains(filter) && filter !== 'all') {
        el.classList.add('hide');
      }
    });

  });
} );