

// upravime config 
//     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//     trace: 'on-first-retry',
//     screenshot: 'only-on-failure',
//     video: { mode: 'on' }
//   },

// po spusteni nejakeho testu nam pripudne v test results video
// videa neviem nasledne pozriet cez playwright ale musim cez pc 


// a ak chcem spustam nahravanie len pre padnute videa tak toto

//    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//     trace: 'on-first-retry',
//     screenshot: 'only-on-failure',
//     video: { mode: 'retain-on-failure' }
//   },


// prve opakovanie testu -  video: { mode: 'on-first-retry' }
// ak chcem upravit velkost -> video: { mode: 'on-first-retry', size: {width:640, height:400}}