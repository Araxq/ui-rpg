import type { Component } from "solid-js";
import TopBar from "~/app/Layout/TopBar";
import Sidebar from "~/app/Layout/Sidebar";
import { RouteSectionProps } from "@solidjs/router";

const Layout: Component<RouteSectionProps> = (p) => {
  return (
    <div class="flex h-screen flex-col font-mono">
      <TopBar />
      <div class="flex h-full">
        <Sidebar />
        <div class="flex-1 p-8">{p.children}</div>
      </div>
    </div>
  );
};

export default Layout;
