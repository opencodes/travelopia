import './App.css';
import ListQuery from './components/ListQuery';
import PostQuery from './components/PostQuery';
import {
  Link,
  Routes,
  Route,
} from "react-router-dom";

function App () {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Travelopedia</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Submission List</a> */}
                <Link className="nav-link active" to="/submission-list">Submission List</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<PostQuery />} />
          <Route path="/submission-list" element={<ListQuery />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
