var string = "Hello and welcome to my portfolio! My name is Mardo Mai.";
var str = string.split("");
var tt = document.getElementById('typedtext');

var string2 = "As a junior first-year developer at Kuressaare Ametikool, I have gained strong foundational skills in HTML and CSS. I am currently learning Javascript to expand my knowledge and abilities as a developer. Through various coursework, projects, and hands-on experience, I have developed an understanding of the fundamental principles behind web development and design. ";
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