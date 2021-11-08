import {
  HashRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import { router } from "./router";
import { GlobalStyled } from "./style/GlobalStyled";

import { Header } from "./components/Header";

function App() {
  return (
    <Router>
      <GlobalStyled />
      <Header />
      <Switch>
        <Route path={router.home} exact>
          home🚗
        </Route>

        <Route path={router.detail}>detail Page🚀</Route>

        <Route path={router.search}>Search Page🌈</Route>

        <Route>Page Not Found</Route>
      </Switch>
    </Router>
  );
}

export default App;
