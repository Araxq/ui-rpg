import type { Component } from "solid-js";
import Routes from "~/app/Routes";
import "~/components/ui-effects/effects.css";
import UIEffectsInjection from "~/components/ui-effects";

const App: Component = () => {
  return (
    <>
      <UIEffectsInjection />
      <Routes />
    </>
  );
};

export default App;
