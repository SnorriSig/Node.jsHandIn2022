<script>
import { onDestroy, createEventDispatcher } from "svelte";
import bikes from "./bikes-store"
import { email } from "./bikes-store"
import Button from "../UI/Button.svelte";

export let id;

let selectedBike;

const unsubscribe = bikes.subscribe(items => {
    selectedBike = items.find(i => i.id === id);
})

const dispatch = createEventDispatcher();

onDestroy(() => {
    unsubscribe();
});
</script>

<style>
    section {
  margin-top: 4rem;
}
.image {
  width: 100%;
  height: 25rem;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
.image {
  background: #e7e7e7;
height: 100%;
}
.content {
  text-align: center;
  width: 80%;
  margin: auto;
  margin-bottom: 10rem;
}
h1 {
  font-size: 2rem;
  font-family: 'Roboto Slab', sans-serif;
  margin: 0.5rem 0;
}
h2 {
  font-size: 1.25rem;
  color: #6b6b6b;
}
p {
  font-size: 1.5rem;
}
</style>

<section>
    <div class="image">
        <img src="{selectedBike.image}" alt="{selectedBike.model}" />
    </div>
    <div class="content">
        <h1>{selectedBike.brand}</h1>
        <h2>{selectedBike.model}</h2>
        <p>{selectedBike.description}</p>
        <Button href="mailto:{$email}">Contact</Button>
        <Button type="button" mode="outline" on:click={() => dispatch('close')}>Close</Button>
    </div>
</section>