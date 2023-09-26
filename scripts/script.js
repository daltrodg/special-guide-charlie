$(document).ready(function () {
  $("#weakDoge").click(function () {
    //code goes here
    console.log("position: ", $("#weakDoge").position());
  });
  

  $("#weakDoge").draggable({ 
    stop: function () {
    //code goes here
  if ($("#weakDoge").position().left > 400 && $("#weakDoge").position().left < 650) 
      {
       console.log("test")
      }
    }
  });
  $( "#cartoonGym" ).droppable({
    drop: function()
    {
      console.log('test')
      $("#cartoonGym").attr(
      "src",
      'https://resources.licensingprep.com/wp-content/uploads/2019/09/cheers-congratulations-meme.jpg');
      
      $('#weakDoge').attr(
        "src", 'https://youtooz.com/cdn/shop/products/swoledoge_characterai_ry-min.png?v=1606473011');
      
      $("#congratsMess").html(goodjobMessage);
    }
  });
});

const goodjobMessage = () => {
  let message = "Good Job!!!";
  return message;
}