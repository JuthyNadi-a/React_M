import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
      </header>
      <main>
      <div class="cards">
            <div class="card" id="box1">
                <h2>Maria</h2>
                <h5>Title: CEO</h5>
                <h5>Age: 29</h5>
            </div>
            <div class="card" id="box2">
                <h2>Kati</h2>
                <h5>Title: Developer</h5>
                <h5>Age: 25</h5>
            </div>
            <div class="card" id="box3">
                <h2>Karin</h2>
                <h5>Title: Designer</h5>
                <h5>Age: 45</h5>
            </div>
        </div>
      </main>
      <footer>
        Copyright, Juthy Nadia
    </footer>
    </div>
  );
}

export default App;
