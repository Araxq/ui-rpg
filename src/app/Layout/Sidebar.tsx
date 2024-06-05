import { For, type VoidComponent } from "solid-js";
import { ROUTES } from "~/app/Routes";
import { Btn } from "~/components/ui/Btn";

type Props = {};

const Sidebar: VoidComponent<Props> = () => {
  return (
    <div class="flex gap-2 w-16 flex-shrink-0 flex-col border-r-2 px-2 py-4">
      <For each={ROUTES}>
        {(item) => (
          <Btn size="icon" variant="outline">
            {item.icon}
          </Btn>
        )}
      </For>
    </div>
  );
};

export default Sidebar;
