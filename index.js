email = "kdamian@nd.edu";
url = "https://github.com/kaiadamian?tab=repositories"
pdf = "/documents/Damian_Kaia_Resume.pdf"

function showEmail () {
    alert(email);
}

function openUrl() {
    window.location.href = url;
}

function openPdf() {
    window.open(pdf, "_blank")
}