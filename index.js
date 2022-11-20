// ====================FETCHING ALL ELEMENTS FROM HTML======================
const nameq = document.querySelector("#name");
const email = document.querySelector("#email");
const mobile = document.querySelector("#mobile");
const submitbutton = document.querySelector("#submitbutton");
const tablemain = document.querySelector("#tablemain");
const formmain = document.querySelector("#formmain");
const Middle = document.querySelector("#Middle");
const rowtwo = document.querySelector("#row2");
const newrow = document.querySelector("#row3");
// ====================FETCHING ALL ELEMENTS FROM HTML======================



// =======================FUNCTION TO STOP THE DEFAULT BEHAVIOUR OF FORM==========
formmain.addEventListener("submit", (event) => {
  event.preventDefault();
});
// =======================FUNCTION TO STOP THE DEFAULT BEHAVIOUR OF FORM==========




// ===========FUNCTION FOR ADD THE DETAILS==================================
submitbutton.addEventListener("click", sub);

function sub() {
  if (nameq.value == "" || email.value == "" || mobile.value == "") {
    // setTimeout(()=>{
    //     Middle.style.display = "block";
    // },100);

    Middle.innerText = "Please Enter the complete Details";
    setTimeout(() => {
      Middle.innerText = "";
    }, 1000);
  } else {

    let x = nameq.value;
    let y = email.value;
    let z = mobile.value;

    const rowthree = document.createElement("tr");
    const newtdo = document.createElement("td");
    const newtdtwo = document.createElement("td");
    const newtdthree = document.createElement("td");
    const newtdfour = document.createElement("td");
    const delete1 = document.createElement("button");

     
    delete1.setAttribute("class", "del");
    // console.log(delete1)
    delete1.innerText = "Delete";

    delete1.style = "width:100px; height:50px; background:red; border-radius:5px;";

    newtdfour.appendChild(delete1);

    // newtdo.style.width = "100px"

    // alert(newtdo);

    tablemain.appendChild(rowthree);
    rowthree.append(newtdo, newtdtwo, newtdthree, newtdfour);

    newtdo.innerText = x;
    newtdtwo.innerText = y;
    newtdthree.innerText = z;
    nameq.value = "";
    email.value = "";
    mobile.value = "";
    
  }
}
// ===========FUNCTION FOR ADD THE DETAILS==================================

 

    


// ===========FUNCTION FOR DELETE THE ROW==================================
tablemain.addEventListener("click", deletebtn);

function deletebtn(e) {
  if (!e.target.classList.contains("del")) return;
  const delete1 = e.target;
  delete1.parentElement.parentElement.remove();
}
// ===========FUNCTION FOR DELETE THE ROW==================================








// const oo = document.querySelector('.del');

// console.log(oo);

// oo.addEventListener('click', huhu)

// function huhu (){

// }

// oo.addEventListener('click', (e)=>{
//     e.parentElement.parentElement.remove()
// })

// console.log(oo)

// document.querySelector('.del').addEventListener('click', delrow)
// function delrow (){
//     rowthree.setAttribute('class',"bodymji");
// }

// document.addEventListener ('click', (event)=>{
//     console.log(event)
// })
