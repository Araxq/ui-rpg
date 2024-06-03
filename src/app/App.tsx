import type { Component } from "solid-js";
import Layout from "~/app/Layout";
import Routes from "~/app/Routes";

const App: Component = () => {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
};

export default App;
