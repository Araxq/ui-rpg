import { For, type VoidComponent } from "solid-js";

type Props = { desc: string[] };

const Description: VoidComponent<Props> = (p) => {
  return (
    <div class="text-center text-xl">
      <For each={p.desc}>{(item) => <p class="mb-4">{item}</p>}</For>
    </div>
  );
};

export default Description;
