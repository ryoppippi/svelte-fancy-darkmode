import { BROWSER as browser } from 'esm-env';
import { CheckTransitions } from './transition.svelte.js';
import { withoutTransition } from './without-transition.js';

/**
 * Class for toggling dark mode
 */
export class DarkMode {
	_isDark = $state(true);
	_mode: 'dark' | 'light' = $derived(this._isDark ? 'dark' : 'light');
	ct = new CheckTransitions();

	constructor() {
		if (browser) {
			this._isDark = document.documentElement.classList.contains('dark');
		}
	}

	/**
	 * Get the current mode
	 */
	get current() {
		return this._mode;
	}

	/**
	 * Toggle the mode
	 */
	private _toggleMode = () => {
		if (this._isDark) {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
		else {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		}
		this._isDark = !this._isDark;
	};

	/**
	 * Credit to [@hooray](https://github.com/hooray)
	 * @see https://github.com/vuejs/vitepress/pull/2347
	 */
	toggle = (event: MouseEvent) => {
		if (!this.ct?.isAppearanceTransition) {
			this._toggleMode();
			return;
		}

		const x = event.clientX;
		const y = event.clientY;
		const endRadius = Math.hypot(
			Math.max(x, innerWidth - x),
			Math.max(y, innerHeight - y),
		);

		const transition = document.startViewTransition(() => {
			this._toggleMode();
		});

		const transitionAction = () => {
			const clipPath = [
				`circle(0px at ${x}px ${y}px)`,
				`circle(${endRadius}px at ${x}px ${y}px)`,
			];
			document.documentElement.animate(
				{
					clipPath: this._isDark
						? [...clipPath].reverse()
						: clipPath,
				},
				{
					duration: 400,
					easing: 'ease-out',
					pseudoElement: this._isDark
						? '::view-transition-old(root)'
						: '::view-transition-new(root)',
				},
			);
		};

		// eslint-disable-next-line ts/no-floating-promises
		transition.ready.then(() => withoutTransition(transitionAction));
	};
}

/**
 * rune for toggling and checking dark mode
 *
 * @example
 * ```svelte
 * <script>
 *   import { darkMode } from '$lib/runes.svelte';
 * </script>
 *
 * <button
 *  onclick={darkMode.toggle}
 *  aria-label="Toggle Dark Mode"
 *  type="button"
 * >
 * </button>
 *
 * {#if $darkMode.current === 'dark'}
 *   <p>Dark Mode</p>
 * {:else}
 *   <p>Light Mode</p>
 * {/if}
 * ```
 */
export const darkMode = new DarkMode();
