function sendEmail() {
    var error = 0;
    var mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (document.getElementById("nombre").value === '') {
        document.getElementById("errorNombre").style.display = "block"
        error++;
    } else {
        document.getElementById("errorNombre").style.display = "none"
    }
    if (document.getElementById("telefono").value === '') {
        document.getElementById("errorTelefono").style.display = "block"
        error++;
    } else {
        document.getElementById("errorTelefono").style.display = "none"
    }
    if (document.getElementById("email").value === '') {
        document.getElementById("errorEmail").style.display = "block"
        error++;
    } else {
        document.getElementById("errorEmail").style.display = "none"
        if (!mailformat.test(document.getElementById("email").value)) {
            document.getElementById("errorFormatoEmail").style.display = "block"
            error++
        } else {
            document.getElementById("errorFormatoEmail").style.display = "none"
        }
    }

    if (document.getElementById("mensaje").value === '') {
        document.getElementById("errorMensaje").style.display = "block"
        error++;
    } else {
        document.getElementById("errorMensaje").style.display = "none"
    }

    if (error > 0) return

    Email.send({
        SecureToken: "950c324d-9f9a-47fd-81ff-1c8c6b745dcf",
        To: 'daniel_calandra@hotmail.com',
        From: document.getElementById("email").value,
        Subject: "Consulta desde Pagina web",
        Body: "<html><body><label>De parte de " + document.getElementById("nombre").value + "</label><br/><br/><label>" + document.getElementById("mensaje").value + "</label></body></html>",
    })
        .then(function (message) {
            alert("mail sent successfully")
        });
}
