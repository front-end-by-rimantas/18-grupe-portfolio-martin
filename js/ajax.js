function ajax(callback, href) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.responseText);
            callback(data);
        }
    };
    const URL = "https://front-end-by-rimantas.github.io/18-grupe-portfolio-martin" + href;
    xhttp.open("GET", URL, true);
    xhttp.send();
}

export default ajax;