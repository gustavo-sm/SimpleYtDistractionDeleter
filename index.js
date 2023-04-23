setInterval(function(){
	if(window.location.href !== sessionStorage.getItem('previous_url')) {
		sessionStorage.setItem('previous_url', window.location.href);
		main();
	}
}, 60); //pooling de 60ms pra checar se a url mudou (meio na gambiara mas funciona :P)


function deleteUnwantedDivs(arr_remove = []) {
	for(let i=0; i<arr_remove.length; i++)
		document.getElementById(arr_remove[i]) ? document.getElementById(arr_remove[i]).remove() : '';

}


function main() {
	
	if(window.location.pathname !=='/') {
		setTimeout(function(){
			document.querySelector("a#logo").onclick = function() {
				window.location.href = '/'
			};
			deleteUnwantedDivs(['guide-inner-content']);
		}, 800);

		return;
	}

	setTimeout(function() {
		document.querySelector("a#logo").onclick = function() {
			window.location.href = '/'
		};
		deleteUnwantedDivs(['guide', 'contents', 'chips-wrapper', 'primary']);
	}, 800);

}

main();
