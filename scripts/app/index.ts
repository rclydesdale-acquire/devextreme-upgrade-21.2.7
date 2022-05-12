export * from "./dx-break";

export var initialized = $.Deferred<void>();
var isInitialized = false;

/**
 * Initializes the application. Only run once.
 */
export function init() {
    if (isInitialized) {
        throw new Error("App already initialized.");
    }

    isInitialized = true;
}
