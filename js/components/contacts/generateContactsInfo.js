function generateContactsInfo(contInfo) {

  return `<div class="contactMe-box">
              <div class="contactMe-icons">
                <a class="${contInfo.icon}" aria-hidden="true"></a>
              </div>
              <div class="contactMe-details">
                <h5>${contInfo.line1}</h5>
                <p>${contInfo.line2}</p>
              </div>
            </div>`;
};

export { generateContactsInfo };