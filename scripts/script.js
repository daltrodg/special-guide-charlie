$(document).ready(function () {
  $("#buffDoge").click(function () {
    console.log("position: ", $("#buffDoge").position());
  });
  
//Draggable element. 
  $("#buffDoge").draggable({ 
    stop: function () {
  if ($("#buffDoge").position().left > 400 && $("#buffDoge").position().left < 650) 
      {
       console.log("test")
      }
    }
  });
//Droppable element. 
  $( "#cartoonGym" ).droppable({
    drop: function()
    {
      console.log('test')
      $("#cartoonGym").attr(
      "src",
      'https://resources.licensingprep.com/wp-content/uploads/2019/09/cheers-congratulations-meme.jpg');
    }
  });
});