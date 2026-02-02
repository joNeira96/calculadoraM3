//Iniciamos el uso de nuestra Calculadora IMC verificando con consola
console.log("Calculadora de IMC");
function iniciarCalculadora() {
    // Generamos una pequeña base datos simulada con un array para guardar usuarios
    const usuarios = [];

    // Creamos el bucle con while 
    let continuar = true;

    while (continuar) {

        // Pedimos los datos necesarios al usuario para realizar el cálculo (nombre, edad, peso y altura) 

        let nombre = prompt("Ingrese su nombre:");
        if (!nombre || nombre.trim() === "" || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) { //Creamos una condicion para que el usuario ingrese solo datos como texto 

            alert("Nombre inválido. Actualice (F5) e intente nuevamente."); // Verificamos los datos ingresados en consola, si son incorrectos avisamos al usuario con un "alert"

        } else { // Else para que continúe el flujo de ingreso del resto de los datos

            let edad = parseInt(prompt("Ingrese su edad (1-99 años):"));  // Ingresar edad y validar rango 1-99 años
            if (isNaN(edad) || edad < 1 || edad > 99) {  //Esto se lee como "Si la edad no es un número, O es menor que 1, O es mayor que 99, entonces hay un error".

                alert("Edad inválida. Actualice (F5) e intente nuevamente.");

            } else {

                let peso = parseFloat(prompt("Ingrese su peso en kg (1-200 kg):"));  //Igresar peso y validar rango 1-200 kg
                if (isNaN(peso) || peso < 1 || peso > 200) { // Condición

                    alert("Peso inválido. Actualice (F5) e intente nuevamente.");

                } else {

                    let altura = parseFloat(prompt("Ingrese su altura en metros (ej: 1.70):"));   // Ingresar altura y validar rango 0.1-2.0 m
                    if (isNaN(altura) || altura < 0.1 || altura > 2.0) { //Condición    
                        alert("Altura inválida. Actualice (F5) e intente nuevamente.");
                    }


                    // Funcion para registrar al usuario y guardarlo en su array
                    function registrarUsuario(nombre, edad, peso, altura) {

                        // Creamos función para calcular IMC y condiciones para agregarle una categoría
                        // 1. Operación matemática 
                        let imc = peso / (altura * altura);
                        let categoria = "";
                        // Agregamos dos operaciones matematicas mas 

                        // 2. Peso ideal aproximado para IMC 22 normal
                        let imcIdeal = 22;
                        let pesoIdeal = imcIdeal * altura * altura;

                        // 3. Diferencia de peso
                        let diferenciaPeso = peso - pesoIdeal;


                        //Condiciones para categorización: 
                        if (imc < 18.5) categoria = "Bajo Peso";
                        else if (imc < 25) categoria = "Peso Normal";
                        else if (imc < 30) categoria = "Sobrepeso";
                        else categoria = "Obesidad";
                        // obtenidos los datos 
                        const nuevoUsuario = {
                            nombre,
                            edad,
                            peso,
                            altura,
                            imc: imc.toFixed(2), // toFixed nos ayudará a devolver 2 decimales
                            categoria,
                            pesoIdeal: Math.round(pesoIdeal), // math.round nos ayudara a redondear el resultado a numeros entero mas cercano 
                            diferenciaPeso: Math.round(diferenciaPeso),
                        };
                        // Lo guardamos gracias a este push
                        usuarios.push(nuevoUsuario);
                        return nuevoUsuario;
                    }
                    //Cremoas const para guardar al usuarios registrado y asi llevarlos a la alerta
                    const usuarioRegistrado = registrarUsuario(nombre, edad, peso, altura,);

                    // Mostrar los usuarios registrados en consola 
                    console.log("Lista de usuarios registrados:", usuarioRegistrado);

                    // Mostrar resultado al usuario
                    let mensaje = (`¡Hola ${usuarioRegistrado.nombre}!
                    \nTu IMC es: ${usuarioRegistrado.imc}.
                    \nActualmente estás en el rango ${usuarioRegistrado.categoria}.
                    \nTu peso ideal aproximado es de ${usuarioRegistrado.pesoIdeal} kg.
                    \nDebes ${usuarioRegistrado.diferenciaPeso > 0 ? `perder` : `ganar`} ${Math.abs(usuarioRegistrado.diferenciaPeso)} kg.`);
                    alert(mensaje);

                    console.log(mensaje) //mostramos en consola

                    // Para repetir la dinamica creamos una condicion para continuar o finalizar
                    let respuesta = prompt("¿Desea registrar un nuevo usuario? (si/no)").toLowerCase().trim();
                    if (respuesta !== "si") {
                        continuar = false;
                        alert("Gracias por usar la Calculadora IMC. ¡Hasta luego!");
                    }
                }
            }
        }
    }

}

