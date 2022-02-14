//**--like function--**/
//step1: select the element (like button )
//step2: swap the array (for loop)
//step3: link the element   with an  event
//step: create a function with the needed instructions

let likes = document.querySelectorAll(".like-btn");
console.log(likes);

for (let i = 0; i < likes.length; i++) {
  console.log(likes[i]);
  likes[i].addEventListener("click", function () {
    if (likes[i].style.color === "grey") {
      likes[i].style.color = "red";
    } else {
      likes[i].style.color = "grey";
    }
  });
}
//**--plus  function--**/
//step1: select the element (plus  button )
//step2: swap the array (for loop)
//step3: link the element   with an  event
let plusBtn = document.querySelectorAll(".plus-btn");
let minusBtn = document.querySelectorAll(".minus-btn");
let price = document.querySelectorAll(".price");
let qtt=document.querySelectorAll('.number-items')
let orginalPrices = document.querySelectorAll("span[data-price]")
let totalElement = document.querySelector("#total")
let itemContainer = document.querySelectorAll(".item-container")
let deleteBtn = document.querySelectorAll (".delete-btn")


for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener("click", function () {
    //console.log(plusBtn[i].nextElementSibling.innerHTML);
    plusBtn[i].nextElementSibling.innerHTML++;
    price[i].innerHTML = qtt[i].innerHTML * orginalPrices[i].getAttribute('data-price');
    updateTotal()
});
}

for (let i = 0; i < minusBtn.length; i++) {
  minusBtn[i].addEventListener("click", function () {
    if (parseInt(qtt[i].innerHTML) > 0) {
        minusBtn[i].previousElementSibling.innerHTML--;
        price[i].innerHTML = qtt[i].innerHTML * orginalPrices[i].getAttribute('data-price');
        updateTotal()
    }
    if (parseInt(qtt[i].innerHTML) === 0) {
        price[i].innerHTML = orginalPrices[i].getAttribute('data-price');
    }
  });
}

function updateTotal() {
    let total = 0
    for (let i = 0; i < price.length; i++) {  
        if (parseInt(qtt[i].innerHTML) > 0) {
            total += parseInt(price[i].innerHTML)
        }    
    }
    totalElement.innerHTML = total
}

for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", function () {
    console.log(deleteBtn[i])
    itemContainer[i].remove();
    });
   
}


