
var submit = document.getElementById('submit');

submit.addEventListener('click', onSubmit);
function onSubmit(e){
var name1 = document.getElementById('name').value;
var email = document.getElementById('email').value;
var phone1 = document.getElementById('phone').value;

var obj = {
name1,
email,
phone1
};
var objConverted = JSON.stringify(obj);
e.preventDefault();
localStorage.setItem("User Details", objConverted);
}
