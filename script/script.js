const mainRow = document.querySelector('.learn-http-grid')
//add an event listener which adds/removes classes for the arrow animation
//on the LEARN-HTTP grid, onclick
mainRow.addEventListener('click',() => {
  //add/remove class based on if the arrow has been clicked or not
  if(mainRow.classList.contains('pointdown')){
    mainRow.classList.add('pointright');
    mainRow.classList.remove('pointdown');
  }
  else{
    mainRow.classList.add('pointdown');
    mainRow.classList.remove('pointright');
  }
});

//add a toggle function for the html grid
let p = document.querySelector('.learn-http-grid');
function toggleClass(){
  p.classList.toggle('blockgrid');
}