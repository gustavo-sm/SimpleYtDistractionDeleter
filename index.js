setInterval(function(){
	if(window.location.href !== sessionStorage.getItem('previous_url')) {
		sessionStorage.setItem('previous_url', window.location.href);
		window.location.reload(); // como o youtube não reconstrói as páginas a cada troca de pág. durante a navegação (sacada mt boa inclusive), é feito um reload para garantir que sempre os itens estipulados sejam apagados.
		main();
	}
}, 60); //pooling de 60ms pra checar se a url mudou (meio na gambiara mas funciona :P)


function deleteUnwantedDivs(arr_remove = []) {
	for(let i=0; i<arr_remove.length; i++)
		document.getElementById(arr_remove[i]) ? document.getElementById(arr_remove[i]).remove() : '';
}


function main() {
	const arr = [];	
	if(window.location.pathname !=='/') {
		arr.push('guide-inner-content');
		arr.push('related');
		arr.push('items');	
	} else {
		arr.push('guide');
		arr.push('contents');
		arr.push('chips-wrapper');
		arr.push('primary');	
	}

	setTimeout(function() {
		deleteUnwantedDivs(arr);
	}, 500);

}

main();
