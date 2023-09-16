// text change 
function textChange(){
    document.getElementById('t_h3').innerHTML = "Hello Bangladesh!";
}

// date change 
function showDate(){
    document.getElementById('d_h3').innerHTML = Date();
}

// bulb on/off 
function bulbOn(){
    document.getElementById('img').src = "images/on.gif"
}

function bulbOff(){
    document.getElementById('img').src = "images/off.gif"
}

// style change 
function styleChange(){
    document.getElementById('s_h3').style.fontSize = "40px"
}
// show hide 
function show(){
    document.getElementById('sh_h2').style.display = "block"
}

function hide(){
    document.getElementById('sh_h2').style.display = "none"
}

// alert 
function wAlert(){
    window.alert('Lorem ipsum dolor sit amet');
}

// document write 
function dAlert(){
    document.write('Lorem ipsum dolor sit amet.');
}

// let example
function result(){
    document.getElementById('re_1').innerHTML="41"
}

// mouseover
function onMo(){
    document.getElementById('img_se').src = "images/on.gif"

}

function onOut(){
    document.getElementById('img_se').src = "images/off.gif"

}