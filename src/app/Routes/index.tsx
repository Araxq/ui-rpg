import type { VoidComponent } from "solid-js";
import { Route, Router } from "@solidjs/router";
import Story from "~/components/pages/story";

type Props = {};

const Routes: VoidComponent<Props> = () => {
  return (
    <Router>
      <Route path="/" component={Story} />
    </Router>
  );
};

export default Routes;
