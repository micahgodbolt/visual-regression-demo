/*
  Require and initialise PhantomCSS module
  Paths are relative to CasperJs directory
*/
var phantomcss = require('./PhantomCSS/phantomcss.js');

phantomcss.init({
  screenshotRoot: './phantom_imgs/baselines',
  comparisonResultRoot: './phantom_imgs/results',
  failedComparisonsRoot: './phantom_imgs/failures',
  libraryRoot: './PhantomCSS/',
  cleanupComparisonImages: false,
});


/*
  The test scenario
*/

//casper.start( 'http://www.godbolt.me/p2/' )
casper.start( 'http://www.godbolt.me/p3/' )





////
// Work In Action
// A Basic Example
/////

  .then(function() {
    this.viewport(480, 1200);
    phantomcss.screenshot('.work-in-action', 'work-in-action-480');
  })
  .then(function () {
    this.viewport(1024, 768);
    phantomcss.screenshot('.work-in-action', 'work-in-action-1024');
  })






////
// News List
// Avoiding False Positives
/////

  // .then(function() {
  //   this.viewport(480, 1200);
  //   phantomcss.screenshot('.news-list', 'news-list-480');
  // })
  // .then(function () {
  //   this.viewport(1024, 768);
  //   phantomcss.screenshot('.news-list', 'news-list-1024');
  // })


////
// Call To Action
// Avoiding False Nagatives
/////

  // .then(function() {
  //   this.viewport(480, 1200);
  //   phantomcss.screenshot('.call-to-action', 'call-to-action-480');
  // })
  // .then(function () {
  //   this.viewport(1024, 768);
  //   phantomcss.screenshot('.call-to-action', 'call-to-action-1024');
  // })



////
// Mobile Navigation
// Finding Hidden Differences
////

  // .then(function() {
  //   this.viewport(480, 1200);
  //   this.mouse.click('.mobile-control');
  //   phantomcss.screenshot('.site-header', 'mobile-navigation');
  // })



////
// Link Hover
// Finding Interaction Differences
////

  // .then(function() {
  //   this.viewport(1024, 3500);
  //   this.mouse.move('.button');
  //   phantomcss.screenshot('.button', 'button');
  // })



////
// Blog Posts
// Creating Consistant Content to Test
////

  // .then(function() {
  //   this.viewport(1024, 768);

  //   this.evaluate(function() {
  //     var content = [
  //       { selector: ".post-title a",
  //         text: "Where we're going, we don't need roads"
  //       },
  //       { selector: ".published-date",
  //         text: "October 21, 2015"
  //       },
  //       { selector: ".category-link",
  //         text: "Flux Capacitor"
  //       },
  //       { selector: ".comment-count",
  //         text: "1.21"
  //       },
  //       { selector: ".post-excerpt",
  //         text: "There's that word again; \"heavy\". Why are things so heavy in the future? <a href='#'>more</a>"
  //       },
  //       { selector: ".info-container a",
  //         text: "Dr. Emmett L. Brown"
  //       },
  //       { selector: ".position ",
  //         text: "Doctor"
  //       },
  //       { selector: ".comment-count",
  //         text: "1.21"
  //       },
  //     ]
  //     for (i = 0; i < content.length; ++i) {
  //       jQuery(content[i].selector).html(content[i].text);
  //     }
  //     jQuery('.photo-container .photo').attr("src", '../images/doc_brown.jpg');

  //   });

  //   phantomcss.screenshot('.post-summary', 'blog-post');

  //})

// Closing Semi Colon
;


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
