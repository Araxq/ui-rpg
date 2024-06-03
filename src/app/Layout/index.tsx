import type { FlowComponent } from "solid-js";
import TopBar from "~/app/Layout/TopBar";
import Sidebar from "~/app/Layout/Sidebar";

const Layout: FlowComponent = (p) => {
  return (
    <div class="flex h-screen flex-col">
      <TopBar />
      <div class="flex h-full">
        <Sidebar />
        <div class="flex-1 p-4">{p.children}</div>
      </div>
    </div>
  );
};

export default Layout;
