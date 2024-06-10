import { Component, createSignal, Show } from "solid-js";
import Choices from "~/components/pages/Story/Choices";
import storyData from "~/assets/text/story-text";
import Description from "~/components/pages/Story/Description";
import Outcome from "./Outcome";

export type TStory = (typeof storyData)[0];

export type TChoice = TStory["choices"][0];
export type TOutcome = TStory["choices"][0]["outcome"];

type Props = {};

const Story: Component<Props> = () => {
  const [story] = createSignal(storyData[0]);
  const [outcome, setOutcome] = createSignal<TOutcome>();

  return (
    <div class="flex h-full flex-col gap-8">
      <img src={story().cover} alt="story-art" class="aspect-video h-96" />
      <div class="flex flex-1 flex-col justify-between">
        <Show when={!outcome()} fallback={<Outcome outcome={outcome()!} />}>
          <Description desc={story().description} />
          <Choices
            choices={story().choices}
            handleClick={(res) => setOutcome(res)}
          />
        </Show>
      </div>
    </div>
  );
};

export default Story;
