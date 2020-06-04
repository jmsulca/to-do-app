<script>
  import TodoItem from './TodoItem.svelte';
  import { fetchTodos, postTodo, updateTodo, deleteTodo } from './todos-api.js';
  import { onMount } from 'svelte';

  // Form Text
  let text = 'some task';
  let id = 0;
  // Query requires an index, see screenshot below

  let todos = [];

  /*onMount( async () => {
    await loadTodos();
  });*/

  async function loadTodos() {
    const response = await fetchTodos();
    todos = response.data;
  }

  async function add() {
    const payload = {name: text, done: false};
    const res = await postTodo(payload);
    text = '';
    await loadTodos();
  }

  async function updateStatus(event) {
    const { _id, newStatus } = event.detail;
    await updateTodo(_id, {done: newStatus});
    await loadTodos();
  }

  async function removeItem(event) {
    const { _id } = event.detail;
    await deleteTodo(_id);
  }
</script>

<style>
  input {
    display: block
  }
</style>

<ul>
  {#await loadTodos()}
    <p>...waiting</p>
  {:then}
    {#each todos as todo}
      <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} />
    {/each}
  {:catch error}
		<p>An error occurred!</p>
	{/await}
</ul>

<input bind:value={text} />

<hr>

<p>Your task: <strong>{ text }</strong></p>
<button class="button is-info" on:click={add}>Add Task</button>