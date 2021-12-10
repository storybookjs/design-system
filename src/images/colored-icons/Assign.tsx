import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAssign = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <circle fill="#37D5D3" cx={12.125} cy={11} r={11} />
      <circle fill="#A470D5" cx={12.125} cy={37} r={11} />
      <path
        d="M12.225 12.872a8.254 8.254 0 0 1 7.845 5.69 10.97 10.97 0 0 1-7.945 3.391 10.966 10.966 0 0 1-7.795-3.238 8.257 8.257 0 0 1 7.895-5.843Zm1.375-8.25c1.14 0 2.063.923 2.063 2.062v2.75c0 1.14-.924 2.063-2.063 2.063h-2.75a2.062 2.062 0 0 1-2.063-2.063v-2.75c0-1.139.924-2.062 2.063-2.062h2.75ZM12.125 38.672a8.254 8.254 0 0 1 7.916 5.92 10.97 10.97 0 0 1-7.916 3.361 10.968 10.968 0 0 1-7.915-3.361 8.252 8.252 0 0 1 7.915-5.92Zm0-8.25a3.438 3.438 0 1 1 0 6.875 3.438 3.438 0 0 1 0-6.875Z"
        fill="#FFF"
        opacity={0.5}
      />
      <path
        d="m38.362 37 5.405 5.405a.817.817 0 0 1-1.155 1.155l-5.405-5.405-5.405 5.405a.817.817 0 0 1-1.155-1.155L36.052 37l-5.405-5.405a.817.817 0 1 1 1.155-1.155l5.405 5.405 5.405-5.405a.817.817 0 1 1 1.155 1.155L38.362 37Z"
        fill="#FA7240"
        fillRule="nonzero"
      />
      <path
        d="m43.6 5.115-8.5 8.978-4.285-4.73a.715.715 0 0 0-1.082 0 .907.907 0 0 0 0 1.194l4.81 5.311c.164.182.36.265.556.264a.728.728 0 0 0 .542-.247l9.04-9.576a.907.907 0 0 0 0-1.194.715.715 0 0 0-1.082 0Z"
        fill="#A0DB77"
      />
    </g>
  </svg>
);

export default SvgAssign;
