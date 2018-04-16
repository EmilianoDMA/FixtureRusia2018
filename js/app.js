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
                if ((g.cont_ganadores <= 2) && ($(this).attr('id') != 'seleccionado')){
                    $(this).attr("style", "background-color: #f42242");
                    $(this).attr("id", "seleccionado");
                    //console.log($(this).attr('id'));
                    var nombre = $(this).text();
                    $('[data-grupo='+g.letra+g.cont_ganadores+']').html($(this).html())
                    $(this).html('<strong>' + g.cont_ganadores + '</strong>' + $(this).html());
                    var bandera = "../static/img/banderas/" + $(this).attr('abbr') +".png";
                    //console.log(bandera);
                    $('[data-grupo='+g.letra+g.cont_ganadores+']').attr("style", "background-image: url(\"" + bandera + "\"); background-position: calc(100% - 10px) center; background-size: 100%;");
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
