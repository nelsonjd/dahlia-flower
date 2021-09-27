import { useEffect, useState } from "react";
import Route from "./Route";
import NonDefaultLink from "./NonDefaultLink";
import Login from "./Login";
import WindowHistory from "./models/WindowHistory";

export default function AuthorizationRouter(props)
{
  const windowHistory = new WindowHistory();
  const [currentPathname, setCurrentPathname] = useState(windowHistory.currentPathname());

  useEffect(() =>
  {
    const onLocationChange = () =>
    {
      setCurrentPathname(windowHistory.currentPathname());
    }

    windowHistory.subscribe(onLocationChange);

    return () =>
    {
      windowHistory.unsubscribe(onLocationChange);
    }
  }, []);

  const loginRoute = (
    <Route pathname="/login" currentPathname={currentPathname}>
      <Login></Login>
    </Route>
  );

  const authorized = true;

  // implement a filter to arrow of allowed components based on who you are.
  // I like that idea better.

  if (currentPathname === "/login")
  {
    return loginRoute;
  }
  else if (!authorized)
  {
    windowHistory.navigate("/login");
    return loginRoute;
  }
  else {
    return (
      <>
        <Route pathname="/" currentPathname={currentPathname}>
          <NonDefaultLink url="/login">A trusty link</NonDefaultLink>
        </Route>
        {loginRoute}
      </>
    );
  }
}