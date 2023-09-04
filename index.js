/*I called all the Id's here(i used const because let made it reflect null)*/
const menubar = document.querySelector('.menubar');
const closemenu = document.querySelector('.closemenu');
const openmenu = document.querySelector('.openmenu');
const signn = document.querySelector('.signn');
const signupform = document.querySelector('.signupform');
const shoutdown = document.querySelector('.shoutdown');
const shutup = document.querySelector('.shutup');
const loginform = document.querySelector('.loginform'); 
const logg = document.querySelector('.logg');
const fullname = document.querySelector('#fullname');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
const Email = document.querySelector('#Email');
const Password = document.querySelector('#Password');
const Cpassword = document.querySelector('#Cpassword');
const sbutton  = document.querySelector('.sbutton');
const button = document.querySelector('.button');
const afterbtn = document.querySelector('#afterbtn');
const upnext = document.querySelector('#upnext');
const form = document.querySelector('#form');
const first = document.querySelector('#first');
const second = document.querySelector('#second');
const utitle = document.querySelector('#utitle');
const popup = document.querySelector('#popup');
const accept = document.querySelector('#accept');
const view = document.querySelector('#view');
const clickview = document.querySelector('#clickview');
const iaccept = document.querySelector('#iaccept');
const reject = document.querySelector('#reject');
const champ = document.querySelector('#champ');


/*This is for the popup*/


view.addEventListener('click', cookies);
function cookies(){
  clickview.style.display = 'block';
  clickview.style.top = '0';
}

reject.addEventListener('click', acceptss);
iaccept.addEventListener('click',acceptss);
function acceptss(){
  clickview.style.display='none';
  champ.style.display='none';
}

accept.addEventListener('click', accepted);
function accepted(){
  popup.style.display='none';
}

window.onload = showpopup;

function showpopup() {
  const popup = document.querySelector('.popup');
  popup.style.display = 'block';
}/*It ends here*/

/*This is for the login and signup form*/
function matrix() {
    first.style.display='none';
    second.style.display = 'none';
    afterbtn.style.display = 'block';
    afterbtn.style.background='#fff';
    utitle.style.display = 'block';
}
sbutton.addEventListener("click", (event) => {  
  event.preventDefault(); 
  if (validateInputs()) {
    matrix();
  }
});

button.addEventListener("click", (event) => {
  event.preventDefault();
  if (Webinto()) {
    matrix();
  }
});

function validateInputs() {
  if (fullname.value === "") {
    alert("Error: Full name is empty");
    return false;
  }
  
  const re = /^[\w ]+$/;
  if (!re.test(fullname.value)) {
    alert("Error: Full name contains invalid characters!");
    return false;
  }
  
  if (username.value === "") {
    alert("Error: Username is empty");
    return false;
  }
  
  if (email.value === "") {
    alert("Error: Please enter your email address.");
    return false;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    alert("Error: Please enter a valid email address.");
    return false;
  }
  
  if (password.value === "") {
    alert("Error: Password is empty");
    return false;
  }
  
  if (password.value.length < 8) {
    alert("Error: Password must be at least 8 characters long");
    return false;
  }

  if (cpassword.value === "") {
    alert("Error: Confirm password is empty");
    return false;
  }

  if (password.value !== cpassword.value) {
    alert("Error: Passwords do not match");
    return false;
  }
  
  return true;
}

function Webinto(){
  if (Email.value === "") {
    alert("Error: Please enter your email address.");
    return false;
  }
  
  const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!EmailRegex.test(Email.value)) {
    alert("Error: Please enter a valid email address.");
    return false;
  }
  
  if (Password.value === "") {
    alert("Error: Password is empty");
    return false;
  }
  
  if (Password.value.length < 8) {
    alert("Error: Password must be at least 8 characters long");
    return false;
  }

  if (Cpassword.value === "") {
    alert("Error: Confirm password is empty");
    return false;
  }

  if (Password.value !== Cpassword.value) {
    alert("Error: Passwords do not match");
    return false;
  }
  
  return true;
}
/*here is for the input validation*/

/*here is for the reflection of the signup and login form when it's been clicked in the menu*/
signn.addEventListener("click", (event) => {
  event.preventDefault();
  buy();
});

logg.addEventListener("click", (event) => {
  event.preventDefault();
  exam();
});

function exam() {
  loginform.style.display = 'block';
  shutup.style.display = 'block';
}


openmenu.addEventListener('click', show);
closemenu.addEventListener('click', close);
shoutdown.addEventListener('click', closeSignup);
shutup.addEventListener('click', closeSignup);

function show() {
  menubar.style.display = 'flex';
  menubar.style.top = '0';
}

function close() {
  menubar.style.top = '-100%';
closeSignup();
}

function buy() {
  signupform.style.display = 'block';
  shoutdown.style.display = 'block';
}

function closeSignup() {
  signupform.style.display = 'none';
  shoutdown.style.display = 'none';
  loginform.style.display = 'none';
  shutup.style.display = 'none';
}

/*it ends here*/