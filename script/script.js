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

// const subRow = document.querySelector('.html-grid-row');
// const subRowList = document.querySelectorAll('.html-grid-row');

// subRowList.forEach(subRow => {
//   subRow.addEventListener('click', () => {
//     subRow.classList.toggle('specialb');
//     console.log("c")
//  });
// });

// function ch(){
//   this.classList.toggle('specialb');
// }

// var subRowList = document.querySelectorAll('.html-grid-row');
// for(var x = subRowList.length -1; x>=0;x--){
//   subRowList[x].onclick= ch;
//   console.log("c")
// }