import React, { useRef, useState, useEffect } from 'react';
import Bg from '../assets/bg_third.avif';

function ThirdHomework() {
  const [chosen, setChosen] = useState(null);
  const [continent, setContinent] = useState('Choose your continent');
  const [error, setError] = useState('');
  const cityRef = useRef(null);

  function convertTZ(date, tzString) {
    return new Date(
      new Date(date).toLocaleString('en-US', { timeZone: tzString })
    );
  }

  useEffect(() => {
    if (chosen) {
      const interval = setInterval(() => {
        const date = new Date();
        const updatedTime = convertTZ(date, `${continent}/${cityRef.current.value}`);
        setChosen(updatedTime.toLocaleTimeString());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [chosen, continent]);

  function handleSubmit(event) {
    event.preventDefault();
    setError('');

    if (!continent || continent === 'Choose your continent') {
      setError('Iltimos, continentingizni tanlang!');
      return;
    }
    if (!cityRef.current.value) {
      setError('Iltimos, cityni kiriting!');
      return;
    }

    const date = new Date();
    const convertedDate = convertTZ(date, `${continent}/${cityRef.current.value}`);

    if (isNaN(convertedDate.getTime())) {
      setError('Qit\'a yoki shahar noto\'g\'ri. Iltimos, kiritishlaringizni tekshiring!');
      return;
    }
    setChosen(convertedDate.toLocaleTimeString());
  }

  return (
    <div className="h-[90.3vh] select-none w-full flex items-center justify-center" style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center', }} >
      <div className="bg-gray-700 max-w-[400px] w-full rounded-md flex flex-col items-center py-7 px-4 gap-6 shadow-lg">
        <h1 className="capitalize text-[28px] text-white font-semibold">Local Time App</h1>
        {error && <p className="text-red-400 text-lg">{error}</p>}
        {chosen === null ? (<p className="text-yellow-400 text-lg">Vaqtni tanlang...</p>) : (<p className="text-white text-lg">{chosen}</p>)}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <select value={continent} onChange={(e) => setContinent(e.target.value)} className="border rounded-md p-2 text-lg" >
            <option disabled value="Choose your continent">Choose your continent</option>
            <option value="America">America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Australia">Australia</option>
            <option value="Antarctica">Antarctica</option>
          </select>
          <input type="text" ref={cityRef} placeholder="Shahar nomini kiriting" className="border rounded-md p-2 text-lg" />
          <button type="submit" className="bg-blue-500 text-white rounded-md p-2 text-lg" > Vaqtni ko'rsatish </button>
        </form>
      </div>
    </div>
  );
}

export default ThirdHomework;
