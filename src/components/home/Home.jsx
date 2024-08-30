
import { DayCard } from "../dayCard/DayCard";
import { HomeClock } from "../homeClock/HomeClock";

export const Home = () => {

  return (
    <div className="pt-6">
      <HomeClock />
      <div className="md:grid grid-cols-[1fr_1.5fr] gap-1 px-1 pt-8 h-96" >
        <DayCard />
        <div className="border w-full">
          <div className="border">meal</div>
          <div className="border">bazar</div>
        </div>
      </div>
    </div>
  )
}
