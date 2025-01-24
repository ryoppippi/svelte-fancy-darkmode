<script lang='ts'>
	import type { ThemeColors } from './types.js';
	import HeaderScript from './HeaderScript.svelte';
	import Meta from './Meta.svelte';

	type Props = {
		/**
		 * The color of the dark theme.
		 */
		themeColors?: ThemeColors;

		/**
		 * Whether to restore the theme on page load.
		 */
		restoreThemeOnLoadPage?: boolean;
	};

	const {
		themeColors,
		restoreThemeOnLoadPage = true,
	}: Props = $props();
</script>

<HeaderScript {restoreThemeOnLoadPage} />
<Meta {themeColors} />

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
