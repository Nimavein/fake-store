import React from "react";
import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";
import routes from "./routes";
import Footer from "./components/footer/Footer";

const App: React.FC = () => {
  setTimeout(function () {
    document.body.className = "";
  }, 1000);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps<any>) => (
                <route.component
                  name={route.name}
                  {...props}
                  {...route.props}
                />
              )}
            />
          );
        })}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
