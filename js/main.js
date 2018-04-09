var prueba;
var fixture = {};
$(() => {
    $.get("http://127.0.0.1:8080/FixtureRusia2018/php/carga_de_datos.php", function(datos)  {
        console.log(datos);
        prueba = datos;
        return Object.assign(fixture,datos,{
            grupoArgentina: function(numero){
            return this.grupos[numero];
        }});
    });
})




