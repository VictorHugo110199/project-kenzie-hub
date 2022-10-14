import { useState } from "react";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rountes from "./Rountes";


function App() {

  const [user, setUser] = useState({})



  return (
      <div className='App-header'>
        <ToastContainer
          position="top-center"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Rountes setUser={setUser} user={user}></Rountes>
      </div>
  );
}

export default App;
