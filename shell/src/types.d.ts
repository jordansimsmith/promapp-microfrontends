/// <reference types="react" />

declare module "process/bootstrap" {
  export const mount: (root: Element) => void;
  export const unmount: (root: Element) => void;
}
