<script>
    import { fade, fly } from 'svelte/transition';

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    
    function remove() {
		dispatch('remove', { _id });
	}

	function toggleStatus() {
        let newStatus = !done;
		dispatch('toggle', {
            _id,
            newStatus
        });
    }
    

    export let _id; // document ID
    export let name;
    export let done;
</script>

<style>
    .is-complete {
        text-decoration: line-through;
        color: green;
    }

    li {
        display: flex;
        font-size: 1.2em;
        font-weight: bold;
    }

    span {
        margin-right: auto;
    }
</style>


<li in:fly="{{ x: 900, duration: 1000 }}" out:fade>

{#if done}
    <span class="is-complete">{ name }</span>
    <button on:click={toggleStatus}> ✔️ </button>
{:else}
    <span>{ name }</span>
    <button on:click={toggleStatus}> ❌ </button>
{/if}

<button on:click={remove}> 🗑️ </button>

</li>