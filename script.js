window.addEventListener("load", function () {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b137a21f0cc9e34f5e439eb33b2409fc`;
      const weather = async () => {
        try {
          const res = await fetch(url);
          const data = await res.json();
          const span = document.querySelector(".timezone");
          const h2 = document.querySelector("h2");
          const temp = document.querySelector(".temp");
          span.innerText = data.timezone;
          h2.textContent = data.main.temp;
          temp.addEventListener("click", function () {
            const fer = data.main.temp;
            const c = Math.floor(fer / 33.8);
            h2.textContent = c;
            
            console.log(c);
           
          });
        } catch (e) {
          console.log("OPPS ", e);
        }
      };
      weather()
    });
   
  } else {
  }
 
});
