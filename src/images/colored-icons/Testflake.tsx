import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTestflake = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
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
      <rect id="testflake_svg__a" width={40} height={40} x={0} y={4} rx={4} />
      <mask
        id="testflake_svg__b"
        width={40}
        height={40}
        x={0}
        y={0}
        fill="#fff"
        maskContentUnits="userSpaceOnUse"
        maskUnits="objectBoundingBox"
      >
        <use xlinkHref="#testflake_svg__a" />
      </mask>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use
        fill="#FEFAD2"
        stroke="#FDDA9F"
        strokeDasharray="3 2"
        strokeWidth={2}
        mask="url(#testflake_svg__b)"
        xlinkHref="#testflake_svg__a"
      />
      <rect width={10.5} height={8} x={2} y={20} fill="#AAD895" rx={2} />
      <rect width={34.331} height={8} x={2} y={30.125} fill="#AAD895" rx={2} />
      <rect width={15} height={8} x={14.611} y={20} fill="#AAD895" rx={2} />
      <rect width={46} height={8} x={2} y={9.875} fill="#FD8360" opacity={0.5} rx={2} />
    </g>
  </svg>
);

export default SvgTestflake;
