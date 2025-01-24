<script lang='ts'>
	import type { Snippet } from 'svelte';
	import { darkMode } from './runes.svelte';

	type Props = {
		darkIcon: Snippet;
		lightIcon: Snippet;
	};

	const {
		darkIcon,
		lightIcon,
	}: Props = $props();

</script>

<button
	aria-label='Toggle Dark Mode'
	onclick={darkMode.toggleDark}
	type='button'
>

	{#if darkMode.isDark}
		{@render darkIcon()}
	{:else}
		{@render lightIcon()}
	{/if}
</button>
