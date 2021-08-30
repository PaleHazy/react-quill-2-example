import "./App.css";
import RTE from './RTE'

//showcases the global quill object in te browser, which is imported by react-quill-2
const r1 = new RTE()
const r2 = new RTE()
console.log(r1.quill === r2.quill)

function App() {
  return (
    <div className="App">
      
     <RTE/>
    </div>
  );
}

export default App;
