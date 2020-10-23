class Controls {
    constructor(params){
        this.DOM = params.DOM;
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
   /* showNext(step = 1){
        this.currentlyActive+=step;
    }
    showPrevious(step = 1){
        this.currentlyActive-=step;
    }*/
}

export { Controls };