/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */
function gradingStudents(grades: number[]): number[] {
    const results: number[] = []
    for (let i = 0; i < grades.length; i++) {
        const item = grades[i]
        if (item < 38) {
            results.push(item)
            continue
        }
        const rest = item % 5
        const next = item + (rest !== 0 ? (5 - rest) : rest)
        const diff = next - item

        if (diff < 3) {
            results.push(next)
            continue
        }
        results.push(item)
    }
    return results
}

const test_case = [ 73, 67, 38, 33 ]

console.log(gradingStudents(test_case))
