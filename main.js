var carrousel = ['photo1.jpg','photo2.png', 'photo3.jpg'],
contador = 0;

function hero_slider(contenedor){
    contenedor.addEventListener('click', e => {
    let back = contenedor.querySelector('.back'),
    next = contenedor.querySelector('.next'),
    img = contenedor.querySelector('img'),
    tgt = e.target;

    if(tgt == back){
      if(contador > 0){
        img.src = carrousel[contador-1];
        contador--;
      }else{
        img.src = carrousel[carrousel.length - 1];
        contador = carrousel.length - 1;
      }

    }else if(tgt == next){
      if(contador < carrousel.length - 1){
        img.src = carrousel[contador + 1];
        contador++;
      }else{
        img.src = carrousel[0];
        contador = 0;
      }
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  let contenedor = document.querySelector('.contenedor');
  hero_slider(contenedor);
});


