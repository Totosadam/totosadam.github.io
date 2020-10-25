//let magasság = prompt("Milyen magas vagy?")
//let magasságcm = Number(magasság);


// 1.	Beviszem hány kiló vagyok
//let test = 75;
let test = prompt("Hány kiló vagy?");
while(test<50 || test>200){
    alert("Nem jó értéket adtál meg 50-200 közötti értéket adj meg!");
    test = prompt("Hány kiló vagy?");
    test++;
    test--;
};

let testsúly = Number(test);

//let életkor = prompt("Hány éves vagy?")
//let kor = Number(életkor);

//Súly kiirása HTML-be
let sulyHTML = document.getElementById("súlyod");
sulyHTML.textContent = test + "kg";

//Szintentartó Cal kiszámítása
// 2.	a bevitt kiló adatot behelyettesítem a képletembe és kiszámolom, mennyi a szintentartáshoz szükséges összes kalória.
let szintTartKaloria = 15.3*testsúly+679; //OK

//Macrók
//3.	Majd a makrókat %-os arnyban felosztom.
//4.	A százalékos eredményekkel megszrozom a szintentertó kalória mennyiséget és elosztom azzal a számmal amennyi 1g makró tápanyag kalória tartalma.
let fehérje = szintTartKaloria*0.2/4;//OK
let zsír = szintTartKaloria*0.3/9;//OK
let szénhidrát = szintTartKaloria*0.5/4;//OK

let napikalóriaszükséglet = document.getElementById("kalóriaszükséglet");
napikalóriaszükséglet.textContent = szintTartKaloria.toPrecision(4);

//Makrók HTML-be kiirása
let f = document.getElementById("fehérje");
f.textContent = fehérje.toPrecision(4)+"g";

let zs = document.getElementById("zsír");
zs.textContent = zsír.toPrecision(4)+"g";

let sz = document.getElementById("szénhidrát");
sz.textContent = szénhidrát.toPrecision(4)+"g";

//Hozzávalók mennyísége HTML-be kiírása
// 8.	A fő makrókat adó összetevőket külön kiszámolom
let marha = document.getElementById("marha");
let marha100g = 128; // 100g marhalábszár az 128 Kcal
let marhaCal = (fehérje*100/22); // fehérje szükséglet kiszámolt értéke*100g/ahány gramm fehérje van 100g-ban és megkapom hogy hány g hust kell megennem.(aránypár 100g marhalábszárban --> 22g fehérje van akkor hány grammban van a fehérje szükségletnek megfelelő g)
let marhaKalória = (marhaCal/100)*marha100g; // elosztom 100-al a megenni kívánt hús mennyiségét, mert így kapom meg, hogy hányszor tartalmazza a 128 Kcalóriát és ezzel az értékkel beszorzom a 128Kcalóriát így erdménynek az jön ki, hogy mennnyi kalóriát tartalmaz az ételhez szükséges marhalábszár.
let marhaSpan = document.getElementById("marha2");
marhaSpan.textContent = marhaKalória.toPrecision(4) + "Kcal"; //Kiírom mennyi kalória van az ételben
marha.textContent = marhaCal.toPrecision(4) + "g"; //kiírom mennyi g hús kell az ételhez
marha.classList.add("color");

let zsírtartalom = document.getElementById("sertésZsír");
let zsír100g = 928; 
let zsírCal = (zsír*100/116); // zsír kiszámolt értéke*100g/ahány gramm zsír van 100g-ban
let zsírKalória = (zsírCal/100)*zsír100g;
let zsírSpan = document.getElementById("sertésZsír2");
zsírSpan.textContent = zsírKalória.toPrecision(4) + "Kcal";
zsírtartalom.textContent = zsírCal.toPrecision(3) + "g";
zsírtartalom.classList.add("color");

let szénhidrátTartalom = document.getElementById("krumpli");
let krumpli100g = 80;
let krumpliFehérje100gBan = 2;
let szénhidrátCal = (szénhidrát*100/19); // szénhidrát kiszámolt értéke*100g/ahány gramm szénhidrát van 100g-ban
let krumpliKalória = (szénhidrátCal/100)*krumpli100g;
let krumpliSpan = document.getElementById("krumpli2");
krumpliSpan.textContent = krumpliKalória.toPrecision(4) + "Kcal";
szénhidrátTartalom.textContent = szénhidrátCal.toPrecision(4) + "g";
szénhidrátTartalom.classList.add("color");
let krumpliFehérjeSpan = document.querySelector("#krumpli3");
krumpliFehérjeSpan.textContent = krumpliFehérje100gBan;

//Összetevők
//10.	Majd az összes összetevőnek létrehozok egy változót, és a receptben szereplő mennyiséget adom meg nekik mértékegység nélküli értékként.
let zsíralap = 24;
let burgonyaalap = 400;
let marhaalap = 600;
let paradicsom = 75;
let hagyma = 300;
let zeller = 40;
let fehérrépa = 61;
let tvPaprika = 50;
let fokhagyma = 12;
let fűszerpaprika = 1;
let csípősFűszerpaprika = 0.5;
let só = 0.5;
let őröltFűszerkömény = 1;
let babérlevél = 2;
let feketebors = 1;
let zellerlevél = 5;
let petrezselyem = 0.5;
let sárgarépa = 144;


//növekvés kiszámolás
//11.	A hús-krumpli ergó szénhidrát-fehérje között lévő mennyiségkülönbséget kiszámolom és ezzel fogok korigálni a többi összetevőnél ugy hogy megszorzom őket a kiszámolt értékkel
let marhaszám = marhaCal/marhaalap; // a kiszámolt hús mennyiséget elosztom a receptben található marha mennyiséggel
let krumpliszám = szénhidrátCal/burgonyaalap;
let növekvés = krumpliszám-marhaszám; // Tudatosan eldöntöm, ételtől függően, hogy milyen művelettel lesz ideálisabb az összetevők viszonya egymáshoz

//Ősszetevők értékének a kiszámolása és HTML-be kiírása.
// 11. kiszámolom, hogy hány gramm kell az ételbe a többi összetevőből.
let sárgarépaszámol = sárgarépa*növekvés; // a receptben lévő értékét megszorzom a növekvéssel és megkapom mennyi g répa kell a receptbe.
let sárgarépa100g = 40;
let sárgarépaFehérje100gBan = 1;
//let sárgarépaFehérjeÖsszeg = ((sárgarépaszámol/100)*sárgarépaFehérje100gBan)*4; //A végeredmény hogy hány kcal a ksizámolt gramm érték
let sárgarépaFehérjeÖsszeg = sárgarépaszámol*sárgarépaFehérje100gBan/100;
let sárgarépaKcal = (sárgarépaszámol/100)*sárgarépa100g;//a növekedett értéket elosztom 100-al majd megszorzom a hozzávaló 100g-ban lévő kalóriájával.
let sárgarépakcalSpan = document.getElementById("répa2");
sárgarépakcalSpan.textContent = sárgarépaKcal.toPrecision(4);
let répa = document.querySelector("#répa");
répa.textContent = sárgarépaszámol.toPrecision(4);
répa.classList.add("color");
let sárgarépaFehérjeSpan = document.querySelector("#répa3");
sárgarépaFehérjeSpan.textContent = sárgarépaFehérjeÖsszeg.toFixed(1);


let paradicsomszámol = paradicsom*növekvés;
let para100g = 18;
let paradicsomFehérje100gBan = 1;
//let paradicsomFehérjeÖsszeg = ((paradicsomszámol/100)*paradicsomFehérje100gBan)*4; //A végeredmény hogy hány kcal a ksizámolt gramm érték
let paradicsomFehérjeÖsszeg = paradicsomszámol*paradicsomFehérje100gBan/100;
let paradicsomKcal = (paradicsomszámol/100)*para100g;//a növekedett értéket elosztom 100-al majd megszorzom a hozzávaló 100g-ban lévő kalóriájával
let paradicsomkcalSpan = document.getElementById("paradicsom2");
paradicsomkcalSpan.textContent = paradicsomKcal.toPrecision(4); 
let paradicsomSelect = document.querySelector("#paradicsom");
paradicsomSelect.textContent = paradicsomszámol.toPrecision(4);
paradicsomSelect.classList.add("color");
let paradicsomFehérjeSpan = document.querySelector("#paradicsom3");
paradicsomFehérjeSpan.textContent = paradicsomFehérjeÖsszeg.toFixed(1);


let zeller100g = 29;
let zellerFehérje100gBan = 1;
let zellerszámol = zeller*növekvés;
//let zellerFehérjeÖsszeg = ((zellerszámol/100)*zellerFehérje100gBan)*4; //A végeredmény hogy hány kcal a ksizámolt gramm érték
let zellerFehérjeÖsszeg = zellerszámol*zellerFehérje100gBan/100;
let zellerKcal = (zellerszámol/100)*zeller100g;//a növekedett értéket elosztom 100-al majd megszorzom a hozzávaló 100g-ban lévő kalóriájával
let zellerkcalSpan = document.getElementById("zeller2");
zellerkcalSpan.textContent = zellerKcal.toPrecision(2);
let zellerSelect = document.querySelector("#zeller");
zellerSelect.textContent = zellerszámol.toPrecision(3);
zellerSelect.classList.add("color");
let zellerFehérjeSpan = document.querySelector("#zeller3");
zellerFehérjeSpan.textContent = zellerFehérjeÖsszeg.toFixed(1);


let fehérrépaszámol = fehérrépa*növekvés;
let fehérrépaFehérje100gBan = 2;
let fehérrépa100g = 32;
//let fehérrépaFehérjeÖsszeg = ((fehérrépaszámol/100)*fehérrépaFehérje100gBan)*4; //A végeredmény hogy hány kcal a ksizámolt gramm érték
let fehérrépaFehérjeÖsszeg = fehérrépaszámol*fehérrépaFehérje100gBan/100;
let fehérrépaKcal = (fehérrépaszámol/100)*fehérrépa100g;//a növekedett értéket elosztom 100-al majd megszorzom a hozzávaló 100g-ban lévő kalóriájával
let fehérrépakcalSpan = document.getElementById("frépa2");
fehérrépakcalSpan.textContent = fehérrépaKcal.toPrecision(2);
let fehérrépaSelect = document.querySelector("#frépa");
fehérrépaSelect.textContent = fehérrépaszámol.toPrecision(4);
fehérrépaSelect.classList.add("color");
let fehérrépaFehérjeSpan = document.querySelector("#frépa3");
fehérrépaFehérjeSpan.textContent = fehérrépaFehérjeÖsszeg.toFixed(1);

let tvPaprikaszámol = tvPaprika*növekvés;
let tvPaprikaFehérje100gBan = 1;
let tvPaprika100g = 20;
//let tvPaprikaFehérjeÖsszeg = ((tvPaprikaszámol/100)*tvPaprikaFehérje100gBan)*4; //A végeredmény hogy hány kcal a ksizámolt gramm érték
let tvPaprikaFehérjeÖsszeg = tvPaprikaszámol*tvPaprikaFehérje100gBan/100;
let tvPaprikaKcal = (tvPaprikaszámol/100)*tvPaprika100g;//a növekedett értéket elosztom 100-al majd megszorzom a hozzávaló 100g-ban lévő kalóriájával
let tvPaprikakcalSpan = document.getElementById("paprika2");
tvPaprikakcalSpan.textContent = tvPaprikaKcal.toPrecision(3);
let tvPaprikaSelect = document.querySelector("#paprika");
tvPaprikaSelect.textContent = tvPaprikaszámol.toPrecision(4);
tvPaprikaSelect.classList.add("color");
let tvPaprikaFehérjeSpan = document.querySelector("#paprika3");
tvPaprikaFehérjeSpan.textContent = tvPaprikaFehérjeÖsszeg.toFixed(1);

let fokhagymaszámol = fokhagyma*növekvés;
let fokhagymaFehérje100gBan = 6;
//let fokhagymaFehérjeÖsszeg = ((fokhagymaszámol/100)*fokhagymaFehérje100gBan)*4; //A végeredmény hogy hány kcal a ksizámolt gramm érték
let fokhagymaFehérjeÖsszeg = fokhagymaszámol*fokhagymaFehérje100gBan/100;
let fokhagyma100g = 149;
let fokhagymaKcal = (fokhagymaszámol/100)*fokhagyma100g;//a növekedett értéket elosztom 100-al majd megszorzom a hozzávaló 100g-ban lévő kalóriájával
let fokhagymakcalSpan = document.getElementById("fokhagyma2");
fokhagymakcalSpan.textContent = fokhagymaKcal.toPrecision(2);
let fokhagymaSelect = document.querySelector("#fokhagyma");
fokhagymaSelect.textContent = fokhagymaszámol.toPrecision(2);
fokhagymaSelect.classList.add("color");
let fokhagymaFehérjeSpan = document.querySelector("#fokhagyma3");
fokhagymaFehérjeSpan.textContent = fokhagymaFehérjeÖsszeg.toFixed(1);

let fűszerpaprikaszámol = fűszerpaprika*növekvés;
let fűszerpaprikaSelect = document.querySelector("#füszerPaprika");
fűszerpaprikaSelect.textContent = fűszerpaprikaszámol.toPrecision(2);
fűszerpaprikaSelect.classList.add("color");


let csípősFűszerpaprikaszámol = csípősFűszerpaprika*növekvés;
let csípősFűszerpaprikaSelect = document.querySelector("#csípősFűszerPaprika");
csípősFűszerpaprikaSelect.textContent = csípősFűszerpaprikaszámol.toPrecision(2);
csípősFűszerpaprikaSelect.classList.add("color");

let sószámol = fűszerpaprika*növekvés;
let sóSelect = document.querySelector("#só");
sóSelect.textContent = sószámol.toPrecision(1);
sóSelect.classList.add("color");

let őröltFűszerköményszámol = őröltFűszerkömény*növekvés;
let őröltFűszerköménySelect = document.querySelector("#kömény");
őröltFűszerköménySelect.textContent = őröltFűszerköményszámol.toPrecision(1);
őröltFűszerköménySelect.classList.add("color");

let babérlevélszámol = babérlevél*növekvés;
let babérlevélSelect = document.querySelector("#babér");
babérlevélSelect.textContent = babérlevélszámol.toPrecision(1);
babérlevélSelect.classList.add("color");

let feketeborsszámol = feketebors*növekvés;
let feketeborsSelect = document.querySelector("#bors");
feketeborsSelect.textContent = feketeborsszámol.toPrecision(1);
feketeborsSelect.classList.add("color");

let zellerlevélszámol = zellerlevél*növekvés;
let zellerlevélSelect = document.querySelector("#zellerlevél");
zellerlevélSelect.textContent = zellerlevélszámol.toPrecision(2);
zellerlevélSelect.classList.add("color");

let petrezselyemszámol = petrezselyem*növekvés;
let petrezselyemSelect = document.querySelector("#petrezselyem");
petrezselyemSelect.textContent = petrezselyemszámol.toPrecision(2);
petrezselyemSelect.classList.add("color");

let hagymaszámol = hagyma*növekvés;
let hagyma100g = 40;
let hagymaFehérje100gBan = 1;
//let hagymaFehérjeÖsszeg = ((hagymaszámol/100)*hagymaFehérje100gBan)*4; //A végeredmény hogy hány kcal a ksizámolt gramm érték
let hagymaFehérjeÖsszeg = hagymaszámol*hagymaFehérje100gBan/100;
let hagymaKcal = (hagymaszámol/100)*hagyma100g;//a növekedett értéket elosztom 100-al majd megszorzom a hozzávaló 100g-ban lévő kalóriájával
let hagymakcalSpan = document.getElementById("hagyma2");
hagymakcalSpan.textContent = hagymaKcal.toPrecision(3);
let hagymaSelect = document.querySelector("#hagyma");
hagymaSelect.textContent = hagymaszámol.toPrecision(4);
hagymaSelect.classList.add("color");
let hagymaFehérjeSpan = document.querySelector("#hagyma3");
hagymaFehérjeSpan.textContent = hagymaFehérjeÖsszeg.toFixed(1);

//Egyéb összetevők ch gramm értékeit elmentem egy tömbbe.
let egyebKaloria = [];

let kaloria = document.querySelectorAll(".kaloria");

for(let i = 0; i < kaloria.length; i++ ){
    let változó =Number(document.querySelectorAll(".kaloria")[i].textContent);
egyebKaloria.push(változó);
};

let summEgyebGrammok = [];
//egyebKaloriatömbben lévő értékek összeadása és az érték átadása a summEgyebGrammoknak.
function összegzés(){
    let belsoValtozo = 0;
    for(let i = 0; i < egyebKaloria.length;i++){
    belsoValtozo = belsoValtozo + egyebKaloria[i];
}
return belsoValtozo;
}
summEgyebGrammok = összegzés();
console.log(summEgyebGrammok)

//krumpli gramjából kivontam az egyéb grammot
let egyebekChGrammTrt = summEgyebGrammok/4; //==> az egyéb ch cal tart. grammá(ez szénhidrát gramm) alakít
let krumpliMinus = egyebekChGrammTrt*100/19; //==> megadja hány g krumpliban van meg a egyebekChGrammTrt értéke. 100g krumpliban 19g ch van hány gramm krumpliban van az egyebekChGrammTrt álltal kiszámolt ch mennyiség
szénhidrátTartalom.textContent = (szénhidrátCal - krumpliMinus).toPrecision(4); //a krumpli g értékét változtatom a kivonással kivonom a krumpli grammjából az egyéb chból kiszámolt krumplira átváltott grammot.
let krumpliKaloriaMinus = egyebekChGrammTrt*4;
krumpliSpan.textContent = (krumpliKalória-krumpliKaloriaMinus).toPrecision(4);
let újSzénhidrátérték = krumpliKalória-krumpliKaloriaMinus;

let krumpliVégÖsszegGram = Number(szénhidrátTartalom.textContent);
//let krumpliFehérjeÖsszeg = ((krumpliVégÖsszegGram/100)*krumpliFehérje100gBan)*4; //A végeredmény hogy hány kcal a ksizámolt gramm érték
let krumpliFehérjeÖsszeg = krumpliVégÖsszegGram*krumpliFehérje100gBan/100;
krumpliFehérjeSpan.textContent = krumpliFehérjeÖsszeg.toFixed(1);

//-------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------Fehérje kivonása--------------------------------------------------------------------

let egyebFehérjeGramm = [];

let fehérjeGramm = document.querySelectorAll(".összetevőkFehérjéje");

for(let i = 0; i < fehérjeGramm.length; i++ ){
    let változó =Number(document.querySelectorAll(".összetevőkFehérjéje")[i].textContent);
    egyebFehérjeGramm.push(változó);
};

let summEgyebFehérjeGrammok = [];
//egyebFehérjeGrammtömbben lévő értékek összeadása és az érték átadása a summEgyebFehérjeGrammoknak.
function fehérjeösszegzés(){
let belsoValtozo = 0;
    for(let i = 0; i < egyebFehérjeGramm.length;i++){
    belsoValtozo = belsoValtozo + egyebFehérjeGramm[i];
}
return belsoValtozo;
}
summEgyebFehérjeGrammok = fehérjeösszegzés().toFixed(1);


//
//fehérje gramjából kivontam az egyéb összetevők summ fehérje gramját.
//let summEgyebFehérjeKcalToG = summEgyebFehérjeGrammok/4; //==> az egyéb fehérje cal tart. grammá(ez fehérje gramm) alakít
let fehérjeMinus = summEgyebFehérjeGrammok*100/22; //==> megadja hány g marhában van meg a summEgyebFehérjeKcalToG értéke. 100g marhalábszárban 22g fehérje van hány gramm marhalábszárban van a summEgyebFehérjeKcalToG álltal kiszámolt fehérje mennyiség
marha.textContent = (marhaCal - fehérjeMinus).toFixed(1); //a marhalábszár g értékét változtatom a kivonással kivonom a marhalábszár grammjából az egyéb fehérjéből kiszámolt marhára átváltott grammot.
let fehérjeKaloriaMinus = summEgyebFehérjeGrammok*4;
marhaSpan.textContent = (marhaKalória-fehérjeKaloriaMinus).toFixed(1);



//let korigál = szintTartKaloria - 50;
//document.getElementById("kalóriaszükséglet").textContent = korigál;



//let krumpliMinus100g = (krumpliMinus/100)*krumpli100g;
//400g krumpli az 1 egész a növelt vagy csökkentett érték, az hányszorosa az eredetinek?
//600g hus az 1 egész a növelt vagy csökkentett érték hány százaléka az eredetinek
//
//420g hús az 30%-os csökkenés
//1217g krumpli az 300%-s emelkedés
//
//300g vörösh = 120kcal 25gch 4gf
//2 nagy sárgarépa 144g = 58 kcal 12gch 2gf
//1 fehér répa 61g = 20kcal 3gch
//1 zeller 40g = 12kcal 2ch
//1 paradicsom közepes 75g = 14kcal 3gch
//1 db tv paprika 50g = 10kcal 2g ch
//3 gerezd fokhagyma 12g = 18kcal 4gch
//Össz kcal= 262
//össz ch = 51g