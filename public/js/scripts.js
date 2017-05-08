/*
value-form
*/

function value_form() {

    //Проверка фамилии
    var lastName = document.getElementById("lastName");
    
    if (lastName.value === "") {
        alert("Укажите, пожалуйста, фамилию.");
        lastName.focus();
        return false;
    }

    //Проверка имени
    var firstName = document.getElementById("firstName");

    if (firstName.value === "") {
        alert("Укажите, пожалуйста, имя.");
        firstName.focus();
        return false;
    }

    //Проверка отчества
    var middleName = document.getElementById("middleName");

    if (middleName.value === "") {
        alert("Укажите, пожалуйста, отчество.");
        middleName.focus();
        return false;
    }

    //Проверка почты
    var email = document.getElementById("email");

    if (email.value === "") {
        alert("Укажите, пожалуйста, email.");
        email.focus();
        return false;
    }

    //Проверка паролей
    var pass        = document.getElementById("pass");
    var confirmPass = document.getElementById("confirmPass");

    if (pass.value === "") {
      alert("Поле должно быть заполнено!");
      pass.focus();
      return false;
    } else if (/^[A-Z]{1}[a-zA-Z0-9]{6,20}$/.test(pass.value) === false) {
        alert("Пароль слишком простой.");
        pass.focus();
        return false;
    } else if (pass.value !== confirmPass.value) {
        alert("Пароли не совпадают!");
        confirmPass.focus();
        return false;
    }
    return true;
}
