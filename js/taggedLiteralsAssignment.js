function uploadToDB(){
    console.log('Uploading to DB.');
  }
   
  axios.get('https://www.cryptocompare.com/api/data/coinlist')
    .then(function (response) {
        console.log(response);
      // //////////////////
      const getCoins = coinTemplate`<div class="col-sm-12 col-md-6">${response.data} ${()=>uploadToDB()}</div>`; //Finish this line. it needs 1. tags 2.ajax data, and 3. callback to uploadToDB()
      // //////////////////
   
      document.querySelector('#add-button').addEventListener('click', function(){
        let coin = document.querySelector('#coin').value.toUpperCase();
        let radios = document.getElementsByName('desire');
        // we cant map, because this is a nodelist, not an array. Good old for loop.
        let domEl;
        for(let i = 0; i < radios.length; i++){
          if (radios[i].checked){
            domEl = `#${radios[i].id}-content`;
            break;
          }
        };
         getCoins(coin, domEl); //this line is all set. It calls the function returned by your tag
      })
    })
    .catch(function (error) {
        console.log("ERROR!!!")
        console.log(error);
    });
   
   
  var coinTemplate = function(elems, coinData, callback){
    let baseImgUrl = coinData.BaseImageUrl;
      return function(coin,location){
        console.log(coin);
        let coinInfo = coinData.Data[coin];
        try {
            if(coinInfo){
                const coinHtml = `
                ${elems[0]}
                    <div class="coins-card placeholder">
                        <img src="${baseImgUrl}${coinInfo.ImageUrl}" class="img-responsive" alt="img coin"/>
                        <h3>${coinInfo.CoinName}</h3>
                        <div class="algorithm">${coinInfo.Algorithm}</div>
                    </div>
                ${elems[1]}
            `;

            document.querySelector(location).innerHTML += coinHtml;
            callback();
            }
        }catch(error) {
          console.log(error);
        }
      }
  }