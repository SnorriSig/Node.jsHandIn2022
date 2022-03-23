<script>
	import Hello_World from "./pages/introduction/Hello_World.svelte"
	import Dynamic_Attributes from "./pages/introduction/Dynamic_Attributes.svelte";
	import Styling from "./pages/introduction/Styling.svelte";
	import Nested from "./pages/introduction/Nested.svelte";
	import New_Svelte from "./pages/introduction/New_Svelte.svelte"
	import Reactivity from "./pages/reactivity/Declarations.svelte";
import Assignments from "./pages/reactivity/Assignments.svelte";
import Statments from "./pages/reactivity/Statments.svelte";
import UpdatingArraysAndObjects from "./pages/reactivity/UpdatingArraysAndObjects.svelte";
import DeclaringProps from "./pages/props/DeclaringProps.svelte";
import DefaultValues from "./pages/props/DefaultValues.svelte";
import SpreadProps from "./pages/props/SpreadProps.svelte";
import IfBlocks from "./pages/logicSvelte/IfBlocks.svelte";
import ElseBlocks from "./pages/logicSvelte/ElseBlocks.svelte";
import ElseIfBlocks from "./pages/logicSvelte/ElseIfBlocks.svelte";
import EachBlocks from "./pages/logicSvelte/EachBlocks.svelte";
import KeyedEachBlocks from "./pages/logicSvelte/KeyedEachBlocks.svelte";
import InlineHandlers from "./pages/eventsDOM/InlineHandlers.svelte";
import EventModifiers from "./pages/eventsDOM/EventModifiers.svelte";
import ComponentEvent from "./pages/eventsDOM/ComponentEvent.svelte";
import HtmlTags from "./pages/introduction/HTMLTags.svelte";

	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<h1>Svelte Excercises</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<h2>Introduction exercises</h2>
	<Hello_World />

	<h3>Dynamic attributes</h3>
	<Dynamic_Attributes />

	<h3>Styling</h3>
	<Styling />

	<h3>Nested components</h3>
	<script>
		import Nested from "./pages/introduction/Nested.svelte";
	</script>
	<p>This paragraph comes from App.svelte</p>
	<Nested />
	
	<HtmlTags />

	<h3>New Svelte Project</h3>
	<New_Svelte />

	<h2>Reactivity</h2>
	<h3>Assignments</h3>
	<Assignments />
	<h3>Reactivity</h3>
	<Reactivity />
	<h3>Statments</h3>
	<Statments />
	<h3>Updating arrays and objects</h3>
	<UpdatingArraysAndObjects />
	<h2>Props</h2>
	<h3>Declaring props</h3>
	<DeclaringProps />
	<h3>Default values</h3>
	<DefaultValues />

	<h3>SpreadProps</h3>
	<SpreadProps />
	<!-- create json object in app and get info from there to load Info.svelte -->

	<h2>Logic</h2>
	<h3>If blocks</h3>
	<IfBlocks />
	<h3>Else blocks</h3>
	<ElseBlocks />
	<h3>Else-if blocks</h3>
	<ElseIfBlocks />
	<h3>Each blocks</h3>
	<EachBlocks />
	<h3>Keyed each blocks</h3>
	<KeyedEachBlocks />
	<h2>Events</h2>

	<!-- <h3>Dom Events</h3>
	<DomEvents /> -->

	<h3>Inline handlers</h3>
	<InlineHandlers />
	<h3>Event modifiers</h3>
	<EventModifiers />
	<h3>Component events</h3>
	<ComponentEvent />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>