import { For, onCleanup, VoidComponent } from "solid-js";
import { Btn } from "~/components/ui/Btn";
import { TChoice, TOutcome } from "~/components/pages/Story/index";

type Props = {
  choices: TChoice[];
  handleClick: (choice: TOutcome) => void;
};

const Choices: VoidComponent<Props> = (p) => {
  let focusInd = 0;

  return (
    <div
      class="flex flex-col gap-2"
      ref={(ref) => {
        const arrowControls = (e: KeyboardEvent) => {
          if (e.key === "ArrowUp") {
            focusInd = Math.max(focusInd - 1, 0);
            (ref.children[focusInd] as HTMLButtonElement).focus();
          }

          if (e.key === "ArrowDown") {
            focusInd = Math.min(focusInd + 1, p.choices.length - 1);
            (ref.children[focusInd] as HTMLButtonElement).focus();
          }
        };

        document.addEventListener("keydown", arrowControls);

        onCleanup(() => {
          document.removeEventListener("keydown", arrowControls);
        });
      }}
    >
      <For each={p.choices}>
        {(item) => (
          <Btn
            variant="outline"
            size="lg"
            onClick={() => {
              console.log(item);
              p.handleClick(item.outcome);
            }}
          >
            {item.text}
          </Btn>
        )}
      </For>
    </div>
  );
};

export default Choices;
