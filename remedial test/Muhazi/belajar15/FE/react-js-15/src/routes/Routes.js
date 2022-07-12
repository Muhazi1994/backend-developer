import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Details from "../pages/DetailMovie/Details";
import InputMovie from "../pages/InputMovie/InputMovie";
import SearchMovie from "../pages/SearchMovie/SearchMovie";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" exact>
          {/* children */}
          <Details />
        </Route>
        <Route path="/input-movie" exact component={InputMovie} />
        <Route path="/search" exact>
          <SearchMovie />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
