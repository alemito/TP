// FORMULARIO //
window.addEventListener("load", function () {
    // Seteo todos los campos con los que voy a trabajar
    let formulario = document.querySelector("#formulario");
    let password = document.querySelector("#password");
    let confirm_password = document.querySelector("#confirm_password");

    formulario.addEventListener("submit", function (event) {

        if (password.value !== confirm_password.value) {
            alert("Las contraseñas no coinciden.");
            event.preventDefault(); // Evito que el formulario se envie
        }
        else { // Si las claves son iguales continuo con el resto de los chequeos.
            // Verifico si al menos una casilla de verificación está seleccionada
            let checkboxes = document.querySelectorAll('input[name="productos"]'); // Tomo todos los input que tienen el name productos para analizar.
            let seleccionada = false;

            for (let i = 0; i < checkboxes.length; i++) { // BORRAR
                if (checkboxes[i].checked) {
                    seleccionada = true;
                    break; // Con que una este seleccionada es valido
                }
            }

            if (!seleccionada) {
                alert("Por favor, selecciona al menos un producto de tu interes.");
                event.preventDefault(); // Evito que el formulario se envie
            } // Si tiene al menos una opcion seleccionada se envia el mail
            else {
                let correo = document.querySelector('input[type="email"]').value; // Obtengo el mail colocado en el registro.

                alert("El usuario fue registrado, se envió un correo a " + correo); // Informo a que mail llegara el aviso de alta.
            }
        }

    });
});


