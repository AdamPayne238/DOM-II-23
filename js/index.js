// Your code goes heree

//1 * [*] `click`
//2 * [*] `double click`
//3 * [*] `mouseover`
//4 * [*] `key down`
//5 * [*] `key up`
//6 * [*] `select`
//7 * [*] `resize`
//8 * [*] `drag`
//9 * [*] `wheel`
//10* [*] `focus`
//11* [*] `blur`
//12* [*] `popstate`

// 1
//Click Navbar
const navLinks = document.querySelectorAll('.nav-link');
console.log(navLinks);
navLinks.forEach(function (navLink){
    navLink.addEventListener('click', event => {
        //console logs click
        console.log(event)
        //turns atags red on click
        event.target.style.color = "red";
    })
});

// 2
//Double Click (bubbling)
const nav = document.querySelector('header nav');
nav.addEventListener('dblclick', e => {
    console.log(e);
    //changes background color of a tags to red with bubbling
    e.target.style.backgroundColor = "blue";
});

// 3
//MouseOver h1
let mouseOver = document.querySelector(".main-navigation h1");
mouseOver.addEventListener("mouseover", (e) =>  {   
  // highlight the mouseover target
  e.target.style.color = "pink";
  setTimeout(() => {
    e.target.style.color = "";
  }, 600);
}, false);

// 4
//Key Down
document.addEventListener('keydown', logKey);
function logKey(e) {
nav.textContent += ` ${e.code}`;
}

// 5
//Key Up
document.addEventListener('keyup', logKey);
function logKey(e) {
  nav.textContent += ` ${e.code}`;
}

// 6
//Select
//top paragraph and increases text size
document.addEventListener('selectionchange', event => {
    const p = document.querySelector('p');
    if (window.getSelection().containsNode(p, true)){
        p.style.fontSize = "4rem"
    }
});


// 7
//Resize
//changes opacity of bus picture when resizing browswer window
window.addEventListener('resize', event => {
    document.querySelectorAll('img').forEach(img => {
        img.style.opacity = "0.5";
        alert("omg you are resizing!!!!!!!");
        setTimeout(() => {
            img.style.opacity = "";
        }, 2);
    })
}, false);

// 8
//Drag
//drag fun bus image height up and down
const contentImg = document.querySelector(".content-destination img");
contentImg.addEventListener('drag', (e) =>
    // e.target.style.width = '1000px',
    e.target.style.height = '400px');
// });
    // e.target.style.width = '1000px');

// 9
//Wheel
//increases and decreases size of top Paragraph
function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * -0.01;
  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);
  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}
let scale = 1;
const el = document.querySelector('p');
el.onwheel = zoom;


//Added form above footer
const form = document.getElementById('form');

// 10
//Focus
form.addEventListener('focus', (event) =>{
  event.target.style.background = 'hotpink'; }, true);
// 11
//Blur
form.addEventListener('blur', (event) => {
  event.target.style.background = 'limegreen';    
}, true);


// 12
//Popstate
window.addEventListener('popstate', (event) => {
    console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
  });
  history.pushState({page: 1}, "title 1", "?page=1");
  history.pushState({page: 2}, "title 2", "?page=2");
  history.replaceState({page: 3}, "title 3", "?page=3");
  history.back(); // Logs "location: http://example.com/example.html?page=1, state: {"page":1}"
  history.back(); // Logs "location: http://example.com/example.html, state: null
  history.go(2); 

