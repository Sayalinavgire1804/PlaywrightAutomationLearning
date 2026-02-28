
let Status="";
let Action="";
let isPresent=true;
let isDisplaeyed=true;
let isEnabled=true;
if(isPresent===true && isDisplaeyed===true && isEnabled===true)
    {
        
        Status="READY ";
        Action="Safe to click/type.";



}
if(isPresent===true && isDisplaeyed===true && isEnabled===false)
{
    Status="DISABLED";
    Action="Do not interact. Investigate why element is disabled.";
}
if(isPresent===true && isDisplaeyed===false)
{
    Status="Hidden";
    Action="Wait for element to become visible.";
}

if(isPresent===false)
{
    Status="Not Found";
    Action="Fail test. Check locator or page load.";
}
let Severity=(isPresent===false)?"CRITICAL":(isDisplaeyed===false || isEnabled===false)?"Warning":"OK";
console.log("Status: "+Status+" " +"Severity: "+Severity+" "+"Action: "+Action);