import("./bootstrap").then(({ mount }) => {
  const root = document.getElementById("shell-root");
  if (root) {
    mount(root);
  }
});
