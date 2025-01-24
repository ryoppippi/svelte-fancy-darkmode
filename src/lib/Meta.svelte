<script lang='ts'>
	import type { ThemeColors } from './types.js';

	type Props = {
		themeColors?: ThemeColors;
	};

	const { themeColors }: Props = $props();
</script>

<svelte:head>
{#if themeColors != null}
	<meta name='theme-color' content={themeColors.dark} media='(prefers-color-scheme: dark)' />
	<meta name='theme-color' content={themeColors.light} media='(prefers-color-scheme: light)' />
{/if}
</svelte:head>
