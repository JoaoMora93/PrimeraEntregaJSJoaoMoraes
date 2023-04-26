/*¿Qué debo llevar? Estado del tiempo atmosférico*/
let operacion = 0;


alert(  "¿Qué me pongo hoy?\nPrograma que te indica como vestirte dependiendo de la temperatura prevista para el día.");
function queMePongo (){
    let mensaje = " ";
    do {
        operacion = parseInt(prompt("Menú\n1. Temperatura bajo 0ºC\n2. Temperatura entre 0 y 13ªC\n3. Temperatura entre 14 y 21ºC\n4. Temperatura entre 21 y 35ºC\n5. ¿Temperatura más de 35ºC? FIN"));
        switch (operacion) {
                case 1:
                    alert("Hoy será mejor que te pongas ropa para ir al polo.");
                break;
            
                case 2:
                    alert("Ponete medias, pantalón, ropa interior limpia, remerita, campera bien abrigada y calzado.");
                break;
            
                case 3:
                    alert("Hoy ponete soquetes, pantalón no muy abrigado, ropa interior limpia, remera, una camperita no muy abrigada y calzado fresco.");
                break;
            
                case 4:
                    alert("Uff, hoy ponete una bermuda, ropa interior a elección, calzado fresco sin medias, remera de manga corta.");
                break;

                case 5:
                    alert("Bueno, hoy amigue agarrá la conservadora, con unas bebidas bien frías y nos vemos. Me despido porque mis circuitos se van a derretir. Chau ;(");
                return;
                break;
            
                default:
                    alert("¿Qué es lo que tu dice?");
                break;
            }

    } while (operacion!=5);
}
queMePongo ();
