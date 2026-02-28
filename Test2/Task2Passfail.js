Testresult=["Pass", "Pass", "Pass", "Pass", "Pass", "Pass", "Pass", "Pass", "Fail","Fail", "Fail", 
     "Fail","Skip", "Skip"
]
let PassCount=0;
let FailCount=0;
let SkipCount=0;
for(let i=0;i<=Testresult.length-1;i++)
{
    if(Testresult[i]=="Pass"
    )   
    {
        PassCount++;
    }
    else if(Testresult[i]=="Fail")
    {
        FailCount++;
    }
    else if(Testresult[i]=="Skip")
    {
        SkipCount++;

    }
    else{
        console.log("Invalid test result");

    }
    
}
console.log("Toatl Tests: "+Testresult.length);
console.log("Pass: "+PassCount);
console.log("Fail: "+FailCount);
console.log("Skip: "+SkipCount);
console.log("Pass Rate: "+(PassCount/Testresult.length*100)+"%");
if(PassCount==Testresult.length)
{
    console.log("all passed → ready for release");
}
else if(FailCount<=2)
{
    console.log("review")
}
else if(FailCount>2)
{
    console.log("blocked");
}
else{
    console.log("need to rework");
}
