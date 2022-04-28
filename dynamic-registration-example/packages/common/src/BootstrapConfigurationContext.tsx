import React from "react";
import { IBootstrapConfiguration } from "./IBootstrapConfiguration";

const BoostrapConfigurationContext =
  React.createContext<IBootstrapConfiguration | null>(null);

type BoostrapConfigurationProviderProps = {
  children: React.ReactNode;
  value: IBootstrapConfiguration;
};

export const BoostrapConfigurationProvider = ({
  children,
  value,
}: BoostrapConfigurationProviderProps) => {
  return (
    <BoostrapConfigurationContext.Provider value={value}>
      {children}
    </BoostrapConfigurationContext.Provider>
  );
};

export const useBootstrapConfiguration = (): IBootstrapConfiguration =>
  React.useContext(BoostrapConfigurationContext)!;
