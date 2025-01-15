export interface Reviewer {
    displayName: string
  }
  
  export interface Review {
    reviewer: Reviewer
    starRating: 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE'
    comment: string
    createTime: string
    updateTime: string
    name: string
  }
  
  export interface ReviewsData {
    reviews: Review[]
  }
  
  