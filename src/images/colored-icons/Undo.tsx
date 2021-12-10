import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgUndo = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="#FD8460" fillRule="evenodd">
      <path
        d="M3.1 32.8A3 3 0 1 1 9 32a16.2 16.2 0 1 0 10-21.4l-1.8-5.5A22 22 0 1 1 3.1 32.8z"
        opacity={0.7}
      />
      <path d="M12.4 8.2c-.5-.4-.5-1 0-1.4L23.3.2l.4-.2c.4 0 .7.3.7.8v13.4c0 .5-.3.8-.7.8a1 1 0 0 1-.4-.2L12.4 8.2z" />
    </g>
  </svg>
);

export default SvgUndo;
