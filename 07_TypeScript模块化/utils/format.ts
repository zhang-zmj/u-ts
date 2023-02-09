export namespace price {
  export function fromat(price: string) {
    return '¥' + price
  }

  export const name = 'price'
}

export namespace date {
  export function format(dateString: string) {
    return '2023 - 2 - 8'
  }

  const name = 'date'
}
