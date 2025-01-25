<script lang='ts'>
	import type { Snippet } from 'svelte';
	import { mode } from './runes.svelte';

	type Props = {
		/**
		 * The icon to display when dark mode is active.
		 */
		dark: Snippet;

		/**
		 * The icon to display when dark mode is inactive.
		 */
		light: Snippet;
	};

	const {
		dark,
		light,
	}: Props = $props();

</script>

<button
	aria-label='Toggle Dark Mode'
	onclick={mode.toggle}
	type='button'
>

	{#if mode.current === 'dark'}
		{@render dark()}
	{:else}
		{@render light()}
	{/if}
</button>
