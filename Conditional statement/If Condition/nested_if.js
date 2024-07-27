function grade(English, Maths, Physics)
    {
        let total = English+Maths+Physics
        let average = total/3
        let avg =parseFloat(average.toFixed(2))
        console.log(`ENGLISH:     ${English}`)
        console.log(`MATHEMATICS: ${Maths}`)
        console.log(`PHYSICS:     ${Physics}`)
        console.log(`TOTAL MARKS: ${total}`)
        console.log(`PERCENTAGE:  ${avg}%`)
        if(English<35 || Maths<35 || Physics<35)
            {
                console.log(`GRADE:       Fail`)
            }
        else
            {
                if(avg<45)
                    {
                        console.log(`GRADE:       Pass`)
                    }
                else if(avg<60)
                    {
                        console.log(`GRADE:       Second Class`)
                    }
                else if(avg<85)
                    {
                        console.log(`GRADE:       First Class`)
                    }
                else 
                    {
                        console.log(`GRADE:       Distinction`)
                    }
            }
        console.log("")
    }

grade(75,20,37)
grade(45,35,37)
grade(65,50,40)
grade(90,75,62)
grade(98,100,97)