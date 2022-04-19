<script>
  import bikes from "./Bikes/bikes-store.js";
  import Header from "./UI/Header.svelte";
  import BikesGrid from "./Bikes/BikesGrid.svelte";
  import { onMount } from "svelte";
  import EditBike from "./Bikes/EditBike.svelte";
  import BikeDetail from "./Bikes/BikeDetail.svelte"
  import LoadingSpinner from "./UI/LoadingSpinner.svelte"
  import Error from "./UI/Error.svelte"

  let editMode;
  let editedId;
  let page = "overview";
  let pageData = {};
  let isLoading = true;
  let error;

  onMount(async () => {
    try{
    const response = await fetch("http://localhost:3000/api/bikes/");

      let loadedBikes = [];
      const { data } = await response.json();
      
      loadedBikes = data;
      setTimeout(() => {
        isLoading = false;
        bikes.setBikes(loadedBikes.reverse());
      },1000)
      
      }catch(err){
        error = err;
        isLoading = false;
        console.log(err);
      }
  });

  function savedBike(event) {
    editMode = null;
    editedId = null;
  }
  function cancelEdit() {
    editMode = null;
    editedId = null;
  }
  function showDetails(event) {
    page = "details";
    pageData.id = event.detail;
  }
  function closeDetails() {
    page = "overview";
    pageData = {};
  }
  function startEdit(event) {
    editMode = "edit";
    editedId = event.detail;
  }
  function clearError() {
    error = null;
  }
</script>

<style>
  main {
    margin-top: 5rem;
  }
</style>

{#if error}
  <Error message={error.message} on:cancel={clearError} />
{/if}

<Header />

<main>
  {#if page === "overview"}
    {#if editMode === "edit"}
      <EditBike id={editedId} on:save={savedBike} on:cancel={cancelEdit} />
    {/if}
    {#if isLoading}
      <LoadingSpinner />
    {:else}
  <BikesGrid 
  bikes={$bikes} 
  on:showdetails={showDetails} 
  on:edit={startEdit} 
  on:add="{() => {
    editMode = 'edit';
    }}" />
    {/if}
  {:else}
  <BikeDetail id={pageData.id} on:close={closeDetails} />
  {/if}
</main>