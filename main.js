

let nombre = prompt("Escriba PACIENTE si lo es, o DOCTOR, si desea salir escriba SALIR").toLowerCase()



while (nombre != "salir") {

  if (nombre == "paciente") {
   
    covid = prompt("Usted tiene COVID? ESCRIBA SI o NO").toLowerCase()
   
    const tieneCovid = (respuesta) => {
      let mensaje = 'No eligio una opción valida'
      switch (respuesta) {
        case "si":
          mensaje = "Usted puede darse la vacuna denominada pfizer"
          break
        case "no":
          mensaje = "Usted no tiene que vacunarse"
          break
      }
    
      return mensaje
    }
    alert(tieneCovid(covid))

  }
  else if (nombre == "doctor") {
    alert("Usted es doctor no puede vacunarse por este medio")


  } else {

    alert("eligio una respuesta incorrecta")
  }

  nombre = prompt("Escriba PACIENTE si lo es, o DOCTOR, si desea salir escriba SALIR").toLowerCase()
}

