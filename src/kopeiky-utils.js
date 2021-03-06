import { createKopeiky, Kopeiky } from "./kopeiky";

export function validateKopeiky(num) {
  if (typeof num !== "number" && !(num instanceof Kopeiky)) {
    throw new TypeError("Incoming number is not a Kopeiky|number");
  }
}

/**
 *
 * @param {Kopeiky} ctx
 * @param {Kopeiky|num} num
 */
export function prepareOperationNumber(ctx, num) {
  validateKopeiky(num);

  let numKopeiky = num;

  if (num instanceof Kopeiky && ctx._rank !== num._rank) {
    throw new TypeError("Incoming rank Kopeiky not equals");
  }

  if (typeof num === "number") {
    numKopeiky = createKopeiky(num, ctx._options);
  }

  return numKopeiky;
}
