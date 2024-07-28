function grade(score)
    {
        switch (true)
        {
            case score >= 90:
                console.log("Grade A");
            break;
            case score >= 80:
                console.log("Grade B");
            break;
            case score >= 70:
                console.log("Grade C");
            break;
            case score >= 60:
                console.log("Grade D");
            break;
            default:
                console.log("Grade F");
        }
    } 
grade(98)
grade(87)
grade(76)
grade(65)
grade(20)