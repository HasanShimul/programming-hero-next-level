function validateUsername(name) {
    let namel = name.toLowerCase()
    if (namel.length < 4) {
        console.log("\"Too Short\"")
        return
    }
    if (namel.includes(" ")) {
        console.log("\"No Space Allowed\"")
        return
    }
    if(namel.includes("admin")){
        console.log("\"Reserved Word\"")
        return
    }
    console.log("Available")
}


let namec = "rah"
validateUsername(namec)