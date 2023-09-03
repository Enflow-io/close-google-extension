chrome.commands.onCommand.addListener(function(command) {
    closeTabs();
  });
document.addEventListener('DOMContentLoaded', function() {



  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    closeTabs();
 
    
  }, false);


function closeTabs(){
  chrome.tabs.getAllInWindow(null, function(tabs) {

      var url = '';
      for (var i = 0; i < tabs.length; i++) {
          url = tabs[i].url;
          if(url.indexOf("www.google.") > -1){
            console.log(tabs[i]);
            chrome.tabs.remove(tabs[i].id);
          }
      }
    });
}
}, false);



$("#new-request-phone input").formance("format_phone_number") // setup the formatter
                             .on( 'keyup change blur', function (event) { // setup the event listeners to validate the field whenever the user takes an action
                               if ( $(this).formance('validate_phone_number') )
                                 $("#phone-checked").css("color", "green"); // enable the submit button if valid phone number
                               else
                                 $("#phone-checked").css("color", "red"); // disable the submit button if invalid phone number
                             });



