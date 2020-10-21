function dataCheck(data) {

    let badArray = [];
    
    const size = data.length;
    
    for (let i = 0; i < size; i++) {
        let errorCount = 0;
        const service = data[i];
        if (typeof service.icon !== 'string') {
            errorCount++;
            console.warn('kortelės icon privalo būti string');
        };
        if (typeof service.heading !== 'string') {
            errorCount++;
            console.warn('kortelės heading privalo būti string');
        };
        if (typeof service.text !== 'string') {
            errorCount++;
            console.warn('kortelės text privalo būti string')
        };

        if (errorCount > 0) {
            badArray.push(service.id);
        }
    };
    
    return badArray;
};

export { dataCheck };

/*
let iconArray = [];

for (let i = 0; i < size; i++) {
    const service = data[i];
    let firstWord = service.icon.split(" ")[0];
    iconArray.push(firstWord);
};

const arraySize = iconArray.length;
for (let i = 0; i < arraySize; i++) {
    if (iconArray[i] !== 'fa') {
        errorCount.push(1);
        console.warn('nurodyta netinkama font awesome versija ir dėl to galimai nerodoma(-os) piktogramos. Naudoti tik "fa" prefix');
    }
};

*/