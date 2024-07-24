const sideBarGrid = document.querySelector('.learn-http-grid')
sideBarGrid.addEventListener('click',() => {
  if(sideBarGrid.classList.contains('special1')){
    sideBarGrid.classList.add('speciala');
    sideBarGrid.classList.remove('special1');
  }
  else{
    sideBarGrid.classList.add('special1');
    sideBarGrid.classList.remove('speciala');
  }
});