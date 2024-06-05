import { For, type VoidComponent } from "solid-js";
import { TOutcome } from "~/components/pages/Story/index";
import { Btn } from "~/components/ui/Btn";

type Props = { outcome: TOutcome };

const Outcome: VoidComponent<Props> = (p) => {
  return (
    <div>
      outcome: {p.outcome.text}
      <ul>
        <For each={p.outcome.changes}>{(item) => <li>{item.text}</li>}</For>
      </ul>
      <Btn variant="outline">Continue</Btn>
    </div>
  );
};

export default Outcome;
