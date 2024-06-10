import type { Component } from "solid-js";
import Layout from "~/app/Layout";
import Routes from "~/app/Routes";
import "~/components/ui-effects/effects.css";
import UIEffectsInjection from "~/components/ui-effects";

const App: Component = () => {
  return (
    <>
      <UIEffectsInjection />
      <Layout>
        <Routes />
      </Layout>
    </>
  );
};

export default App;
