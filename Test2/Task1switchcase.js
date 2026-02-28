let Statuscode=400;
switch(Statuscode)
{
    case 200:
    console.log(Statuscode+" "+ "PASS - OK: Request successful");
    break;
    case 201:
    console.log(Statuscode+" "+ "PASS - Created: Resource created successfully");
    break;
    case 301:
    console.log(Statuscode+" "+ "WARNING - Moved Permanently: URL has changed");
    break;
    case 400:
        console.log(Statuscode+" "+ "FAIL - Bad request: check request payload");
        break;
        case 401:
        console.log(Statuscode+" "+"FAIL - Unauthorized: Check auth token");
        break; 
        case 403:
        console.log(Statuscode+" "+"FAIL - Forbidden: Insufficient permissions");
        case 404:
            console.log(Statuscode+" "+"FAIL - Not Found: Check endpoint URL");
            break;
            case 500:
                console.log(Statuscode+" "+"FAIL - Internal Server Error: Backend issue");
                break;
        default:
        console.log("UNKNOWN - Unhandled statuscode");
}