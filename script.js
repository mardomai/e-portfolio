var string = "Hello and welcome to my portfolio! My name is Mardo Mai.";
var str = string.split("");
var tt = document.getElementById('typedtext');

var string2 = "I am a Junior Developer learning in Kuressaare Ametikool. ";
var str2 = string2.split("");
var tt2 = document.getElementById('typedtext2');

function delay(func, delayTime) {
    setTimeout(func, delayTime);
};

function typing() {

    str.length > 0 ? tt.innerHTML += str.shift() : clearTimeout(running); 
    var running = setTimeout(typing, 30);

};

function typing2() {

    str2.length > 0 ? tt2.innerHTML += str2.shift() : clearTimeout(running2); 
    var running2 = setTimeout(typing2, 25);

};
delay(function() {typing()}, 1000);
delay(function() {typing2()}, 2800);