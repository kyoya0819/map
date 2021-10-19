import React, { FC } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Index from "pages/Index/Index";

const App: FC = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Index} />
      </Router>
    </div>
  );
};
export default App;
