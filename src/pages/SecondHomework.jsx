import React, { useState, useEffect } from "react";
import Bg from "../assets/bg_second.jpg";

function CountdownTimer() {
  const [inputTime, setInputTime] = useState("");
  const [timeLeft, setTimeLeft] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    setInputTime('')
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  function handleStart() {
    if (inputTime == '') {
      alert('Iltimos vaqtni kiriting!')
      return
    }

    if (isNaN(inputTime)) {
      alert('Iltimos son kiriting!!')
      setInputTime('')
      return
    }

    if (inputTime && parseInt(inputTime) > 0) {
      setTimeLeft(parseInt(inputTime));
      setIsRunning(true);
    }
  }

  function handleRestart() {
    setTimeLeft(null);
    setInputTime("");
    setIsRunning(false);
  }

  return (
    <div className="h-[90.3vh] select-none w-full flex items-center justify-center" style={{ backgroundImage: `url(${Bg})`, backgroundSize: "cover", backgroundPosition: "center", }} >
      <div className="max-w-[500px] w-full mx-auto mt-[-250px] bg-gray-600 text-white rounded-md flex flex-col items-center gap-[15px] p-[20px]">
        <h1 className="text-lg font-bold">Countdown Timer</h1> 
        {timeLeft === 0 ? (<h2 className="text-red-400 font-bold">Vaqt tugadi!</h2>) : (<h2 className="text-2xl">{timeLeft !== null ? `${Math.floor(timeLeft / 60).toString().padStart(2, "0")}:${(timeLeft % 60).toString().padStart(2, "0")}` : "00:00"} </h2>)}
        <input type="text" maxLength={4} value={inputTime} onChange={(e) => setInputTime(e.target.value)} placeholder="Sekund kiriting" className="border text-black select-none rounded-md p-[10px] w-full text-center" disabled={isRunning} />
        <div className="flex gap-[20px]">
          <button onClick={handleStart} className="bg-blue-500 text-white px-4 py-2 rounded-md" disabled={isRunning} > Boshlash </button>
          <button onClick={handleRestart} className="bg-red-500 text-white px-4 py-2 rounded-md" > Qayta boshlash </button>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer
