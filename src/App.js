import TodoList from './components/TodoList';
import ProductArea from './components/ProductArea'
import {products} from './data'
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <TodoList />
      <ProductArea products={products}/>
      <Cart />
    </div>
  );
}

export default App;
