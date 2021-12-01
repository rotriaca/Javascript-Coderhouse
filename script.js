var nombreUsuario;
var emailusuario;
let arrayDeSeries = [];

let botonStart = document.getElementById("comienzoCuestionario")
botonStart.onclick = afterClick;

function afterClick(){
    function pedirDatos () {
        nombreUsuario = prompt("Ingrese su nombre: ");
        emailUsuario = prompt("Ingrese su email: ");
    }
    
    function saludo (){
        alert("Bienvenid@ " + nombreUsuario + "!");
    }
    
    function calcularAnual () {
        let tiempo = prompt("Cuantas horas al día dedica a ver series?");
        let anual = tiempo * 365; 
        alert("Estas " + anual + " horas al año viendo series");
    }
    
    class Series {
        constructor (idSerie, nombre, genero, plataforma) {
        this.idSerie = idSerie;
        this.nombre = nombre;
        this.genero = genero;
        this.plataforma = plataforma;
        }
        eleccion() {
            prompt("Te recomiendo ver: " + this.nombre + " en " + this.plataforma);
        }
    }
    
    let serie1 = new Series(1, "Years and years", "Drama", "HBO");
    let serie2 = new Series(2, "Fleabag", "Comedia", "Amazon Prime");
    let serie3 = new Series(3, "Mare of Eastown", "Policial", "HBO");
    let serie4 = new Series(4, "The Kingdom", "Terror", "Netflix");
    let serie5 = new Series(5, "Pose", "Drama", "STAR");
    
    arrayDeSeries.push(serie1, serie2, serie3, serie4, serie5);
    console.log(arrayDeSeries);
    
    pedirDatos();
    saludo ();
    calcularAnual ();
    
    let preguntaGenero = prompt("Ingrese 1 si desea ver una serie dramática o 2 si desea ver una serie de comedia: ");
    
    if(preguntaGenero = 1){
        serie1.eleccion();
    }
    else{
        serie2.eleccion();
    }
    
    /*const enHbo = arrayDeSeries.filter(series => series.plataforma === "HBO"); 
    console.log(enHbo);
    
    function ordenarArray(x, y){
        if (x.nombre < y.nombre) {
            return -1;
        }
        else if (x.nombre > y.nombre) {
            return 1;
        }
        else{
        return 0;
        }
    }
    var mostrarOrden = arrayDeSeries.sort(ordenarArray);
    console.log(mostrarOrden);*/

    function imprimirListado(){
        var imprimir = "";
        for(var i = 0; i < arrayDeSeries.length; i++){
        imprimir += "<br>"+ arrayDeSeries[i].nombre;
        }   
        return imprimir;
    }
    
    function saludo() {
        document.getElementById('mensajeDom').innerHTML='Bienvenid@ ' + nombreUsuario;
        document.getElementById('listaCompleta').innerHTML = imprimirListado();
    }  
}