(function(scope = {}) {
    
    var grupoTemplate = function(data) {
        return `<div class="col-sm-6 col-lg-3"><div style="background-color:black;
        color:#fff9f9; text-align: center"><b>GRUPO ${data.letra} </b></div>
        <table style="width:100%">
            ${data.equipos.map(e => `<tr><td style="border-top-color: transparent;"
            onmouseover="mOver(this)" onmouseout="mOut(this)">
            <img src="../static/img/banderas/${e.nombre}.png" height="22" width="22">
            <strong>${e.nombre}</strong></td></tr>`).join("")}
        </table>
        </div>`;
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
