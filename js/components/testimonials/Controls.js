class Controls {
    constructor(params){
        this.DOM = params.DOM;
        this.data = params.data;
        this.currentlyActive = 0;
    }
    render(){
        return `<div class="controls">...</div>`;
    }
  /*  showNext(step = 1){
        this.currentlyActive+=step;
    }
    showPrevious(step = 1){
        this.currentlyActive-=step;
    }*/
}

export { Controls };