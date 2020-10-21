function dataCheck(data) {

    let errorCount = [];
    
    


    const size = data.length
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

    if (errorCount > 0) {
        var sum = errorCount.reduce(function(a, b){
            return a + b;
        }, 0);
        return console.warn(`Errors:${sum}`);
    };
};

export { dataCheck };