/** Pleasant Cannabis drops the CIGARETTES card when the feed tv flag is off.
 *  It does not retitle that slot as wraps. */
export function tvCigaretteCards<T extends { id: string }>(cards: readonly T[], show: boolean): T[] {
  if (show) return [...cards];
  return cards.filter((card) => card.id !== "CIGARETTES");
}
