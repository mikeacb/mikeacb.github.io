var textoOriginal = document.getElementById("textoOriginal");
var resultado = document.getElementById("textoResultado");
document.getElementById("copyButton").hidden = true;

function encriptar(texto) {
    let encriptado = texto.replace(/e/g, 'enter');
    encriptado = encriptado.replace(/i/g, 'imes');
    encriptado = encriptado.replace(/a/g, 'ai');
    encriptado = encriptado.replace(/o/g, 'ober');
    encriptado = encriptado.replace(/u/g, 'ufat');
    return encriptado;
  }
  
function encriptarTexto() {
    var texto = textoOriginal.value;
    const textoEncriptado = encriptar(texto);
    document.getElementById("imgNoEncontrado").hidden = true;
    document.getElementById("msjNoEncontrado").hidden = true;
    document.getElementById("copyButton").hidden = false;
    textoOriginal.value = "";
    resultado.innerText = textoEncriptado;
} 

  function desencriptar(textoEncriptado) {
    let desencriptado = textoEncriptado.replace(/ai/g, 'a');
    desencriptado = desencriptado.replace(/enter/g, 'e');
    desencriptado = desencriptado.replace(/imes/g, 'i');
    desencriptado = desencriptado.replace(/ufat/g, 'u');
    desencriptado = desencriptado.replace(/ober/g, 'o');
    return desencriptado;
  }

  function desencriptarTexto() {
    var texto = textoOriginal.value;
    const textoDesencriptado = desencriptar(texto);
    document.getElementById("imgNoEncontrado").hidden = true;
    document.getElementById("msjNoEncontrado").hidden = true;
    document.getElementById("copyButton").hidden = false;
    textoOriginal.value = "";
    resultado.innerText = textoDesencriptado;
  }

  function copiarTexto() {
    var texto = resultado.textContent;
    navigator.clipboard.writeText(texto).then(function () {
      alert("Texto copiado con éxito");
    }).catch( function(error) {
      console.error("Error al copiar el texto: ", error)
    });
  }