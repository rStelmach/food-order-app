import MealList from './MealList';

const Menu = () => (
  <div className="wrapper flex content-center flex-col">
    <section className="self-center max-w-lg py-16 my-10 text-3xl font-semibold rounded-md bg-border text-white">
      <h1 className="text-center px-10 tracking-wide">
        Deliver your favorite food to your house with us!
      </h1>
    </section>
    <h2 className="text-center text-xl font-bold pt-10 ">
      List of our meals:
      <MealList />
    </h2>
  </div>
);
export default Menu;
