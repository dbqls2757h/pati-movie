import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { router } from "./router";
import { GlobalStyled } from "./style/GlobalStyled";

import { Header } from "./components/Header";
import { Home } from "./components/Home/Home";
import { Detail } from "./components/Detail/Detail";
import { Search } from "./components/Search/Search";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyled />

      <Header />

      <Switch>
        <Route path={router.home} exact>
          <Home />
        </Route>

        <Route path={router.detail}>
          <Detail />
        </Route>

        <Route path={router.search}>
          <Search />
        </Route>

        <Route>Page Not Found</Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
