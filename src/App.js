import React from "react";
import "./style/master.scss"; // global styles
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/create-answer" component={CreateAnswer} />
        <Route exact path="/create-imagery" component={CreateImagery} />
        <Route exact path="/review-imagery" component={ReviewImagery} />
        <Route exact path="/review-answer" component={ReviewAnswer} />
        <Route exact path="/review-empty" component={ReviewEmpty} />
        <Route exact path="/all-cards" component={AllCards} />
        <Route exact path="/edit" component={Edit} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
