
window.onload=function(){
  const btn=document.getElementById("submitbtn");

  btn.addEventListener("click",(e)=>{
   e.preventDefault()
   
   const formdetails={
    name:document.getElementById("name").value.trim(),
    Subject:document.getElementById("subject").value.trim(),
    userMail:document.getElementById("mail").value.trim(),
    message:document.getElementById("msg").value.trim()
   };

   if(formdetails.name===""){
     alert("Enter name")
   }else if( formdetails.userMail===""){
     alert("Pls Enter email id")
   }else if(formdetails.Subject===""){
     alert("enter subject")
   }else if(formdetails.message===""){
     alert("Enter a Message")
   }else{
    emailjs.send("service_xkzzd0h","template_eluwhnx",formdetails)
   .then((response)=>{
    alert("Email sent successfully!");
    console.log("SUCCESS",response.status,response.text)
   },(error)=>{
    alert("failed to send email")
    console.error("FAilED",error);
   })
   }
  })
}

const modeBtn = document.getElementById("modebtn");
const body = document.body;

modeBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  const icon = modeBtn.querySelector("i");
  if (body.classList.contains("light-mode")) {
    icon.classList.replace("fa-toggle-on", "fa-toggle-off");
  } else {
    icon.classList.replace("fa-toggle-off", "fa-toggle-on");
  }
});


