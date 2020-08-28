//let magasság = prompt("Milyen magas vagy?")
//let magasságcm = Number(magasság);

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

//Makrók HTML-be kiirása
let f = document.getElementById("fehérje");
f.textContent = fehérje.toPrecision(4)+"g";

let zs = document.getElementById("zsír");
zs.textContent = zsír.toPrecision(4)+"g";
console.log(zs);

let sz = document.getElementById("szénhidrát");
sz.textContent = szénhidrát.toPrecision(4)+"g";

//Hozzávalók mennyísége HTML-be kiírása
let marha = document.getElementById("marha");
let marhaCal = (fehérje*100/22); // fehérje kiszámolt értéke*100g/ahány gramm fehérje van 100g-ban
marha.textContent = marhaCal.toPrecision(4) + "g";
marha.classList.add("color");

let zsírtartalom = document.getElementById("sertésZsír");
let zsírCal = (zsír*100/116); // zsír kiszámolt értéke*100g/ahány gramm fehérje van 100g-ban
zsírtartalom.textContent = zsírCal.toPrecision(4) + "g";
zsírtartalom.classList.add("color");

let szénhidrátTartalom = document.getElementById("krumpli");
let szénhidrátCal = (szénhidrát*100/19); // szénhidrát kiszámolt értéke*100g/ahány gramm fehérje van 100g-ban
szénhidrátTartalom.textContent = szénhidrátCal.toPrecision(4) + "g";
szénhidrátTartalom.classList.add("color");