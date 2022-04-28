import { IBootstrapConfiguration } from "./IBootstrapConfiguration";

export interface IBootstrap {
  mount(container: Element, configuration: IBootstrapConfiguration): void;
  unmount(container: Element): void;
}
