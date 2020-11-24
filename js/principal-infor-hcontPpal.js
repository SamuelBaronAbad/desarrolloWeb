

function agregarInfo(link, selector) {
    switch (selector) {
        case "ud1":
            if (link == "html/ud1/Ejercicio1.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 1 - Ejercicio 1<br><span class='cursiva'>Dias de la Semana</span></h1>" +
                    "<p>Se creará un elemento Array con los dias de la semana y se imprimirá en orden</p>")
            } else if (link == "html/ud1/Ejercicio2.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 1 - Ejercicio 2 <br><span class='cursiva'>Array con diferentes elementos</span></h1>" +
                    "<p>Se creará un elemento Array y usaremos sus elementos para operar con ellos</p>")
            }
            else if (link == "html/ud1/Ejercicio3.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 1 - Ejercicio 3 <br><span class='cursiva'>Número mayor entre 3 valores</span></h1>" +
                    "<p>Se piden 3 valores numéricos y devuelve el mayor de los tres</p>")
            }
            else if (link == "html/ud1/Ejercicio4.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 1 - Ejercicio 4 <br><span class='cursiva'>Tabla de multiplicar</span></h1>" +
                    "<p>Introduce un número y se muestra la tabla de multiplicar del mismo</p>")
            }
            else if (link == "html/ud1/Ejercicio5.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 1 - Ejercicio 5 <br><span class='cursiva'>Modificar Atributos Tabla</span></h1>" +
                    "<p>Se creará una tabla y se podrá modificar el color del Background y de la Fuente</p>")
            }
            else if (link == "html/ud1/Ejercicio6.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 1 - Ejercicio 6 <br><span class='cursiva'>Invertir orden de Array de numeros</span></h1>" +
                    "<p>Se creará un Array con 10 numeros, se muestran y se invierte el orden de los numeros</p>")
            }
            else if (link == "html/ud1/Ejercicio7.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 1 - Ejercicio 7<br><span class='cursiva'>Adivinar el número oculto</span></h1>" +
                    "<p>Se pide adivinar el número oculto generado aleatoriamente con 5 intentos</p>")
            }
            else if (link == "html/ud1/Ejercicio8.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 1 - Ejercicio 8<br><span class='cursiva'>Secuencia de imagenes</span></h1>" +
                    "<p>Se creará una galería de imagenes y dos botones para acceder a la siguiente/anterior imagen</p>")
            }
            else if (link == "html/ud1/Ejercicio9.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 1 - Ejercicio 9<br><span class='cursiva'>Imagen al azar</span></h1>" +
                    "<p>Se creará una galería de imagenes y un botón para mostrar de forma aleatoria una imagen</p>")
            }
            else if (link == "html/ud1/Ejercicio10.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 1 - Ejercicio 10<br><span class='cursiva'>Selector de imagenes</span></h1>" +
                    "<p>Se creará una galería de imagenes y un selector para elegir la imagen deseada</p>")
            }
            else if (link == "html/ud1/Ejercicio11.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 1 - Ejercicio 11 <br><span class='cursiva'>Formulario</span></h1>" +
                    "<p>Se creará un Formulario y se validarán los campos</p>")
            } break;
        case "ud2":
            if (link == "html/ud2/Ejercicio1.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 2 - Ejercicio 1 <br><span class='cursiva'>Buscando elementos en el texto</span></h1>" +
                    "<p>A partir de un texto de ejemplo, se hará un recuento de los enlaces que contiene y se mostrará</p>")
            } else if (link == "html/ud2/Ejercicio2.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 2 - Ejercicio 2 <br><span class='cursiva'>Mostrar texto oculto</span></h1>" +
                    "<p>En un texto dado, se ocultará parte de él y se mostrará pulsando en un enlace</p>")
            }
            else if (link == "html/ud2/Ejercicio3.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 2 - Ejercicio 3 <br><span class='cursiva'>Agregar elemento a una lista</span></h1>" +
                    "<p>Se creará un botón que añada otro elemento a la lista</p>")
            }
            else if (link == "html/ud2/Ejercicio4.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 2 - Ejercicio 4 <br><span class='cursiva'>Mostrar y ocultar contenidos</span></h1>" +
                    "<p>Dado tres parrafos, se creará un botón para ocultar y mostrar cada uno</p>")
            }
            else if (link == "html/ud2/Ejercicio5.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 2 - Ejercicio 5 <br><span class='cursiva'>Mostrar posición de Ratón y carácter de Teclado</span></h1>" +
                    "<p>Se mostrará la posición del ratón respecto al Navegador y la Página, y pulsando cualquier tecla se mostrará su código y el carácter pulsado</p>")
            }
            else if (link == "html/ud2/Ejercicio6.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 2 - Ejercicio 6 <br><span class='cursiva'>Mostrar zonas de ventana</span></h1>" +
                    "<p>Se dividirá la ventana del documento en 4 partes y al clickear sobre una de ellas mostrará la info de la misma</p>")
            } break;
        case "ud3":
            if (link == "html/ud3/Ejercicio1.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 3 - Ejercicio 1 <br><span class='cursiva'>Limitar max. caracteres al escribir</span></h1>" +
                    "<p>Se creará un TextArea y limitaremos el max. de caracteres, además se mostrará los caracteres restantes para llegar al límite</p>")
            } else if (link == "html/ud3/Ejercicio2.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 3 - Ejercicio 2 <br><span class='cursiva'>Formulario y Validaciones </span></h1>" +
                    "<p>Se creará un Formulario y se validarán los campos</p>")
            }
            else if (link == "html/ud3/Ejercicio3.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 3 - Ejercicio 3 <br><span class='cursiva'>Validar fecha</span></h1>" +
                    "<p>Se introducirá una fecha y se validará según el formato pedido</p>")
            }
            else if (link == "html/ud3/Ejercicio4.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 3 - Ejercicio 4 <br><span class='cursiva'>Contador regresivo</span></h1>" +
                    "<p>Se creará una cuenta atrás desde la fecha insertada hasta el dia de hoy</p>")
            }
            else if (link == "html/ud3/Ejercicio5.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 3 - Ejercicio 5 <br><span class='cursiva'>Tooltip con jQueri-ui</span></h1>" +
                    "<p>Se creará un tooltip con una librería externa y se activará al pasar por el enlace</p>")
            } break;
        case "ud4":
            if (link == "html/ud4/Ejercicio1.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 4 - Ejercicio 1 <br><span class='cursiva'>Factura con Json</span></h1>" +
                    "<p>Se creará un elemento Array con los dias de la semana y se imprimirá en orden</p>")
            } else if (link == "html/ud4/Ejercicio2.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 4 - Ejercicio 2 <br><span class='cursiva'>Usando Prototype - Extender un Array</span></h1>" +
                    "<p>Se creará un elemento Array y se introducirán nuevos valores siempre que no estén repetidos</p>")
            }
            else if (link == "html/ud4/Ejercicio3.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 4 - Ejercicio 3 <br><span class='cursiva'>Usando Prototype - Recortar un String</span></h1>" +
                    "<p>Se creará un elemento String y se recortará donde se le indique</p>")
            }
            else if (link == "html/ud4/Ejercicio4.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 4 - Ejercicio 4 <br><span class='cursiva'>Usando Prototype - Quitar un elemento de un Array</span></h1>" +
                    "<p>Se creará un elemento Array y se extraerá uno de sus valores</p>")
            }
            else if (link == "html/ud4/Ejercicio5.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 4 - Ejercicio 5 <br><span class='cursiva'>Usando Prototype - InstanceOf</span></h1>" +
                    "<p>Se creará una función que detecte si existen funciones dentro de otras, devolviendo True o False</p>")
            }
            else if (link == "html/ud4/Ejercicio6.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 4 - Ejercicio 6 <br><span class='cursiva'>Peticiones Ajax</span></h1>" +
                    "<p>Se pedirá una URL html y se mostrará el html que contiene, el tiempo en ejecutarse y el estado de la petición </p>")
            } break;
        case "ud5":
            if (link == "html/ud5/Ejercicio1.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 5 - Ejercicio 1 <br><span class='cursiva'>Video HTML5</span></h1>" +
                    "<p>Se creará un video de HTML5 con un archivo local</p>")
            } else if (link == "html/ud5/Ejercicio2.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 5 - Ejercicio 2 <br><span class='cursiva'>Audio HTML5</span></h1>" +
                    "<p>Se creará un audio HTML5 con un archivo local</p>")
            }
            else if (link == "html/ud5/Ejercicio3.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 5 - Ejercicio 3 <br><span class='cursiva'>Canvas HTML5</span></h1>" +
                    "<p>Se dibujará con Canvas diferentes elementos mostrando varias propiedades de Canvas HTML5</p>")
            }
            else if (link == "html/ud5/Ejercicio4.html") {
                $("#hcontPpal").html(
                    "<h1>Unidad 5 - Ejercicio 4 <br><span class='cursiva'>Canvas con imagenes</span></h1>" +
                    "<p>Uso de Canvas con imagenes modificando sus propiedaes</p>")
            } break;
    }
}