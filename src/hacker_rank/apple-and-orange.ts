/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */
function countApplesAndOranges(
    s: number,
    t: number,
    a: number,
    b: number,
    apples: number[],
    oranges: number[]
): void {
    function check_position(position: number, acc: number) {
        if (position >= s && position <= t) {
            return acc += 1
        }
        return acc
    }

    const apples_position = apples
    .reduce((prev, curr) => {
        const pos = curr + a
        return check_position(pos, prev)
    }, 0)

    const oranges_position = oranges
    .reduce((prev, curr) => {
        const pos = curr + b
        return check_position(pos, prev)
    }, 0)

    console.log(apples_position)
    console.log(oranges_position)
}

const test = {
    s: 7,
    t: 10,
    a: 4,
    b: 12,
    apples: [2, 3, -4],
    oranges: [3, -2, -4]
}

countApplesAndOranges(
    test.s,
    test.t,
    test.a,
    test.b,
    test.apples,
    test.oranges
)
