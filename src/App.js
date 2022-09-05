import './App.css';
import Login from "./login";
import CorsTest from "./cors_test";

function App() {

  return (
      <div className="App">
        {/* cors proxy 테스트 */}
        {/*
        <div>
          <CorsTest />
        </div>
        <p>
            ===========================
        </p>
        */}

        {/* login 추가 */}
        <div>
          <Login />
        </div>
      </div>
  );
}

export default App;
