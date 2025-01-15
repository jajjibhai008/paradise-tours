export function getRatingNumber(rating: string): number {
    const ratings: { [key: string]: number } = {
      'ONE': 1,
      'TWO': 2,
      'THREE': 3,
      'FOUR': 4,
      'FIVE': 5
    }
    return ratings[rating] || 0
  }
  
  