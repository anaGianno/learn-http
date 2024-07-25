const mainRow = document.querySelector('.learn-http-grid')
mainRow.addEventListener('click',() => {
  if(mainRow.classList.contains('special1')){
    mainRow.classList.add('speciala');
    mainRow.classList.remove('special1');
    mainRow.classList.remove('specialShowFiles');
    mainRow.classList.add('specialHideFiles');
    console.log("a")
  }
  else{
    mainRow.classList.add('special1');
    mainRow.classList.remove('speciala');
    mainRow.classList.add('specialShowFiles');
    mainRow.classList.remove('specialHideFiles');
    console.log("b")
  }
});

const subRow = document.querySelector('.html-grid-row')
subRow.addEventListener('click',() => {
  document.querySelector('.specialShowBlue')?.classList.remove('specialShowBlue');
  subRow.classList.add('specialShowBlue')
});