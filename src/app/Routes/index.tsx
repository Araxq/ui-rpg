import { For, type VoidComponent } from "solid-js";
import { Route, Router } from "@solidjs/router";
import Story from "~/components/pages/Story";
import StoryIcon from "~/assets/icons/story.svg";
import SpellsIcon from "~/assets/icons/spells.svg";
import InventoryIcon from "~/assets/icons/inventory.svg";
import SkillsIcon from "~/assets/icons/skills.svg";
import Layout from "~/app/Layout";

export const ROUTES = [
  { path: "/", component: Story, icon: StoryIcon },
  {
    path: "/inventory",
    component: () => <div>inventory</div>,
    icon: InventoryIcon,
  },
  { path: "/skills", component: () => <div>skills</div>, icon: SkillsIcon },
  { path: "/spells", component: () => <div>spells</div>, icon: SpellsIcon },
];

type Props = {};

const Routes: VoidComponent<Props> = () => {
  return (
    <Router root={Layout}>
      <For each={ROUTES}>
        {(route) => <Route path={route.path} component={route.component} />}
      </For>
      <Route path="*" component={Story} />
    </Router>
  );
};

export default Routes;
