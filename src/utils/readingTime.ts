/**
 * Calculates the estimated reading time for a given text or array of strings.
 * @param content - The text or array of strings to calculate reading time for.
 * @param wordsPerMinute - Average reading speed (default is 200).
 * @returns Estimated reading time in minutes (at least 1).
 */
export function calculateReadingTime(content: string | string[] | (string | string[])[], wordsPerMinute = 200): number {
  const words = Array.isArray(content) 
    ? content.flat().join(' ').split(/\s+/).length 
    : content.split(/\s+/).length;
  
  const minutes = Math.ceil(words / wordsPerMinute);
  return Math.max(1, minutes);
}
