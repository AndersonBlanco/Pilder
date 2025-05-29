import * as React from "react"
import Svg, { G, Path, Rect, Ellipse, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function LogoSVG(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={116}
      height={162}
      viewBox="0 0 116 162"
      fill="none"
      {...props}
    >
      <Path
        d="M18.503 105.602l4.152-.634a51.849 51.849 0 0151.413 23.171v0"
        stroke="#fff"
        strokeWidth={5}
      />
      <G filter="url(#filter0_d_1_59)" stroke="#475FD9">
        <Path d="M84.743 47.654l-1.139-2.128c-3.673-6.863-11.943-10.27-20.056-8.263v0M91.82 43.231l-2.01-2.691c-6.067-8.128-16.383-12.425-27.126-11.302v0M100.673 37.904l-2.731-3.101c-7.986-9.065-19.998-14.116-32.774-13.781v0" />
      </G>
      <Rect
        x={1.35328}
        y={3.27411}
        width={49.1375}
        height={99.1725}
        rx={24.5688}
        transform="matrix(.9228 .38527 -.3815 .92437 41.094 44.384)"
        fill="#475FD9"
        stroke="#5F76E9"
        strokeWidth={5}
      />
      <Path
        d="M17.67 92.97l3.986-.613c19.45-2.994 38.873 5.826 49.526 22.49v0"
        stroke="#fff"
        strokeWidth={5}
      />
      <G filter="url(#filter1_d_1_59)">
        <Path
          d="M39.84 71.604a4.308 4.308 0 014.27-2.64l1.563.107a36.3 36.3 0 018.137 1.502l.866.265 4.108 1.432 4.067 1.813 1.827.893 2.197 1.301.053.037a17.508 17.508 0 013.178 2.87l.5.769a4.566 4.566 0 01.482 4.013L69.92 87.27a1.981 1.981 0 01-3.086.904 31.2 31.2 0 00-4.623-3.689l-.797-.52-2.205-1.302-4.056-1.96-4.077-1.666a32.177 32.177 0 00-9.166-1.575l-1.461-.037c-1.449-.099-2.374-1.6-1.812-2.942l1.204-2.878z"
          fill="#fff"
        />
        <Ellipse
          cx={1.89964}
          cy={1.91459}
          rx={1.89964}
          ry={1.91459}
          transform="rotate(3.91 -1035.048 740.847) skewX(.051)"
          fill="#475FD9"
        />
        <Ellipse
          cx={1.89964}
          cy={1.91459}
          rx={1.89964}
          ry={1.91459}
          transform="rotate(3.91 -1035.048 740.847) skewX(.051)"
          fill="#475FD9"
        />
        <Ellipse
          cx={1.89964}
          cy={1.91459}
          rx={1.89964}
          ry={1.91459}
          transform="rotate(3.91 -1097.215 917.06) skewX(.051)"
          fill="#475FD9"
        />
        <Ellipse
          cx={1.89964}
          cy={1.91459}
          rx={1.89964}
          ry={1.91459}
          transform="rotate(3.91 -1097.215 917.06) skewX(.051)"
          fill="#475FD9"
        />
      </G>
      <Rect
        width={4.03669}
        height={11.9272}
        rx={2}
        transform="matrix(.9015 .43279 -.42076 .90717 67.67 50.958)"
        fill="#475FD9"
      />
      <Rect
        width={8.05255}
        height={7.84961}
        rx={2}
        transform="matrix(.88766 .4605 -.44843 .89382 68.857 44.396)"
        fill="#475FD9"
      />
      <Defs></Defs>
    </Svg>
  ); 
}

export default LogoSVG
