import * as React from "react";
import { View } from "react-native";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";

export function Espresso() {
  return (
    <View>
      <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
        <Defs>
          <ClipPath id="a">
            <Path fill="#fff" fillOpacity={0} d="M0 0H16V16H0z" />
          </ClipPath>
        </Defs>
        <Path fill="#FFF" fillOpacity={0} d="M0 0H16V16H0z" />
        <G clipPath="url(#a)">
          <Path
            d="M1.1 6.8v4.04c0 .54.1 1.06.31 1.55a4.02 4.02 0 002.19 2.19c.49.21 1.01.31 1.55.31h2.94c.53 0 1.06-.1 1.55-.31.49-.2.93-.5 1.31-.87.37-.38.67-.83.88-1.32.2-.49.3-1.01.3-1.55V6.8H1.1zM9.5.12c.12.1.19.23.2.38a.54.54 0 01-.13.4c-.51.61-.62 1.03-.47 1.31.05.09.48.76.58.97.22.46.25.92.06 1.45-.14.39-.35.75-.61 1.07h3.11c.35.01.6.1.76.26.09.09.15.21.19.35h.05c.73 0 1.43.29 1.95.81a2.755 2.755 0 010 3.9c-.52.51-1.22.81-1.95.81l-.1-.01a5.107 5.107 0 01-1.77 3c-.93.76-2.09 1.17-3.28 1.18H5.15c-.68 0-1.35-.14-1.98-.4-.62-.26-1.19-.64-1.67-1.11-.47-.48-.85-1.05-1.11-1.67-.26-.63-.39-1.3-.39-1.98V6.66c-.02-.34.05-.59.19-.73.15-.15.36-.22.65-.23H3.2c.03-.05.07-.1.12-.14.48-.41.8-.85.96-1.3.09-.25.08-.4-.01-.61-.07-.14-.46-.76-.54-.9-.43-.76-.19-1.63.58-2.56.05-.06.11-.1.17-.14.07-.04.14-.06.21-.07.07 0 .15 0 .22.03.07.02.14.05.19.1.06.05.11.11.14.17.03.07.05.14.06.21 0 .08-.01.15-.03.22-.02.07-.06.14-.11.19-.51.61-.63 1.03-.47 1.31.05.09.48.76.57.97.22.47.25.92.06 1.45-.14.39-.34.75-.6 1.07h.69c.03-.05.07-.1.11-.14.49-.41.81-.85.97-1.3.09-.25.08-.4-.02-.61-.06-.14-.45-.76-.53-.9-.43-.76-.2-1.63.58-2.56.05-.06.1-.11.17-.14A.55.55 0 017.12 0c.07.02.14.06.2.1.05.05.1.11.13.18.04.06.06.14.06.21.01.08 0 .15-.03.22-.02.07-.06.14-.11.19-.52.61-.63 1.03-.47 1.31.05.09.47.76.57.97.22.47.25.92.06 1.45-.14.39-.34.75-.6 1.07h.69c.03-.05.06-.1.11-.14.49-.41.81-.85.97-1.3.09-.25.08-.4-.02-.61-.06-.14-.46-.76-.54-.9-.43-.76-.19-1.63.59-2.56A.562.562 0 019.5.12zm3.74 7.29v3.31c.44 0 .86-.17 1.17-.48a1.666 1.666 0 000-2.34c-.31-.32-.73-.49-1.17-.49z"
            fill="#fff"
            fillOpacity={1}
            fillRule="nonzero"
          />
        </G>
      </Svg>
    </View>
  );
}
