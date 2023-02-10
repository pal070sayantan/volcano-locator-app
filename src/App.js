import './App.css';
import Header from './Header';
import Map from './Map';
import { useState, useEffect } from 'react';
import Loading from './Loading';
import Footer from './Footer';

function App() {
  const [eventData, setEventData] = useState([]); // initial value is empty array
  const [loading, setLoading] = useState(false); //initial value is false

  //useeffect has a async function
  // as we are loading the data so true
  // events variable wiil contain the json data
  //after loading data setloading is false as we have already fetched
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
    console.log(eventData);
  }, []);
  // if loading happens then we call map component else we give loading componen
  return (
    <div className="App">
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loading />}
      <Footer/>
    </div>
  );
}

export default App;
