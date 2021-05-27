

function info() { 
    var texto = document.getElementById("cajaS1");
    var t1 = document.createElement("h3");      
    titulo="Dispositivos agregados al carrito de compras:";
    t1.innerHTML = titulo;     
    texto.appendChild(t1);
  
     if (document.suscripcion.deportes.checked == true) {
       deportes = "<h4>" + document.suscripcion.deportes.value + "</h4>";
       }
    else { deportes = "" }	
    if (document.suscripcion.noticias.checked == true) {
       noticias = "<h4>" + document.suscripcion.noticias.value + "</h4>";
       }
    else { noticias = "" }	
    if (document.suscripcion.economia.checked == true) {
       economia = "<h4>" + document.suscripcion.economia.value + "</h4>";
       }	
    else { economia = "" }	
    if (document.suscripcion.cultura.checked == true) {
       cultura = "<h4>" + document.suscripcion.cultura.value + "</h4>";
       }
    else { cultura = "" }	
    if (document.suscripcion.medioambiente.checked == true) {
       medioambiente = "<h4>" + document.suscripcion.medioambiente.value + "</h4>";
       }
    else { medioambiente = "" }
    if (document.suscripcion.iphone.checked == true) {
        iphone = "<h4>" + document.suscripcion.iphone.value + "</h4>";
        }
     else { iphone = "" }
     if (document.suscripcion.lg.checked == true) {
        lg = "<h4>" + document.suscripcion.lg.value + "</h4>";
        }
     else { lg = "" }
     if (document.suscripcion.note.checked == true) {
        note = "<h4>" + document.suscripcion.note.value + "</h4>";
        }
     else { note = "" }
     if (document.suscripcion.Oppo.checked == true) {
        Oppo = "<h4>" + document.suscripcion.Oppo.value + "</h4>";
        }
     else { Oppo = "" }
     if (document.suscripcion.Huawey.checked == true) {
        Huawey = "<h4>" + document.suscripcion.Huawey.value + "</h4>";
        }
     else { Huawey = "" }
   // console.log(deportes + noticias + economia + cultura + medioambiente)
    texto.innerHTML += deportes + noticias + economia + cultura + medioambiente + iphone + lg +note + Oppo + Huawey
   }
