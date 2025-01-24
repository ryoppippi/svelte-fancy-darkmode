<script lang='ts'>
	import type { Snippet } from 'svelte';
	import { darkMode } from './runes.svelte';

	type Props = {
		/**
		 * The icon to display when dark mode is active.
		 */
		darkIcon: Snippet;

		/**
		 * The icon to display when dark mode is inactive.
		 */
		lightIcon: Snippet;
	};

	const {
		darkIcon,
		lightIcon,
	}: Props = $props();

</script>

<button
	aria-label='Toggle Dark Mode'
	onclick={darkMode.toggle}
	type='button'
>

	{#if darkMode.current === 'dark'}
		{@render darkIcon()}
	{:else}
		{@render lightIcon()}
	{/if}
</button>
