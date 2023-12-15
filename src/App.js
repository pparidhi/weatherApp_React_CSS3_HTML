import './App.css';
import React, { useEffect,useState } from "react";
import Header from './Components/Header';
import InputCity from './Components/InputCity';
import ShowWeather from "./Components/ShowWeather";
import "./styles.css";
function App() {

  const [inputCity,setInputCity] = useState("");
  const [cityName,setCityName] = useState("");
  const [weatherData,setWeatherData] = useState({});
  const [error,setError] = useState(false);

  //Input Handler
  const inputHandler = (e) =>{
    setInputCity(e.target.value)
  }


  //Search Button
  const submitHandler = (e) =>{
      e.preventDefault();
      setError(false);
      setCityName(inputCity);
  }


  //Weather API
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b81a143c479a1155fa90ac077e36acd3`;

  //fetching weather data
  async function fetchData(URL){
      const response = await fetch(URL);
      const data = await response.json();
      if (data.cod ==="404"){
        setError(true);
      }
      else{
        setWeatherData(data);
      }
  }


  //to fetch weather data
  useEffect(() =>{
  fetchData(URL);},[URL]);




  return (
    <div className="App">
        <Header/>
        <InputCity
        city = {inputCity}
        onInputHandler = {inputHandler}
        onSubmitHandler = {submitHandler}/>
       

        { error ? (<h3 className="error">No Data Found </h3>)  

          :  <ShowWeather data={weatherData}/>
        } 
    </div>
  );
}

export default App;
