# Selecionar Todas as Checkboxs - Modo de Uso
Para iniciar é bem simples basta selecioar a classe do seu input[type=checkbox] que irar gerir todos os outros
```HTML
<input type="checkbox" class="check-all" id="">
```
No seu html defina a classe check-all
### No arquivo check-rows.js
```js
$("body").on("change", ".check-all", function () {})
```
E com essa classe você ira definir o evento que sera ativado, e selecionara todos os outros checkbox, ou remover todas as seleçõe

 Para definir o que vão ser selcionados primeiramente deve-se definir sua classe no HTML
```HTML
<input type="checkbox" class="check" id="">
```
### No arquivo check-rows.js
```js
var checks = document.querySelectorAll(".check");
    checks.forEach((checkbox) => {
      $(checkbox).prop("checked", opt);
    });
```
Solicitações pull são bem-vindas. Para mudanças importantes, abra um problema primeiro
para discutir o que você gostaria de mudar.