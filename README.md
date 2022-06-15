# bogosort

Don't use it, please.

## Usage 👍

```javascript
import bogosort from "@rafif0s/bogosort";

/**
 * @see {@link https://stackoverflow.com/a/34966558}
 */
const unsortedArr = Array.from({ length: 5 }, () => Math.floor(Math.random() * 9));
console.debug(unsortedArr); // [ 1, 7, 2, 1, 8 ]

const sortedArr = bogosort(unsortedArr);
console.debug(sortedArr); // [ 1, 1, 2, 7, 8 ]
```

## Notice

This piece of software is licensed under the [Unlicense](https://unlicense.org) and is loosely based
on the [implementation](https://rosettacode.org/wiki/Sorting_algorithms/Bogosort#JavaScript)
available at [Rosetta Code](https://rosettacode.org), which is licensed under the
[GNU Free Documentation License 1.2](https://www.gnu.org/licenses/old-licenses/fdl-1.2.html).
