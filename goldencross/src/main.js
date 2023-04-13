/* ABRIR E FECHAR O MENU */
function openMenu(){
  const nav = document.getElementById('nav');
  
  nav.classList.toggle('active');


  /*Acessibilidade - avisa quando o botão está ou nao aberto*/
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded',active);

  if(active){
      event.currentTarget.setAttribute('aria-label','Fechar Menu');
  } else {
      event.currentTarget.setAttribute('aria-label','Abrir Menu');
  }
  
}

function closeMenu(){
  openMenu()
}