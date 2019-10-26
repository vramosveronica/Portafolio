function sendMensaje(){
    let nombre, email, mensaje;
    nombre = document.getElementById('form_name').value;
    email = document.getElementById('form_email').value;
    mensaje = document.getElementById('form_message').value;
    //Para mostrar que si se guardo los datos ingresados en las variables se usan las alert
    //alert(nombre+ '\n'+ email+ '\n'+ mensaje);

    //Metodo para mandar un correo
    Email.send({
        Host : "smtp.gmail.com", //Servidor de correos
        Username : "vasquezramosv@gmail.com", //Micorreo
        Password : "vvr23121998",//Mi contrase;a
        To : 'vasquezramosv@gmail.com',// A donde lo voy a mandar
        From : email,//Quien me lo esta mandando
        Subject : nombre,
        Body : mensaje
    }).then(
      message => alert(message)
    );
 }