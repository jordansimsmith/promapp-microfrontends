export interface IBootstrapConfiguration {
  identity: {
    getToken: (service: string) => Promise<string>;
  };
  localisation: {
    lang: string;
  };
  services: {
    getUrl: (service: string) => Promise<string>;
  };
  navigation: {
    navigate: (name: string, params?: Record<string, string | number>) => void;
  };
}
