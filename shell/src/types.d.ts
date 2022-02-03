/// <reference types="react" />

declare module "process/bootstrap" {
  export const mount: (root: Element, user: IUser, accessToken: string) => void;
  export const unmount: (root: Element) => void;
}

declare module "home/bootstrap" {
  export const mount: (root: Element, user: IUser, accessToken: string) => void;
  export const unmount: (root: Element) => void;
}
