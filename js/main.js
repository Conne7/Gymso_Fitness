//automatska provera radnog vremena, boji vreme u crveno ako teretana ne radi, u suprotnom boji u zeleno
window.addEventListener('load',function(){
    console.log("ucitao sam funkciju")
let vreme=new Date();
let dan=vreme.getDay();
let sat=vreme.getHours();
let sati=[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
var radnoVreme=document.getElementById('radnoVreme');
if(dan==0 || !sati.includes(sat)){
    radnoVreme.classList.add('crvenaSlova');
}
else{
    radnoVreme.classList.add('zelenaSlova');
}
})

//pravljenje objekata za meni i drustvene mreze
const linkovi=[
    {
        "link": "Početna",
        "tag" : "home"
    },
    {
        "link": "O nama",
        "tag" : "about"
    },
    {
        "link": "Treninzi",
        "tag" : "class"
    },
    {
        "link": 'Raspored',
        "tag" : "schedule"
    },
    {
        "link": "Kontakt",
        "tag" : "contact"
    },
    {
        "link": "Galerija",
        "tag": "galerija"
    }
]

const socials=["facebook","twitter","instagram"]

const slike=[
    {
        "naziv":"Bench press",
        "id":1,
        "src":"slika1",
        "alt":"slika1",
        "opis":"Ovo je bench press, vezba koja se radi za grudi",
        "nivo":"Osnovni"
    },
    {
        "naziv":"Cucanj",
        "id":2,
        "src":"slika2",
        "alt":"slika2",
        "opis":"Ovo je bench press, vezba koja se radi za grudi",
        "nivo":"Osnovni"
    },
        {
        "naziv":"Mrtvo dizanje",
        "id":3,
        "src":"slika3",
        "alt":"slika2",
        "opis":"Ovo je bench press, vezba koja se radi za grudi",
        "nivo":"Osnovni"
    },
        {
        "naziv":"Kosi bench press",
        "id":4,
        "src":"slika4",
        "alt":"slika2",
        "opis":"Ovo je bench press, vezba koja se radi za grudi",
        "nivo":"Srednji"
    }

]
const treninzi=[{
    "tip": "Kardio",
    "trener": "Marko",
    "slika":"marko",
    "opis": "Kardio nije samo trcanje na traci, veoma je bitna stavka u svakodnevnom zivotu! Kretanje je covekova osnovna radnja.",
    "cena": 4000,
},{
    "tip": "Tezinski",
    "trener": "Petar",
    "slika":"petar",
    "opis": "Trening namenjen malo spremnijim vezbacima, oborite svoje licne rekorde uz nase sjajne trenere.",
    "cena": 5500,
},{
    "tip": "Funkcionalni",
    "trener": "Milica",
    "slika":"milica",
    "opis": "Radite na pravilnom kretanju uz pomoc vezbi koje pomazu poboljsanju svakodnevnih aktivnosti.",
    "cena": 3500,
},

]
//pravljenje funkcija za meni i drustvene mreze i njihovo pozivanje
function ispisiLinkove(links){
    //console.log("usao sam u funkciju za linkove")
    let drzac = document.getElementById('navbarNav')
    var html='<ul class="navbar-nav ml-lg-auto">\n'
    for(let lnk of links){
        console.log(lnk.tag);
        html+=`
        <li class="nav-item">
            <a href="#${lnk.tag}" class="nav-link smoothScroll" >${lnk.link}</a>
        </li>`
    }
    html+= '</ul>'
    drzac.innerHTML+=html;
}
// Meni se uredno ispise, ali iz nekog razloga ne reaguje na levi klik misa(??), ako idem desni klik,
//pa open in new windows, radi.
// Takodje kada se pomeram kroz sajt rucno, deo sajta u kom se nalazimo(na primer treninzi) dobija klasu active.
//Proverio sam i sa default linkovima, ne radi pomeraj levim klikom na link, otvaranjem u novom tabu se pomera
//Stvarno ne znam sta je problem, izvinjavam se..


function ispisiTrenere(trener){
    let red=document.getElementById('red');
    brojac=0;
    let html=`<div class="col-lg-12 col-12 text-center mb-5">
                <h6 data-aos="fade-up">Dovedi svoje telo do savršenstva</h6>
                <h2 data-aos="fade-up" data-aos-delay="200">Naši treninzi</h2>
            </div>`;
    for(trn of trener){
        console.log("usao sam u petlju")
        if(brojac==0){
        html+=`
    <div class="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="400">
    <div class="class-thumb">
        <img src="images/team/${trn.slika}.jpeg" class="img-fluid sredi" alt="${trn.naziv}">

        <div class="class-info">
            <h3 class="mb-1">${trn.tip}</h3>

            <span><strong>Trener</strong> - ${trn.trener} </span>

            <span class="class-price">${trn.cena}</span>

            <p class="mt-3">${trn.opis}</p>
        </div>
    </div>
    </div>
    `
        }
    else{
        html+=`
        <div class="mt-5 mt-lg-0 col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="400">
        <div class="class-thumb">
            <img src="images/team/${trn.slika}.jpeg" class="img-fluid sredi" alt="${trn.naziv}">
    
            <div class="class-info">
                <h3 class="mb-1">${trn.tip}</h3>
    
                <span><strong>Trener</strong> - ${trn.trener} </span>
    
                <span class="class-price">${trn.cena}</span>
    
                <p class="mt-3">${trn.opis}</p>
            </div>
        </div>
        </div>
        `
    }
        brojac++;

}
    red.innerHTML=html
}
ispisiTrenere(treninzi)
function ispisiDrustveneMreze(lnks){
   // console.log("usao sam u funkciju za drustvene mreze")
    //console.log(socials.length)
    let drzac=document.getElementById('navbarNav')
    let html='<ul class="social-icon ml-lg-3">'
    for(let i=0;i<socials.length;i++){
        html+=`<li><a href="#" class="fa fa-${lnks[i]} target="_blank""></a></li>`
    }
    html+='</ul>'
    drzac.innerHTML+=html

}

function ispisiSlike(img){
    console.log("pokrenuo sam funkciju za slike")
    var slikePolje=document.getElementById('slike');
    let html=''
    let brojac=0;
     for(let slika of img){
         brojac++;
         html+=`
         <div class="slike">
         <img src="images/team/${slika.src}.jpeg" alt="${slika.alt}" class="efekat sredi"/>
            <div class="opis">
                <h4>${slika.naziv}</h4>
                <p>${slika.opis}</p>
                <p>${slika.nivo}</p>
            </div>
         </div>
         `
     }
     slikePolje.innerHTML+=html
}

ispisiSlike(slike)
ispisiLinkove(linkovi)
ispisiDrustveneMreze(socials)


//funkcija za ispis teksta
var i=0;
function typeWriter() {
var txt = 'Poboljšaj kvalitet svog života, pridruži nam se.';
var speed = 50;
  if (i < txt.length) {
    document.getElementById("ispis").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()



var imeSablon= /^[A-ZČĆŽŠĐ][a-zčćžš]{2,15}(\s[A-ZČĆŽŠĐ][a-zčćžš]{2,15})+$/;
var emailSablon = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
var telSablon=/^06[0-9]{7,8}$/;
var porukaSablon = /^.{5,}$/;
let poljeIme= document.getElementById("ime");
let poljeEmail= document.getElementById("email");
let poljeTel=document.getElementById("tel");
let poljePoruka=document.getElementById("komentar");

poljeIme.addEventListener("blur",proveriIme);
function proveriIme(){
    let ime=document.getElementById("ime")
    let imeGreska=document.getElementById("imeGreska");
    if(!imeSablon.test(ime.value)){
        console.log("nisam prosao proveru")
        imeGreska.classList.remove('sakrij');
        return false
    }
    if(imeSablon.test(ime.value)){
        console.log("prosao sam proveru")
        imeGreska.classList.add('sakrij');
        return true;
    }
}

poljeEmail.addEventListener("blur",proveriEmail);
function proveriEmail(){
    let email=document.getElementById("email")
    let emailGreska=document.getElementById("emailGreska");
    if(!emailSablon.test(email.value)){
        console.log("nisam prosao proveru")
        emailGreska.classList.remove('sakrij');
        return false
    }
    if(emailSablon.test(email.value)){
        console.log("prosao sam proveru")
        emailGreska.classList.add('sakrij');
        return true;
    }
}
poljeTel.addEventListener("blur",proveriTel);
function proveriTel(){
    let tel=document.getElementById("tel")
    let telGreska=document.getElementById("telGreska");
    if(!telSablon.test(tel.value)){
        console.log("nisam prosao proveru")
        telGreska.classList.remove('sakrij');
        return false
    }
    if(telSablon.test(tel.value)){
        console.log("prosao sam proveru")
        telGreska.classList.add('sakrij');
        return true;
    }
}
poljePoruka.addEventListener("blur",proveriPoruku);
function proveriPoruku(){
    let poruka=document.getElementById("komentar")
    let porukaGreska=document.getElementById("porukaGreska");
    if(!porukaSablon.test(poruka.value)){
        console.log("nisam prosao proveru")
        porukaGreska.classList.remove('sakrij');
        return false
    }
    if(porukaSablon.test(poruka.value)){
        console.log("prosao sam proveru")
        porukaGreska.classList.add('sakrij');
        return true;
    }
}

let Dugme=document.getElementById("submit-button")
function proveri(){
    console.log("usao sam u funkciju")
    proveriIme();
    proveriTel();
    proveriEmail();
    proveriPoruku();

    let bravo=document.getElementById("uspesnaForma")
    if(proveriIme()&&proveriTel()&&proveriEmail()&&proveriPoruku()){
        console.log("uspesna forma")
        bravo.classList.remove('sakrij');
    }
    else{
        console.log("losa forma")
        proveriIme();
        proveriTel();
        proveriEmail();
        proveriPoruku();
        bravo.classList.add('sakrij');
    }
}


let prikaz=$('#btn');
prikaz.bind('click',prikaziSee);
function prikaziSee(){
let klasa=$('#skriveni')
if(klasa.hasClass('sakrij')){
    console.log('12')
    klasa.removeClass('sakrij')
    prikaz.attr('value','Sakrij')
}
else{
    console.log('13')
    klasa.addClass('sakrij')
    prikaz.attr('value','Prikaži više')

}
}


var slideIndex = 1;
prikaziSlajdove(slideIndex);
function povecajSlajdove(n) {
 prikaziSlajdove(slideIndex += n);
}
function trenutniSlajd(n) {
 prikaziSlajdove(slideIndex = n);
}
function prikaziSlajdove(n) {
 var i;
 var slajdovi = document.getElementsByClassName("slajd");
 var dots = document.getElementsByClassName("dot"); 
 if (n > slajdovi.length) {slideIndex = 1}
 if (n < 1) {slideIndex = slajdovi.length}
 for (i = 0; i < slajdovi.length; i++) {
 slajdovi[i].style.display = "none";
 if(slajdovi[i]>=slajdovi.length){
     slajdovi[i]=0;
 }
 }
 for (i = 0; i < dots.length; i++) {
 dots[i].className = dots[i].className.replace(" active", "");
 }
 slajdovi[slideIndex-1].style.display = "block";
 dots[slideIndex-1].className += " active";
}

function proveraForme(){
    if(proveriIme()&&proveriTel()&&proveriEmail()&&proveriPoruku()){
        demoNoticeBottomLeft()
    }
    else{
        demoNoticeBottomLeft1()
    }
}

function demoNoticeBottomLeft() {
	new jBox('Notice', {
        color: 'green',
		content: 'Uspešno poslata forma',
		attributes: {
			x: 'left',
			y: 'bottom'
		},
		position: {  // The position attribute defines the distance to the window edges
			x: 50,
			y: 5
		}
	});
    proveriIme();
    proveriTel();
    proveriEmail();
    proveriPoruku();
}

function demoNoticeBottomLeft1() {
	new jBox('Notice', {
        color: 'red',
		content: 'Neispravno popunjena forma, obratite pažnju na formular!',
		attributes: {
			x: 'left',
			y: 'bottom'
		},
		position: {  // The position attribute defines the distance to the window edges
			x: 50,
			y: 5
		}
	});
    proveriIme();
    proveriTel();
    proveriEmail();
    proveriPoruku();
}


$(document).ready(function()
{$("#logo").hover(function() {
 $(this).animate({
 color: "#5c2526",
 "border-bottom-width": "4px"

 }, 100);}, function() {
    $(this).stop().animate({
    color: "#000000",
    "border-bottom-width": "0px"
   
    }, 200);
   });});