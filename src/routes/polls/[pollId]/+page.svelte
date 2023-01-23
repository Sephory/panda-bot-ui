<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#if $data.poll}
	<h1>{$data.poll.prompt}</h1>
{:else}
	<h1>Poll not found!</h1>
{/if}

{#each $data.results as result}
	<h2>{result.poll_option_text}: {result.votes}</h2>
{/each}
