 <?php

    Class Equipo{
        public $nombre;
        public $bandera;
        
        function __construct($nombre, $bandera){
            $this->nombre = $nombre;
            $this->bandera = $bandera;
        }
    }

    Class Grupo{
        public $cont_ganadores = 1;
        public $letra;
        public $equipos;
        public $llave1;
        public $llave2;

        function __construct($letra, $equipos, $llave1, $llave2){
            $this->letra = $letra;
            $this->equipos = $equipos;
            $this->llave1 = $llave1;
            $this->llave2 = $llave2;
        }
    }

    Class FaseGrupos{
        public $grupos;
        public $llaves;

        function __construct($grupos, $llaves){
            $this->grupos = $grupos;
            $this->llaves = $llaves;
        }
    }

    Class Llave{
        public $equipo1;
        public $equipo2;

        function __construct($equipo1, $equipo2){
            $this->equipo1 = $equipo1;
            $this->equipo2 = $equipo2;
        }

        function add_equipo1($equipo){
            $this->equipo1 = $equipo;
        }
        function add_equipo2($equipo){
            $this->equipo2 = $equipo;
        }
    }

    //LLAVES DE OCTAVOS

    $octavos1 = new Llave(NULL, NULL);
    $octavos2 = new Llave(NULL, NULL);
    $octavos3 = new Llave(NULL, NULL);
    $octavos4 = new Llave(NULL, NULL);
    $octavos5 = new Llave(NULL, NULL);
    $octavos6 = new Llave(NULL, NULL);
    $octavos7 = new Llave(NULL, NULL);
    $octavos8 = new Llave(NULL, NULL);

    $rusia = new Equipo('Rusia', 'Rusia');
    $arabiaSaudita = new Equipo('Arabia Saudita', 'ArabiaSaudita');
    $egipto = new Equipo('Egipto', 'Egipto');
    $uruguay = new Equipo('Uruguay', 'Uruguay');

    $grupoA = new Grupo('A', array($rusia, $arabiaSaudita, $egipto, $uruguay), $octavos1, $octavos2);

    $portugal = new Equipo('Portugal', 'Portugal');
    $espania = new Equipo('España', 'España');
    $marruecos = new Equipo('Marruecos', 'Marruecos');
    $iran = new Equipo('Irán', 'Iran');

    $grupoB = new Grupo('B', array($portugal, $espania, $marruecos, $iran), $octavos2, $octavos1);

    $francia = new Equipo('Francia', 'Francia');
    $austrailia = new Equipo('Australia', 'Australia');
    $peru = new Equipo('Perú', 'Peru');
    $dinamarca = new Equipo('Dinamarca', 'Dinamarca');

    $grupoC = new Grupo('C', array($francia, $austrailia, $peru, $dinamarca), $octavos3, $octavos4);

    $argentina = new Equipo('Argentina', 'Argentina');
    $islandia = new Equipo('Islandia', 'Islandia');
    $croacia = new Equipo('Croacia', 'Croacia');
    $nigeria = new Equipo('Nigeria', 'Nigeria');

    $grupoD = new Grupo('D', array($argentina, $islandia, $croacia, $nigeria), $octavos4, $octavos3);

    $brasil = new Equipo('Brasil', 'Brasil');
    $suiza = new Equipo('Suiza', 'Suiza');
    $costa_rica = new Equipo('Costa Rica', 'CostaRica');
    $serbia = new Equipo('Serbia', 'Serbia');

    $grupoE = new Grupo('E', array($brasil, $suiza, $costa_rica, $serbia), $octavos5, $octavos6);

    $alemania = new Equipo('Alemania', 'Alemania');
    $mexico = new Equipo('México', 'Mexico');
    $suecia = new Equipo('Suecia', 'Suecia');
    $corea_del_sur = new Equipo('Corea del Sur', 'CoreaDelSur');

    $grupoF = new Grupo('F', array($alemania, $mexico, $suecia, $corea_del_sur), $octavos6, $octavos5);

    $belgica = new Equipo('Bélgica', 'Belgica');
    $panama = new Equipo('Panamá', 'Panama');
    $tunez = new Equipo('Túnez', 'Tunez');
    $inglaterra = new Equipo('Inglaterra', 'Inglaterra');

    $grupoG = new Grupo('G', array($belgica, $panama, $tunez, $inglaterra), $octavos7, $octavos8);

    $polonia = new Equipo('Polonia', 'Polonia');
    $senegal = new Equipo('Senegal', 'Senegal');
    $colombia = new Equipo('Colombia', 'Colombia');
    $japon = new Equipo('Japón', 'Japon');

    $grupoH = new Grupo('H', array($polonia, $senegal, $colombia, $japon), $octavos8, $octavos7);

    $faseDeGrupos = new FaseGrupos(array($grupoA, $grupoB, $grupoC, $grupoD, $grupoE, $grupoF, $grupoG, $grupoH),
                                   array($octavos1, $octavos2, $octavos3, $octavos4, $octavos4, $octavos5,
                                    $octavos6, $octavos7, $octavos8));

    $json = json_encode($faseDeGrupos);
    header('Content-Type: application/json');
    echo $json;

 ?>

