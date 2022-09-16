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
    if(localStorage.getItem(user.email) !=null){
        removeUserFromScreen(user.email);

    }

    const li = document.createElement('li');
    li.id = user.email;
    li.appendChild(document.createTextNode(user.name+' '+user.email));
    list.appendChild(li);
    const edit = document.createElement('input');
    edit.id ='edit';
    edit.type='button';
    edit.value='Edit';
    li.appendChild(edit);
    edit.addEventListener('click', ()=>{
        document.getElementById('name').value=user.name;
        document.getElementById('email').value = user.email;
        li.remove();
    });
    const del = document.createElement('input');
    del.id = 'delete';
    del.value='Delete';
    del.type='button';
    del.addEventListener('click', ()=>{
        localStorage.removeItem(user.email);
       li.remove(); 
    });
    li.appendChild(del);
}

function removeUserFromScreen(emailId){
    console.log(emailId);
    const childNode = document.getElementById(emailId);
    if(childNode){
        list.removeChild(childNode);
    }
}