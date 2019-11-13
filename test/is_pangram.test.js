const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';

    // Act
    const result = isPangram(text)

    // Assert
    expect(result).toEqual(true)
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = "abcdefghijklmnopqrstuvwxyz"

    // Act
    const result = isPangram(text)

    // Assert
    expect(result).toEqual(true)

  });

  test("missing character 'x'", () => {
    // Arrange
    const text = "abcdefghijklmnopqrstuvwyz"

    // Act
    const result = isPangram(text)

    // Assert
    expect(result).toEqual(false)
  });

  test('empty sentence', () => {
    // Arrange
    const text = ''

    // Act
    const result = isPangram(text)

    // Assert
    expect(result).toEqual(false)

  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange
    const text = 'the_quick_brown_fox_jumps_over the_lazy_dog'

    // Act
    const result = isPangram(text)

    // Assert
    expect(result).toEqual(true)

  });

  test('pangram with numbers', () => {
    // Arrange
    const text = '123456789'

    // Act
    const result = isPangram(text)

    // Assert
    expect(result).toEqual(false)

  });

  test('pangram with 1 character', () => {
    // Arrange
    const text = 'a'

    // Act
    const result = isPangram(text)

    // Assert
    expect(result).toEqual(false)
  });


});
