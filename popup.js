//Declaring variables
var targ,newTarg;

chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    // Do something
    targ=tabs[0].url;
//defining variables here
    var old=".com";
    var modified=".com.";
//define newTarg without var(to make it global) or just declare outside
//and define here
    newTarg=targ.replace(old,modified);   
    return newTarg;
});


  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
      chrome.tabs.update({url:newTarg});
});

//
//chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
//       var tabUrl = encodeURIComponent(tab.url);
//        tabUrl += '...'
//    
//      chrome.tabs.update(tab.id, {url: tabUrl});
//});