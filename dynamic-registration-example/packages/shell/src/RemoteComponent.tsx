import React from "react";
import { useDynamicScript } from "./useDynamicScript";
import { MicrofrontendRegistration } from "./useMicrofrontendRegistration";
import { IBootstrap } from "common";
import { useBootstrapConfiguration } from "./useBootstrapConfiguration";

type RemoteComponentProps = {
  registration: MicrofrontendRegistration;
  registeredRoutes: Record<string, string>;
};

const InternalRemoteComponent = ({
  registration,
  registeredRoutes,
}: RemoteComponentProps): JSX.Element => {
  // load the remote script
  const { ready, failed } = useDynamicScript(registration.url);

  const [remote, setRemote] = React.useState<IBootstrap>();
  const root = React.useRef<HTMLDivElement>(null);

  const bootstrapConfiguration = useBootstrapConfiguration(registeredRoutes);

  // load the remote module
  React.useEffect(() => {
    if (!ready) {
      return;
    }

    (async () => {
      // @ts-ignore
      await __webpack_init_sharing__("default");
      // @ts-ignore
      const container = window[registration.scope];
      // @ts-ignore
      await container.init(__webpack_share_scopes__.default);
      // @ts-ignore
      const factory = await window[registration.scope].get(registration.module);
      const Module = factory();

      setRemote(Module);
    })();
  }, [ready]);

  // mount and unmount the remote module
  React.useLayoutEffect(() => {
    // store in a variable to keep a stable reference for cleanup
    const currentRoot = root.current;

    if (!currentRoot || !remote) {
      return;
    }

    remote.mount(currentRoot, bootstrapConfiguration);

    return () => remote?.unmount(currentRoot);
  }, [remote]);

  if (!ready) {
    return <p>Loading dynamic script: {registration.url}</p>;
  }

  if (failed) {
    return (
      <p style={{ color: "red" }}>
        Failed to load dynamic script: {registration.url}
      </p>
    );
  }

  return <div ref={root}></div>;
};

export const RemoteComponent = React.memo(InternalRemoteComponent, () => true);
