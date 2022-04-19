<script>
  import bikes from "./bikes-store.js";
  import { createEventDispatcher } from "svelte";
  import TextInput from "../UI/TextInput.svelte";
  import Button from "../UI/Button.svelte";
  import Modal from "../UI/Modal.svelte";
  import { isEmpty, isNumber } from "../helpers/validaton.js";

  export let id = null;

  let brand = "";
  let model = "";
  let discipline = "";
  let price = "";
  let stock = "";
  let description = "";
  let imageUrl = "";

  if (id) {
    const unsubscribe = bikes.subscribe(items => {
      const selectedBike = items.find(i => i.id === id);
      brand = selectedBike.brand;
      model = selectedBike.model;
      discipline = selectedBike.discipline
      price = selectedBike.price;
      stock = selectedBike.stock;
      description = selectedBike.description;
      imageUrl = selectedBike.image;
    });

    unsubscribe();
  }

  const dispatch = createEventDispatcher();

  $: brandValid = !isEmpty(brand);
  $: modelValid = !isEmpty(model);
  $: disciplineValid = !isEmpty(discipline);
  $: priceValid = !isNumber(price);
  $: stockValid = !isNumber(stock);
  $: descriptionValid = !isEmpty(description);
  $: imageUrlValid = !isEmpty(imageUrl)
  $: formIsValid = brandValid && modelValid && disciplineValid && priceValid && stockValid && descriptionValid && imageUrlValid
   
  function submitForm() {
    const bikeData = {
      brand: brand,
      model: model,
      discipline: discipline,
      price: price,
      stock: stock,
      description: description,
      image: imageUrl
    };

    if (id) {
      fetch(`http://localhost:3000/api/bikes/${id}`, {
        method: "PUT",
        body: JSON.stringify(bikeData),
        headers: { "Content-Type": "application/json" }
      })
        .then(res => {
          if (!res.ok) {
            throw new Error("An error occurred, please try again!");
          }
          bikes.updateBike(id, bikeData);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      fetch("http://localhost:3000/api/bikes/", {
        method: "POST",
        body: JSON.stringify({ ...bikeData, isFavorite: 0 }),
        headers: { "Content-Type": "application/json" }
      })
        .then(res => {
          if (!res.ok) {
            throw new Error("An error occurred, please try again!");
          }
          return res.json();
        })
        .then(data => {
          bikes.addBike({
            ...bikeData,
            isFavorite: 0,
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
    dispatch("save");
  }

  function deleteBike() {
    fetch(`http://localhost:3000/api/bikes/${id}`, {
      method: "DELETE"
    }).then(res => {
      if (!res.ok) {
        throw new Error("An error occurred, please try again!");
      }
      bikes.removeBike(id);
    })
    .catch(err => console.log(err));
    dispatch("save");
  }
  
  function cancel() {
      dispatch("cancel")
  }
</script>

<Modal title="Edit Bike Data" on:cancel>
  <form on:submit={submitForm}>
    <TextInput
      id="brand"
      label="Brand"
      valid={brandValid}
      validityMessage="Please enter brand"
      value={brand}
      on:input={(event) => (brand = event.target.value)}
    />
    <TextInput
      id="model"
      label="Model"
      valid={modelValid}
      validityMessage="Please enter model"
      value={model}
      on:input={(event) => (model = event.target.value)}
    />
    <TextInput
      id="discipline"
      label="Discipline"
      valid={disciplineValid}
      validityMessage="Please enter a valid discipline"
      value={discipline}
      on:input={(event) => (discipline = event.target.value)}
    />
    <TextInput
      id="price"
      label="Price"
      valid={priceValid}
      validityMessage="Please enter retail price"
      value={price}
      on:input={(event) => (price = event.target.value)}
    />
    <TextInput
      id="stock"
      label="Stock"
      valid={stockValid}
      validityMessage="Please enter the number of bikes in stock"
      value={stock}
      on:input={(event) => (stock = event.target.value)}
    />
    <TextInput
      id="description"
      label="Description"
      controlType="textarea"
      valid={descriptionValid}
      validityMessage="Please enter description"
      bind:value={description}
    />
    <TextInput
      id="imageUrl"
      label="Image"
      valid={imageUrlValid}
      validityMessage="Please enter a valid image URL"
      value={imageUrl}
      type="url"
      on:input={(event) => (imageUrl = event.target.value)}
    />
  </form>
  <div slot="footer">
    <Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
    <Button type="button" on:click={submitForm} disabled={!formIsValid}
      >Save</Button
    >
    {#if id}
      <Button type="button" on:click={deleteBike}>Delete</Button>
    {/if}
  </div>
</Modal>

<style>
  form {
    width: 100%;
  }
</style>
