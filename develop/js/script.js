
////starting code for country name and some info
var countrycode= ['AF','AX','AL','DZ','AS','AD','AO','AI','AQ','AG','AR','AM','AW','AU','AT','AZ','BS','BH','BD',
'BB','BY','BE','BZ','BJ','BM','BT','BO','BQ','BA','BW','BV','BR','IO','BN','BG','BF','BI','KH','CM','CA','CV','KY',
'CF','TD','CL','CN','CX','CC','CO','KM','CG','CD','CK','CR','CI','HR','CU','CW','CY','CZ','DK','DJ','DM','DO','EC','EG',
'SV','GQ','ER','EE','ET','FK','FO','FJ','FI','FR','GF','PF','TF','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT',
'GG','GN','GW','GY','HT','HM','VA','HN','HK','HU','IS','IN','ID','IR','IQ','IE','IM','IL','IT','JM','JP','JE','JO','KZ','KE',
'KI','KP','KR','XK','KW','KG','LA','LV','LB','LS','LR','LY','LI','LT','LU','MO','MK','MG','MW','MY','MV','ML','MT','MH','MQ',
'MR','MU','YT','MX','FM','MD','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','AN','NC','NZ','NI','NE','NG','NU','NF',
'MP','NO','OM','PK','PW','PS','PA','PG','PY','PE','PH','PN','PL','PT','PR','QA','RE','RO','RU','RW','BL','SH','KN',
'LC','MF','PM','VC','WS','SM','ST','SA','SN','RS','CS','SC','SL','SG','SX','SK','SI','SB','SO','ZA','GS','SS','ES','LK',
'SD','SR','SJ','SZ','SE','CH','SY','TW','TJ','TZ','TH','TL','TG','TK','TO','TT','TN','TR','TM','TC','TV','UG','UA','AE',
'GB','US','UM','UY','UZ','VU','VE','VN','VG','VI','WF','EH','YE','ZM','ZW'];


var key ='QwdO2U2cadDxeEeGOfufOg==I8Vg1CzH5prgOFij';
var countrynametext = document.querySelector('#countryname');
var citynametext = document.querySelector('#cityname');
var btn= document.querySelector('#search');

var datadiv3= document.querySelector(".datainfo3");
var seconddiv= document.querySelector(".datainfo2");

var searchamount= document.querySelector('#currency');

var firstcountry = document.querySelector('#firstcountry');
var secondcountry = document.querySelector('#secondcountry');
var amount = document.querySelector('#amount');
var clearbtn = document.querySelector('#cleanhistory');

var checkssearch= 0;





btn.addEventListener('click', function(event) {
    event.preventDefault();
    cleardata();
    startnewsearch();

});

function startnewsearch()
{
  var countryname = countrynametext.value; 
    var cityname=citynametext.value;


    if(countryname !="" && cityname=="")
    {
       checkssearch = 1;
       gitcountryapi(countryname);
       getApiData(countryname);
       countrytime(countryname);
       savecityname(countryname);
    }
    else if(countryname=="" && cityname!="")
    {
       checkssearch=2;
       gitcityapi(cityname);
       getApiData(cityname);
       countrytime(cityname);
       savecityname(cityname);
    }
    else if(countryname !="" && cityname !="")
    {
      checkssearch=2;
       gitcountryapi(countryname);
       getApiData(countryname);
       console.log("helooooo4");
    } 


}



//cityname

function gitcityapi(cityname)
{


    var request2 = 'https://api.api-ninjas.com/v1/city?name=' + cityname + '&X-Api-Key=' + key;
  fetch(request2)
  .then(function (response) {
    return response.json();
  })
   .then(function (data) {
    console.log(data);

    var country= document.createElement("h2");
    var city= document.createElement("h2");
    var capital= document.createElement("h2");
    var population= document.createElement("h2");
    //var currencycode = document.createElement("h2")
    //var currencyname = document.createElement("h2");
    
    city.textContent = "City Name : " + data[0].name;
    country.textContent = "Country Name : " + data[0].country;
    capital.textContent = "Cabital Name : " + data[0].is_capital;
    population.textContent = "Population : "+ (data[0].population)/1000000 + " million";
    //currencycode.textContent = "currency Code : " + data[0].currency.code;
    //currencyname.textContent = "currency Name : " + data[0].currency.name;

    seconddiv.appendChild(city);
    seconddiv.appendChild(country);
    seconddiv.appendChild(capital);
    seconddiv.appendChild(population);
     //seconddiv.appendChild(currencycode);
    //seconddiv.appendChild(currencyname);

    var countcode = data[0].country;
    countcode = countcode.slice(0, 2);
    for(var i=0;i<countrycode.length;i++)
    {
      if(countcode == countrycode[i])
      {
        var image= document.querySelector("img");
        image.setAttribute("src","./develop/images/flags/"+ countcode +".png");
        i=countrycode;
      }
    }


  });


}

//countrynmae

function gitcountryapi(countryname)
{
    var request2 = 'https://api.api-ninjas.com/v1/country?name=' + countryname+ '&X-Api-Key=' + key;
  fetch(request2)
  .then(function (response) {
    return response.json();
  }) .then(function (data) {
    console.log(data);

    var country= document.createElement("h2");
    var capital= document.createElement("h2");
    var population= document.createElement("h2");
    var currencycode = document.createElement("h2")
    var currencyname = document.createElement("h2");
    
    country.textContent = "Country Name : " + data[0].name;
    capital.textContent = "Cabital Name : " + data[0].capital;
    population.textContent = "Population : "+ (data[0].population)/1000 + " million";
    currencycode.textContent = "currency Code : " + data[0].currency.code;
    currencyname.textContent = "currency Name : " + data[0].currency.name;

    seconddiv.appendChild(country);
    seconddiv.appendChild(capital);
    seconddiv.appendChild(population);
    seconddiv.appendChild(currencycode);
    seconddiv.appendChild(currencyname);

    var countcode = data[0].iso2;
    countcode = countcode.slice(0, 2);
    for(var i=0;i<countrycode.length;i++)
    {
      if(countcode == countrycode[i])
      {
        var image= document.querySelector("img");
        image.setAttribute("src","./develop/images/flags/"+ countcode +".png");
        i=countrycode;
      }
    
    }

  });
}


function getApiData(city) {
    var geocodingUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid=a9f48eaca2ef1bc28989582adf1daa56';

    fetch(geocodingUrl).then(function(response) {
        return response.json(); 
    }).then(function(data) {
      console.log(data);
        var weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + data[0].lat +'&lon=' + data[0].lon +'&appid=a9f48eaca2ef1bc28989582adf1daa56&units=imperial';

        fetch(weatherUrl).then(function (response){
            return response.json();
        }).then(function(data) {
          console.log(data);
            for(var i=0; i<=5; i++) {
            var createText = document.createElement('h2');
            var da= data.list[i*8].main.humidity;
            var da2= data.list[i*8].main.temp;
            var da5= dayjs(data.list[i*8].dt_txt).format('DD/MM/YYYY');

            createText.textContent = "Date : " + da5 + "     Tempruture : "+da2 + "     Humidity : "+da  ;
            datadiv3.appendChild(createText);

            }
        });

    });
}

function cleardata()
{
  
    while (datadiv3.firstChild) 
    {
      datadiv3.removeChild(datadiv3.lastChild);
    }

    while (seconddiv.firstChild) 
    {
      seconddiv.removeChild(seconddiv.lastChild);
    }
}

function countrytime(city)
{

   var request2 = 'https://api.api-ninjas.com/v1/worldtime?city=' + city+ '&X-Api-Key=' + key;
   fetch(request2)
    .then(function (response) {
        return response.json();
    })
      .then(function (data) {
        console.log(data);
        var time= document.createElement("h2");
        var timedata= dayjs(data.datetime).format('HH:mm');
        
        time.textContent = "Time: " + timedata;

        seconddiv.appendChild(time);

    });
}


searchamount.addEventListener('click', function(event) {
  event.preventDefault();
  

  var currency1 =firstcountry.value;
  var currency2 =secondcountry.value;
  var money = amount.value;

  currencyconvert(currency1,currency2,money);

});


function currencyconvert(currency1,currency2,money)
{

   var request = 'https://api.api-ninjas.com/v1/convertcurrency?want=' + currency1 +'&have='+ currency2 +
              '&amount='+ money +'&X-Api-Key='+ key;

   fetch(request)
    .then(function (response) {
     return response.json();
   })
    .then(function (data) {
     console.log(data);
     amount.value = "New amount : " + data.new_amount;
   });

}

// start code for save data with next and back button

var searchdiv = document.querySelector(".searchHistory")
var index=1;
var index2 = 1;
 
while(JSON.parse(localStorage.getItem("index"+index))!== null)
{
  var newbtn = document.createElement("button");

  newbtn.setAttribute("class","btn");
  newbtn.setAttribute("id","index"+index);
  newbtn.textContent= JSON.parse(localStorage.getItem("index"+index));
  searchdiv.appendChild(newbtn);

  index++;
}


function savecityname(city)
{

  for(var i=1;i<=index;i++)
  {
    if(JSON.parse(localStorage.getItem("index"+i)) == city)
    {
      return;
    }
  }
 
 
  localStorage.setItem("index"+index, JSON.stringify(city+checkssearch));

  var newbtn = document.createElement("button");

  newbtn.setAttribute("class","btn")
  newbtn.setAttribute("id","index"+index);
  newbtn.textContent= city;
  
  divdata.appendChild(newbtn);

  index++;
}

searchdiv.addEventListener("click", function(event){
  cleardata();
  var element = event.target;

  if(element.matches("button")===true) 
  {
    var x = JSON.parse(localStorage.getItem(element.id));
    var y = x.charAt(x.length-1);
    var z= x.slice(0,x.length-1);
    if(y=="1")
      {
        gitcountryapi(z);
        getApiData(z);
        countrytime(z);
      }
      else
      {
        gitcityapi(z);
        getApiData(z);
        countrytime(z);
      }

  }
  
});

clearbtn.addEventListener("click", function(event){
  //startnewsearch();
  var element = event.target;

  window.localStorage.clear();
  window.location.reload();

  
  
});

var nextback= document.querySelector(".buttons");

nextback.addEventListener("click", function(event){
  cleardata();

  var element = event.target;

  var x = JSON.parse(localStorage.getItem("index"+ index2));
  var y = x.charAt(x.length-1);
  var z= x.slice(0,x.length-1);
 
  if(element.matches("button")===true && element.getAttribute('id') === "back")
  {
      if(y=="1")
      {
        gitcountryapi(z);
        getApiData(z);
        countrytime(z);
        index2--;
      }
      else
      {
        gitcityapi(z);
        getApiData(z);
        countrytime(z);
        index2--;
      }
  }
  else if(element.matches("button")===true && element.getAttribute('id') === "next")
  {
    if(y=="1")
      {
        gitcountryapi(z);
        getApiData(z);
        countrytime(z);
        index2++;
      }
      else
      {
        gitcityapi(z);
        getApiData(z);
        countrytime(z);
        index2++;
      }
  }

  if(element.matches("button")===true) 
  {
    var x = JSON.parse(localStorage.getItem(element.id));
    var y = x.charAt(x.length-1);
    var z= x.slice(0,x.length-1);

  }
  
});












