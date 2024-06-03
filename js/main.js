const afiliadosGremio = []

function agregarNuevoAfiliado(dni,nombre,apellido){
    const afiliado = {
        dni:dni,
        nombre:nombre,
        apellido:apellido
    }
    afiliadosGremio.push(afiliado)
}

function verInfoDeAfiliado(dni){
    for (const afiliado of afiliadosGremio) {
        if(afiliado.dni == dni){
            alert("DNI: "+ afiliado.dni + " Nombre: " + afiliado.nombre + " Apellido: " + afiliado.apellido)
        }
        else if(afiliado.dni != dni){
            alert ("El DNI ingresado no corresponde a un afiliado registrado")
        }
    }
    console.log("Ingreso dniNuevo")
}

function verTodosLosAfiliados(){
    for (const afiliado of afiliadosGremio) {
        alert("DNI: " + afiliado.dni + " Nombre: " + afiliado.nombre + " Apellido: " + afiliado.apellido)
    }
    console.log ("Ingreso opcion 3")
}



function main(){
    let continuar = confirm("Bienvenidos al registro y base de datos de afiliados")
    console.log ("Bienvenido a la app de afiliados" )
    while(continuar){
        const accion = parseInt(prompt("Ingrese una opción: (1, 2 o 3)\n\n 1.Registrar afiliado\n 2.Ver afiliado\n 3.Ver todos los afiliados"))
        console.log ("Eleccion de opciones")
        if(accion == "1"){
            const dniNuevo = prompt("Ingrese DNI del nuevo afiliado")
            const nombreNuevo = prompt("Ingrese nombre del afiliado")
            const apellidoNuevo = prompt("Ingrese apellido del afiliado")
            agregarNuevoAfiliado(dniNuevo,nombreNuevo,apellidoNuevo)
            verInfoDeAfiliado(dniNuevo)
            // console.log (dniNuevo,nombreNuevo,apellidoNuevo)
        }else if(accion == "2"){
            const dniNuevo = prompt("Ingrese DNI del afiliado")
            verInfoDeAfiliado(dniNuevo)
            console.log("Ingreso dniNuevo")

        }else if(accion =="3"){
            verTodosLosAfiliados()
            console.log ("Ingreso opcion 3")

        }else{
            alert("Opción no válida")
        }
        continuar = confirm("¿Quiere realizar otra acción?")
    }

}

main()