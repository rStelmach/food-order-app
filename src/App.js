import { useState } from 'react';
import Header from './components/Layout/Header';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [CartVis, setCartVis] = useState(false);

  const showCart = () => {
    setCartVis(true);
  };

  const hideCart = () => {
    setCartVis(false);
  };

  return (
    <CartProvider>
      {CartVis && <Cart onHide={hideCart} />}
      <Header onShow={showCart} />
      <Menu />
    </CartProvider>
  );
}

export default App;
