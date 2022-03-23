let container = document.getElementById('container');
let button = document.querySelector('section#container > button[type=button]');
let rates = document.querySelectorAll('span.rate');


for(i=0; i <= rates.length -1; i++){
  rates[i].setAttribute('onclick','rating(this)');
}

function submitRating(rate) {
  // body...
  container.setAttribute('class','thank-you');
  container.innerHTML = `<img src="./images/illustration-thank-you.svg" alt="icon">
    <div class="rated">
      You selected ${rate} out of 5
    </div>
    <h1>Thank you!</h1>
    <p>We appreciate you taking the time to give a rating. If you ever need more support,
    don’t hesitate to get in touch!</p>`;
}


function rating(e) {
  let index = e.innerText -1;
  //change the color of the element When selected.
for (i = 0; i < rates.length; i++) {
  if (i == index) {
    rates[index].setAttribute('class','active rate');
  }else {
      rates[i].setAttribute('class','rate');
  }
}

//active button 
button.removeAttribute('disabled');
button.setAttribute('onclick',`submitRating(${index+1})`);
}
