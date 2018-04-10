 <?php

    Class Equipo{
        public $nombre;
        
        function __construct($nombre){
            $this->nombre = $nombre;
        }
    }

    Class Grupo{
        public $letra;
        public $equipos;

        function __construct($letra, $equipos){
            $this->letra = $letra;
            $this->equipos = $equipos;
        }
    }

    Class FaseGrupos{
        public $grupos

        function __construct($grupos){
            $this->grupos = $grupos;
        }
    }

    Class Llave{
        public $equipo1
        public $equipo2

        function __construct($equipo1, $equipo2){
            $this->equipo1 = $equipo1;
            $this->equipo2 = $equipo2;
        }
    }

    $rusia = new Equipo('Rusia');
    $arabiaSaudita = new Equipo('Arabia Saudita');
    $egipto = new Equipo('Egipto');
    $uruguay = new Equipo('Uruguay');

    $grupoA = new Grupo('A', array($rusia, $arabiaSaudita, $egipto, $uruguay));

    $portugal = new Equipo('Portugal');
    $espania = new Equipo('España');
    $marruecos = new Equipo('Marruecos');
    $iran = new Equipo('Irán');

    $grupoB = new Grupo('B', array($portugal, $espania, $marruecos, $iran));

    $francia = new Equipo('Francia');
    $austrailia = new Equipo('Australia');
    $peru = new Equipo('Perú');
    $dinamarca = new Equipo('Dinamarca');

    $grupoC = new Grupo('C', array($francia, $austrailia, $peru, $peru));

    $argentina = new Equipo('Argentina');
    $islandia = new Equipo('Islandia');
    $croacia = new Equipo('Croacia');
    $nigeria = new Equipo('Nigeria');

    $grupoD = new Grupo('D', array($argentina, $islandia, $croacia, $nigeria));

    $brasil = new Equipo('Brasil');
    $suiza = new Equipo('Suiza');
    $costa_rica = new Equipo('Costa Rica');
    $serbia = new Equipo('Serbia');

    $grupoE = new Grupo('E', array($brasil, $suiza, $costa_rica, $serbia));

    $alemania = new Equipo('Alemania');
    $mexico = new Equipo('México');
    $suecia = new Equipo('Suecia');
    $corea_del_sur = new Equipo('Corea del Sur');

    $grupoF = new Grupo('F', array($alemania, $mexico, $suecia, $corea_del_sur));

    $belgica = new Equipo('Bélgica');
    $panama = new Equipo('Panamá');
    $tunez = new Equipo('Túnez');
    $inglaterra = new Equipo('Inglaterra');

    $grupoG = new Grupo('G', array($belgica, $panama, $tunez, $inglaterra));

    $polonia = new Equipo('Polonia');
    $senegal = new Equipo('Senegal');
    $colombia = new Equipo('Colombia');
    $japon = new Equipo('Japón');

    $grupoH = new Grupo('H', array($polonia, $senegal, $colombia, $japon));
    





    $faseDeGrupos = new FaseGrupos(array($grupoA, $grupoB, $grupoC, $grupoD, $grupoE, $grupoF, $grupoG, $grupoH));

    $json = json_encode($faseDeGrupos);
    header('Content-Type: application/json');
    echo $json;

 ?>

