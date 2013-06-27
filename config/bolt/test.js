configure({
  configs: [
    './prod.js'
  ],
  sources: [
    source('bolt', 'bolt.demo.test', '../../test/js/module', mapper.hierarchical)
  ]
});
