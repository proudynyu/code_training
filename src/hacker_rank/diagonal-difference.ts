const initial_test = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]

function resolve(arr: number[][]) {
    let left = 0;
    let right = 0;

    let p1 = 0;
    let p2 = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        const lp = arr[i][p1]
        const rp = arr[i][p2]
        left += lp
        right += rp

        p1 += 1
        p2 -= 1
    }

    return Math.abs(right - left)
}

const result = resolve(initial_test)
console.log({ result })
