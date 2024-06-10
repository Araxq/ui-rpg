import { type VoidComponent } from "solid-js";
import TypeIt from "typeit";

type Props = { desc: string };

const Description: VoidComponent<Props> = (p) => {
  return (
    <div
      class="text-xl first:text-center"
      ref={(ref) => {
        new TypeIt(ref!, {
          strings: p.desc,
          cursor: false,
          speed: 30,
          nextStringDelay: 300,
        }).go();
      }}
    />
  );
};

export default Description;
