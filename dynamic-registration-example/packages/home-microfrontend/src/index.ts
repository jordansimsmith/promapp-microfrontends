import("./bootstrap").then(({ mount }) => {
  const root = document.getElementById("home-microfrontend-root");
  if (root) {
    mount(root, {
      identity: {
        getToken: async () => "",
      },
      localisation: {
        lang: "en",
      },
      navigation: {
        navigate: () => null,
      },
      services: {
        getUrl: async () => "",
      },
    });
  }
});
