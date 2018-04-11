var prueba;
$(() => {
    $.get("http://127.0.0.1:8080/FixtureRusia2018/php/carga_de_datos.php", function(datos)  {
        console.log(datos);
        app.run(datos);
        prueba = datos;
    });
})