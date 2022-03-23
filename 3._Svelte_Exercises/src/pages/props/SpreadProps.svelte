<script>
    import Info from './Info.svelte';

    const pkg = {
        name: 'Snorri',
        age: 38,
        speed: `${30} kph`,
        website: "https://en.wikipedia.org/wiki/Iceland"
    }
</script>

<Info name={pkg.name} age={pkg.age} speed={pkg.speed} website={pkg.website}/>