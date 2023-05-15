import React from 'react'


// http://api.weatherapi.com/v1/current.json?key=c1c9c437aa154a06b2b14007231505&q=tokyo&aqi=no

type FormPropsType = {
  // city: string;
  getWeather:  (e: React.FormEvent<HTMLFormElement>) => void;
  setCity: React.Dispatch<React.SetStateAction<string | undefined>>;

}

const Form = ({ setCity, getWeather}: FormPropsType) => {
 
  return (
    <form action="" onSubmit={getWeather}>
      <input type="text" name='city' placeholder='都市名' 
        onChange={e => setCity(e.target.value)} />
   
      <button type='submit' >
        Get Wether
      </button>
    </form>
  );
};

export default Form