function getDayType(day){
    let daysmall = day.toLowerCase()

    switch (daysmall){
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
        console.log("\"Working Day\"")
        break
    case "friday":
    case "saturday":
        console.log("\"Weekend\"")
        break

    default:
        console.log("\"Invalid Day\"")
    }

}
let day = "Saturday"
getDayType(day)