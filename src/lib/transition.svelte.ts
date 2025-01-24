import { BROWSER as browser } from 'esm-env';
import { prefersReducedMotion } from 'svelte/motion';

/**
 * check if the browser supports appearance transition
 */
export class CheckViewTransitions {
	#isViewTransitionAvailable = $state(false);

	constructor() {
		if (!browser) {
			return;
		}

		this.#isViewTransitionAvailable = document.startViewTransition != null;
	}

	get current() {
		return !prefersReducedMotion.current && this.#isViewTransitionAvailable;
	}
}

export const prefersUseViewTransitions = new CheckViewTransitions();
