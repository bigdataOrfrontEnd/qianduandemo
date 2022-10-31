const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

//输入错误信息
function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}
//输入正确信息的展示
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}
