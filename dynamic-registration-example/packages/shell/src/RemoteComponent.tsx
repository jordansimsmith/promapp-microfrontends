import React from "react";
import { useDynamicScript } from "./useDynamicScript";
import { MicrofrontendRegistration } from "./useMicrofrontendRegistration";

type RemoteComponentProps = {
  registration: MicrofrontendRegistration;
};

const InternalRemoteComponent = ({
  registration,
}: RemoteComponentProps): JSX.Element => {
  // load the remote script
  const { ready, failed } = useDynamicScript(registration.url);

  const [remote, setRemote] = React.useState<any>();
  const root = React.useRef<HTMLDivElement>(null);

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

    remote.mount(currentRoot);

    return () => remote?.unmount(currentRoot);
  }, [remote]);

  if (!ready) {
    return <h2>Loading dynamic script: {registration.url}</h2>;
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
