# Installation
Run `bower install --save git@github.com:praece/ng-util.git#master`<br>
Add `pr.util` as a dependency to your app



Include all javascript files:
```
<script src="../bower_components/praece-ng-util/dist/praece-ng-util.js"></script>
```

#Example

demo.clickOutside() will not be called.
```html
<div ng-click="demo.clickOutside()">
  <button pr-stop-propagation ng-click="demo.clickInside()">Click Me!</button>
</div>
```
