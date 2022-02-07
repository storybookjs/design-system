import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgEye = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g transform="translate(0 -1)" fill="none" fillRule="evenodd">
      <path
        d="M34.896 15.796 20.407 31.1l-7.303-8.062a1.219 1.219 0 0 0-1.844 0 1.547 1.547 0 0 0 0 2.036l8.2 9.052c.279.31.613.45.947.45.334 0 .669-.14.923-.42l15.41-16.324c.51-.562.51-1.473 0-2.036a1.22 1.22 0 0 0-1.844 0Z"
        fill="#FFF"
      />
      <circle fill="#79C9FC" fillRule="nonzero" cx={24} cy={24.976} r={24} />
      <path
        d="M29.274 24.954a5.274 5.274 0 1 1-10.548 0 5.274 5.274 0 0 1 10.548 0Zm3.388 3.504c-1.348 1.148-2.712 2.054-4.054 2.694-1.58.752-3.13 1.132-4.608 1.132-1.48 0-3.03-.38-4.608-1.132-1.342-.64-2.706-1.546-4.054-2.694a27.136 27.136 0 0 1-3.416-3.506 27.2 27.2 0 0 1 3.416-3.506c1.348-1.146 2.712-2.052 4.054-2.692 1.58-.752 3.128-1.134 4.608-1.134 1.48 0 3.03.38 4.608 1.134 1.34.64 2.706 1.546 4.054 2.692a27.42 27.42 0 0 1 3.416 3.506 27.142 27.142 0 0 1-3.416 3.506Zm5.89-4.134c-.264-.37-6.542-9.048-14.552-9.048-8.012 0-14.288 8.68-14.552 9.048L9 24.952l.448.63c.264.37 6.54 9.046 14.552 9.046 8.01 0 14.288-8.676 14.552-9.046l.448-.63-.448-.628Z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default SvgEye;
