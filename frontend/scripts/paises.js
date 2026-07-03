// ===============================================
// Base de datos: test
// Colección: paises
// Script completo países del mundo para MongoDB
// ===============================================

use("AP_N3_C1");

db.createCollection("paises");

db.paises.deleteMany({});

db.paises.insertMany([
    {
        nombre: "Afganistán",
        iso2: "AF",
        iso3: "AFG",
        codigoPais: "+93",
        nacionalidad: "afgana"
    },
    {
        nombre: "Albania",
        iso2: "AL",
        iso3: "ALB",
        codigoPais: "+355",
        nacionalidad: "albanesa"
    },
    {
        nombre: "Alemania",
        iso2: "DE",
        iso3: "DEU",
        codigoPais: "+49",
        nacionalidad: "alemana"
    },
    {
        nombre: "Andorra",
        iso2: "AD",
        iso3: "AND",
        codigoPais: "+376",
        nacionalidad: "andorrana"
    },
    {
        nombre: "Angola",
        iso2: "AO",
        iso3: "AGO",
        codigoPais: "+244",
        nacionalidad: "angoleña"
    },
    {
        nombre: "Arabia Saudita",
        iso2: "SA",
        iso3: "SAU",
        codigoPais: "+966",
        nacionalidad: "saudí"
    },
    {
        nombre: "Argelia",
        iso2: "DZ",
        iso3: "DZA",
        codigoPais: "+213",
        nacionalidad: "argelina"
    },
    {
        nombre: "Argentina",
        iso2: "AR",
        iso3: "ARG",
        codigoPais: "+54",
        nacionalidad: "argentina"
    },
    {
        nombre: "Armenia",
        iso2: "AM",
        iso3: "ARM",
        codigoPais: "+374",
        nacionalidad: "armenia"
    },
    {
        nombre: "Australia",
        iso2: "AU",
        iso3: "AUS",
        codigoPais: "+61",
        nacionalidad: "australiana"
    },
    {
        nombre: "Austria",
        iso2: "AT",
        iso3: "AUT",
        codigoPais: "+43",
        nacionalidad: "austriaca"
    },
    {
        nombre: "Azerbaiyán",
        iso2: "AZ",
        iso3: "AZE",
        codigoPais: "+994",
        nacionalidad: "azerbaiyana"
    },
    {
        nombre: "Bahamas",
        iso2: "BS",
        iso3: "BHS",
        codigoPais: "+1-242",
        nacionalidad: "bahameña"
    },
    {
        nombre: "Bangladés",
        iso2: "BD",
        iso3: "BGD",
        codigoPais: "+880",
        nacionalidad: "bangladesí"
    },
    {
        nombre: "Barbados",
        iso2: "BB",
        iso3: "BRB",
        codigoPais: "+1-246",
        nacionalidad: "barbadense"
    },
    {
        nombre: "Bélgica",
        iso2: "BE",
        iso3: "BEL",
        codigoPais: "+32",
        nacionalidad: "belga"
    },
    {
        nombre: "Belice",
        iso2: "BZ",
        iso3: "BLZ",
        codigoPais: "+501",
        nacionalidad: "beliceña"
    },
    {
        nombre: "Benín",
        iso2: "BJ",
        iso3: "BEN",
        codigoPais: "+229",
        nacionalidad: "beninesa"
    },
    {
        nombre: "Bielorrusia",
        iso2: "BY",
        iso3: "BLR",
        codigoPais: "+375",
        nacionalidad: "bielorrusa"
    },
    {
        nombre: "Bolivia",
        iso2: "BO",
        iso3: "BOL",
        codigoPais: "+591",
        nacionalidad: "boliviana"
    },
    {
        nombre: "Bosnia y Herzegovina",
        iso2: "BA",
        iso3: "BIH",
        codigoPais: "+387",
        nacionalidad: "bosnia"
    },
    {
        nombre: "Botsuana",
        iso2: "BW",
        iso3: "BWA",
        codigoPais: "+267",
        nacionalidad: "botsuana"
    },
    {
        nombre: "Brasil",
        iso2: "BR",
        iso3: "BRA",
        codigoPais: "+55",
        nacionalidad: "brasileña"
    },
    {
        nombre: "Brunéi",
        iso2: "BN",
        iso3: "BRN",
        codigoPais: "+673",
        nacionalidad: "bruneana"
    },
    {
        nombre: "Bulgaria",
        iso2: "BG",
        iso3: "BGR",
        codigoPais: "+359",
        nacionalidad: "búlgara"
    },
    {
        nombre: "Burkina Faso",
        iso2: "BF",
        iso3: "BFA",
        codigoPais: "+226",
        nacionalidad: "burkinesa"
    },
    {
        nombre: "Burundi",
        iso2: "BI",
        iso3: "BDI",
        codigoPais: "+257",
        nacionalidad: "burundesa"
    },
    {
        nombre: "Bután",
        iso2: "BT",
        iso3: "BTN",
        codigoPais: "+975",
        nacionalidad: "butanesa"
    },
    {
        nombre: "Cabo Verde",
        iso2: "CV",
        iso3: "CPV",
        codigoPais: "+238",
        nacionalidad: "caboverdiana"
    },
    {
        nombre: "Camboya",
        iso2: "KH",
        iso3: "KHM",
        codigoPais: "+855",
        nacionalidad: "camboyana"
    },
    {
        nombre: "Camerún",
        iso2: "CM",
        iso3: "CMR",
        codigoPais: "+237",
        nacionalidad: "camerunesa"
    },
    {
        nombre: "Canadá",
        iso2: "CA",
        iso3: "CAN",
        codigoPais: "+1",
        nacionalidad: "canadiense"
    },
    {
        nombre: "Chile",
        iso2: "CL",
        iso3: "CHL",
        codigoPais: "+56",
        nacionalidad: "chilena"
    },
    {
        nombre: "China",
        iso2: "CN",
        iso3: "CHN",
        codigoPais: "+86",
        nacionalidad: "china"
    },
    {
        nombre: "Colombia",
        iso2: "CO",
        iso3: "COL",
        codigoPais: "+57",
        nacionalidad: "colombiana"
    },
    {
        nombre: "Corea del Norte",
        iso2: "KP",
        iso3: "PRK",
        codigoPais: "+850",
        nacionalidad: "norcoreana"
    },
    {
        nombre: "Corea del Sur",
        iso2: "KR",
        iso3: "KOR",
        codigoPais: "+82",
        nacionalidad: "surcoreana"
    },
    {
        nombre: "Costa Rica",
        iso2: "CR",
        iso3: "CRI",
        codigoPais: "+506",
        nacionalidad: "costarricense"
    },
    {
        nombre: "Croacia",
        iso2: "HR",
        iso3: "HRV",
        codigoPais: "+385",
        nacionalidad: "croata"
    },
    {
        nombre: "Cuba",
        iso2: "CU",
        iso3: "CUB",
        codigoPais: "+53",
        nacionalidad: "cubana"
    },
    {
        nombre: "Dinamarca",
        iso2: "DK",
        iso3: "DNK",
        codigoPais: "+45",
        nacionalidad: "danesa"
    },
    {
        nombre: "Ecuador",
        iso2: "EC",
        iso3: "ECU",
        codigoPais: "+593",
        nacionalidad: "ecuatoriana"
    },
    {
        nombre: "Egipto",
        iso2: "EG",
        iso3: "EGY",
        codigoPais: "+20",
        nacionalidad: "egipcia"
    },
    {
        nombre: "El Salvador",
        iso2: "SV",
        iso3: "SLV",
        codigoPais: "+503",
        nacionalidad: "salvadoreña"
    },
    {
        nombre: "Emiratos Árabes Unidos",
        iso2: "AE",
        iso3: "ARE",
        codigoPais: "+971",
        nacionalidad: "emiratí"
    },
    {
        nombre: "España",
        iso2: "ES",
        iso3: "ESP",
        codigoPais: "+34",
        nacionalidad: "española"
    },
    {
        nombre: "Estados Unidos",
        iso2: "US",
        iso3: "USA",
        codigoPais: "+1",
        nacionalidad: "estadounidense"
    },
    {
        nombre: "Francia",
        iso2: "FR",
        iso3: "FRA",
        codigoPais: "+33",
        nacionalidad: "francesa"
    },
    {
        nombre: "Grecia",
        iso2: "GR",
        iso3: "GRC",
        codigoPais: "+30",
        nacionalidad: "griega"
    },
    {
        nombre: "Guatemala",
        iso2: "GT",
        iso3: "GTM",
        codigoPais: "+502",
        nacionalidad: "guatemalteca"
    },
    {
        nombre: "Honduras",
        iso2: "HN",
        iso3: "HND",
        codigoPais: "+504",
        nacionalidad: "hondureña"
    },
    {
        nombre: "India",
        iso2: "IN",
        iso3: "IND",
        codigoPais: "+91",
        nacionalidad: "india"
    },
    {
        nombre: "Indonesia",
        iso2: "ID",
        iso3: "IDN",
        codigoPais: "+62",
        nacionalidad: "indonesia"
    },
    {
        nombre: "Irlanda",
        iso2: "IE",
        iso3: "IRL",
        codigoPais: "+353",
        nacionalidad: "irlandesa"
    },
    {
        nombre: "Islandia",
        iso2: "IS",
        iso3: "ISL",
        codigoPais: "+354",
        nacionalidad: "islandesa"
    },
    {
        nombre: "Israel",
        iso2: "IL",
        iso3: "ISR",
        codigoPais: "+972",
        nacionalidad: "israelí"
    },
    {
        nombre: "Italia",
        iso2: "IT",
        iso3: "ITA",
        codigoPais: "+39",
        nacionalidad: "italiana"
    },
    {
        nombre: "Japón",
        iso2: "JP",
        iso3: "JPN",
        codigoPais: "+81",
        nacionalidad: "japonesa"
    },
    {
        nombre: "México",
        iso2: "MX",
        iso3: "MEX",
        codigoPais: "+52",
        nacionalidad: "mexicana"
    },
    {
        nombre: "Nicaragua",
        iso2: "NI",
        iso3: "NIC",
        codigoPais: "+505",
        nacionalidad: "nicaragüense"
    },
    {
        nombre: "Noruega",
        iso2: "NO",
        iso3: "NOR",
        codigoPais: "+47",
        nacionalidad: "noruega"
    },
    {
        nombre: "Nueva Zelanda",
        iso2: "NZ",
        iso3: "NZL",
        codigoPais: "+64",
        nacionalidad: "neozelandesa"
    },
    {
        nombre: "Países Bajos",
        iso2: "NL",
        iso3: "NLD",
        codigoPais: "+31",
        nacionalidad: "neerlandesa"
    },
    {
        nombre: "Pakistán",
        iso2: "PK",
        iso3: "PAK",
        codigoPais: "+92",
        nacionalidad: "pakistaní"
    },
    {
        nombre: "Panamá",
        iso2: "PA",
        iso3: "PAN",
        codigoPais: "+507",
        nacionalidad: "panameña"
    },
    {
        nombre: "Paraguay",
        iso2: "PY",
        iso3: "PRY",
        codigoPais: "+595",
        nacionalidad: "paraguaya"
    },
    {
        nombre: "Perú",
        iso2: "PE",
        iso3: "PER",
        codigoPais: "+51",
        nacionalidad: "peruana"
    },
    {
        nombre: "Polonia",
        iso2: "PL",
        iso3: "POL",
        codigoPais: "+48",
        nacionalidad: "polaca"
    },
    {
        nombre: "Portugal",
        iso2: "PT",
        iso3: "PRT",
        codigoPais: "+351",
        nacionalidad: "portuguesa"
    },
    {
        nombre: "Reino Unido",
        iso2: "GB",
        iso3: "GBR",
        codigoPais: "+44",
        nacionalidad: "británica"
    },
    {
        nombre: "República Dominicana",
        iso2: "DO",
        iso3: "DOM",
        codigoPais: "+1-809",
        nacionalidad: "dominicana"
    },
    {
        nombre: "Rumania",
        iso2: "RO",
        iso3: "ROU",
        codigoPais: "+40",
        nacionalidad: "rumana"
    },
    {
        nombre: "Rusia",
        iso2: "RU",
        iso3: "RUS",
        codigoPais: "+7",
        nacionalidad: "rusa"
    },
    {
        nombre: "Sudáfrica",
        iso2: "ZA",
        iso3: "ZAF",
        codigoPais: "+27",
        nacionalidad: "sudafricana"
    },
    {
        nombre: "Suecia",
        iso2: "SE",
        iso3: "SWE",
        codigoPais: "+46",
        nacionalidad: "sueca"
    },
    {
        nombre: "Suiza",
        iso2: "CH",
        iso3: "CHE",
        codigoPais: "+41",
        nacionalidad: "suiza"
    },
    {
        nombre: "Tailandia",
        iso2: "TH",
        iso3: "THA",
        codigoPais: "+66",
        nacionalidad: "tailandesa"
    },
    {
        nombre: "Turquía",
        iso2: "TR",
        iso3: "TUR",
        codigoPais: "+90",
        nacionalidad: "turca"
    },
    {
        nombre: "Ucrania",
        iso2: "UA",
        iso3: "UKR",
        codigoPais: "+380",
        nacionalidad: "ucraniana"
    },
    {
        nombre: "Uruguay",
        iso2: "UY",
        iso3: "URY",
        codigoPais: "+598",
        nacionalidad: "uruguaya"
    },
    {
        nombre: "Venezuela",
        iso2: "VE",
        iso3: "VEN",
        codigoPais: "+58",
        nacionalidad: "venezolana"
    },
    {
        nombre: "Vietnam",
        iso2: "VN",
        iso3: "VNM",
        codigoPais: "+84",
        nacionalidad: "vietnamita"
    }
]);

print("✔ Países insertados correctamente en colección paises");