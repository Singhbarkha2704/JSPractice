const ufname = document.getElementById('uname');
const addContact = document.querySelector('.user-form');
const contact = document.querySelector('.contact-container');

addContact.addEventListener('submit', (event) =>{
    event.preventDefault();
    let search = ufname.value;
    fetch(`http://localhost:3001/empDetails?fname=${search}`).then(res => res.json()).then(res => {printUI(res)}).catch(err => console.log(err));
})

function printUI(data){
    let output = '';
    data.map(item => {
        output += `<div class="col-sm-6">
        <div class="card custom-card">
          <div class="card-body">
            <h3 class="card-title">${item.fname}</h3>
            <p class="card-text">${item.email}</p>
            <p class="card-text">${item.city}</p>
            <button class="btn btn-primary">Delete<button>
          </div>
        </div>
      </div>`
    })
    contact.innerHTML = output;
}