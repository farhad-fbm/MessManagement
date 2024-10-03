import { userMess } from "./constants";




export const todayMeals = [
  { id: 0, name: 'Arafat', meal: [1, 0, 0] },
  { id: 1, name: 'Sujon', meal: [0, 1, 1] },
  { id: 2, name: 'Bayazid', meal: [1, 1, 1] },
  { id: 3, name: 'Swadhin', meal: [2, 1, 1] },
  { id: 4, name: 'Rayhan', meal: [1, 1, 1] },
  { id: 5, name: 'Tanvir', meal: [1, 1, 1] },
  { id: 6, name: 'Farhad', meal: [0, 3, 1] },
  { id: 7, name: 'Fahad', meal: [1, 1, 1] },
  { id: 8, name: 'Parvej', meal: [1, 1, 1] },
  { id: 9, name: 'Hasan', meal: [1, 1, 1] },
  { id: 10, name: 'Babul', meal: [1, 4, 1] },
  { id: 11, name: 'Opu', meal: [0, 0, 1] },
  { id: 12, name: 'Mahmud', meal: [0, 0, 0] },
  { id: 13, name: 'CanMiya', meal: [1, 2, 1] },
  { id: 14, name: 'Shihab', meal: [1, 1, 1] }
]

const todayMorning = [];
const todayLunch = [];
const todayDinner = [];
let todayUserMeals = [];

todayMeals.forEach(({ id, name, meal }) => {
  if (meal[0] > 0) todayMorning.push({ id, name, meal: meal[0] });
  if (meal[1] > 0) todayLunch.push({ id, name, meal: meal[1] });
  if (meal[2] > 0) todayDinner.push({ id, name, meal: meal[2] });
  if (name === userMess) todayUserMeals = meal;
});

export { todayMorning, todayLunch, todayDinner, todayUserMeals };