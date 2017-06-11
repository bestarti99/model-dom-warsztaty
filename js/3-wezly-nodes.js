'get strict'

var paragraf = document.getElementById('parFirst');

/* RODZICE */
console.log(paragraf);
console.log(paragraf.parentNode);
console.log(paragraf.parentElement);

/* WĘZŁY DZIECI */
console.log(paragraf.childNodes);  //zwraca wszystkie znaczniki + komentarze i białe znaki
console.log(paragraf.children);  //zwraca tylko znaczniki HTML

console.log(paragraf.firstChild);
console.log(paragraf.lastChild);

console.log(paragraf.firstElementChild);
console.log(paragraf.lastElementChild);

/*  RODZEŃSTWO */
console.log(paragraf.nextSibling);
console.log(paragraf.previousSibling);
console.log(paragraf.nextElementSibling);
console.log(paragraf.previousElementSibling);


/* SPRAWDZENIE WĘZŁÓW */
paragraf.childNodes.forEach(function (element, i) {
    if(element.nodeType === 8) {
        console.log('Komentarz');
        
        element.parentNode.removeChild(element);
    }
});



