function mostrarCampo() {
    var tipo = document.getElementById("tipo").value;
    var fecha_vuelta = document.getElementById("fecha_vuelta");
    if (tipo == "ida_vuelta") {
      fecha_vuelta.classList.remove("oculto");
    } else {
      fecha_vuelta.classList.add("oculto");
    }
  }
  