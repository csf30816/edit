var url = document.URL.substring(18, document.URL.length)
document.getElementById("frame").innerHTML = '<frame rows="100%" src="https://scratchx.org/?url=' + url + '#scratch"></frame>'
