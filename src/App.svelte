<script>
	import Todos from './Todos.svelte';
	
	export let name;
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css">
</svelte:head>

<style>
	main {
	  margin: 20px;
	}

	section {
        background: rgb(235, 235, 235);
        padding: 20px;
    }
</style>

<main class="content">
	<h1>{name}</h1>
	<section>
		<Todos />
	</section>
</main>