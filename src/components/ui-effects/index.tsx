import type { VoidComponent } from "solid-js";
import PixelateCyan from "~/components/ui-effects/PixelateCyan";
import PixelateRed from "~/components/ui-effects/PixelateRed";

type Props = {};

const UIEffectsInjection: VoidComponent<Props> = () => {
  return (
    <>
      <PixelateCyan />
      <PixelateRed />
    </>
  );
};

export default UIEffectsInjection;
