import { useEffect, useState } from "react";
import { updateClock } from "../../lib/todayTimes";
import { Calendar } from "../calendar/Calendar";

export const Home = () => {
  const [time, setTime] = useState(updateClock());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(updateClock());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="grid grid-cols-[1fr_2fr] gap-1 p-4">
      <div className="text-center">
        <div className="border">meal</div>
        <div className="border">bazar</div>
      </div>
      <div className="border text-center">
        <Calendar />
        <div>
          {time.hour}:{time.minutes}:{time.seconds} {time.ampm}
        </div>
      </div>
    </div>
  )
}
