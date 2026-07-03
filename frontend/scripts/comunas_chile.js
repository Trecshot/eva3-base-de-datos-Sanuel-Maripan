// ===============================================
// Base de datos: AP_N3_C1
// Colección: comunas
// Script completo comunas de Chile para MongoDB
// ===============================================

use("AP_N3_C1");

db.createCollection("comunas");

db.comunas.deleteMany({});

db.comunas.insertMany([
  {
    "codigo": "15101",
    "nombre": "Arica",
    "region": "Región de Arica y Parinacota"
  },
  {
    "codigo": "15102",
    "nombre": "Camarones",
    "region": "Región de Arica y Parinacota"
  },
  {
    "codigo": "15201",
    "nombre": "Putre",
    "region": "Región de Arica y Parinacota"
  },
  {
    "codigo": "15202",
    "nombre": "General Lagos",
    "region": "Región de Arica y Parinacota"
  },
  {
    "codigo": "01101",
    "nombre": "Iquique",
    "region": "Región de Tarapacá"
  },
  {
    "codigo": "01107",
    "nombre": "Alto Hospicio",
    "region": "Región de Tarapacá"
  },
  {
    "codigo": "01401",
    "nombre": "Pozo Almonte",
    "region": "Región de Tarapacá"
  },
  {
    "codigo": "01402",
    "nombre": "Camiña",
    "region": "Región de Tarapacá"
  },
  {
    "codigo": "01403",
    "nombre": "Colchane",
    "region": "Región de Tarapacá"
  },
  {
    "codigo": "01404",
    "nombre": "Huara",
    "region": "Región de Tarapacá"
  },
  {
    "codigo": "01405",
    "nombre": "Pica",
    "region": "Región de Tarapacá"
  },
  {
    "codigo": "02101",
    "nombre": "Antofagasta",
    "region": "Región de Antofagasta"
  },
  {
    "codigo": "02102",
    "nombre": "Mejillones",
    "region": "Región de Antofagasta"
  },
  {
    "codigo": "02103",
    "nombre": "Sierra Gorda",
    "region": "Región de Antofagasta"
  },
  {
    "codigo": "02104",
    "nombre": "Taltal",
    "region": "Región de Antofagasta"
  },
  {
    "codigo": "02201",
    "nombre": "Calama",
    "region": "Región de Antofagasta"
  },
  {
    "codigo": "02202",
    "nombre": "Ollagüe",
    "region": "Región de Antofagasta"
  },
  {
    "codigo": "02203",
    "nombre": "San Pedro de Atacama",
    "region": "Región de Antofagasta"
  },
  {
    "codigo": "02301",
    "nombre": "Tocopilla",
    "region": "Región de Antofagasta"
  },
  {
    "codigo": "02302",
    "nombre": "María Elena",
    "region": "Región de Antofagasta"
  },
  {
    "codigo": "03101",
    "nombre": "Copiapó",
    "region": "Región de Atacama"
  },
  {
    "codigo": "03102",
    "nombre": "Caldera",
    "region": "Región de Atacama"
  },
  {
    "codigo": "03103",
    "nombre": "Tierra Amarilla",
    "region": "Región de Atacama"
  },
  {
    "codigo": "03201",
    "nombre": "Chañaral",
    "region": "Región de Atacama"
  },
  {
    "codigo": "03202",
    "nombre": "Diego de Almagro",
    "region": "Región de Atacama"
  },
  {
    "codigo": "03301",
    "nombre": "Vallenar",
    "region": "Región de Atacama"
  },
  {
    "codigo": "03302",
    "nombre": "Alto del Carmen",
    "region": "Región de Atacama"
  },
  {
    "codigo": "03303",
    "nombre": "Freirina",
    "region": "Región de Atacama"
  },
  {
    "codigo": "03304",
    "nombre": "Huasco",
    "region": "Región de Atacama"
  },
  {
    "codigo": "04101",
    "nombre": "La Serena",
    "region": "Región de Coquimbo"
  },
  {
    "codigo": "04102",
    "nombre": "Coquimbo",
    "region": "Región de Coquimbo"
  },
  {
    "codigo": "04103",
    "nombre": "Andacollo",
    "region": "Región de Coquimbo"
  },
  {
    "codigo": "04104",
    "nombre": "La Higuera",
    "region": "Región de Coquimbo"
  },
  {
    "codigo": "04105",
    "nombre": "Paiguano",
    "region": "Región de Coquimbo"
  },
  {
    "codigo": "04106",
    "nombre": "Vicuña",
    "region": "Región de Coquimbo"
  },
  {
    "codigo": "04201",
    "nombre": "Illapel",
    "region": "Región de Coquimbo"
  },
  {
    "codigo": "04202",
    "nombre": "Canela",
    "region": "Región de Coquimbo"
  },
  {
    "codigo": "04203",
    "nombre": "Los Vilos",
    "region": "Región de Coquimbo"
  },
  {
    "codigo": "04204",
    "nombre": "Salamanca",
    "region": "Región de Coquimbo"
  },
  {
    "codigo": "04301",
    "nombre": "Ovalle",
    "region": "Región de Coquimbo"
  },
  {
    "codigo": "04302",
    "nombre": "Combarbalá",
    "region": "Región de Coquimbo"
  },
  {
    "codigo": "04303",
    "nombre": "Monte Patria",
    "region": "Región de Coquimbo"
  },
  {
    "codigo": "04304",
    "nombre": "Punitaqui",
    "region": "Región de Coquimbo"
  },
  {
    "codigo": "04305",
    "nombre": "Río Hurtado",
    "region": "Región de Coquimbo"
  },
  {
    "codigo": "05101",
    "nombre": "Valparaíso",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05102",
    "nombre": "Casablanca",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05103",
    "nombre": "Concón",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05104",
    "nombre": "Juan Fernández",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05105",
    "nombre": "Puchuncaví",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05107",
    "nombre": "Quintero",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05109",
    "nombre": "Viña del Mar",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05201",
    "nombre": "Isla de Pascua",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05301",
    "nombre": "Los Andes",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05302",
    "nombre": "Calle Larga",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05303",
    "nombre": "Rinconada",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05304",
    "nombre": "San Esteban",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05401",
    "nombre": "La Ligua",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05402",
    "nombre": "Cabildo",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05403",
    "nombre": "Papudo",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05404",
    "nombre": "Petorca",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05405",
    "nombre": "Zapallar",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05501",
    "nombre": "Quillota",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05502",
    "nombre": "Calera",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05503",
    "nombre": "Hijuelas",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05504",
    "nombre": "La Cruz",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05506",
    "nombre": "Nogales",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05601",
    "nombre": "San Antonio",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05602",
    "nombre": "Algarrobo",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05603",
    "nombre": "El Quisco",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05604",
    "nombre": "El Tabo",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05605",
    "nombre": "Cartagena",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05606",
    "nombre": "Santo Domingo",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05701",
    "nombre": "San Felipe",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05702",
    "nombre": "Catemu",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05703",
    "nombre": "Llaillay",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05704",
    "nombre": "Panquehue",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05705",
    "nombre": "Putaendo",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05706",
    "nombre": "Santa María",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05801",
    "nombre": "Quilpué",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05802",
    "nombre": "Limache",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05803",
    "nombre": "Olmué",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "05804",
    "nombre": "Villa Alemana",
    "region": "Región de Valparaíso"
  },
  {
    "codigo": "13101",
    "nombre": "Santiago",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13102",
    "nombre": "Cerrillos",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13103",
    "nombre": "Cerro Navia",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13104",
    "nombre": "Conchalí",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13105",
    "nombre": "El Bosque",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13106",
    "nombre": "Estación Central",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13107",
    "nombre": "Huechururaba",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13108",
    "nombre": "Independencia",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13109",
    "nombre": "La Cisterna",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13110",
    "nombre": "La Florida",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13111",
    "nombre": "La Granja",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13112",
    "nombre": "La Pintana",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13113",
    "nombre": "La Reina",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13114",
    "nombre": "Las Condes",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13115",
    "nombre": "Lo Barnechea",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13116",
    "nombre": "Lo Espejo",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13117",
    "nombre": "Lo Prado",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13118",
    "nombre": "Macul",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13119",
    "nombre": "Maipú",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13120",
    "nombre": "Ñuñoa",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13121",
    "nombre": "Pedro Aguirre Cerda",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13122",
    "nombre": "Peñalolén",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13123",
    "nombre": "Providencia",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13124",
    "nombre": "Pudahuel",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13125",
    "nombre": "Quilicura",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13126",
    "nombre": "Quinta Normal",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13127",
    "nombre": "Recoleta",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13128",
    "nombre": "Renca",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13129",
    "nombre": "San Joaquín",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13130",
    "nombre": "San Miguel",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13131",
    "nombre": "San Ramón",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13132",
    "nombre": "Vitacura",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13201",
    "nombre": "Puente Alto",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13202",
    "nombre": "Pirque",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13203",
    "nombre": "San José de Maipo",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13301",
    "nombre": "Colina",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13302",
    "nombre": "Lampa",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13303",
    "nombre": "Tiltil",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13401",
    "nombre": "San Bernardo",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13402",
    "nombre": "Buin",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13403",
    "nombre": "Calera de Tango",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13404",
    "nombre": "Paine",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13501",
    "nombre": "Melipilla",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13502",
    "nombre": "Alhué",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13503",
    "nombre": "Curacaví",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13504",
    "nombre": "María Pinto",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13505",
    "nombre": "San Pedro",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13601",
    "nombre": "Talagante",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13602",
    "nombre": "El Monte",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13603",
    "nombre": "Isla de Maipo",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13604",
    "nombre": "Padre Hurtado",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "13605",
    "nombre": "Peñaflor",
    "region": "Región Metropolitana de Santiago"
  },
  {
    "codigo": "06101",
    "nombre": "Rancagua",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06102",
    "nombre": "Codegua",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06103",
    "nombre": "Coinco",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06104",
    "nombre": "Coltauco",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06105",
    "nombre": "Doñihue",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06106",
    "nombre": "Graneros",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06107",
    "nombre": "Las Cabras",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06108",
    "nombre": "Machalí",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06109",
    "nombre": "Malloa",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06110",
    "nombre": "Mostazal",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06111",
    "nombre": "Olivar",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06112",
    "nombre": "Peumo",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06113",
    "nombre": "Pichidegua",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06114",
    "nombre": "Quinta de Tilcoco",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06115",
    "nombre": "Rengo",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06116",
    "nombre": "Requínoa",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06117",
    "nombre": "San Vicente",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06201",
    "nombre": "Pichilemu",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06202",
    "nombre": "La Estrella",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06203",
    "nombre": "Litueche",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06204",
    "nombre": "Navidad",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06205",
    "nombre": "Paredones",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06206",
    "nombre": "Marchihue",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06301",
    "nombre": "San Fernando",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06302",
    "nombre": "Chépica",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06303",
    "nombre": "Chimbarongo",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06304",
    "nombre": "Lolol",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06305",
    "nombre": "Nancagua",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06306",
    "nombre": "Palmilla",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06307",
    "nombre": "Peralillo",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06308",
    "nombre": "Placilla",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06309",
    "nombre": "Pumanque",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "06310",
    "nombre": "Santa Cruz",
    "region": "Región del Libertador General Bernardo O'Higgins"
  },
  {
    "codigo": "07101",
    "nombre": "Talca",
    "region": "Región del Maule"
  },
  {
    "codigo": "07102",
    "nombre": "Constitución",
    "region": "Región del Maule"
  },
  {
    "codigo": "07103",
    "nombre": "Curepto",
    "region": "Región del Maule"
  },
  {
    "codigo": "07104",
    "nombre": "Empedrado",
    "region": "Región del Maule"
  },
  {
    "codigo": "07105",
    "nombre": "Maule",
    "region": "Región del Maule"
  },
  {
    "codigo": "07106",
    "nombre": "Pelarco",
    "region": "Región del Maule"
  },
  {
    "codigo": "07107",
    "nombre": "Pencahue",
    "region": "Región del Maule"
  },
  {
    "codigo": "07108",
    "nombre": "Río Claro",
    "region": "Región del Maule"
  },
  {
    "codigo": "07109",
    "nombre": "San Clemente",
    "region": "Región del Maule"
  },
  {
    "codigo": "07110",
    "nombre": "San Rafael",
    "region": "Región del Maule"
  },
  {
    "codigo": "07201",
    "nombre": "Cauquenes",
    "region": "Región del Maule"
  },
  {
    "codigo": "07202",
    "nombre": "Chanco",
    "region": "Región del Maule"
  },
  {
    "codigo": "07203",
    "nombre": "Pelluhue",
    "region": "Región del Maule"
  },
  {
    "codigo": "07301",
    "nombre": "Curicó",
    "region": "Región del Maule"
  },
  {
    "codigo": "07302",
    "nombre": "Hualañé",
    "region": "Región del Maule"
  },
  {
    "codigo": "07303",
    "nombre": "Licantén",
    "region": "Región del Maule"
  },
  {
    "codigo": "07304",
    "nombre": "Molina",
    "region": "Región del Maule"
  },
  {
    "codigo": "07305",
    "nombre": "Rauco",
    "region": "Región del Maule"
  },
  {
    "codigo": "07306",
    "nombre": "Romeral",
    "region": "Región del Maule"
  },
  {
    "codigo": "07307",
    "nombre": "Sagrada Familia",
    "region": "Región del Maule"
  },
  {
    "codigo": "07308",
    "nombre": "Teno",
    "region": "Región del Maule"
  },
  {
    "codigo": "07309",
    "nombre": "Vichuquén",
    "region": "Región del Maule"
  },
  {
    "codigo": "07401",
    "nombre": "Linares",
    "region": "Región del Maule"
  },
  {
    "codigo": "07402",
    "nombre": "Colbún",
    "region": "Región del Maule"
  },
  {
    "codigo": "07403",
    "nombre": "Longaví",
    "region": "Región del Maule"
  },
  {
    "codigo": "07404",
    "nombre": "Parral",
    "region": "Región del Maule"
  },
  {
    "codigo": "07405",
    "nombre": "Retiro",
    "region": "Región del Maule"
  },
  {
    "codigo": "07406",
    "nombre": "San Javier",
    "region": "Región del Maule"
  },
  {
    "codigo": "07407",
    "nombre": "Villa Alegre",
    "region": "Región del Maule"
  },
  {
    "codigo": "07408",
    "nombre": "Yerbas Buenas",
    "region": "Región del Maule"
  },
  {
    "codigo": "16101",
    "nombre": "Chillán",
    "region": "Región de Ñuble"
  },
  {
    "codigo": "16102",
    "nombre": "Chillán Viejo",
    "region": "Región de Ñuble"
  },
  {
    "codigo": "16103",
    "nombre": "El Carmen",
    "region": "Región de Ñuble"
  },
  {
    "codigo": "16104",
    "nombre": "Pemuco",
    "region": "Región de Ñuble"
  },
  {
    "codigo": "16105",
    "nombre": "Pinto",
    "region": "Región de Ñuble"
  },
  {
    "codigo": "16106",
    "nombre": "Quillón",
    "region": "Región de Ñuble"
  },
  {
    "codigo": "16107",
    "nombre": "San Ignacio",
    "region": "Región de Ñuble"
  },
  {
    "codigo": "16108",
    "nombre": "Yungay",
    "region": "Región de Ñuble"
  },
  {
    "codigo": "16201",
    "nombre": "Quirihue",
    "region": "Región de Ñuble"
  },
  {
    "codigo": "16202",
    "nombre": "Cobquecura",
    "region": "Región de Ñuble"
  },
  {
    "codigo": "16203",
    "nombre": "Coelemu",
    "region": "Región de Ñuble"
  },
  {
    "codigo": "16204",
    "nombre": "Ninhue",
    "region": "Región de Ñuble"
  },
  {
    "codigo": "16205",
    "nombre": "Portezuelo",
    "region": "Región de Ñuble"
  },
  {
    "codigo": "16206",
    "nombre": "Ránquil",
    "region": "Región de Ñuble"
  },
  {
    "codigo": "16207",
    "nombre": "Trehuaco",
    "region": "Región de Ñuble"
  },
  {
    "codigo": "16301",
    "nombre": "San Carlos",
    "region": "Región de Ñuble"
  },
  {
    "codigo": "16302",
    "nombre": "Coihueco",
    "region": "Región de Ñuble"
  },
  {
    "codigo": "16303",
    "nombre": "San Fabián",
    "region": "Región de Ñuble"
  },
  {
    "codigo": "16304",
    "nombre": "San Nicolás",
    "region": "Región de Ñuble"
  },
  {
    "codigo": "08101",
    "nombre": "Concepción",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08102",
    "nombre": "Coronel",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08103",
    "nombre": "Chiguayante",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08104",
    "nombre": "Florida",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08105",
    "nombre": "Hualqui",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08106",
    "nombre": "Lota",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08107",
    "nombre": "Penco",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08108",
    "nombre": "San Pedro de la Paz",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08109",
    "nombre": "Santa Juana",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08110",
    "nombre": "Talcahuano",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08111",
    "nombre": "Tomé",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08112",
    "nombre": "Hualpén",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08201",
    "nombre": "Lebu",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08202",
    "nombre": "Arauco",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08203",
    "nombre": "Cañete",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08204",
    "nombre": "Contulmo",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08205",
    "nombre": "Curanilahue",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08206",
    "nombre": "Los Álamos",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08207",
    "nombre": "Tirúa",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08301",
    "nombre": "Los Ángeles",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08302",
    "nombre": "Antuco",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08303",
    "nombre": "Cabrero",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08304",
    "nombre": "Laja",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08305",
    "nombre": "Mulchén",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08306",
    "nombre": "Nacimiento",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08307",
    "nombre": "Negrete",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08308",
    "nombre": "Quilaco",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08309",
    "nombre": "Quilleco",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08310",
    "nombre": "San Rosendo",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08311",
    "nombre": "Santa Bárbara",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08312",
    "nombre": "Tucapel",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08313",
    "nombre": "Yumbel",
    "region": "Región del Biobío"
  },
  {
    "codigo": "08314",
    "nombre": "Alto Biobío",
    "region": "Región del Biobío"
  },
  {
    "codigo": "09101",
    "nombre": "Temuco",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09102",
    "nombre": "Carahue",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09103",
    "nombre": "Cunco",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09104",
    "nombre": "Curarrehue",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09105",
    "nombre": "Freire",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09106",
    "nombre": "Galvarino",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09107",
    "nombre": "Gorbea",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09108",
    "nombre": "Lautaro",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09109",
    "nombre": "Loncoche",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09110",
    "nombre": "Melipeuco",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09111",
    "nombre": "Nueva Imperial",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09112",
    "nombre": "Padre Las Casas",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09113",
    "nombre": "Perquenco",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09114",
    "nombre": "Pitrufquén",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09115",
    "nombre": "Pucón",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09116",
    "nombre": "Saavedra",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09117",
    "nombre": "Teodoro Schmidt",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09118",
    "nombre": "Toltén",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09119",
    "nombre": "Vilcún",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09120",
    "nombre": "Villarrica",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09121",
    "nombre": "Cholchol",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09201",
    "nombre": "Angol",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09202",
    "nombre": "Collipulli",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09203",
    "nombre": "Curacautín",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09204",
    "nombre": "Ercilla",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09205",
    "nombre": "Lonquimay",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09206",
    "nombre": "Los Sauces",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09207",
    "nombre": "Lumaco",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09208",
    "nombre": "Purén",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09209",
    "nombre": "Renaico",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09210",
    "nombre": "Traiguén",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "09211",
    "nombre": "Victoria",
    "region": "Región de la Araucanía"
  },
  {
    "codigo": "14101",
    "nombre": "Valdivia",
    "region": "Región de Los Ríos"
  },
  {
    "codigo": "14102",
    "nombre": "Corral",
    "region": "Región de Los Ríos"
  },
  {
    "codigo": "14103",
    "nombre": "Lanco",
    "region": "Región de Los Ríos"
  },
  {
    "codigo": "14104",
    "nombre": "Los Lagos",
    "region": "Región de Los Ríos"
  },
  {
    "codigo": "14105",
    "nombre": "Máfil",
    "region": "Región de Los Ríos"
  },
  {
    "codigo": "14106",
    "nombre": "Mariquina",
    "region": "Región de Los Ríos"
  },
  {
    "codigo": "14107",
    "nombre": "Paillaco",
    "region": "Región de Los Ríos"
  },
  {
    "codigo": "14108",
    "nombre": "Panguipulli",
    "region": "Región de Los Ríos"
  },
  {
    "codigo": "14201",
    "nombre": "La Unión",
    "region": "Región de Los Ríos"
  },
  {
    "codigo": "14202",
    "nombre": "Futrono",
    "region": "Región de Los Ríos"
  },
  {
    "codigo": "14203",
    "nombre": "Lago Ranco",
    "region": "Región de Los Ríos"
  },
  {
    "codigo": "14204",
    "nombre": "Río Bueno",
    "region": "Región de Los Ríos"
  },
  {
    "codigo": "10101",
    "nombre": "Puerto Montt",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10102",
    "nombre": "Calbuco",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10103",
    "nombre": "Cochamó",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10104",
    "nombre": "Fresia",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10105",
    "nombre": "Frutillar",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10106",
    "nombre": "Los Muermos",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10107",
    "nombre": "Llanquihue",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10108",
    "nombre": "Puerto Varas",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10201",
    "nombre": "Castro",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10202",
    "nombre": "Ancud",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10203",
    "nombre": "Chonchi",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10204",
    "nombre": "Curaco de Vélez",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10205",
    "nombre": "Dalcahue",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10206",
    "nombre": "Puqueldón",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10207",
    "nombre": "Queilén",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10208",
    "nombre": "Quellón",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10209",
    "nombre": "Quemchi",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10210",
    "nombre": "Quinchao",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10301",
    "nombre": "Osorno",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10302",
    "nombre": "Puerto Octay",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10303",
    "nombre": "Purranque",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10304",
    "nombre": "Puyehue",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10305",
    "nombre": "Río Negro",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10306",
    "nombre": "San Juan de la Costa",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10307",
    "nombre": "San Pablo",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10401",
    "nombre": "Chaitén",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10402",
    "nombre": "Futaleufú",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10403",
    "nombre": "Hualaihué",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "10404",
    "nombre": "Palena",
    "region": "Región de Los Lagos"
  },
  {
    "codigo": "11101",
    "nombre": "Coyhaique",
    "region": "Región de Aysén"
  },
  {
    "codigo": "11102",
    "nombre": "Lago Verde",
    "region": "Región de Aysén"
  },
  {
    "codigo": "11201",
    "nombre": "Aysén",
    "region": "Región de Aysén"
  },
  {
    "codigo": "11202",
    "nombre": "Cisnes",
    "region": "Región de Aysén"
  },
  {
    "codigo": "11203",
    "nombre": "Guaitecas",
    "region": "Región de Aysén"
  },
  {
    "codigo": "11301",
    "nombre": "Cochrane",
    "region": "Región de Aysén"
  },
  {
    "codigo": "11302",
    "nombre": "O'Higgins",
    "region": "Región de Aysén"
  },
  {
    "codigo": "11303",
    "nombre": "Tortel",
    "region": "Región de Aysén"
  },
  {
    "codigo": "11401",
    "nombre": "Chile Chico",
    "region": "Región de Aysén"
  },
  {
    "codigo": "11402",
    "nombre": "Río Ibáñez",
    "region": "Región de Aysén"
  },
  {
    "codigo": "12101",
    "nombre": "Punta Arenas",
    "region": "Región de Magallanes"
  },
  {
    "codigo": "12102",
    "nombre": "Laguna Blanca",
    "region": "Región de Magallanes"
  },
  {
    "codigo": "12103",
    "nombre": "Río Verde",
    "region": "Región de Magallanes"
  },
  {
    "codigo": "12104",
    "nombre": "San Gregorio",
    "region": "Región de Magallanes"
  },
  {
    "codigo": "12201",
    "nombre": "Cabo de Hornos",
    "region": "Región de Magallanes"
  },
  {
    "codigo": "12202",
    "nombre": "Antártica",
    "region": "Región de Magallanes"
  },
  {
    "codigo": "12301",
    "nombre": "Porvenir",
    "region": "Región de Magallanes"
  },
  {
    "codigo": "12302",
    "nombre": "Primavera",
    "region": "Región de Magallanes"
  },
  {
    "codigo": "12303",
    "nombre": "Timaukel",
    "region": "Región de Magallanes"
  },
  {
    "codigo": "12401",
    "nombre": "Natales",
    "region": "Región de Magallanes"
  },
  {
    "codigo": "12402",
    "nombre": "Torres del Paine",
    "region": "Región de Magallanes"
  }
]);

print("✔ Comunas insertadas correctamente en colección comunas");