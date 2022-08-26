const exprianceSec = document.querySelector('#expriance');
const experianceInfo = document.querySelector('.experiance-info');


window.onscroll = function() {
  window.scrollY >= exprianceSec.offsetTop - 250 ? experianceInfo.classList.add('active') 
  : experianceInfo.classList.remove('active')
};
