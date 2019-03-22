// console.log('Hello World');

function myFunction() {
    console.log("Hello World!");
}   

//var artists = document.querySelectorAll('.face');
var artists = document.getElementById('baba');
//console.log(artists);

artists.addEventListener("click", myFunction);


var modal = document.querySelector(".modal");


//querySelectorAll will return a list of all elements with the class "face"
var trigger = document.querySelectorAll(".face");
var closeButton = document.querySelector(".close-button");
//global audio variable
var audio = new Audio();


function toggleModal(passedName) {
    //add custom html based on person and play sound
    var id = this.id === undefined ? passedName : this.id;
    
    //is equivolent to
    // if(this.id === undefined){
    //     id = passedName
    // } else {
    //     id = this.id
    // }

    var image = document.getElementById("image");
    var title = document.getElementById("title");
    var birthday = document.getElementById("birthday");
    var description = document.getElementById("description");
    var social = document.getElementById("social")

    if(id == "baba"){
        image.innerHTML = "<img src='../img/A-12.jpg' >"
        title.innerHTML = "2Baba"
        birthday.innerHTML = "September 18 | Virgo"
        description.innerHTML = "Innocent Ujah Idibia, known by his stage name 2Baba, is a Nigerian singer, songwriter, record producer and entrepreneur. Prior to July 2014, he went by the stage name 2face Idibia. He is one of the most decorated and successful Afro pop artists in Africa, and is also one of the most bankable artists in Africa"
        social.innerHTML = "<i class='fab fa-twitter'></i> @officail2Baba&nbsp;&nbsp;<i class='fab fa-instagram'></i> @official2baba"
        audio = new Audio ('../sounds/2face.mp3');
        audio.play();
    } else if(id == "davido") {
        document.getElementById("image").innerHTML = "<img src='../img/A-11.jpg' >"
        document.getElementById("title").innerHTML = "Davido"
        document.getElementById("birthday").innerHTML = "November 21 | Scorpio"
        document.getElementById("description").innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores praesentium numquam magni a adipisci vel dolor, labore dignissimos laudantium consequuntur deleniti aliquam aut provident suscipit totam dolore eaque fugiat earum."
        document.getElementById("social").innerHTML = "<i class='fab fa-twitter'></i> @iam_Davido&nbsp;&nbsp;<i class='fab fa-instagram'></i> @davidoofficial"
        audio = new Audio ('../sounds/davido.mp3');
        audio.play();
    } else if(id == "eazi") {
        document.getElementById("image").innerHTML = "<img src='../img/A-10.jpg' >"
        document.getElementById("title").innerHTML = "Mr.Eazi"
        document.getElementById("birthday").innerHTML = "November 22 | Sagittarius"
        document.getElementById("description").innerHTML = "Oluwatosin Oluwole Ajibade, better known by his stage name Mr Eazi, is a Nigerian singer, songwriter, and entrepreneur. He is the pioneer of Banku music, a fusion sound he describes as a mixture of Ghanaian highlife and Nigerian chord progressions and patterns."
        document.getElementById("social").innerHTML = "<i class='fab fa-twitter'></i> @mreazi&nbsp;&nbsp;<i class='fab fa-instagram'></i> @mreazi"
        audio = new Audio ('../sounds/eazi.mp3');
        audio.play();
    } else if(id == "tiwa") {
        document.getElementById("image").innerHTML = "<img src='../img/A-01.jpg' >"
        document.getElementById("title").innerHTML = "Tiwa"
        document.getElementById("birthday").innerHTML = "March 6 | Aries"
        document.getElementById("description").innerHTML = "Tiwatope Savage-Balogun, better known by her stage name Tiwa Savage, is a Nigerian singer, songwriter, performer and actress. She currently has a songwriting deal with Sony/ATV Music Publishing. Savage signed a recording contract with Mavin Records in 2012."
        document.getElementById("social").innerHTML = "<i class='fab fa-twitter'></i>@TiwaSavage &nbsp;&nbsp;<i class='fab fa-instagram'></i> @tiwasavage"
        audio = new Audio ('../sounds/tiwa.mp3');
        audio.play();
    } else if(id == "simi") {
        document.getElementById("image").innerHTML = "<img src='../img/A-09.jpg' >"
        document.getElementById("title").innerHTML = "Simi"
        document.getElementById("birthday").innerHTML = "April 20 | Taurus"
        document.getElementById("description").innerHTML = "Simisola Ogunleye is a Nigerian singer and songwriter. Simi started her career as a gospel singer, releasing her debut studio album in 2008 titled Ogaju."
        document.getElementById("social").innerHTML = "<i class='fab fa-twitter'></i> @SympLySimi&nbsp;&nbsp;<i class='fab fa-instagram'></i> @SympLySimi"
        audio = new Audio ('../sounds/simi.mp3');
        audio.play();
    } else if(id == "shatta") {
        document.getElementById("image").innerHTML = "<img src='../img/A-08.jpg' >"
        document.getElementById("title").innerHTML = "Shatta Wale"
        document.getElementById("birthday").innerHTML = "October 17 | Libra"
        document.getElementById("description").innerHTML = "Charles Nii Armah Mensah Jr., is a Ghanaian-born producer and reggae-dancehall musician. He is known by his stage name Shatta Wale. His best known song is Dancehall King, which led to winning the Artiste of the Year at the 2014 edition of the Ghana Music Awards. "
        document.getElementById("social").innerHTML = "<i class='fab fa-twitter'></i> @shattawalegh&nbsp;&nbsp;<i class='fab fa-instagram'></i> @shattawalenima"
        audio = new Audio ('../sounds/shatta.mp3');
        audio.play();
    } else if(id == "mugeez"){
        document.getElementById("image").innerHTML = "<img src='../img/A-07.jpg' >"
        document.getElementById("title").innerHTML = "Mugeez"
        document.getElementById("birthday").innerHTML = "January 22 | Aquarius"
        document.getElementById("description").innerHTML = "Rashid Mugeez was born and raised in Tema, Ghana alongside Hakeem, and both developed a love of rap while attending school. Various R2Bees singles appeared over the next few years while Mugeez also struck out on his own, guesting on singles by the likes of Criss Waddle, Mr. Eazi, and DJ Breezy."
        document.getElementById("social").innerHTML = "<i class='fab fa-twitter'></i> @mugeezxmugeez&nbsp;&nbsp;<i class='fab fa-instagram'></i> @mugeezxkamikaze"
        audio = new Audio ('../sounds/r2bees.mp3');
        audio.play();
    } else if(id == "maleek") {
        document.getElementById("image").innerHTML = "<img src='../img/A-06.jpg' >"
        document.getElementById("title").innerHTML = "Maleek Berry"
        document.getElementById("birthday").innerHTML = "August 11 | Leo"
        document.getElementById("description").innerHTML = "Maleek Shoyebi, professionally known as Maleek Berry, is a British-Nigerian record producer and recording artist. After his break into the spotlight in 2012, Maleek Berry was nominated in the Music Producer of the Year category at the 2014 Nigeria Entertainment Awards."
        document.getElementById("social").innerHTML = "<i class='fab fa-twitter'></i> @MaleekBerry&nbsp;&nbsp;<i class='fab fa-instagram'></i> @maleekberry"
        audio = new Audio ('../sounds/maleek.mp3');
        audio.play();
    } else if(id == "pato") {
        document.getElementById("image").innerHTML = "<img src='../img/A-05.jpg' >"
        document.getElementById("title").innerHTML = "Patoranking"
        document.getElementById("birthday").innerHTML = "May 27 | Gemini"
        document.getElementById("description").innerHTML = "Patrick Nnaemeka Okorie, better known by his stage name Patoranking, is a Nigerian reggae-dancehall singer and songwriter. He hails from Onicha in Ebonyi State and was born and raised in Ijegun-Egba."
        document.getElementById("social").innerHTML = "<i class='fab fa-twitter'></i> @Patorankingfire&nbsp;&nbsp;<i class='fab fa-instagram'></i> @patorankingfire"
        audio = new Audio ('../sounds/pato.mp3');
        audio.play();
    } else if(id == "kwesi") {
        document.getElementById("image").innerHTML = "<img src='../img/A-04.jpg' >"
        document.getElementById("title").innerHTML = "Kwesi Arthur"
        document.getElementById("birthday").innerHTML = "December 18 | Capricon"
        document.getElementById("description").innerHTML = "Emmanuel Kwesi Danso Arthur Junior (born 18 December), known by the stage name Kwesi Arthur, is a Ghanaian rapper and musician from Tema. In 2015, he released the lead single Grind Day from his debut EP, Live from Nkrumah Krom (2017). The record was released under his independent outfit and supported by a social movement called GroundUp Chale. Kwesi Arthur has collaborated with numerous Ghanaian musicians. He was nominated for Best International Act at the 2018 BET Awards."
        document.getElementById("social").innerHTML = "<i class='fab fa-twitter'></i> @KwesiArthur_&nbsp;&nbsp;<i class='fab fa-instagram'></i> @kwesiarthur_"
        audio = new Audio ('../sounds/kwesi.mp3');
        audio.play();
    } else if(id == "darko") {
        document.getElementById("image").innerHTML = "<img src='../img/A-03.jpg' >"
        document.getElementById("title").innerHTML = "Darkovibes"
        document.getElementById("birthday").innerHTML = "March 14 | Pisces"
        document.getElementById("description").innerHTML = "Andrew Paul Nii Amu Darko, known popularly as Darkovibes, is a Ghanaian born singer, songwriter and fashionista. His music categorizes as experimental music where he blends highlife, hip hop and rap. Darkovibes is known for his 2016 single 'Mercy'."
        document.getElementById("social").innerHTML = "<i class='fab fa-twitter'></i> @darkovibes&nbsp;&nbsp;<i class='fab fa-instagram'></i> @darkovibes"
        audio = new Audio ('../sounds/darko.mp3');
        audio.play();
    } else if(id == "el") {
        document.getElementById("image").innerHTML = "<img src='../img/A-02.jpg' >"
        document.getElementById("title").innerHTML = "EL (LOMI)"
        document.getElementById("birthday").innerHTML = "June 28 | Cancer"
        document.getElementById("description").innerHTML = "Elom Adablah (born 28 June 1986), better known by his stage name E.L, is a Ghanaian Afrobeat musician, rapper, singer and producer. E.L grew up in Dansoman, a suburb of Accra. He first attended St. Martin De Porres School in Dansoman and later transferred to Jack and Jill where he completed his Junior Secondary School level. He then gained admission into Presbyterian Boys Secondary School (PRESEC), where he discovered music. After high school, he pursued a degree in economics and political science at the University of Ghana, Legon."
        document.getElementById("social").innerHTML = "<i class='fab fa-twitter'></i> @ELrepGH&nbsp;&nbsp;<i class='fab fa-instagram'></i> @elrepgh"
        audio = new Audio ('../sounds/el.mp3');
        audio.play();
    }

    modal.classList.toggle("show-modal");
}

function stopMusic(audio) {
    audio.pause();
    audio.currentTime = 0;
}

//toggles CSS
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }

}

//add an event listener to each element with the class .face
for(var i = 0; i < trigger.length; i++){
    trigger[i].addEventListener("click", toggleModal);
}

closeButton.addEventListener("click", function(){
    toggleModal();
    audio.pause();
    audio.currentTime = 0;
});
// show-modal.addEventListener("click", stopMusic);
window.addEventListener("click", windowOnClick);



//Zodiac stuff

//document.getElementById('submission').addEventListener("click", formCode);

function formCode() {
    var artist = "";
    var whichMonth = parseInt(document.getElementById('month').value);
    var whichDayOfMonth = parseInt(document.getElementById('day').value);
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        artist = "kwesi";
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        artist = "eazi";
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        artist = "davido";
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        artist = "shatta";
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        artist = "baba";
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        artist = "maleek";
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        artist = "el";
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        artist = "pato";
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        artist = "simi";
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        artist = "tiwa";
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        artist = "darko";
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        artist = "mugeez";
    }

  toggleModal(artist);

}