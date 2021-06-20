var regis = document.querySelector('#regis');
regis.onclick = function change() {
    var forms = document.querySelectorAll('.form');
    console.log('a');
    forms.forEach(function(form ) {
        form.classList.toggle('display');
    })
    // var login = document.querySelector('#login');
    // console.log(login);
    // login.classList.toggle('display');
}
//  regis.addEventListener('click',change);
//  regis.onclick = change;