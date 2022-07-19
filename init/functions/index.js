let baseDeDatosPersonas = [];
const agregarSaldo = (saldo) => {
  person.saldo = saldo + person.saldo;
};
const descontarSaldo = (saldo) => {
  person.saldo = person.saldo - saldo;
};
const agregarPersona = (sexo, nombre, apellido, edad, cedula, saldo = 0) => {
  baseDeDatosPersonas.push({
    indice: baseDeDatosPersonas.length + 1,
    sexo,
    nombre,
    apellido,
    edad,
    cedula,
    saldo,
  });
  return true;
};
const buscarPersona = (indice) => {
  const personaEncontrada = baseDeDatosPersonas.find((persona) => {
    return persona.indice === indice;
  });
  console.log("BUSCAR PERSONA RESULTADO: ", personaEncontrada);
  //return personaEncontrada;
};
console.log("BASE DE DATOS ANTES", baseDeDatosPersonas);
agregarPersona("M", "jesus", "ortiz", 24, "27506365", 10);
console.log("BASE DE DATOS DESPUES", baseDeDatosPersonas);
buscarPersona(0);

const encontrarPersonaConElsaldoMasAlto = () => {
  let personaConElSaldoMasAlto = null;

  for (let i = 0; i < baseDeDatosPersonas.length; i++) {
    let personaActual = baseDeDatosPersonas[i];

    if (personaActual.saldo > personaConElSaldoMasAlto) {
      personaConElSaldoMasAlto = personaActual;
    }
  }
};
