function generateContactsInfo(contsInfo) {

  return `<div class="contactMe-box">
              <div class="contactMe-icons">
                <a class="${contsInfo.icon}" aria-hidden="true"></a>
              </div>
              <div class="contactMe-details">
                <h5>${contsInfo.line1}</h5>
                <p>${contsInfo.line2}</p>
              </div>
            </div>`;
};

export { generateContactsInfo };