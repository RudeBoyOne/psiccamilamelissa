export interface Article {
  title: string
  pdf: string
  img: string
  description: string
}

export interface ArticlesMap {
  [id: string]: Article
}
