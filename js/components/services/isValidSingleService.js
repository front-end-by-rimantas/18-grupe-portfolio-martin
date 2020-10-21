function dataCheck(data) {

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
            console.warn('nurodyta netinkama font awesome versija ir dėl to galimai nerodoma(-os) piktogramos. Naudoti tik "fa" prefix');
        }
    };
};

export { dataCheck };