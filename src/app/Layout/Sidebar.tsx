import type { VoidComponent } from "solid-js";

type Props = {};

const Sidebar: VoidComponent<Props> = () => {
  return (
    <div class="w-16 flex-shrink-0 border-r-2 border-neutral-800 px-2 py-4">
      side
    </div>
  );
};

export default Sidebar;
