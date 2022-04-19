<script>
    import { createEventDispatcher } from "svelte";
    import { scale } from "svelte/transition"
    import { flip } from "svelte/animate"
    import BikeItem from "./BikeItem.svelte";
    import BikeFilter from "./BikeFilter.svelte";
    import Button from "../UI/Button.svelte";

    export let bikes;

    const dispatch = createEventDispatcher();

    let currentFilter = 0;

    $: filteredBikes = getFilteredBikes(currentFilter, bikes)

    function setFilter(event) {
        currentFilter = event.detail;
    }
    function getFilteredBikes(filter, allBikes) {
        if(filter === 0){
            return allBikes
        }
        return allBikes.filter(bike => {
            switch (filter){
                case 1:
                return bike.isFavorite;
                case 2:
                return bike.discipline === "race"
                case 3:
                return bike.discipline === "mtb"
                case 4:
                return bike.discipline === "city"
            }
        })
    }
</script>

<style>
    #bikes {
        font-family: 'Lato';
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem
    }
    #bike-controls {
        margin: 1rem;
        display: flex;
        justify-content: space-between;
    }
    #no-bikes {
        margin: 1rem;
    }
@media (min-width: 768px) {
    #bikes {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
<section id="bike-controls">
 <BikeFilter on:select="{setFilter}" />   
 <Button on:click={ () => dispatch('add')}>New Bike</Button>
</section>
{#if filteredBikes.length === 0}
<p id="no-bikes">No bikes found. Please add available sales item.</p>
{/if}
<section id="bikes">
    {#each filteredBikes as bike (bike.id)}
    <div transition:scale animate:flip={{duration: 300}}>
      <BikeItem 
      id={bike.id}
      brand={bike.brand} 
      model={bike.model} 
      discipline={bike.discipline} 
      price={bike.price} 
      stock={bike.stock} 
      description={bike.description}
      imageUrl={bike.image}
      isFav={bike.isFavorite} 
      on:showdetails
      on:edit />
    </div>
    {/each}
</section>
