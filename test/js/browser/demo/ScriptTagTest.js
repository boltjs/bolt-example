asynctest(
  'Script tag load test',

  [
    'global!bolt.loader.api.ScriptTag'
  ],

  function (scripttag, onsuccess, onfailure) {
console.log('asfas')
    console.log(scripttag)
    scripttag.load('/base/test/js/browser/demo/sample.js', function () {
      console.log('loaded')
      if (rawexample)
        onsuccess();
      else
        onfailure('returned success, but expected global "rawexample" was not set.');
    }, function () {
      onfailure('scripttag failed to load');
    });
  }
);
