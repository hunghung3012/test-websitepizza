const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signUpButton_main = document.querySelector('.sign-up-container button');
const signInButton_main = document.querySelector('.sign-in-container button');
const signIn_email = document.querySelector('.sign-in-container .email_input');
const signIn_pass = document.querySelector('.sign-in-container .password_input');
const nameInputsu = document.querySelector('.name_input_signup');
const emailInputsu = document.querySelector('.email_input_signup');
const passInputsu = document.querySelector('.pass_input_signup');
const error1 = document.querySelector('.error1');
const error2 = document.querySelector('.error2');
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
var account = [
	{
		email:"test1@gmail.com",
		pass:"test1@gmail.com",
	},
	{
		email:"test2@gmail.com",
		pass:"test2@gmail.com",
	}
]
signInButton_main.addEventListener('click', () => {

	check();
});
function check() {
	let check_account = false;
	account.forEach((item) => {
		if (item.email === signIn_email.value && item.pass === signIn_pass.value) {
		  check_account = true;
		  return;
		}
	  });
	if (check_account) {
		error1.style.display = "none"
		window.location.href = 'index.html';
	}else {
		error1.style.display = "block";
	};
};

// sign up
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
signUpButton_main.addEventListener('click', () => {
	add();
});
function add() {
	if(emailRegex.test(emailInputsu.value ) ) {
		let new_ac = {
			email:emailInputsu.value,
		 	pass:passInputsu.value,
		}
		account.push(new_ac);
		console.log(account);
		alert("Đăng ký thành công")
		error2.style.display = "none"
	}
	else {
		error2.style.display = "block"
	}
}

