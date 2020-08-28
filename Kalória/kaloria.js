//let magasság = prompt("Milyen magas vagy?")
//let magasságcm = Number(magasság);



//let test = 75;
let test = prompt("Hány kiló vagy?")
let testsúly = Number(test);

//let életkor = prompt("Hány éves vagy?")
//let kor = Number(életkor);

//Szintentartó Cal kiszámítása
let szintTartKaloria = 15.3*testsúly+679;

//Macrók
let fehérje = (szintTartKaloria*0.2)/4;
let zsír = szintTartKaloria*0.3/9;
let szénhidrát = szintTartKaloria*0.5/4;

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
let marha = document.getElementById("marha");
let marha100g = 128;
let marhaCal = (fehérje*100/22); // fehérje kiszámolt értéke*100g/ahány gramm fehérje van 100g-ban és megkapom hogy hány g hust kell megennem.
let marhaKalória = (marhaCal/100)*marha100g;
let marhaSpan = document.getElementById("marha2");
marhaSpan.textContent = marhaKalória.toPrecision(4) + "Kcal"; 
marha.textContent = marhaCal.toPrecision(4) + "g";
marha.classList.add("color");

let zsírtartalom = document.getElementById("sertésZsír");
let zsír100g = 928; 
let zsírCal = (zsír*100/116); // zsír kiszámolt értéke*100g/ahány gramm fehérje van 100g-ban
let zsírKalória = (zsírCal/100)*zsír100g;
let zsírSpan = document.getElementById("sertésZsír2");
zsírSpan.textContent = zsírKalória.toPrecision(4) + "Kcal";
zsírtartalom.textContent = zsírCal.toPrecision(3) + "g";
zsírtartalom.classList.add("color");

let szénhidrátTartalom = document.getElementById("krumpli");
let krumpli100g = 80;
let szénhidrátCal = (szénhidrát*100/19); // szénhidrát kiszámolt értéke*100g/ahány gramm fehérje van 100g-ban
let krumpliKalória = (szénhidrátCal/100)*krumpli100g;
let krumpliSpan = document.getElementById("krumpli2");
krumpliSpan.textContent = krumpliKalória.toPrecision(4) + "Kcal";
szénhidrátTartalom.textContent = szénhidrátCal.toPrecision(4) + "g";
szénhidrátTartalom.classList.add("color");

//Összetevők
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
let marhaszám = (marhaCal/marhaalap);
let krumpliszám = (szénhidrátCal/burgonyaalap);
let növekvés = (krumpliszám-marhaszám);

//Ősszetevők értékének a kiszámolása és HTML-be kiírása.
let sárgarépaszámol = sárgarépa*növekvés;
let sárgarépa100g = 40;
let sárgarépaKcal = (sárgarépaszámol/100)*sárgarépa100g;//a növekedett értéket elosztom 100-al majd megszorzom a hozzávaló 100g-ban lévő kalóriájával
let sárgarépakcalSpan = document.getElementById("répa2");
sárgarépakcalSpan.textContent = sárgarépaKcal.toPrecision(4) + "Kcal";
let répa = document.querySelector("#répa");
répa.textContent = sárgarépaszámol.toPrecision(4);
répa.classList.add("color");


let paradicsomszámol = paradicsom*növekvés;
let para100g = 18;
let paradicsomKcal = (paradicsomszámol/100)*para100g;//a növekedett értéket elosztom 100-al majd megszorzom a hozzávaló 100g-ban lévő kalóriájával
let paradicsomkcalSpan = document.getElementById("paradicsom2");
paradicsomkcalSpan.textContent = paradicsomKcal.toPrecision(4) + "Kcal"; 
let paradicsomSelect = document.querySelector("#paradicsom");
paradicsomSelect.textContent = paradicsomszámol.toPrecision(4);
paradicsomSelect.classList.add("color");

let zeller100g = 29;
let zellerszámol = zeller*növekvés;
let zellerKcal = (zellerszámol/100)*zeller100g;//a növekedett értéket elosztom 100-al majd megszorzom a hozzávaló 100g-ban lévő kalóriájával
let zellerkcalSpan = document.getElementById("zeller2");
zellerkcalSpan.textContent = zellerKcal.toPrecision(2) + "Kcal";
let zellerSelect = document.querySelector("#zeller");
zellerSelect.textContent = zellerszámol.toPrecision(3);
zellerSelect.classList.add("color");

let fehérrépaszámol = fehérrépa*növekvés;
let fehérrépa100g = 32;
let fehérrépaKcal = (fehérrépaszámol/100)*fehérrépa100g;//a növekedett értéket elosztom 100-al majd megszorzom a hozzávaló 100g-ban lévő kalóriájával
let fehérrépakcalSpan = document.getElementById("frépa2");
fehérrépakcalSpan.textContent = fehérrépaKcal.toPrecision(2) + "Kcal";
let fehérrépaSelect = document.querySelector("#frépa");
fehérrépaSelect.textContent = fehérrépaszámol.toPrecision(4);
fehérrépaSelect.classList.add("color");

let tvPaprikaszámol = tvPaprika*növekvés;
let tvPaprika100g = 20;
let tvPaprikaKcal = (tvPaprikaszámol/100)*tvPaprika100g;//a növekedett értéket elosztom 100-al majd megszorzom a hozzávaló 100g-ban lévő kalóriájával
let tvPaprikakcalSpan = document.getElementById("paprika2");
tvPaprikakcalSpan.textContent = tvPaprikaKcal.toPrecision(3) + "Kcal";
let tvPaprikaSelect = document.querySelector("#paprika");
tvPaprikaSelect.textContent = tvPaprikaszámol.toPrecision(4);
tvPaprikaSelect.classList.add("color");

let fokhagymaszámol = fokhagyma*növekvés;
let fokhagyma100g = 18;
let fokhagymaKcal = (fokhagymaszámol/100)*fokhagyma100g;//a növekedett értéket elosztom 100-al majd megszorzom a hozzávaló 100g-ban lévő kalóriájával
let fokhagymakcalSpan = document.getElementById("fokhagyma2");
fokhagymakcalSpan.textContent = fokhagymaKcal.toPrecision(2) + "Kcal";
let fokhagymaSelect = document.querySelector("#fokhagyma");
fokhagymaSelect.textContent = fokhagymaszámol.toPrecision(2);
fokhagymaSelect.classList.add("color");

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
let hagymaKcal = (hagymaszámol/100)*hagyma100g;//a növekedett értéket elosztom 100-al majd megszorzom a hozzávaló 100g-ban lévő kalóriájával
let hagymakcalSpan = document.getElementById("hagyma2");
hagymakcalSpan.textContent = hagymaKcal.toPrecision(3) + "Kcal";
let hagymaSelect = document.querySelector("#hagyma");
hagymaSelect.textContent = hagymaszámol.toPrecision(4);
hagymaSelect.classList.add("color");






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