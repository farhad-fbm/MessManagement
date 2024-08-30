
export const DayCard = () => {
  return (
    <div className="grid grid-rows-[1fr_3fr]">
      <div className=" grid place-items-center text-5xl font-bold bg-[#697565]">June</div>
      <div className=" grid grid-rows-[2fr_1fr_1fr] bg-[#ECDFCC] text-[#3C3D37]">
        <div className=" grid place-items-center text-9xl font-extrabold">07</div>
        <div className=" grid place-items-center text-4xl font-semibold">Tuesday</div>
        <div className=" flex items-end text-2xl font-semibold">
          <pre> S:00      D:00      R:00 </pre>
        </div>
      </div>
    </div>

  )
}
