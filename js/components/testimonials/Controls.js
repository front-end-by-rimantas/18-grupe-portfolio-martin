class Controls {
    constructor(params){
        this.parentDOM = params.parentDOM;
        this.bubblesDOM = null;
        this.data = params.data;
        this.itemsCount = params.itemsCount;
        this.number = params.number;

        this.currentlyActive = 0;
    }
    render = () => {
        let otherBubblesHTML = '';
        for ( let i=1; i<this.itemsCount; i++){
            otherBubblesHTML += `<div class="bubble" data-index="${i}"></div>`;
        }
        return `<div class="controls">
                <div class="bubble active" data-index="0"></div>${otherBubblesHTML}
                </div>`;
    }

    addEvents = () => {
        //reikia zinoti kur yra norimas elementas
        this.bubblesDOM = this.parentDOM.querySelectorAll('.bubble');
        
        //event tipas bus click
        //pridedam kokia funkcija iskviesti
        for ( const bubble of this.bubblesDOM){
            bubble.addEventListener('click', () => {
                //susirandame kas siuo metu turi klase active ir ja istriname
                bubble.closest('.controls')
                    .querySelector('.active')
                    .classList
                    .remove('active');
                //uzdedam active klase ant paspausto elemento
                bubble.classList.add('active');

                const newIndex = parseInt(bubble.dataset.index);
                const diff = newIndex - this.currentlyActive;
                this.currentlyActive = newIndex;

                console.log('juda:', diff);

                this.number(diff);
            });
        }
    }

    showNext(step = 1){
        this.currentlyActive+=step;
    }
    showPrevious(step = 1){
        this.currentlyActive-=step;
    }
}

export { Controls };