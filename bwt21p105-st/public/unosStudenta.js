window.onload = () => {
    const spasiDugme = document.getElementById("spasiDugme");
    const imeInput = document.getElementById("imeStudenta");
    const prezimeInput = document.getElementById("prezimeStudenta");
    const indexInput = document.getElementById("indexStudenta");
    const grupaInput = document.getElementById("grupaStudenta");
    const greskaLabela = document.getElementById("porukaServera");

    spasiDugme.onclick = () => {
        greskaLabela.innerHTML = "Cekanje odgovora od servera...";
        greskaLabela.className = "";
        setTimeout(() => {
            AjaxPozivi.posaljiStudent({
                ime: imeInput.value,
                prezime: prezimeInput.value,
                index: indexInput.value,
                grupa: grupaInput.value
            }, (err, data) => {
                if(err) {
                    greskaLabela.innerHTML = err;
                    greskaLabela.className = "los-odgovor-servera";
                } else {
                    greskaLabela.innerHTML = data;
                    greskaLabela.className = "dobar-odgovor-servera";
                    imeInput.value = "";
                    prezimeInput.value = "";
                    indexInput.value = "";
                    grupaInput.value = "";
                }
            });
        }, 1000);
    }


}