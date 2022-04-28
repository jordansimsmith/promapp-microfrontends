import React from "react";

export type MicrofrontendRegistration = {
  name: string;
  path: string;
  url: string;
  scope: string;
  module: string;
  routes: Record<string, string>;
};

export const useMicrofrontendRegistration = () => {
  // TODO: url should come from host configuration
  const url = "http://localhost:3001/registrations.json";

  const [registration, setRegistration] = React.useState<
    MicrofrontendRegistration[]
  >([]);

  React.useEffect(() => {
    (async () => {
      const res = await fetch(url);
      const json = await res.json();

      setRegistration(json);
    })();
  }, []);

  return { registration };
};
