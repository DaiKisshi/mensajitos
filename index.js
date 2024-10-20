const genText = document.getElementById("gen-text")

genText.addEventListener("click", function() {
  let messages = [
    "Agus, te amo mushísimo",
    "De verdad, grachias por ser mi novia",
    "Siempre estaré para ti, lo prometo",
    "Aprecio mushísimo cada detallito que tienes conmigo",
    "TE AMOOOOOOOO",
    "Eres demasiado bonita :(",
    "Te amo tantísimo, quiero todo contigo",
    "Un día viviremos juntos finalmente :D",
    "Grachias por todo, no sería nada sin ti :c",
    "Siempre seras mi princesita, te lo diré las veces que quieras",
    "Ayayayay, mi niña de ojitos lindos :,(",
    "Quiero abasharte mushitooo",
    "Tú y yo tendríamos que tener musho muamuamua",
    "Dios, no sabes cuanto te amo",
    "Tu y sho <333",
    "Soy demasiado afortunado por tenerte de novia :)",
    "Sabes algo? Te amoooooo askdsdka... cojamos",
    "Estoy muy orgulloso de ti <3",
    "Mi consentida preshiosha",
    "No podría vivir sin ti pipipi",
    "No puedo esperar a abrazarte :c",
    "Mi corazoncito de melón wah",
    "Mi buen amorrrrrrrrrrrrrrrrrrr",
    "Siempre te amaré, nada va a cambiar eso",
    "Te amo más que ayer y menos que mañana c:",
    "Nunca pienses lo contrario, eres muyyyyyyyyyyyyyyyyyyyyy bonita en especial para mí <333",
    "Cuando te sientas bonita, te haré sentir como una joya invaluable (siempre lo eres)",
    "No busques pruebas, obvio que debemos casarnos",
  ]
  const textEl = document.querySelector(".textMessage")
  textEl.textContent = messages[Math.floor( Math.random()*messages.length )]
})