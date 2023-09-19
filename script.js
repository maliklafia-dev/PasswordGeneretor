//ne pas recharger le formulaire
function generatePassword(event) {
  console.log(event);
  event.preventDefault();
  const c = "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn.?!*#@";
  const longueur = 12;
  let motDePasse = "";
  let inputMotDePasse = document.querySelector("#myPass");
  for (let i = 0; i < longueur; i++) {
    const indexC = Math.floor(Math.random() * c.length);
    motDePasse += c[indexC];
  }
  inputMotDePasse.value = motDePasse;
}

function showPassword() {
  let checkBoxElt = document.querySelector("#show");
  let inputMotDePasse = document.querySelector("#myPass");

  if (checkBoxElt.checked) {
    inputMotDePasse.setAttribute("type", "text");
  } else {
    inputMotDePasse.setAttribute("type", "password");
  }
}
