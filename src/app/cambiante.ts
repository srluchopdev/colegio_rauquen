// Array de textos que quieres mostrar
const textos: string[] = [
    "NOSOTROS SOMOS DEPOLOGS",
    "LA FORMULA 1 ES LA MAXIMA CATEGORIA DEL AUTOMIVILISMO",
  ];
  let currentIndex: number = 0;
  
  // Función para cambiar el texto cada 2 minutos (120,000 milisegundos)
  function cambiarTexto() {
    currentIndex = (currentIndex + 1) % textos.length;
    const elementoTexto: HTMLDivElement = document.getElementById("textoCambiante");
    elementoTexto.textContent = textos[currentIndex];
  }
  
  // Cambiar el texto inicial
  cambiarTexto();
  
  // Establecer un intervalo para cambiar el texto cada 10 segundos
  setInterval(cambiarTexto, 10000);