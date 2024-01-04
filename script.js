async function fetchData() {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jaipur';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '37aa4c5a46mshbba232c62f1d09cp144aadjsn018724630517',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData(); // Call the async function to start the data fetching process


  
     
  
  