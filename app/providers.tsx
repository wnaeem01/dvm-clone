'use client';

import { Provider } from 'react-redux';
import { store } from './store'; // adjust this path as needed

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
