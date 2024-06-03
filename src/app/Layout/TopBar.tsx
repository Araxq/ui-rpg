import type { VoidComponent } from "solid-js";

type Props = {};

const TopBar: VoidComponent<Props> = () => {
  return (
    <div class="flex h-16 items-center justify-between border-b-2 border-neutral-800 px-4 py-2">
      top
    </div>
  );
};

export default TopBar;
