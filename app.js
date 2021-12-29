let jsonData;
const mainElem = document.querySelector('.main');
const getData = () =>{
    fetch('https://api.coinlore.net/api/tickers/?start=0&limit=100')
    .then(response => response.json())
    .then(data =>{
        jsonData = data
    })
    .then(()=>{
        setItems()
    })

}
function setItems(){
    for(let i= 0;i<=20;i++){
        // console.log(jsonData);
        let name = jsonData.data[i].name;
        let price = jsonData.data[i].price_usd;
        let change = jsonData.data[i].percent_change_24h;
        let symbol = jsonData.data[i].symbol.toLowerCase();
        let imgLink = `https://cryptologos.cc/logos/${name.toLowerCase()}-${symbol}-logo.svg?v=014`
        // https://cryptologos.cc/logos/${name.toLowerCase()}-coin-${symbol}-logo.svg?v=014
        // 
      const childElem =document.createElement('div');
      childElem.classList.add('coinBar');
      childElem.innerHTML = `<img src="https://cryptologos.cc/logos/${name.toLowerCase()}-${symbol}-logo.svg?v=014" class="coinLogo"  >
      <h3 class="coinName textInBar">${name}</h3>
      <h3 class="coinPrice textInBar">$${Number(price)}</h3>
      <h3 class="priceChange textInBar">${Number(change)}</h3>`;
      mainElem.appendChild(childElem);
      const changeElem = document.querySelectorAll('.priceChange');
      changeElem.forEach(element => {
          if(element.textContent > 0){
              element.style.color = 'green'
          }else{
            element.style.color = 'red'
          }
      });
      
    }
}

getData();