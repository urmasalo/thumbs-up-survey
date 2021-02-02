 import candidates from "./candidates.json";
 import Candidate from "./components/Candidate";


function App() {
  return (
    <div className="App">
      { candidates.data.map(item => 
          <Candidate key={item.id} {...item}/> 
        )}
    </div>
  );
}

export default App;
