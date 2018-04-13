var app = (function(scope = {}) {
    var fixture;

    var fixtureFactory = (datos) => {
        return null;
    }

    var td;
    var run = (datos) => {
        //fixture = fixtureFactory(datos);
        datos.grupos.forEach(g => {
            var grupo = app.templates.grupoTemplate(g);
            var $grupo = $(grupo);
            $("td", $grupo).click(function() {
                console.log("click en grupo", g.letra, g.cont_ganadores);
                console.log($(this));
                var nombre;
                if (g.cont_ganadores <= 2){
                    $(this).attr("style", "background-color: #f42242");
                    $(this).attr("id", "seleccionado");
                    $('[data-grupo='+g.letra+g.cont_ganadores+']').html($(this).html())
                    $(this).html(g.cont_ganadores + $(this).html());
                    var bandera = "../static/img/banderas/Rusia.png";
                    $('[data-grupo='+g.letra+g.cont_ganadores+']').attr("style", "background-image: url(\"" + bandera + "\")");
                    g.cont_ganadores = g.cont_ganadores + 1;
                }
            });
            $grupo.appendTo($("#grupos"));
        });
        
        //var partidos = app.templates.partidosTemplate(datos.partidos);
        
        //var $partidos = $(partidos);
        //$("input", $partidos).change(ganaunpartido);
        //$partidos.appendTo($("#partidos"));
    }

    return Object.assign(scope, {run});
})();
