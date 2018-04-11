var app = (function(scope = {}) {
    var fixture;

    var fixtureFactory = (datos) => {
        return null;
    }

    var run = (datos) => {
        //fixture = fixtureFactory(datos);
        datos.grupos.forEach(g => {
            var grupo = app.templates.grupoTemplate(g);
            var $grupo = $(grupo);
            $("tr", $grupo).click(function() {
                console.log("click en grupo", g.letra);
            });
            $grupo.appendTo($("#grupos"));
        });
        var partidos = app.templates.partidosTemplate(datos.partidos);
        
        var $partidos = $(partidos);
        $("input", $partidos).change(ganaunpartido);
        $partidos.appendTo($("#partidos"));
    }

    var ganaunpartido = function() {
        var data = $(this).data();
        console.log(data.equipo, $(this).val());
    }

    return Object.assign(scope, {run});
})();
