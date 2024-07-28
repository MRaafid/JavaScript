function check(a)
{
    switch (a)
        {
            case 1:
                console.log("TRUE")
                console.log("")
            break;
            case 0:
                console.log("FALSE")
                console.log("")
            break;
            default:
                console.log("ERROR")
                console.log("Number should be '1' or '0'")
                console.log("")
        }
}

check(0)
check(1)
check(8)