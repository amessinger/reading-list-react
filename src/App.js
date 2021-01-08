import { StoreContext } from './store';
import { useLoadDataType } from './api';

function App() {
  useLoadDataType('books', StoreContext);

  return (
    <div className="App">
    </div>
  );
}

export default App;
