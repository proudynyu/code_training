const tests = [
    "07:05:45PM",
    "07:05:45AM",
    "12:01:00AM",
    "12:01:00PM",
]

function resolve(time: string) {
    const amOrPm = time.substring(time.length - 2)
    const t = time.slice(0, time.length - 2)
    const [hour, ...rest] = t.split(":")

    if (amOrPm === "PM") {
        if (hour === "12") {
            return [hour, ...rest].join(":")
        }
        const newHour = String(Number(hour) + 12)
        return [newHour, ...rest].join(":")
    }

    if (hour === "12") {
        const newHour = "00"
        return [newHour, ...rest].join(":")
    }

    return t
}

tests.forEach(test => {
    console.log(resolve(test))
})

