export const selectRandomArrayElement = <T>(array: T[]): T => {
    const length = array.length;
    const randomIndex = Math.floor(Math.random() * length);
    return array[randomIndex];
};
