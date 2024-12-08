

export const MealInfo = () => {
  return (
    <div className="rounded-lg  grid grid-rows-[1fr_3fr] h-[350px]">
      <div className=" grid place-items-center text-5xl font-bold bg-background1 rounded-t-lg">Today Meal Plan</div>
      <div className="grid grid-cols-[1fr_1fr_1fr]  gap-1">
        <div className="bg-background3 text-center rounded-lg mt-3 md:mb-20 lg:mb-0">
          <h3 className="font-medium text-lg text-indigo-600 ">Breakfast</h3>
          <p className="text-gray-700">Fry Potato</p>
        </div>
        <div className="bg-background3 text-center rounded-lg mt-3 md:mb-20 lg:mb-0">
          <h3 className="font-medium text-lg text-purple-600">Lunch</h3>
          <p className="text-gray-700">Fish with Venjil</p>
        </div>
        <div className="bg-background3 text-center rounded-lg mt-3 md:mb-20 lg:mb-0">
          <h3 className="font-medium text-lg text-pink-600">Dinner</h3>
          <p className="text-gray-700">Beef Curry</p>
        </div>
      </div>
    </div>
  )
}
