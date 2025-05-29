import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function MiniLogoSVG(props) {
  return (
   <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={29}
      height={40}
      viewBox="0 0 29 40"
      fill="none"
      {...props}
    >
      <Rect
        x={0.404855}
        y={0.979491}
        width={12.7267}
        height={25.723}
        rx={6.36334}
        transform="rotate(22.5 -13.935 31.26) skewX(-.086)"
        fill="#475FD9"
        stroke="#5F76E9"
        strokeWidth={1.5}
      />
      <Path
        d="M21.495 12.792l-.092-.553c-.297-1.786-1.868-3.157-3.812-3.33v0M23.51 12.658l-.242-.744c-.73-2.243-2.687-3.965-5.146-4.53v0M25.701 11.773l-.37-.888c-1.085-2.594-3.36-4.61-6.21-5.501v0"
        stroke="#475FD9"
      />
      <Path
        d="M4.654 20.331l1.052-.16a13.138 13.138 0 0113.027 5.87v0"
        stroke="#fff"
        strokeWidth={1.5}
      />
    </Svg>
  )
}

export default MiniLogoSVG
