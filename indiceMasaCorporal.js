function interpretarIMC(indiceMasaCorporal) {
  if (indiceMasaCorporal < 18.5) {
    console.log("Bajo peso");
  } else if (indiceMasaCorporal <= 24.9) {
    console.log("Normal");
  } else if (indiceMasaCorporal <= 29.9) {
    console.log("Sobrepeso");
  } else {
    console.log("Obeso");
  }
}

interpretarIMC(32.2);
