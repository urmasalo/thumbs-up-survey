import calculatePopularity from "./calculatePopularity";

describe('calculatePopularity', () => {
  it('Should return 100 when likes are greater than 0 and dislikes are 0', () => {
    // Arrange
    const likes = 1;
    const dislikes = 0;

    // Act
    const popularity = calculatePopularity(likes, dislikes);

    // Assert
    expect(popularity).toBe(100);
  })

  it('Should return null when likes or dislikes are negatives', () => {
    // Arrange
    const likes = -1;
    const dislikes = -1;

    // Act
    const popularity = calculatePopularity(likes, dislikes);

    // Assert
    expect(popularity).toBe(null);
  })

  it('Should return 0 when likes and dislikes are 0', () => {
    // Arrange
    const likes = 0;
    const dislikes = 0;

    // Act
    const popularity = calculatePopularity(likes, dislikes);

    // Assert
    expect(popularity).toBe(0);
  })
  it('Should return an positive integer number', () => {
    // Arrange
    const likes = 1000;
    const dislikes = 34;

    // Act
    const popularity = calculatePopularity(likes, dislikes);

    // Assert
    expect(popularity).toBeGreaterThan(0);
  })
});
