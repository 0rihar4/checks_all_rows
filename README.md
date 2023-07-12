# Select all the Checkboxs - how to use
To start is quite simple, just select the input class [type=checkbox] which will create all the others
```HTML
<input type="checkbox" class="check-all" id="">
```
On your html define the class check-all### No arquivo check-rows.js
```js
$("body").on("change", ".check-all", function () {})
```
With this class you will define the event that will be activated, and will select all the other checkbox’s, or remove all the sections 

To define what will be selected first you must define its class on the HTML 
```HTML
<input type="checkbox" class="check" id="">
```
### No arquivo check-rows.js
```js
var checks = document.querySelectorAll(".check");
    checks.forEach((checkbox) => {
      $(checkbox).prop("checked", true);
    });
```

Solicitations pull are welcome. To important changes, open a problem first to discuss what you would like to change.