import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIgnore = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd">
      <rect fill="#FEFAD2" x={11} y={11} width={37} height={37} rx={2} />
      <path
        d="M13 13v33h33V13H13zm0-2h33a2 2 0 0 1 2 2v33a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V13c0-1.1.9-2 2-2z"
        fillOpacity={0.1}
        fill="#F8E71C"
        fillRule="nonzero"
      />
      <path
        d="M31.5 11h3.3L11 34.5v-3.2L31.5 11zm-13 0h3.3L11 21.7v-3.2l7.6-7.5zM48 20.4v3.2L23.3 48h-3.2L48 20.4zM44.5 11H46c.5 0 1 .2 1.3.5L11.3 47a2 2 0 0 1-.3-1v-1.8L44.5 11zM48 33.2v3.2L36.3 48h-3.2L48 33.2z"
        fillOpacity={0.1}
        fill="#F81C1C"
      />
      <circle fill="#FFAE00" cx={12.8} cy={12} r={12} />
      <path
        d="M8.4 13.7 6.7 12l1.7-1.7 2-1.3c.8-.3 1.6-.5 2.3-.5.6 0 1.2.1 1.7.3l1-.9c-.9-.3-1.7-.5-2.7-.5-4 0-7 4.1-7.2 4.3l-.3.3.3.3c0 .1 1 1.4 2.6 2.6l.8-.8-.5-.4zm11.6-2c0-.1-1-1.4-2.6-2.6l-.8.8a11.3 11.3 0 0 1 2.2 2.1L17 13.7 15 15c-.8.3-1.6.5-2.3.5-.6 0-1.2-.1-1.7-.3l-1 .9c.9.3 1.7.5 2.7.5 4 0 7-4.1 7.2-4.3l.3-.3-.3-.3zm-4.6.3c0-.3 0-.6-.2-.8L12 14.4l.8.1c1.5 0 2.7-1.1 2.7-2.5zM10 12c0 .3 0 .6.2.8l3.3-3.2-.8-.1A2.6 2.6 0 0 0 10 12zm-3.7 6a.5.5 0 0 1 0-.7l12-11.4c.1-.2.5-.2.7 0 .3.2.3.6 0 .8L7 18.1c-.1.2-.5.2-.7 0z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgIgnore;
