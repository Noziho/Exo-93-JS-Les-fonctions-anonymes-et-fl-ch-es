let button1 = document.getElementById("alert");
let button2 = document.getElementById("somme");

button1.addEventListener('click', () => {
    alert("Hello world !")
    button1.style.fontSize = "2rem";
});

button2.addEventListener('click', () => {
    let div = document.createElement('div');
    div.innerHTML = 5 + 6;
    document.body.append(div);
    button2.style.fontSize = "4rem";
} );

button2.addEventListener('mouseenter', () => button2.style.width = "20%");
button2.addEventListener('mouseout', () => button2.style.width = "10%");

button1.addEventListener('mouseenter', () => button1.style.background = "deeppink");
button1.addEventListener('mouseout', () => button1.style.background = "lightgrey");


