function generateContacts(cont) {

  return `<div class="contactMe-planeIcon" >
        <a class="fa fa-paper-plane" aria-hidden="true"></a>
            </div >
             <h2 class="contactMe-dropLine">${cont.title2}</h2>
            <p class="contactMe-secondLine">${cont.title3}</p>
            <i></i>

            <form class="form" id="form">
              <div class="contactMe-form-row">
                <input type="text" placeholder="${cont.placeholder1}" id="contactName">
                <i class="fa fa-check-circle"></i>
		          	<i class="fa fa-exclamation-circle"></i>
                <small>Error message</small>
              </div>

              <div class="contactMe-form-row">
                <input type="email" placeholder="${cont.placeholder2}" id="email">
                <i class="fa fa-check-circle"></i>
		          	<i class="fa fa-exclamation-circle"></i>
                <small>Error message</small>
              </div>

              <div class="contactMe-form-row last-row">
                <textarea placeholder="${cont.placeholder3}" id="comment"></textarea>
                <i class="fa fa-check-circle"></i>
		          	<i class="fa fa-exclamation-circle"></i>
                <small>Error message</small>
              </div>
              <button>Submit</button>
            </form>`
};

export default generateContacts;

{/* <div class="contactMe-button">
  <a class="btn btn-getInTouch" href="#" target="_blank">${cont.button}</a>
</div> */}

// neveikia su div button