/*
  Require and initialise PhantomCSS module
  Paths are relative to CasperJs directory
*/
var phantomcss = require('./PhantomCSS/phantomcss.js');

phantomcss.init({
  screenshotRoot: './screenshots',
  failedComparisonsRoot: './failures',
  libraryRoot: './PhantomCSS/',
});


/*
  The test scenario
*/
casper.start( 'http://nat.godbolt.me/' );

casper.viewport(1024, 768);

casper.then(function(){
  phantomcss.screenshot('.main-content-primary', 'Recent Articles');
});

casper.then(function(){
  casper.click('[data-slide-number="3"]');
  phantomcss.screenshot('.hero-slider', 'Hero Slider');

});


casper.then( function now_check_the_screenshots(){
  // compare screenshots
  phantomcss.compareAll();
});

casper.then( function end_it(){
  casper.test.done();
});

/*
Casper runs tests
*/
casper.run(function(){
  console.log('\nTHE END.');
  phantom.exit(phantomcss.getExitStatus());
});
