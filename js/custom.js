var myPictures = [
    
    {
        name : "b1", 
        imageURl : "img/b1.jpg"
    },
    
    {
        
      name : "b2",
      imageURL : "img/b2.jpg"
        
    },
    
     {
        
      name : "g1",
      imageURL : "img/g1.jpg"
        
    },
    
     {
        
      name : "g2",
      imageURL : "img/g2.jpg"
        
    },
    
     {
        
      name : "g3",
      imageURL : "img/g3.jpg"
        
    },
    
     {
        
      name : "r1",
      imageURL : "img/r1.jpg"
        
    },
    
     {
        
      name : "r2",
      imageURL :  "img/r2.jpg" 
        
    },
    
     {
        
      name : "r3",
      imageURL : "img/r3.jpg"
        
    },
    
     {
        
      name : "h1",
      imageURL : "img/h1.jpg"
        
    },
    
     {
        
      name : "h2",
      imageURL : "img/h2.jpg"
         
    },
    
     {
        
      name : "h3",
      imageURL : "img/h3.jpg"
         
    },
    
    
]




$(document).ready(function() {
    
    var imgtemp = _.template($("#img-template").html());
    var result = imgtemp({target : myPictures});
    
    $(".modal-body").html(result);
    
    
})
                 
                 