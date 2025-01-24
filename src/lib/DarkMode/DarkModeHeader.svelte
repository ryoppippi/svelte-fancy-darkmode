<script lang='ts'>
	type Props = {
		darkThemeColor?: string;
		lightThemeColor?: string;
	};

	const {
		darkThemeColor,
		lightThemeColor,
	}: Props = $props();
</script>
<svelte:head>
	<script>
		if ( localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		document.documentElement.classList.add('dark')
		} else {
		document.documentElement.classList.remove('dark')
		}
	</script>
	{#if darkThemeColor != null}
		<meta name='theme-color' content={darkThemeColor} media='(prefers-color-scheme: dark)' />
	{/if}
	{#if lightThemeColor != null}
		<meta name='theme-color' content={lightThemeColor} media='(prefers-color-scheme: light)' />
	{/if}
</svelte:head>

<style>
:global{
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
  }
  ::view-transition-old(root) {
    z-index: 1;
  }
  ::view-transition-new(root) {
    z-index: 9999;
  }
  .dark::view-transition-old(root) {
    z-index: 9999;
  }
  .dark::view-transition-new(root) {
    z-index: 1;
  }
}
</style>
