<script lang='ts'>

	type Props = {
		restoreThemeOnLoadPage?: boolean;
	};

	const { restoreThemeOnLoadPage = true }: Props = $props();

</script>

<svelte:head>
	{#if restoreThemeOnLoadPage}
		<script>
			if ( localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			document.documentElement.classList.add('dark')
			} else {
			document.documentElement.classList.remove('dark')
			}
		</script>
	{/if}
</svelte:head>
