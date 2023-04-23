## Delete yt garbage distractions

Feito para fins de testes e aprendizado.

Bugs:   
* As vezes o conteudo da home que deveria ser apagado, não é apagado.
* Conteúdos que compartilham o mesmo ID no html podem ser afetados em páginas diferentes durante a navegação, uma vez que o youtube não reconstrói a página toda ao navegar de uma para a outra.

To acertando o comportamento da extensão ainda. Quando estiver tudo ok eu refatoro os bad smells.

Talvez, uma solução mais inteligente seria bloquear as chamadas que baixam os conteúdos da homepage, porém devo estudar mais como estão estruturadas as chamadas e seus respectivos conteúdos.

Dependências:  
web-ext ```7.6.1```

Instruções para rodar:  
```npm install -g```  
```web-ext run``` para rodar em ambiente de testes do firefox;

Build:  
```web-ext build --overwrite-dest``` para fazer o build e gerar zip da extensão para ser subido no browser.
