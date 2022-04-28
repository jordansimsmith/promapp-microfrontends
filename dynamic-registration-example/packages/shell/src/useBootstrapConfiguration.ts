import { IBootstrapConfiguration } from "common";
import { useNavigate } from "react-router-dom";

export const useBootstrapConfiguration = (
  registeredRoutes: Record<string, string>
): IBootstrapConfiguration => {
  const navigate = useNavigate();

  return {
    identity: {
      getToken: async () => {
        // TODO: implement oauth2 token call and cache
        return "";
      },
    },
    localisation: {
      lang: "en",
    },
    navigation: {
      navigate: (
        name: string,
        params: Record<string, string | number> = {}
      ) => {
        const route = registeredRoutes[name];
        if (!route) {
          console.error("no registered route found with name", name);
          return;
        }

        // substitute the {{parameters}} from the route string with the provided params
        let formattedRoute = route;
        const templates = [...route.matchAll(/{{([^{}]+)}}/g)];
        templates.forEach((t) => {
          const templateName = t[1];
          const templateWithBrackets = t[0];

          // no substitute found, skip
          if (!params[templateName]) {
            return;
          }

          formattedRoute = formattedRoute.replaceAll(
            templateWithBrackets,
            params[templateName].toString()
          );
        });

        console.log("navigating to formatted route", formattedRoute);

        navigate(formattedRoute);
      },
    },
    services: {
      getUrl: async (service: string) => {
        // TODO: should come dynamically from host app configuration
        if (service === "promapp-core") {
          return "http://dev.promapp.com/paw";
        }

        return "";
      },
    },
  };
};
