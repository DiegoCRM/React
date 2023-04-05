import logo from './logo.svg';
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      
      <h2>Forms</h2>
    
      <MyForm user={{name:"Diego", email: "diego@gmail.com", bio: "Programador", role: "admin"}} />
    </div>
  );
}

export default App;
