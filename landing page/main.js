
	const scroll = new SmoothScroll('.navbar a[href*="#"]',{speed:800});
    var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Login and signup merge
const signupBtn=document.querySelector('.modal nav .signup');
const loginBtn=document.querySelector('.modal nav .login');

const loginSection=document.querySelector('#login');
const signupSection=document.querySelector('#signup');

signupBtn.addEventListener('click',function(){
signupBtn.classList.add('selected');
loginBtn.classList.remove('selected');
loginSection.classList.remove('show');
signupSection.classList.add('show');
});

loginBtn.addEventListener('click',function(){
signupBtn.classList.remove('selected');
loginBtn.classList.add('selected');
loginSection.classList.add('show');
signupSection.classList.remove('show');
});