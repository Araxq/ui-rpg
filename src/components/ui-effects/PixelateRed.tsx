import type { VoidComponent } from "solid-js";

type Props = {};

const PixelateRed: VoidComponent<Props> = () => {
  return (
    <svg class="absolute">
      <filter
        id="pixelate-red"
        color-interpolation-filters="sRGB"
        x="0"
        y="0"
        width="100%"
        height="100%"
      >
        <feFlood
          flood-color="#000000"
          flood-opacity="0.50"
          x="0%"
          y="0%"
          result="flood"
        />
        <feBlend
          mode="normal"
          x="0%"
          y="0%"
          in="SourceGraphic"
          in2="flood"
          result="blend1"
        />
        <feImage
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5ElEQVQYlQXBgQbCUABA0fdrk0ySSZJJkiRJMjOTTGZmkiRJZiYzyczMzGQmfdrtHPH7/TgcDuR5zna7pWka9vs9aZqyXq8R0+mU5/OJoihcLhfG4zFBENDtdjmdToj3+81yueTz+WCaJnEcM5/PKcsSXdcRsizjeR6j0YjH40Gr1cJxHAaDAbfbDVHXNbvdjiRJWK1WfL9fLMsiyzI2mw1CVVV836fT6XA8HplMJoRhSK/X43w+I6IoYjabURQFmqbxer1YLBZUVYVhGAhJkrBtm36/z/V6pd1u47ouw+GQ+/3OH4/Fn8FvF/NxAAAAAElFTkSuQmCC"
          x="0"
          y="0"
          width="4"
          height="4"
          // @ts-expect-error solid types are wrong
          crossOrigin="anonymous"
          result="image1"
        />
        <feTile x="0" y="0" in="image1" result="tile" />
        <feBlend
          // @ts-expect-error solid types are wrong
          mode="overlay"
          x="0%"
          y="0%"
          in="blend1"
          in2="tile"
          result="blend2"
        />
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncR type="discrete" tableValues="0 0.5 1" />
          <feFuncG type="discrete" tableValues="0 0" />
          <feFuncB type="discrete" tableValues="0 0" />
        </feComponentTransfer>
      </filter>
    </svg>
  );
};

export default PixelateRed;
