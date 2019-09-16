// Service worker
if ('serviceWorker' in navigator){
  console.log("service worker disponible");

  navigator.serviceWorker.register('./sw.js')
  .then(res => console.log("Service worker cargado correctamente", res))
  .catch(err => console.log("Service worker no se ha podido registrar", res));

} else {
  console.log("service worker no existente");
};

/* Scroll suavizado */
$(document).ready(function (){
  $("#menu a").click(function (e){
    e.preventDefault();

      console.log($($(this).attr("href")).offset().top);

    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top
    });

    return false;
  });
});
