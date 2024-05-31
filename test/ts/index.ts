/**
 * Shuffles the elements of an array in place.
 *
 * @param array - The array to be shuffled.
 * @returns The shuffled array.
 * @template TData - The type of elements in the array.
 */
export const shuffleArray = <TData = unknown>(array: TData[]): TData[] => {
  const shuffled: TData[] = [...array];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const temporary = shuffled[index];
    shuffled[index] = shuffled[randomIndex];
    shuffled[randomIndex] = temporary;
  }

  return shuffled;
};
