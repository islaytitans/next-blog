import { Fragment } from "react";
import MainNavigation from "../global/main-navigation";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
