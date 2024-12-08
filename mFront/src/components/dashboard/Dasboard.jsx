const total = ['1', '2'];

export const Dasboard = () => {
  return (
    <div className="">
      <div className="w-96 mx-auto grid grid-cols-[1fr_1fr_1fr] border text-center">
        <p>BreakFast</p>
        <p>Lunch</p>
        <p>Dinner</p>
      </div>
      {total.map((fruit, index) => (
        <div key={index}
          className="w-96 mx-auto grid grid-cols-[1fr_1fr_1fr] border text-center">
          <p>2</p>
          <p>1</p>
          <p>2</p>
        </div>
      ))}
    </div>
  )
}
