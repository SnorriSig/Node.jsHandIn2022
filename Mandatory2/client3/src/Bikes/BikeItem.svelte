<script>
  import { createEventDispatcher } from "svelte";
  import bikes from "./bikes-store"
  import Button from "../UI/Button.svelte";
  import Badge from "../UI/Badge.svelte";

  export let id;
  export let brand;
  export let model;
  export let discipline;
  export let price;
  export let stock;
  export let description;
  export let imageUrl;
  export let isFav;

  let isLoading = false; 

  const dispatch = createEventDispatcher();

  function toggleFavorite() {
    isLoading = true;
    fetch(`http://localhost:3000/api/bikes/${id}`, {       
      method: "PATCH",
      body: JSON.stringify({isFavorite: !isFav}),
      headers: { "Content-Type": "application/json" }
      }).then(res => {
        if (!res.ok) {
            throw new Error("An error occurred, please try again!");
          }
          isLoading = false;
          bikes.toggleFavorite(id);
      })
      .catch(err => {
        isLoading = false;
        console.log(err)
      });
  }
</script>

<style>
  article {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background: white;
    margin: 1rem;
  }
  header,
  .content,
  footer {
    padding: 1rem;
  }
  .image {
    width: 100%;
    height: 34rem;
  }
  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h1 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    font-family: "Roboto Slab", sans-serif;
  }
  h2 {
    font-size: 1rem;
    color: #808080;
    margin: 0.5rem 0;
  }
  p {
    font-size: 1.25rem;
    margin: 0;
  }
  p::first-letter {
    text-transform: uppercase;
  }
  div {
    text-align: left;
  }
  .content {
    height: 11rem;
  }
</style>

<article>
  <header>
    <h1>
      {brand}
      {#if isFav}
        <Badge>FAVORITE</Badge>
      {/if}
    </h1>
    <h2>{model}</h2>
  </header>
  <div class="image">
    <img src={imageUrl} alt={model} />
  </div>
  <div class="content">
    <p>{discipline} bike</p>
    <p>${price}</p>
    <p>Stock: {stock}</p>
    <br />
    <p>{description}</p>
  </div>
  <footer>
    <Button mode="outline" type="button" on:click={() => dispatch('edit', id)}>
      Edit
    </Button>
    {#if isLoading}
      <span>Changing...</span>
    {:else}
    <Button
      mode="outline"
      color={isFav ? null : 'success'}
      type="button"
      on:click={toggleFavorite}>
      {isFav ? 'Unfavorite' : 'Favorite'}
    </Button>
    <Button type="button" on:click={() => dispatch('showdetails', id)}>
      Show Details
    </Button>
    {/if}
  </footer>
</article>