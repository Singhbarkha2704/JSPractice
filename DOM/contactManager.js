let contactData = document.querySelector('.contact-container');
const ufname=document.getElementById('uname')
const uemail=document.getElementById('email')
const uphone=document.getElementById('phone')
let msgcont=document.getElementById('msg-cont')

// console.log(contactData);
fetch("http://localhost:3000/empDetails").then(res => {
    return res.json()
}).then(res =>{
    console.log(res)
    printUI(res);
}).catch(err => console.log('Fetch Failed!!'))

//print all the data
function printUI(data){
    let output=''
    data.map(item =>{
        output += `<div class="col-sm-4 ">
    <div class="card custom-card">
      <div class="card-body" id=${item.id} data-id=${item.id} data-fname=${item.fname} data-email=${item.email} data-city=${item.city}>
        <h3 class="card-title">${item.fname}</h3>
        <p class="card-text">${item.email}</p>
        <p class="card-text">${item.city}</p>
        <button class="btn btn-primary" id="dlt-btn">Delete</button>
        <button class="btn btn-primary" id="edit-btn">Edit</button>
      </div>
    </div>
        </div>`
      })
      contactData.innerHTML = output;
    }

contactData.addEventListener('click', e =>{
  e.preventDefault();
  const parentElement = e.target.parentElement;
  console.log(parentElement);
  const uid = parentElement.id;
  console.log(uid);
  console.log(e.target.id);
  if(e.target.id === 'dlt-btn'){
    fetch(`http://localhost:3000/empDetails/${uid}`, {
      method: 'DELETE'
    }).then(res =>{return res.json}).then(res => location.reload()).catch(err => console.log(err))
  }

  if(e.target.id==='edit-btn'){
    /*  const parent=e.target.parentElement
      const username=document.getElementById('ui-uname').textContent
      console.log(username)*/
      const parent=e.target.parentElement
      let fname=parent.dataset.fname
      let email=parent.dataset.email
      let phone=parent.dataset.phone
      let userid=parent.dataset.id
     ufname.value=fname
     uemail.value=email
     uphone.value=phone
     addContact.addEventListener('submit',(e)=>{
      console.log("isnide edit event")
      e.preventDefault()
      const data={
          fname:ufname.value,
          email:uemail.value,
          phone:uphone.value
      }
      fetch(`http://localhost:3000/empDetails/${userid}`,{
      method:'PUT',
      body:JSON.stringify(data),
      headers:{
          'Content-Type':'application/json'
      }
      }).then((res)=>{return res.json()}).then((res)=>location.reload()).catch((err)=>console.log(err))
     })
  }
})