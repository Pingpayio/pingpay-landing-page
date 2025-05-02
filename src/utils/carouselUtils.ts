
/**
 * Fisher-Yates shuffle algorithm for randomizing array elements
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Simple debounce function
 */
export function debounce(func: Function, wait: number) {
  let timeout: number | null = null;
  return function(...args: any[]) {
    if (timeout !== null) {
      window.clearTimeout(timeout);
    }
    timeout = window.setTimeout(() => {
      func.apply(null, args);
    }, wait);
  };
}

/**
 * Handle visibility change for tab switching
 */
export function handleVisibilityChange(isHidden: boolean) {
  const scrollElements = document.querySelectorAll('.continuous-scroll');
  
  scrollElements.forEach(el => {
    if (isHidden) {
      (el as HTMLElement).style.animationPlayState = 'paused';
    } else {
      (el as HTMLElement).style.animationPlayState = 'running';
    }
  });
}
