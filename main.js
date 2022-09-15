var submit = document.getElementById('submit');
const list = document.getElementById('users');


Object.keys(localStorage).forEach((key)=>{
    var detailsOfPeople = JSON.parse(localStorage.getItem(key));
    showDataOnScreen(detailsOfPeople);
}
);  

submit.addEventListener('click', onSubmit);
function onSubmit(e){
e.preventDefault();
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var phone = document.getElementById('phone').value;

var obj = {
name,
email,
phone
};
var objConverted = JSON.stringify(obj);

localStorage.setItem(obj.email, objConverted);
showDataOnScreen(obj);
}
function showDataOnScreen(user){
    const li = document.createElement('li');
    li.id = 'userList';
    li.appendChild(document.createTextNode(user.name+' '+user.email));
    list.appendChild(li);
}