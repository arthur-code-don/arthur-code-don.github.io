const fname = document.getElementById('first-name');
const lname = document.getElementById('last-name');
const email = document.getElementById('email');
const bio = document.getElementById('bio');
const refer = document.getElementById('referrer');

// Add event listener on form container..
const submit = document.getElementsByClassName('.form-contact')[0];

submit.addEventListener('submit',(e)=>{
  e.preventDefault();
  console.log("made you click!");

// html proper format within email

/*let ebody = `
<b>First Name: </b>${first-name.value}
<br>
<b>Last Name: </b>${last-name.value}
<br>
<b>Email: </b>${email-name.value}
<br>
<b>Bio: </b>${bio.value}
<br>
`*/
 
 
 
 /* Email code */
 
 function sendEmail(){
    Email.send({
      SecureToken : "",
      Host : "smtp.gmail.com",
      Username : "",
      Password : "",
      To : '',
      From : document.getElementById("email").value,
      Subject : "Registration Form Inquiry",
      Body : "Name: " + document.getElementById("first-name").value
          + "<br> Last Name: " + document.getElementById("last-name").value
          + "<br> Email: " + document.getElementById("email").value
         /* + "<br> Phone no: " + document.getElementById("phone").value */
          + "<br> Referrer: " + document.getElementById("referrer").value
          + "<br> Message: " + document.getElementById("bio").value


    }).then(
      message => alert("You have submitted this form successfully")
    );
}});