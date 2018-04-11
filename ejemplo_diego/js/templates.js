(function(scope = {}) {
    
    var grupoTemplate = function(data) {
        return `<h4>${data.letra}</h4>
        <table>
            ${data.equipos.map(e => `<tr><td>${e}</td></tr>`).join("")}
        </table>`;
    }

    var partidoTemplate = function(partido) {
        return `<tr>
            <td>${partido.estadio}</td>
            <td>${partido.fecha}</td>
            <td>${partido.local}</td>
            <td><input data-equipo="${partido.local}" type="number" name="local" value="0" /></td>
            <td>${partido.vicitante}</td>
            <td><input data-equipo="${partido.vicitante}" type="number" name="vicitante" value="0" /></td>
        </tr>`;
    }

    var partidosTemplate = function(partidos) {
        return `<table>
            ${partidos.map(p => partidoTemplate(p)).join("")}
            </table>`;
    }

    return Object.assign(scope, {grupoTemplate, partidosTemplate});

})(app.templates || (app.templates = {}));
