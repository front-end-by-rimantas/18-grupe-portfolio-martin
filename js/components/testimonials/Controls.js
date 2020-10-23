class Controls {
    constructor(params){
        this.parentDOM = params.parentDOM;
        this.bubblesDOM = null;
        this.data = params.data;
        this.itemsCount = params.itemsCount;
        this.currentlyActive = 0;
        console.log(params);
    }
    render(){
        return `<div class="controls">
                <div class="bubble active"></div>${`<div class="bubble"></div>`.repeat(this.itemsCount-1)}
                </div>`;
    }

    addEvents(){
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