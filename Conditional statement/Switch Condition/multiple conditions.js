let a = 'Persian';
let type;
switch (a)
    {
        case 'Persian':
        case 'Siamese':
        case 'Sphynx':
        case 'British Shorthair':
            {
                type = 'is a Cat'
                break;
            }
        case 'Labrador Retriever':
        case 'German Shepherd':
        case 'Golden Retriever':
        case 'French Bulldog':
            {
                type = 'is a Dog'
                break;
            }
        default:
            {
                type = 'Cannot be Not Found'
            }
    }
console.log(`The given Breed ${type}`)