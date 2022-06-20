import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgStorybookIcon = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M3.562 23.426 2.774 2.442a1.278 1.278 0 0 1 1.198-1.324L21.82.003a1.278 1.278 0 0 1 1.358 1.275v22.866a1.278 1.278 0 0 1-1.335 1.277l-17.061-.766a1.278 1.278 0 0 1-1.22-1.23Z"
      fill="#FF4785"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.416.09 17.96.244l-.12 2.88a.19.19 0 0 0 .306.16l1.119-.848.945.744a.19.19 0 0 0 .309-.156L20.416.09Zm-1.912 9.648c-.45.35-3.799.588-3.799.09.071-1.897-.779-1.98-1.25-1.98-.449 0-1.204.136-1.204 1.152 0 1.036 1.104 1.62 2.399 2.307 1.84.975 4.067 2.155 4.067 5.125 0 2.846-2.313 4.419-5.262 4.419-3.045 0-5.705-1.232-5.404-5.502.118-.501 3.988-.382 3.988 0-.048 1.762.354 2.28 1.368 2.28.779 0 1.133-.429 1.133-1.152 0-1.094-1.15-1.74-2.472-2.482-1.791-1.005-3.9-2.189-3.9-4.905 0-2.71 1.865-4.517 5.192-4.517s5.144 1.779 5.144 5.165Z"
      fill="#fff"
    />
  </svg>
);

export default SvgStorybookIcon;
