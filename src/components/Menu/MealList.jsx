import MealItem from './MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Fresh sushi maki with salmon',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Pierogi',
    description: 'Pierogi with cottage cheese ',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Chipotle Burrito',
    description: 'Classic tex-mex burrito',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Pizza',
    description: 'Salami pizza with fresh mozarella',
    price: 18.99,
  },
];

const MealList = () => {
  const meals = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <div>
      <ul className="flex flex-wrap justify-center pt-10">{meals}</ul>
    </div>
  );
};
export default MealList;
