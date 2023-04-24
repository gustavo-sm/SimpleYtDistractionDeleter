## Delete yt garbage distractions

Feito para fins de testes e aprendizado.

* Ao navegar pelas páginas, a mensagem "Sem internet" pode aparecer por conta do reload poder ocorrer antes das requisições terminarem.

Talvez, uma solução mais inteligente seria bloquear as chamadas para o back-end, que baixam os conteúdos da homepage, porém devo pesquisar mais como estão estruturadas as chamadas e seus respectivos conteúdos.

Dependências:  
```web-ext 7.6.1```

Instruções para rodar:  
```npm install -g```  
```web-ext run``` para rodar em ambiente de testes do firefox;

Build:  
```web-ext build --overwrite-dest``` para fazer o build e gerar zip da extensão para ser subido no browser.
