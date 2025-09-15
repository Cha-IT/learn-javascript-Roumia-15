// Oppgave 1
let navn ="Maher Roumia";
console.log("Hei " + navn);
// Oppgave 2
let tall1 =5;
let tall2 =10;
console.log(tall1 + tall2);
// Oppgave 3
/*let alder = prompt("Hvor gammel er du? ");
if (alder <  18 ) {
    console.log ("Du får ikke lov til å kjøpe Øl");
}
else{
    console.log ("Du får lov til å kjøpe Øl");
}*/
// Oppgave 4
let Alder = prompt("Hvor gammel er du?");

if (alder < 18) {
  alert("Du kan kjøpe barnebillett");
} else if (Alder < 67) {
  alert("Du skal kjøpe voksenbillett");
} else {
  alert("Du kan kjøpe honnørbillett");
}
