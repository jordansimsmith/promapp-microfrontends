import React from "react";
import { useAuthContext } from "./AuthContext";

interface RemoteComponentProps {
  loadRemoteModule: () => Promise<any>;
}

const RemoteComponent = ({
  loadRemoteModule,
}: RemoteComponentProps): JSX.Element => {
  const [remote, setRemote] = React.useState<any>();
  const root = React.useRef<HTMLDivElement>(null);
  const { user, accessToken } = useAuthContext();

  // load the remote module
  React.useEffect(() => {
    loadRemoteModule().then((bootstrap) => {
      setRemote(bootstrap);
    });
  }, []);

  // mount and unmount the remote module
  React.useLayoutEffect(() => {
    if (!root.current || !remote) {
      return;
    }

    remote.mount(root.current, user, accessToken);

    return () => remote?.unmount(root.current);
  }, [remote]);

  return <div ref={root}></div>;
};

// never re-render this component
export default React.memo(RemoteComponent, () => true);
