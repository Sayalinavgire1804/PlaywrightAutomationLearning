let MAX_ATTEMPTS = 5;
let attempts = 0;
let success = false;
do
{
    attempts++;
    let randomvalue=Math.random();
    //console.log(randomvalue);
    
    if(randomvalue>0.6)
    {
        success = true;
        console.log(`Attempt ${attempts}: ✅ SUCCESS (Response 200 OK) API call PASSED after ${attempts} attempts`);

    }
    else
    {
        console.log(`Attempt ${attempts}:❌ FAILED (Timeout/Error)`)
    }
}
    while(attempts<MAX_ATTEMPTS && !success)
    
        if(success)
        {
            console.log(`Api call is successful after ${attempts} attempts`);
        }
        else
        {
            console.log(`Api call failed after ${attempts} attempts`);
        }

    
