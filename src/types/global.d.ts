export {};

import type SculptGL from '../SculptGL';

declare global {
  interface Window {
    sculptgl: SculptGL;
  }
}
