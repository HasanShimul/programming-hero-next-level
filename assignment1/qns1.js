function deccriveValue( value){
    let val = "truthy"
    if(value == "" ||
        value == 0 ||
        value == NaN ||
        value == undefined ||
        value == false ||
        value == null
    ){
        val = "falsy"
    }
   console.log("\""+typeof value + " | "+val + "\"" )
}

deccriveValue(undefined)
  