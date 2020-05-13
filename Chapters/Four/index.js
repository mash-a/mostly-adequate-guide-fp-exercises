/**
 * Refactor to remove all arguments by partially applying the function.
 * words :: String -> [String]
 * const words = str => split(' ', str);
 */
const words = split(' ');

/**
 * filterQs :: [String] -> [String]
 * const filterQs = xs => filter(x => x.match(/q/i), xs);
 */
const filterQs = filter(match(/q/i));

/**
 * Refactor `max` to not reference any arguments using the helper function `keepHighest`.
 * const keepHighest = (x, y) => (x >= y ? x : y);
 * max :: [Number] -> Number
 * const max = xs => reduce((acc, x) => (x >= acc ? x : acc), -Infinity, xs);
 */
const max = reduce(keepHighest, -Infinity);