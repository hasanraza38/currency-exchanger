const currency1 = document.querySelector('#currency1')
const currency2 = document.querySelector('#currency2')
const renderDiv = document.querySelector('#renderDiv')
const input = document.querySelector('#input')
const form = document.querySelector('#form')

const pkr = 1
const inr = 4
const usd = 270
const sar = 72
const eur = 302



form.addEventListener ('submit',(e) =>{
e.preventDefault()

      conditions()
    // console.log(input.value);
    // console.log(currency1.value);
    // console.log(currency2.value);
// input.value === " "
})


const conditions = () =>{
                   //PKR
    if (currency1.value === 'pkr' && currency2.value === "usd") {
        renderDiv.innerHTML= `<h1 class="text-center text-black"> Converted Rate : ${String(input.value / usd).slice(0,6) + " " + currency2.value} </h1>`
    } 
    else if(currency1.value === 'pkr' && currency2.value === "inr") {
    renderDiv.innerHTML= `<h1 class="text-center text-black"> Converted Rate : ${String(input.value / inr).slice(0,6) + " " + currency2.value} </h1>`
    }
    else if(currency1.value === 'pkr' && currency2.value === "sar") {
     renderDiv.innerHTML= `<h1 class="text-center text-black"> Converted Rate : ${String(input.value / sar).slice(0,6)+ " " + currency2.value} </h1>`
    }
    else if(currency1.value === 'pkr' && currency2.value === "eur") {
     renderDiv.innerHTML= `<h1 class="text-center text-light"> Converted Rate : ${String(input.value / usd).slice(0,6) +" " + currency2.value} </h1>`
    }

               //INR
    else if(currency1.value === 'inr' && currency2.value === "pkr") {
     renderDiv.innerHTML= `<h1 class="text-center text-black"> Converted Rate : ${ String(input.value * inr).slice(0,6)+" "+ currency2.value} </h1>`
    }
    else if(currency1.value === 'inr' && currency2.value === "usd") {
    renderDiv.innerHTML= `<h1 class="text-center text-black"> Converted Rate : ${String(input.value * 0.012).slice(0,6)  +" " + currency2.value} </h1>`
    }
    else if(currency1.value === 'inr' && currency2.value === "sar") {
    renderDiv.innerHTML= `<h1 class="text-center text-black"> Converted Rate : ${String(input.value * 0.045).slice(0,6)+" "+ currency2.value} </h1>`
    }
    else if(currency1.value === 'inr' && currency2.value === "eur") {
    renderDiv.innerHTML= `<h1 class="text-center text-black"> Converted Rate : ${String(input.value * 0.011 ).slice(0,6) +" "+ currency2.value} </h1>`
    }
                       //USD
    else if(currency1.value === 'usd' && currency2.value === "pkr") {
    renderDiv.innerHTML= `<h1 class="text-center text-black"> Converted Rate : ${String(input.value * usd).slice(0,6)+" "+ currency2.value} </h1>`
    }
    else if(currency1.value === 'usd' && currency2.value === "eur") {
    renderDiv.innerHTML= `<h1 class="text-center text-black"> Converted Rate : ${String(input.value / 0.92).slice(0,6) + " " + currency2.value} </h1>`
    }
    else if(currency1.value === 'usd' && currency2.value === "inr") {
    renderDiv.innerHTML= `<h1 class="text-center text-black"> Converted Rate : ${ String(input.value * 84.15).slice(0,6)+" "+ currency2.value} </h1>`
    }
    else if(currency1.value === 'usd' && currency2.value === "sar") {
    renderDiv.innerHTML= `<h1 class="text-center text-black"> Converted Rate : ${String(input.value * 3.76).slice(0,6) + " " + currency2.value} </h1>`
    }
              
                   //SAR
    else if(currency1.value === 'sar' && currency2.value === "pkr") {
    renderDiv.innerHTML= `<h1 class="text-center text-black"> Converted Rate : ${String(input.value * sar).slice(0,6)  +" "+ currency2.value} </h1>`
    }
    else if(currency1.value === 'sar' && currency2.value === "usd") {
    renderDiv.innerHTML= `<h1 class="text-center text-black"> Converted Rate : ${String(input.value / 2.66).slice(0,6)+ " "+ currency2.value} </h1>`
    }
    else if(currency1.value === 'sar' && currency2.value === "eur") {
    renderDiv.innerHTML= `<h1 class="text-center text-black"> Converted Rate : ${String(input.value * 0.24).slice(0,6)  + " " +currency2.value} </h1>`
    }
    else if(currency1.value === 'sar' && currency2.value === "inr") {
    renderDiv.innerHTML= `<h1 class="text-center text-black"> Converted Rate : ${String(input.value * 22.40).slice(0,6) + " "+ currency2.value} </h1>`
    }
               //EUR
    else if(currency1.value === 'eur' && currency2.value === "pkr") {
    renderDiv.innerHTML= `<h1 class="text-center text-black"> Converted Rate : ${ String(input.value * eur).slice(0,6)+ " "+ currency2.value} </h1>`
    }
    else if(currency1.value === 'eur' && currency2.value === "inr") {
    renderDiv.innerHTML= `<h1 class="text-center text-black"> Converted Rate : ${String(input.value * 91.55).slice(0,6) +" "+ currency2.value} </h1>`
    }
    else if(currency1.value === 'eur' && currency2.value === "sar") {
    renderDiv.innerHTML= `<h1 class="text-center text-black"> Converted Rate : ${String(input.value * 4.09).slice(0,6)+ " "+ currency2.value} </h1>`
    }
    else if(currency1.value === 'eur' && currency2.value === "usd") {
    renderDiv.innerHTML= `<h1 class="text-center text-black"> Converted Rate : ${String(input.value * 1.09).slice(0,6)+ " "+ currency2.value} </h1>`
    }

    else if(currency1.value ===  currency2.value ) {
        renderDiv.innerHTML= `<h1 class="text-center text-black"> Converted Rate : ${input.value+" " + currency2.value} </h1>`
        }

    else {
    
        renderDiv.innerHTML= `<h1 class="text-center text-danger">error occured</h1>`
    }
}

