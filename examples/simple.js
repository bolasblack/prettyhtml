const prettyhtml = require('./../packages/prettyhtml')

// example with angular template
const result = prettyhtml(`
<my-component ng-model="selected">
<custom FOO="test" class="test" title="wdwe"></custom>
<form #heroForm (ngSubmit)="onSubmit(heroForm)">
  <input type="text" [(onChange)]="dede" name="test"/>
  <button [style.color]="isSpecial ? 'red' : 'green'">
</form>
  <my-sub-component ng-repeat="item in items" ng-value="item.value" aria-label="{{item.label}}">{{ item.label }}
    <div>foo
      <div>baz</div>
    </div>
    <section>bar</section>
    <my-sub-sub-component ng-repeat="item in items" ng-value="item.value" aria-label="{{item.label}}">{{ item.label }}
    </my-sub-sub-component>
  </my-sub-component>
</my-component>
`)
console.log(result.contents)
