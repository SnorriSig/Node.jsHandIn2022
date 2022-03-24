<script>
import PeopleTable from "./components/PeopleTable.svelte";
	export let name;
</script>

<main>
	<h1>Table in Svelte of random people!</h1>
	<PeopleTable />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: rgb(12, 87, 12);
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}


</style>