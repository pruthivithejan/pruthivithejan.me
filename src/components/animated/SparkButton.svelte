<script>
  export let text = "";
</script>

<button class="animation-container">
  <span class="spark__container">
    <span class="spark" />
  </span>
  <span class="backdrop" />
  <span class="text">{text}</span>
</button>

<style>
  /* Border Animation */
  .animation-container {
    --transition: 0.25s;
    --spark: 3s;
    --bg: black;
    background: var(--bg);
    padding: 6px 18px;
    display: grid;
    border-radius: 9999px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 1000px 0 0 hsl(0 0% 20%) inset;
    transition:
      box-shadow var(--transition),
      background var(--transition),
      transform var(--transition);
  }

  .animation-container:hover .backdrop {
    background: rgb(20 20 20);
  }

  .animation-container:hover {
    transform: scale(1.05);
  }

  .spark {
    position: absolute;
    inset: 0;
    border-radius: 9999px;
    rotate: 0deg;
    overflow: hidden;
    mask: linear-gradient(white, transparent 50%);
    animation: flip calc(var(--spark) * 2) infinite steps(2, end);
  }

  @keyframes flip {
    to {
      rotate: 360deg;
    }
  }

  .spark:before {
    content: "";
    position: absolute;
    width: 200%;
    aspect-ratio: 1;
    inset: 0 auto auto 50%;
    z-index: -1;
    translate: -50% -15%;
    rotate: 0;
    transform: rotate(-90deg);
    opacity: 1;
    background: conic-gradient(from 0deg, transparent 0 340deg, white 360deg);
    transition: opacity var(--transition);
    animation: rotate var(--spark) linear infinite both;
  }

  .backdrop {
    position: absolute;
    inset: 1px;
    background: var(--bg);
    border-radius: 9999px;
    transition: background var(--transition) opacity var(--transition);
  }

  @keyframes rotate {
    to {
      transform: rotate(90deg);
    }
  }

  .text {
    z-index: 1;
    color: rgb(203 213 225);
  }
</style>
