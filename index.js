//xpinstall.signatures.required false


setInterval(function(){
	if(window.location.href !== sessionStorage.getItem('previous_url')) {
		sessionStorage.setItem('previous_url', window.location.href);
		main();
	}
}, 10); //pooling de 10ms pra checar se a url mudou (meio na gambiara mas funciona :P)


function deleteUnwantedDivs(arr_remove = []) {
	for(let i=0; i<arr_remove.length; i++)
		document.getElementById(arr_remove[i]) ? document.getElementById(arr_remove[i]).remove() : '';

}


function main() {

	if(window.location.pathname !=='/') {
		setTimeout(function(){
			deleteUnwantedDivs(['guide-inner-content']);
		}, 1000);

		return;
	}

	setTimeout(function() {
		deleteUnwantedDivs(['guide', 'contents', 'chips-wrapper', 'primary']);
	}, 1000);

}

main();
