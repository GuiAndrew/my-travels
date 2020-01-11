import React from 'react';
import './App.css';
import Travel from './components/Travel';

function App() {
  return (
    <div className="App">
      <Travel 
        destination = "Azores"
        country = "Portugal"
        photo = "https://imagesvt.abreu.pt/abreu/share/2019-03/2019-03-20103809_a000263c-69b3-42c4-84ef-a24a06e6335b$$ee3b4c99-4882-441a-a1c4-b7b8cfdc9e43$$774f7b91-93ae-4831-9e5a-ae6f53110023$$BlogImageHeader$$pt$$1.jpg"
        distance = "1000.00 KM"
      />
      <Travel 
        destination = "Siberia"
        country = "Russia"
        photo = "https://image.businessinsider.com/5d409233100a247279644dd4?width=1900&format=jpeg&auto=webp"
        distance = "5.000.00 KM"
      />
    </div>
  );
}

export default App;
