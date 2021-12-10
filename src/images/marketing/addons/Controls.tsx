import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgControls = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 140 140"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <filter
        x="-25%"
        y="-20.8%"
        width="150%"
        height="150%"
        filterUnits="objectBoundingBox"
        id="controls_svg__c"
      >
        <feMorphology radius={1} operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
        <feOffset dy={1} in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={1.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" in="shadowBlurOuter1" />
      </filter>
      <filter
        x="-25%"
        y="-20.8%"
        width="150%"
        height="150%"
        filterUnits="objectBoundingBox"
        id="controls_svg__g"
      >
        <feMorphology radius={1} operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
        <feOffset dy={1} in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={1.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" in="shadowBlurOuter1" />
      </filter>
      <filter
        x="-25%"
        y="-20.8%"
        width="150%"
        height="150%"
        filterUnits="objectBoundingBox"
        id="controls_svg__k"
      >
        <feMorphology radius={1} operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
        <feOffset dy={1} in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation={1.5} in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" in="shadowBlurOuter1" />
      </filter>
      <circle id="controls_svg__d" cx={32} cy={12} r={12} />
      <circle id="controls_svg__h" cx={70} cy={12} r={12} />
      <circle id="controls_svg__l" cx={108} cy={12} r={12} />
      <rect id="controls_svg__a" x={0} y={6} width={140} height={12} rx={6} />
      <rect id="controls_svg__e" x={0} y={6} width={140} height={12} rx={6} />
      <rect id="controls_svg__i" x={0} y={6} width={140} height={12} rx={6} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(0 12)">
        <mask id="controls_svg__b" fill="#fff">
          <use xlinkHref="#controls_svg__a" />
        </mask>
        <use fill="#D7EEFE" xlinkHref="#controls_svg__a" />
        <rect
          fill="#FC521F"
          opacity={0.8}
          mask="url(#controls_svg__b)"
          x={-13}
          y={6}
          width={45}
          height={12}
          rx={6}
        />
        <use fill="#000" filter="url(#controls_svg__c)" xlinkHref="#controls_svg__d" />
        <circle strokeOpacity={0.05} stroke="#000" fill="#FFF" cx={32} cy={12} r={12.5} />
      </g>
      <g transform="translate(0 58)">
        <mask id="controls_svg__f" fill="#fff">
          <use xlinkHref="#controls_svg__e" />
        </mask>
        <use fill="#D7EEFE" xlinkHref="#controls_svg__e" />
        <rect
          fill="#FFAE00"
          opacity={0.8}
          mask="url(#controls_svg__f)"
          x={-26.5}
          y={6}
          width={96}
          height={12}
          rx={6}
        />
        <use fill="#000" filter="url(#controls_svg__g)" xlinkHref="#controls_svg__h" />
        <circle strokeOpacity={0.05} stroke="#000" fill="#FFF" cx={70} cy={12} r={12.5} />
      </g>
      <g transform="translate(0 104)">
        <mask id="controls_svg__j" fill="#fff">
          <use xlinkHref="#controls_svg__i" />
        </mask>
        <use fill="#D7EEFE" xlinkHref="#controls_svg__i" />
        <rect
          fill="#66BF3C"
          opacity={0.8}
          mask="url(#controls_svg__j)"
          x={-84}
          y={6}
          width={192}
          height={12}
          rx={6}
        />
        <use fill="#000" filter="url(#controls_svg__k)" xlinkHref="#controls_svg__l" />
        <circle strokeOpacity={0.05} stroke="#000" fill="#FFF" cx={108} cy={12} r={12.5} />
      </g>
    </g>
  </svg>
);

export default SvgControls;
