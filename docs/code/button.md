# Buttons

<div class="buttons-wrap">
  <button class="btn btn-1">Button</button>
  <button class="btn btn-2">Button</button>
  <button class="btn btn-1">test</button>
  <button class="btn btn-1">test</button>
  <button class="btn btn-1">test</button>
  <button class="btn btn-1">test</button>
  <button class="btn btn-1">test</button>
  <button class="btn btn-1">test</button>
  <button class="btn btn-1">test</button>
  <button class="btn btn-1">test</button>
  <button class="btn btn-1">test</button>
  <button class="btn btn-1">test</button>
  <button class="btn btn-1">test</button>
  <button class="btn btn-1">test</button>
  <button class="btn btn-1">test</button>
  <button class="btn btn-1">test</button>
  <button class="btn btn-1">test</button>
  <button class="btn btn-1">test</button>
</div>

<style>
  .buttons-wrap {
    padding: 2rem 0;
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-gap: 1rem;
    gap: 1rem;
  }
  .btn {
    padding: 4px 8px;
    border-radius: 4px;
  }
  .btn-1 {
    transition: .3s, background-position 0s;
    background: #ccfbf1 linear-gradient(#2dd4bf 0 0) calc(100% - var(--target,0%)) / var(--target,0%) no-repeat;
  }
  .btn-1:hover {
    --target: 100%;
  }

  .btn-2 {
    transition: .3s, background-position 0s;
    background: #cffafe linear-gradient(#06b6d4 0 0) var(--target,0%) / var(--target,0%) no-repeat;
  }
  .btn-2:hover {
    --target: 100%;
  }
</style>