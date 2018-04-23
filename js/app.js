var app = (function(scope = {}) {
    var fixture;

    var run = (datos) => {
        datos.grupos.forEach(g => {
            var grupo = app.templates.grupoTemplate(g);
            var $grupo = $(grupo);
            $("td", $grupo).click(function() {
                if ((g.cont_ganadores <= 2) && ($(this).attr('id') != 'seleccionado')){
                    //if (g.cont_ganadores == 1){
                    //    g.llave1.add_equipo1();
                    //}
                    $(this).attr("style", "background-color: rgba(216, 6, 6, 0.9)");
                    $(this).attr("id", "seleccionado");
                    $('[data-grupo='+g.letra+g.cont_ganadores+']').html("<span><strong>" + $(this).html() + "</strong></span>");
                    $(this).html('<strong>' + g.cont_ganadores + '</strong>' + $(this).html());
                    var bandera = "../static/img/fondos/" + $(this).attr('abbr') +".jpg";
                    $('[data-grupo='+g.letra+g.cont_ganadores+']').attr("style", "background-image: url(\"" + bandera + "\"); border: hidden; background-repeat: no-repeat; background-position: center center; background-size: 100%;");
                    $('[data-grupo='+g.letra+g.cont_ganadores+']').attr("abbr", $(this).attr('abbr'));
                    g.cont_ganadores = g.cont_ganadores + 1;
                }
            });
            $grupo.appendTo($("#grupos"));
        });
    }

    return Object.assign(scope, {run});
})();
