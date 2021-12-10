import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCheck = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <circle cx={24} cy={24} r={24} fill="#96D07C" />
      <path
        fill="#FFF"
        d="M34.896 14.796 20.407 30.1l-7.303-8.062a1.219 1.219 0 0 0-1.844 0 1.547 1.547 0 0 0 0 2.036l8.2 9.052c.279.31.613.45.947.45.334 0 .669-.14.923-.42l15.41-16.324c.51-.562.51-1.473 0-2.036a1.22 1.22 0 0 0-1.844 0Z"
      />
    </g>
  </svg>
);

export default SvgCheck;
