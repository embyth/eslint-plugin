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
