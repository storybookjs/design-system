/* eslint-env browser */
import { fontUrl } from '../components/shared/global';

// Load the font and avoid re-loading it when components change
const fontLinkId = 'storybook-font-link-tag';

export const loadFontsForStorybook = () => {
  if (!document.getElementById(fontLinkId)) {
    const fontLink = document.createElement('link');

    fontLink.id = fontLinkId;
    fontLink.href = fontUrl;
    fontLink.rel = 'stylesheet';

    document.head.appendChild(fontLink);
  }
};
