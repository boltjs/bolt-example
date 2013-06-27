define(
  'bolt.demo.DemoMain',

  [
    'bolt.demo.ModuleA',
    'JQuery'
  ],

  function (ModuleA, $) {
    return function () {
      console.log('winning');
    };
  }
);
