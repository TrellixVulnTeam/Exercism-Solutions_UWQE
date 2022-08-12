// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let sameCards = 0
  stack.forEach((number) => {
    if(number === card){ sameCards++ }
  })
  return sameCards
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  const rest = type ? 0 : 1
  let count = 0
  for (const card of stack) {
    if (card % 2 === rest) {
      count += 1
    }
  }
  return count
}