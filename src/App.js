import './App.css';
import { getDatabase, ref , set} from 'firebase/database';
import { app } from "./component/Firebase";

const db = getDatabase(app);



function App() {

  const putdata = () => {
    set(ref(db , "users/ssc"), {
      id: 1,
      name: "ssc",
      age: 21,
    });
  };

  return (
    <div className="App">
      <h1>Firebase Database React App</h1>
      <button onClick={putdata}> put data</button>
    </div>
  );
}

export default App;
