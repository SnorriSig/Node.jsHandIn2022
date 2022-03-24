<script>
    import faker from '@faker-js/faker';
    import TableHead from './TableHead.svelte';
    import TableRow from './TableRow.svelte';

    let createdContacts = [];
    for (let i = 0; i < 10; i++) {
        createdContacts = [
            ...createdContacts,
            {
            name: faker.name.findName(),
            email: faker.internet.email(),
            photo: faker.image.avatar()
        }];
    }

</script>
<style>
	table {
  	        border: 3px solid;
		    margin-left: auto;
  	        margin-right: auto;
            border-color: red;
	}
</style>

<table>
<TableHead />

{#each createdContacts as contact}
<TableRow name={contact.name} email={contact.email} photo={contact.photo}/>
{/each}
</table>