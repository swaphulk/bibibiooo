$( document ).ready(function() {
    
  $('.menuLink').click(function(event) {
    event.preventDefault();
    if (!event.target) {
      return;
    }
    switch (event.target.id) {
      case 'introScreenLink':
        $('.mainDiv').hide();
        $('#introScreenDiv').show();
        break;
      case 'mainMenuLink':
        $('.mainDiv').hide();
        $('#mainGameDiv').show();
        break;
      case 'helpMenuLink':
        $('.mainDiv').hide();
        $('#helpDiv').show();
        break;
      case 'achievementsMenuLink':
        $('.mainDiv').hide();
        $('#achievementsDiv').show();
        break;
    }
    return;
  });

});