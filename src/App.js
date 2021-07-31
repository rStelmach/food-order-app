import { useState } from 'react';
import Header from './components/Layout/Header';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';

function App() {
  const [CartVis, setCartVis] = useState(false);

  const showCart = () => {
    setCartVis(true);
  };

  const hideCart = () => {
    setCartVis(false);
  };

  return (
    <>
      {CartVis && <Cart onHide={hideCart} />}
      <Header onShow={showCart} />
      <Menu />
    </>
  );
}

export default App;
