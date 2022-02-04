<script>
  async function getRecentlyViewedProcesses() {
    return await new Promise((resolve) => {
      const processes = [
        {
          id: 1,
          name: "Configure development machine",
        },
        {
          id: 2,
          name: "Apply for leave",
        },
        {
          id: 3,
          name: "Onboard new employee",
        },
        {
          id: 4,
          name: "Handle bereavement leave",
        },
      ];

      setTimeout(() => resolve(processes), 1000);
    });
  }

  let recentlyViewedProcesses = getRecentlyViewedProcesses();
</script>

<div class="root">
  <h2>Home</h2>

  <div class="recently-viewed-container">
    <h3>Recently viewed</h3>

    {#await recentlyViewedProcesses}
      <p>Loading...</p>
    {:then processes}
      {#each processes as process}
        <li>
          {process.name}
        </li>
      {/each}
    {/await}
  </div>
</div>

<style>
  .root {
    background: lawngreen;
  }

  .recently-viewed-container {
    border: solid 1px;
  }
</style>
