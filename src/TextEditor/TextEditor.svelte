<script lang="ts">
	import { quill } from 'svelte-quill'
	
	let options = { placeholder: "Write something from outside...", }
	
	let content = { html: '', text: ''};
	
</script>

<svelte:head>
	<link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
</svelte:head>

<main>
  <div class="editor" use:quill={options} on:text-change={e => content = e.detail}/>
	
	<br />
	Resulting HTML:
		
	{@html content.html}
</main>