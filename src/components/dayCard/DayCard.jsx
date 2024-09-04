import { dayName, monthName } from "../calendar/todayData";
import DropDownContainer from "../dropDown/MealsDropDown"

export const DayCard = () => {
  return (
    <div className="grid grid-rows-[1fr_3fr]">
      <div className=" grid place-items-center text-5xl font-bold bg-[#697565]">{monthName}</div>
      <div className=" grid grid-rows-[2fr_1fr_1fr] bg-[#ECDFCC] text-[#3C3D37]">
        <div className=" grid place-items-center text-9xl font-extrabold ">{new Date().getDate()}</div>
        <div className=" grid place-items-center text-3xl font-bold mt-6">{dayName}</div>
        <div className=" flex justify-between items-end mb-1 ml-3"> <DropDownContainer /></div>

      </div>
    </div>

  )
}
