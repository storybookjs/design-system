import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgKnob = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 48 48"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <path
        id="knob_svg__a"
        d="M13 11h22c7.18 0 13 5.82 13 13s-5.82 13-13 13H13C5.82 37 0 31.18 0 24s5.82-13 13-13Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#AAD895" xlinkHref="#knob_svg__a" />
      <circle cx={35} cy={24} r={11} fill="#FFF" />
    </g>
  </svg>
);

export default SvgKnob;
