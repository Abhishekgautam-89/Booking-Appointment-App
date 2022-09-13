
var submit = document.getElementById('submit');

submit.addEventListener('click', onSubmit);
function onSubmit(e){
var name1 = document.getElementById('name').value;
var email = document.getElementById('email').value;
e.preventDefault();
localStorage.setItem(email, name1);
}
