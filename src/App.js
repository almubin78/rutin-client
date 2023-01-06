import { RouterProvider } from 'react-router-dom';
import { router } from './components/router';

function App() {

  return (
    <div className="container">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
