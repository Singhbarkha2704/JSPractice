const contactForm = document.querySelector('.contact-form');
const ufname = document.getElementById('uname');
const uemail = document.getElementById('email');
const ucity = document.getElementById('city');
const msgContent = document.getElementById('msg');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
        id: Date.now(),
        fname: ufname.value,
        email: uemail.value,
        city: ucity.value
    }
    fetch("http://localhost:3000/empDetails", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    }).then(res =>{return res.json()}
    ).then(res =>{msgContent.innerHTML = "Added Contact Successfully!!"}
    ).catch(err => msgContent.innerHTML = "Sorry! Try Again")
}
)