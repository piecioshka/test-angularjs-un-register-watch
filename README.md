# test-angularjs-un-register-watch

Unwatch all `$watcher`ers is doing by `$destroy` method of `$scope`.
So we don't have unregister every watcher, but application architecture requires that we can't to for couple ways.

1. Remove by unwatcher.

```js
var unwatcher = $scope.$watch('title', function (newValue) {
    console.log(newValue);
});
setTimeout(function () {
    unwatcher();
}, 1000);
```

This code unwatch after one second $watcher which was create couple lines before.

2. Destroy `$scope`

Yes, I know, this is so brutal, but... ;)

```js
module.controller('TestController', function ($scope) {
    $scope.title = 'Title';
    setTimeout(function () {
        $scope.$destroy();
    }, 1000);
});
```

This code remove all `$scope` properties after one second.

3. Third way is passed in another my project: https://github.com/piecioshka/test-angularjs-disable-watchers
