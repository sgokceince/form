 var text;
 var email;
 var password;

 var realText= "Sakız";
 var realEmail= "sakiz@gmail.com";
 var realPassword = "123456";


 function handleSubmit(event) {
    event.preventDefault();
    text = text.target.text.value;
    email = email.target.email.value;
    password = password.target.password.value;

    if(text == " " || email == " " || password == " ") {
        alert("tüm alanları doldurunuz")
    }else if (text == realText && email == realEmail && password == realPassword) {
        alert("Hoşgeldiniz")
        return false
    }else if(text != realText) {
        alert("kullanıcı adı yanlış")
        return false
    }else if (email != realEmail) {
        alert("email yanlış")
        return false 
    }else if (password != realPassword) {
        alert ("sifre yanlış")
        return false 
    }
 }
