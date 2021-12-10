import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgFirefox = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 600"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <radialGradient
      id="firefox_svg__a"
      cx={-16424.75}
      cy={8869.666}
      r={450.868}
      fx={-16453.508}
      fy={8869.666}
      gradientTransform="matrix(.4465 .0199 .0293 -.6562 7626.399 6293.332)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0.045} stopColor="#ffea00" />
      <stop offset={0.12} stopColor="#ffde00" />
      <stop offset={0.254} stopColor="#ffbf00" />
      <stop offset={0.429} stopColor="#ff8e00" />
      <stop offset={0.769} stopColor="#ff272d" />
      <stop offset={0.872} stopColor="#e0255a" />
      <stop offset={0.953} stopColor="#cc2477" />
      <stop offset={1} stopColor="#c42482" />
    </radialGradient>
    <path
      d="M472 54.8c-14 16.3-20.6 53.1-6.3 90.4 14.2 37.3 36 29.2 49.6 67.2 17.9 50.2 9.6 117.5 9.6 117.5s21.6 62.5 36.6-3.9C594.8 201.4 472 85.5 472 54.8z"
      fill="url(#firefox_svg__a)"
    />
    <radialGradient
      id="firefox_svg__b"
      cx={-9043.305}
      cy={8499.123}
      r={791.232}
      gradientTransform="matrix(.7178 0 0 -.7178 6900.314 6214.778)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#00ccda" />
      <stop offset={0.22} stopColor="#0083ff" />
      <stop offset={0.261} stopColor="#007af9" />
      <stop offset={0.33} stopColor="#0060e8" />
      <stop offset={0.333} stopColor="#005fe7" />
      <stop offset={0.438} stopColor="#2639ad" />
      <stop offset={0.522} stopColor="#401e84" />
      <stop offset={0.566} stopColor="#4a1475" />
    </radialGradient>
    <path
      d="M300.8 572.2c143.7 0 260.1-117 260.1-261.3S444.5 49.6 300.9 49.6s-260 117-260 261.3c-.2 144.5 116.4 261.3 259.9 261.3z"
      fill="url(#firefox_svg__b)"
    />
    <linearGradient
      id="firefox_svg__c"
      gradientUnits="userSpaceOnUse"
      x1={-1098.924}
      y1={-158.853}
      x2={-1290.362}
      y2={467.376}
      gradientTransform="matrix(.5859 0 0 -.5859 981.34 335.355)"
    >
      <stop offset={0} stopColor="#000f43" stopOpacity={0.4} />
      <stop offset={0.485} stopColor="#001962" stopOpacity={0.173} />
      <stop offset={1} stopColor="#002079" stopOpacity={0} />
    </linearGradient>
    <path
      d="M495.7 472.1c-5.6 4-11.5 7.5-17.6 10.7 8.1-11.9 15.6-24.2 22.4-36.9 5.5-6.1 10.6-12.1 14.8-18.5 2-3.2 4.3-7.1 6.7-11.6 14.6-26.3 30.7-68.9 31.2-112.6V299.9c.1-11-1-21.9-3.3-32.7.1.8.2 1.7.3 2.5-.1-.6-.2-1.3-.4-1.9.2 1.2.4 2.3.6 3.5 3 25.3.9 50-9.8 68.2-.2.3-.3.5-.5.8 5.5-27.7 7.4-58.2 1.2-88.8 0 0-2.5-14.9-20.7-60-10.5-26-29.2-47.3-45.7-62.8-14.5-17.9-27.6-29.9-34.8-37.5C424.8 75 418.5 63 415.9 55.3c-2.3-1.1-31.1-29.2-33.4-30.3-12.6 19.5-52.2 80.7-33.4 137.8 8.5 25.9 30.2 52.7 52.8 67.8 1 1.1 13.5 14.7 19.4 45.2 6.1 31.5 2.9 56.2-9.7 92.6-14.8 31.9-52.8 63.5-88.3 66.7-76 6.9-103.8-38.1-103.8-38.1 27.1 10.9 57.2 8.6 75.4-2.7 18.4-11.4 29.5-19.8 38.6-16.5 8.9 3.3 16-6.3 9.6-16.3-10-15.5-28.4-23.4-46.5-20.3-18.4 3-35.3 17.6-59.4 3.5-1.6-.9-3.1-1.9-4.5-3-1.6-1 5.2 1.6 3.6.4-4.7-2.6-13-8.1-15.2-10.1-.4-.3 3.6 1.3 3.3.9-22.6-18.6-19.7-31.1-19-39 .6-6.3 4.7-14.4 11.6-17.6 3.3 1.8 5.4 3.2 5.4 3.2s-1.4-2.9-2.2-4.4c.3-.1.5-.1.8-.2 2.7 1.3 8.8 4.7 12 6.8 4.1 2.9 5.5 5.5 5.5 5.5s1.1-.6.3-3.1c-.3-1-1.6-4.4-5.7-7.7h.3c2.5 1.4 4.8 3 7 4.8 1.2-4.2 3.2-8.6 2.8-16.5-.3-5.5-.2-7-1.1-9.1-.9-1.8.5-2.5 2-.6-.3-1.5-.7-2.9-1.3-4.3v-.1c1.9-6.6 40-23.7 42.8-25.7 4.6-3.2 8.4-7.4 11.2-12.2 2.1-3.4 3.7-8.1 4.1-15.3.2-5.2-2.2-8.6-40.7-12.7-10.5-1-16.7-8.7-20.2-15.7-.6-1.5-1.3-2.9-1.9-4.3-.6-1.6-1.1-3.3-1.5-4.9 6.3-18.1 16.9-33.4 32.4-44.9.8-.8-3.4.2-2.5-.6 1-.9 7.4-3.5 8.7-4.1 1.5-.7-6.4-4-13.3-3.2-7.1.8-8.6 1.6-12.3 3.2 1.6-1.6 6.5-3.6 5.4-3.6-7.6 1.2-17.1 5.6-25.2 10.6 0-.9.2-1.7.5-2.5-3.8 1.6-13 8.1-15.7 13.6.1-1.1.2-2.1.2-3.2-2.9 2.4-5.5 5.1-7.7 8.1l-.1.1c-21.9-8.8-41.2-9.4-57.5-5.4-3.6-3.6-5.3-1-13.4-18.8-.6-1.1.4 1.1 0 0-1.3-3.5.8 4.6 0 0-13.6 10.8-31.6 23-40.2 31.6-.1.3 10.1-2.9 0 0-3.5 1-3.3 3.1-3.8 22-.1 1.4 0 3-.1 4.3-6.9 8.8-11.6 16.2-13.3 20-8.9 15.3-18.7 39.3-28.2 77.1 4.2-10.3 9.2-20.1 15.1-29.5-7.9 20.1-15.5 51.6-17.1 100.2 1.9-10 4.4-19.9 7.3-29.7-1.9 40.3 5.1 80.5 20.4 117.8 5.5 13.4 14.5 33.7 29.9 55.9 48.4 50.9 116.6 82.6 192.1 82.6 78-.1 148.8-34.6 197.5-89.3z"
      fill="url(#firefox_svg__c)"
    />
    <radialGradient
      id="firefox_svg__d"
      cx={-9768.534}
      cy={7022.398}
      r={266.886}
      gradientTransform="matrix(.7143 .0721 .0721 -.7143 7073.557 6093.36)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0.003} stopColor="#ffea00" />
      <stop offset={0.497} stopColor="#ff272d" />
      <stop offset={1} stopColor="#c42482" />
    </radialGradient>
    <path
      d="M437.4 509c95.4-11 137.6-109.4 83.4-111.3-49-1.6-128.6 116.5-83.4 111.3z"
      fill="url(#firefox_svg__d)"
    />
    <radialGradient
      id="firefox_svg__e"
      cx={-9792.682}
      cy={7278.307}
      r={445.677}
      gradientTransform="matrix(.7143 .0721 .0721 -.7143 7073.557 6093.36)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0.003} stopColor="#ffe900" />
      <stop offset={0.157} stopColor="#ffaf0e" />
      <stop offset={0.316} stopColor="#ff7a1b" />
      <stop offset={0.472} stopColor="#ff4e26" />
      <stop offset={0.621} stopColor="#ff2c2e" />
      <stop offset={0.762} stopColor="#ff1434" />
      <stop offset={0.892} stopColor="#ff0538" />
      <stop offset={1} stopColor="#ff0039" />
    </radialGradient>
    <path
      d="M527.7 377.6c65.7-38.2 48.5-120.8 48.5-120.8s-25.3 29.4-42.6 76.4c-17 46.5-45.4 67.5-5.9 44.4z"
      fill="url(#firefox_svg__e)"
    />
    <radialGradient
      id="firefox_svg__f"
      cx={-9729.647}
      cy={6865.172}
      r={408.959}
      gradientTransform="matrix(.7143 .0721 .0721 -.7143 7073.557 6093.36)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0.003} stopColor="#ff272d" />
      <stop offset={0.497} stopColor="#c42482" />
      <stop offset={0.986} stopColor="#620700" />
    </radialGradient>
    <path
      d="M319.2 557.8c91.5 29.2 170.2-42.9 121.7-67-44.1-21.7-165.1 53.2-121.7 67z"
      fill="url(#firefox_svg__f)"
    />
    <radialGradient
      id="firefox_svg__g"
      cx={-924.387}
      cy={176.296}
      r={782.18}
      fx={-896.41}
      fy={162.468}
      gradientTransform="matrix(.5859 0 0 -.5859 981.34 335.355)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0.156} stopColor="#ffea00" />
      <stop offset={0.231} stopColor="#ffde00" />
      <stop offset={0.365} stopColor="#ffbf00" />
      <stop offset={0.541} stopColor="#ff8e00" />
      <stop offset={0.763} stopColor="#ff272d" />
      <stop offset={0.796} stopColor="#f92433" />
      <stop offset={0.841} stopColor="#e91c45" />
      <stop offset={0.893} stopColor="#cf0e62" />
      <stop offset={0.935} stopColor="#b5007f" />
    </radialGradient>
    <path
      d="M534.5 412.6c2.2-3.1 5.2-13.2 7.9-17.7 16.2-26.1 16.3-46.9 16.3-47.4 9.8-48.8 8.9-68.7 2.9-105.5-4.8-29.6-26-72.1-44.3-92.6-18.9-21.1-5.6-14.2-23.8-29.6-16-17.8-31.5-35.3-40-42.4-61.1-51.1-59.7-61.9-58.5-63.8-.2.2-.5.5-.9 1-.7-2.9-1.2-5.3-1.2-5.3s-33.4 33.4-40.4 89.1c-4.6 36.3 9 74.2 28.7 98.4 10.3 12.5 21.8 23.9 34.6 34 14.9 21.4 23.1 47.7 23.1 76.1 0 71-57.6 128.6-128.7 128.6-9.7 0-19.3-1.1-28.8-3.2-33.5-6.4-52.9-23.3-62.6-34.8-5.5-6.6-7.9-11.4-7.9-11.4 30 10.8 63.3 8.5 83.5-2.6 20.4-11.3 32.7-19.7 42.7-16.4 9.9 3.3 17.7-6.2 10.7-16.1-6.9-9.9-24.8-24-51.5-20.1-20.4 3-39.1 17.4-65.8 3.4-1.7-.9-3.4-1.9-5-2.9-1.8-1 5.7 1.6 4 .4-5.2-2.5-14.4-8-16.8-10-.4-.3 4 1.3 3.6.9-25-18.4-21.9-30.9-21.1-38.7.6-6.2 5.2-14.2 12.8-17.5 3.7 1.8 6 3.2 6 3.2s-1.6-2.9-2.4-4.4c.3-.1.6-.1.9-.2 3 1.3 9.7 4.7 13.2 6.8 4.6 2.9 6 5.5 6 5.5s1.2-.6.3-3.1c-.3-1-1.7-4.3-6.3-7.7h.3c2.7 1.4 5.3 3 7.7 4.8 1.3-4.2 3.6-8.5 3.1-16.3-.3-5.5-.2-6.9-1.2-9-1-1.8.5-2.5 2.2-.6-.3-1.5-.8-2.9-1.4-4.3v-.1c2.1-6.5 44.3-23.5 47.3-25.5 4.9-3.1 9.2-7.2 12.4-12.1 2.3-3.3 4.1-8 4.5-15.2.1-3.2-.8-5.8-12-8.2-6.7-1.5-17.1-2.9-33.1-4.4-11.7-1-18.5-8.6-22.4-15.6-.7-1.5-1.4-2.9-2.2-4.2-.7-1.6-1.2-3.2-1.7-4.9 7-18.3 19.5-33.9 35.9-44.6.9-.8-3.8.2-2.8-.6 1.1-.9 8.2-3.5 9.6-4.1 1.6-.7-7.1-4-14.7-3.2-7.8.8-9.5 1.6-13.7 3.2 1.7-1.5 7.2-3.6 6-3.6-8.4 1.2-18.9 5.6-27.9 10.5 0-.9.2-1.7.5-2.5-4.2 1.6-14.4 8-17.4 13.4.1-1 .2-2.1.2-3.1-3.1 2.3-6 5-8.6 8l-.2.1c-24.2-8.7-45.5-9.3-63.6-5.4-3.9-3.6-10.3-8.9-19.3-26.6-.6-1.1-.9 2.2-1.4 1.1-3.5-8.1-5.6-21.4-5.3-30.5 0 0-7.2 3.3-13.2 17-1.1 2.5-1.8 3.8-2.5 5.2-.3.4.7-4.5.6-4.2-1 1.8-3.7 4.2-4.9 7.4-.8 2.4-1.9 3.7-2.7 6.6l-.2.3c-.1-.9.2-3.6 0-3-2.8 5.7-5.2 11.5-7.2 17.5-3.2 10.6-7 25-7.6 43.7-.1 1.4 0 3-.1 4.3-7.6 8.7-12.8 16.1-14.8 19.9-9.8 15.2-20.7 38.9-31.2 76.4 4.7-10.2 10.3-20.1 16.7-29.3-8.7 19.9-17.2 51.2-18.9 99.3 2.1-10 4.8-19.8 8.1-29.4-1.3 32.4 2.4 72.2 22.7 117.1 12.1 26.4 39.8 80.1 107.6 121.9 0 0 23.1 17.2 62.7 30 2.9 1.1 5.9 2.1 8.9 3.1-1-.4-1.9-.8-2.8-1.2 26.4 7.9 53.8 11.9 81.3 12 102.6.1 132.9-41.1 132.9-41.1s-.1.1-.3.2c1.4-1.4 2.8-2.8 4.2-4.3-16.2 15.3-53.2 16.3-67 15.2 23.6-6.9 39.1-12.8 69.2-24.3 3.5-1.3 7.1-2.8 10.8-4.5.4-.2.8-.4 1.2-.5.7-.3 1.5-.7 2.2-1 14.7-6.9 28.5-15.6 41.2-25.8 30.3-24.2 36.9-47.8 40.3-63.3-.5 1.5-2 5-3 7.2-7.8 16.7-25.1 26.9-43.9 35.7 8.9-11.7 17.2-23.9 24.8-36.6 6.4-6.1 8.3-15.6 12.9-22z"
      fill="url(#firefox_svg__g)"
    />
    <radialGradient
      id="firefox_svg__h"
      cx={-983.238}
      cy={569.051}
      r={923.612}
      gradientTransform="matrix(.5859 0 0 -.5859 981.34 335.355)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0.279} stopColor="#ffea00" />
      <stop offset={0.402} stopColor="#fd0" />
      <stop offset={0.63} stopColor="#ffba00" />
      <stop offset={0.856} stopColor="#ff9100" />
      <stop offset={0.933} stopColor="#ff6711" />
      <stop offset={0.994} stopColor="#ff4a1d" />
    </radialGradient>
    <path
      d="M497.6 470.5c12.4-13.6 23.4-29.2 31.8-46.9 21.6-45.5 55-121 28.7-200-20.8-62.4-49.4-96.5-85.7-129.8C413.5 39.7 397 15.5 397 1.1c0 0-68 75.8-38.5 154.9s89.9 76.2 129.9 158.7c47 97.1-38.1 203.1-108.4 232.8 4.3-1 156.4-35.4 164.4-122.4-.1 1.7-3.5 25.7-46.8 45.4z"
      fill="url(#firefox_svg__h)"
    />
    <linearGradient
      id="firefox_svg__i"
      gradientUnits="userSpaceOnUse"
      x1={-10450.983}
      y1={7178.64}
      x2={-10166.625}
      y2={7251.123}
      gradientTransform="matrix(.7143 .0721 .0721 -.7143 7073.557 6093.36)"
    >
      <stop offset={0} stopColor="#c42482" stopOpacity={0.5} />
      <stop offset={0.474} stopColor="#ff272d" stopOpacity={0.5} />
      <stop offset={0.486} stopColor="#ff2c2c" stopOpacity={0.513} />
      <stop offset={0.675} stopColor="#ff7a1a" stopOpacity={0.72} />
      <stop offset={0.829} stopColor="#ffb20d" stopOpacity={0.871} />
      <stop offset={0.942} stopColor="#ffd605" stopOpacity={0.964} />
      <stop offset={1} stopColor="#ffe302" />
    </linearGradient>
    <path
      d="M300.5 188.3c.2-5.1-2.4-8.6-44.9-12.6-17.5-1.6-24.2-17.8-26.2-24.6-6.2 16.2-8.8 33.1-7.4 53.6.9 13.4 10 27.8 14.3 36.3 0 0 1-1.2 1.4-1.7 8.1-8.5 42.1-21.3 45.3-23.2 3.5-2.1 16.9-11.9 17.5-27.8z"
      fill="url(#firefox_svg__i)"
    />
    <linearGradient
      id="firefox_svg__j"
      gradientUnits="userSpaceOnUse"
      x1={-1421.924}
      y1={1566.914}
      x2={-1476.495}
      y2={1706.759}
      gradientTransform="matrix(.583 .0586 .0586 -.583 842.065 1150.277)"
    >
      <stop offset={0} stopColor="#891551" stopOpacity={0.6} />
      <stop offset={1} stopColor="#c42482" stopOpacity={0} />
    </linearGradient>
    <path
      d="M113.5 92.9c-.6-1.1-.9 2.2-1.4 1.1-3.5-8.1-5.6-21.2-5.1-30.5 0 0-7.2 3.3-13.2 17-1.1 2.5-1.8 3.8-2.5 5.2-.3.4.7-4.5.6-4.2-1 1.8-3.7 4.2-4.9 7.3-1 2.5-2 3.8-2.7 6.9-.2.8.2-3.7 0-3.2-13.9 26.9-16.5 67.4-15.1 65.7 29.6-31.6 63.5-39.1 63.5-39.1-3.7-2.6-11.5-10.3-19.2-26.2z"
      fill="url(#firefox_svg__j)"
    />
    <linearGradient
      id="firefox_svg__k"
      gradientUnits="userSpaceOnUse"
      x1={-1645.342}
      y1={-233.994}
      x2={-1551.234}
      y2={-340.881}
      gradientTransform="matrix(.583 .0586 .0586 -.583 1122.807 235.973)"
    >
      <stop offset={0.005} stopColor="#891551" stopOpacity={0.5} />
      <stop offset={0.484} stopColor="#ff272d" stopOpacity={0.5} />
      <stop offset={1} stopColor="#ff272d" stopOpacity={0} />
    </linearGradient>
    <path
      d="M225.7 423.1c-40.9-17.4-87.3-42-85.5-97.9 2.4-73.6 68.6-59.1 68.6-59.1-2.5.6-9.2 5.4-11.6 10.4-2.5 6.3-7.1 20.7 6.8 35.7 21.7 23.5-44.6 55.9 57.8 116.9 2.6 1.5-24-.8-36.1-6z"
      fill="url(#firefox_svg__k)"
    />
    <linearGradient
      id="firefox_svg__l"
      gradientUnits="userSpaceOnUse"
      x1={-1467.317}
      y1={-419.741}
      x2={-1467.25}
      y2={-344.959}
      gradientTransform="matrix(.583 .0586 .0586 -.583 1122.807 235.973)"
    >
      <stop offset={0} stopColor="#c42482" />
      <stop offset={0.083} stopColor="#c42482" stopOpacity={0.81} />
      <stop offset={0.206} stopColor="#c42482" stopOpacity={0.565} />
      <stop offset={0.328} stopColor="#c42482" stopOpacity={0.362} />
      <stop offset={0.447} stopColor="#c42482" stopOpacity={0.204} />
      <stop offset={0.562} stopColor="#c42482" stopOpacity={0.091} />
      <stop offset={0.673} stopColor="#c42482" stopOpacity={0.023} />
      <stop offset={0.773} stopColor="#c42482" stopOpacity={0} />
    </linearGradient>
    <path
      d="M211.2 386.4c29 10.1 62.7 8.3 82.9-2.8C307.6 376 325 364 335.6 367c-9.2-3.7-16.2-5.4-24.7-5.8-1.4 0-3.2 0-4.7-.2-3.1 0-6.2.2-9.2.5-5.2.5-11 3.8-16.3 3.2-.3 0 5.1-2.2 4.7-2.1-2.8.6-5.8.7-9 1.1-2 .2-3.8.5-5.8.6-60.3 5.1-111.3-32.7-111.3-32.7-4.3 14.6 19.4 43.5 51.9 54.8z"
      fill="url(#firefox_svg__l)"
    />
    <linearGradient
      id="firefox_svg__m"
      gradientUnits="userSpaceOnUse"
      x1={-1019.024}
      y1={534.227}
      x2={-713.368}
      y2={-149.268}
      gradientTransform="matrix(.5859 0 0 -.5859 981.34 335.355)"
    >
      <stop offset={0} stopColor="#fff14f" />
      <stop offset={0.268} stopColor="#ffee4c" />
      <stop offset={0.452} stopColor="#ffe643" />
      <stop offset={0.612} stopColor="#ffd834" />
      <stop offset={0.757} stopColor="#ffc41e" />
      <stop offset={0.892} stopColor="#ffab02" />
      <stop offset={0.902} stopColor="#ffa900" />
      <stop offset={0.949} stopColor="#ffa000" />
      <stop offset={1} stopColor="#ff9100" />
    </linearGradient>
    <path
      d="M497.5 470.9c61-59.9 91.9-132.8 78.9-214.5 0 0 5.2 41.9-14.6 84.7 9.5-41.8 10.6-93.8-14.6-147.6C513.5 121.6 458.1 83.8 437 68.1c-32-23.9-45.3-48.2-45.6-53.3-9.6 19.6-38.5 86.8-3.1 144.7 33.2 54.2 85.5 70.3 122.1 120.1 67.3 91.7-12.9 191.3-12.9 191.3z"
      fill="url(#firefox_svg__m)"
    />
    <linearGradient
      id="firefox_svg__n"
      gradientUnits="userSpaceOnUse"
      x1={-958.686}
      y1={141.126}
      x2={-1103.473}
      y2={-247.624}
      gradientTransform="matrix(.5859 0 0 -.5859 981.34 335.355)"
    >
      <stop offset={0} stopColor="#ff8e00" />
      <stop offset={0.04} stopColor="#ff8e00" stopOpacity={0.858} />
      <stop offset={0.084} stopColor="#ff8e00" stopOpacity={0.729} />
      <stop offset={0.13} stopColor="#ff8e00" stopOpacity={0.628} />
      <stop offset={0.178} stopColor="#ff8e00" stopOpacity={0.557} />
      <stop offset={0.227} stopColor="#ff8e00" stopOpacity={0.514} />
      <stop offset={0.282} stopColor="#ff8e00" stopOpacity={0.5} />
      <stop offset={0.389} stopColor="#ff8e00" stopOpacity={0.478} />
      <stop offset={0.524} stopColor="#ff8e00" stopOpacity={0.416} />
      <stop offset={0.676} stopColor="#ff8e00" stopOpacity={0.314} />
      <stop offset={0.838} stopColor="#ff8e00" stopOpacity={0.172} />
      <stop offset={1} stopColor="#ff8e00" stopOpacity={0} />
    </linearGradient>
    <path
      d="M488.8 315c-21.3-44.1-48-63.3-73.1-84.1 2.9 4.1 3.7 5.6 5.3 8.2 22.2 23.6 54.8 81.2 31.1 153.6-44.7 136.2-223.3 72-242.1 54 7.6 78.8 139.5 116.5 225.4 65.4 48.8-46.3 88.3-124.9 53.4-197.1z"
      fill="url(#firefox_svg__n)"
    />
  </svg>
);

export default SvgFirefox;
