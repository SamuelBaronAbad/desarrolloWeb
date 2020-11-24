$(document).ready(function () {

    $("#btnR, #btnL").hide();
    $("#contenedorHtml").removeClass("scroll");


    /*
     *
     * funcion para reemplazar los caracteres especiales de html por sus correspondiente, si no hicieramos esto no podríamos ver el texto HTML plano
     *
     */
    function cambiar(r) {
        return r.replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt;');
    }



    /*
     *
     * funcion para el botón de inicio
     *
     */

    $("#btnInicio").click(function () {
        $(".paginaInicio").queue(function(done){
            $("#btnInicio").animate({
                opacity: "0%"
            }, 350);
            $(".paginaInicio").fadeOut(2500)
            done();
        })

        
        $("#btnInicio").hover(function(){
        if ($(this).css("opacity")== 0){
            $(this).css("display", "none")
        }})
        
         //Mostramos los botones de cambio de pagina
         $("#btnR, #btnL").show();

         //Mostramos la barra de scroll
         $("#contenedorHtml").addClass("scroll")

         var link = "html/ud1/Ejercicio1.html"

         //Obtenemos el enlace del Iframe para ponerle el link del ejercicio 1 ud1
         document.getElementById("iframe").contentWindow.location.href = link;
 
         // Enviamos una peticion Ajax con jQuery para sacar el HTML del link e introducirlo en el div 'contenedorHtml'
         ajax(link);
 
         // Agregamos al div general la información de cada unidad/ejercicio cuando pulsamos en los link
         agregarInfo(link, "ud1");
      })


    /*
      *
      * Funciones para animacion del boton de footer
      * 
     */



    $("#fdiv").click(function () {
        if ($(".fvacio").css("display") == "block") {
            $("#fdiv").animate({
                borderRadius: "10px",
                width: "29%"
            });
            $(".fvacio").fadeOut(100)
            $(".flleno").delay(500).fadeIn(1000);
            $(this).removeClass("animacion")
        } else {
            $(".flleno").fadeOut(100).queue(function (done) {
                $("#fdiv").animate({
                    borderRadius: "60px",
                    width: "6%"
                });
                $(".fvacio").fadeIn(1000)
                $("#fdiv").addClass("animacion")
                done();
            })


        }
    });




    /*
      *
      * Menu desplegable
      *
      */
    $menu = $('#menu>ul>li');
    $menu.hover(function () {
        $(this).children('ul').stop();
        $(this).children('ul').slideDown();
    }, function () {
        $(this).children('ul').stop();
        $(this).children('ul').slideUp();
    });




    /*
      *
      * Botones Siguiente y Anterior para pasar de un ejercicio a otro
      *
      */
    $("#btnR").click(siguiente)
    function siguiente() {
        //Obtenemos link del contenido del Iframe
        var linkIframe = document.getElementById("iframe").contentWindow.location.href

        //recortamos el link para obtener lo que nos interesa:  html/ud1/Ejercicio1.html
        var linkShort = linkIframe.replace("http://localhost/Proyecto_Final_SEAS/", "")

        //extraemos "ud1" para poder modificarlo
        var tramo1 = /ud+\d/
        var unidad = tramo1.exec(linkShort)
        var numUd = unidad[0]

        //extraemos el numero de Ejercicio: "Ejercicio1"
        var tramo2 = /\d+(?=\.)/
        var numero = tramo2.exec(linkShort)
        var numEjer = parseInt(numero[0])

        //indicamos que si la "ud_" que entra es igual a lo indicado, que proceda
        if (numUd == "ud1") {
            if ((numEjer + 1) <= 11) {
                //reemplazamos el numero de Ejercicio
                var linkEjer = linkShort.replace(tramo2, numEjer + 1)
            } else {
                numUd = "ud2";
                //reemplazamos el numero de "ud_" y de Ejercicio
                linkEjer = linkShort.replace(tramo1, "ud2").replace(tramo2, 1);

            }
        } else if (numUd == "ud2") {
            if ((numEjer + 1) <= 6) {
                var linkEjer = linkShort.replace(tramo2, numEjer + 1);
            } else {
                numUd = "ud3";
                linkEjer = linkShort.replace(tramo1, "ud3").replace(tramo2, 1);
            }
        } else if (numUd == "ud3") {
            if ((numEjer + 1) <= 5) {
                var linkEjer = linkShort.replace(tramo2, numEjer + 1);

            } else {
                numUd = "ud4";
                linkEjer = linkShort.replace(tramo1, "ud4").replace(tramo2, 1);
            }
        } else if (numUd == "ud4") {
            if ((numEjer + 1) <= 6) {
                var linkEjer = linkShort.replace(tramo2, numEjer + 1);
            } else {
                numUd = "ud5";
                linkEjer = linkShort.replace(tramo1, "ud5").replace(tramo2, 1);
            }
        } else if (numUd == "ud5") {
            if ((numEjer + 1) <= 4) {
                var linkEjer = linkShort.replace(tramo2, numEjer + 1);
            } else {
                numUd = "ud1";
                linkEjer = linkShort.replace(tramo1, "ud1").replace(tramo2, 1);
            }
        }

        //Al objeto del evento (<a>) le agregamos el link modificado y el attr Target para enviarlo al Iframe
        $(this).attr("href", linkEjer);
        $(this).attr("target", "conteEjercicio");

        //llamamos a los metodos ajax() y agregarInfo() para hacer la peticion y modificar la cabecera del div #hcontPpal
        ajax(linkEjer);
        agregarInfo(linkEjer, numUd)
    }


    $("#btnL").click(anterior)
    function anterior() {
        //Obtenemos link del contenido del Iframe
        var linkIframe = document.getElementById("iframe").contentWindow.location.href

        //recortamos el link para obtener lo que nos interesa:  html/ud1/Ejercicio1.html
        var linkShort = linkIframe.replace("http://localhost/Proyecto_Final_SEAS/", "")

        //extraemos "ud1" para poder modificarlo
        var tramo1 = /ud+\d/
        var unidad = tramo1.exec(linkShort)
        var numUd = unidad[0]

        //extraemos el numero de Ejercicio: "Ejercicio1"
        var tramo2 = /\d+(?=\.)/
        var numero = tramo2.exec(linkShort)
        var numEjer = parseInt(numero[0])

        //indicamos que si la "ud_" que entra es igual a lo indicado, que proceda
        if (numUd == "ud1") {
            if ((numEjer - 1) >= 1) {
                //reemplazamos el numero de Ejercicio
                linkEjer = linkShort.replace(tramo2, numEjer - 1)

            } else {
                numUd = "ud5";
                //reemplazamos el numero de "ud_" y de Ejercicio
                linkEjer = linkShort.replace(tramo1, "ud5").replace(tramo2, 4);

            }
        } else if (numUd == "ud2") {
            if ((numEjer - 1) >= 1) {
                linkEjer = linkShort.replace(tramo2, numEjer - 1);
            } else {
                numUd = "ud1";
                linkEjer = linkShort.replace(tramo1, "ud1").replace(tramo2, 11);
            }
        } else if (numUd == "ud3") {
            if ((numEjer - 1) >= 1) {
                linkEjer = linkShort.replace(tramo2, numEjer - 1);

            } else {
                numUd = "ud2";
                linkEjer = linkShort.replace(tramo1, "ud2").replace(tramo2, 6);
            }
        } else if (numUd == "ud4") {
            if ((numEjer - 1) >= 1) {
                linkEjer = linkShort.replace(tramo2, numEjer - 1);
            } else {
                numUd = "ud3";
                linkEjer = linkShort.replace(tramo1, "ud3").replace(tramo2, 5);
            }
        } else if (numUd == "ud5") {
            if ((numEjer - 1) >= 1) {
                linkEjer = linkShort.replace(tramo2, numEjer - 1);
            } else {
                numUd = "ud4";
                linkEjer = linkShort.replace(tramo1, "ud4").replace(tramo2, 6);
            }
        }

        //Al objeto del evento (<a>) le agregamos el link modificado y el attr Target para enviarlo al Iframe
        $(this).attr("href", linkEjer);
        $(this).attr("target", "conteEjercicio");

        //llamamos a los metodos ajax() y agregarInfo() para hacer la peticion y modificar la cabecera del div #hcontPpal
        ajax(linkEjer);
        agregarInfo(linkEjer, numUd)
    }



    /*
      *
      * Petición ajax para mostrar el codigo html de cada ejercicio
      *
      */

    function ajax(link) {
        $.ajax({
            url: link,
            success: function (data) {
                reemplazo = cambiar(data)
                $("#contHtmlInt").html("<pre><code>" + reemplazo + "</code></pre>");

            }
        })
    };




    /*
     *
     * Funcion para incrustar el html y su codigo en cada contenedor
     *
     */

    //Seleccionamos el link que queremos mostrar y le añadimos el attr Target para abrir el link donde queramos,
    // en este caso en el iFrame 'contenedorEjercicios'
    $('ul>li>ul a').click(function () {
       
        //Mostramos los botones de cambio de pagina
        $("#btnR, #btnL").show();

        //Mostramos la barra de scroll
        $("#contenedorHtml").addClass("scroll")

        var link = $(this).attr("href");
        //seleccionamos el elemento padre (parents()) dos niveles hacia arriba (eq(2)) de los enlaces para trabajar con ellos
        var padre = $(this).parents().eq(2)
        $(this).attr("target", "conteEjercicio")

        // Enviamos una peticion Ajax con jQuery para sacar el HTML del link e introducirlo en el div 'contenedorHtml'
        ajax(link);

        // Agregamos al div general la información de cada unidad/ejercicio cuando pulsamos en los link
        agregarInfo(link, padre.attr("id"));
    })
});