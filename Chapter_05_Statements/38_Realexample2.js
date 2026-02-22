let isloggin=false;
let userrole="student";
if(isloggin)

{
    if(userrole==="admin")
    {
        console.log("You have all the access");
    }
    else if(userrole==="editor")
    {
        console.log("You have access to edit the content");
    }
    else if(userrole==="viewer")
    {
        console.log("You have access to view the content");
    }
    else{
        console.log("No idea which role you have");
    }


}
else
{

    console.log("You are not logged in");
}