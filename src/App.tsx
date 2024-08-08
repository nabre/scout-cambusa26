import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { RoutesApp, microFrontendLinks } from "./RoutesApp";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/micro-frontend-1">Micro Frontend 1</Link>
            </li>
            <li>
              <Link to="/micro-frontend-2">Micro Frontend 2</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <RoutesApp />
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
