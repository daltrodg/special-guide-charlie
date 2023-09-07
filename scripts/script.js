$(document).ready(function () {
  $("#buffDoge").click(function () {
    //code goes here
    console.log("position: ", $("#buffDoge").position());
  });
  
  $("#weakDoge").click(function () {
    console.log('position: ', $('#weakDoge').position());
  });
  

  $("#buffDoge").draggable({ 
    stop: function () {
    //code goes here
  if ($("#buffDoge").position().left > 400 && $("#buffDoge").position().left < 650) 
      {
       console.log("test")
        $("#buffDoge").attr(
          "src",
          "https://i.insider.com/52b86ce46bb3f7032e3faf9e?width=750&format=jpeg&auto=webp");
     }  
    }
   });
  
  $("#weakDoge").draggable({ 
    stop: function () {
    //code goes here
  if ($("#weakDoge").position().left > 400 && $("#weakDoge").position().left < 650) 
      {
       console.log("test")
        $("#weakDoge").attr(
          "src",
          "https://i.insider.com/52b86ce46bb3f7032e3faf9e?width=750&format=jpeg&auto=webp");
     }  
    }
   }); 
 });