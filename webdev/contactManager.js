let contactData = document.querySelector('.contact-container');

// console.log(contactData);
fetch("http://localhost:3001/empDetails").then(res => {
    return res.json()
}).then(res =>{
    console.log(res)
    printUI(res);
}).catch(err => console.log('Fetch Failed!!'))


function printUI(data){
    let output=''
    data.map(item =>{
        output += `<div class="col-sm-4 ">
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
      contactData.innerHTML = output;
    }

