import { createContext } from 'react';
import { breakpoint } from '../shared/styles';

interface HeaderContextInterface {
  navBreakpoint: number;
  inverse: boolean;
}

export const defaultHeaderContext = {
  navBreakpoint: breakpoint * 1.25,
  inverse: false,
}

export const HeaderContext = createContext<HeaderContextInterface>(defaultHeaderContext);
