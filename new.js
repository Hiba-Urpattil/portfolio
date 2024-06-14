let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');

            })
        }
    })
}

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


function sendMail(){
    var params={
        name:document.getElementById("name").value ,
        number:document.getElementById("number").value ,
        email:document.getElementById("email").value ,
        message:document.getElementById("message").value
    };
    const serviceID="service_qdn8ufd";
const templateID="template_yhwxr5a";

emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById("name").value="";  
        document.getElementById("number").value="";      
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("Your message send successfully");
    })
    .catch(err=console.log(err));
}

