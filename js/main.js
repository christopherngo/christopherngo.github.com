$(document).ready(function(){
    var body = $('html, body');

    $('#batteryNav').click(function(e){
      e.preventDefault();
      var title = $('.container').find('h3')[0];
      var offset = $(title).position();
      body.animate({scrollTop: offset.top -60},1000);

    });

    $('#tanksNav').click(function(e){
      e.preventDefault();
      var title = $('.container').find('h3')[1];
      var offset = $(title).position();
      body.animate({scrollTop: offset.top-60},1000);

    });

    $('#tipsNav').click(function(e){
      e.preventDefault();
      var title = $('.container').find('h3')[2];
      var offset = $(title).position();
      body.animate({scrollTop: offset.top},1000);

    });


    var batteryData = [
      {
        name:"Ego Mini (Black)", 
        url: "images/800x600/battery/egoMiniBlack.JPG",
        price: "20.00",
        type: "battery"  
      }, 
      {
        name:"Ego Mini (White)", 
        url: "images/800x600/battery/egoMiniWhite.JPG",
        price: "20.00",
        type: "battery"  
      }, 
      {
        name:"Ego T Pass (650 mah)", 
        url: "images/800x600/battery/egoTPassthrough.JPG",
        price: "30.00",
        type: "battery"  
      },
      {
        name:"Ego T Pass (1000 mah)", 
        url: "images/800x600/battery/egoTPassthrough.JPG",
        price: "35.00",
        type: "battery"  
      },
      {
        name:"Ego C Twist (Black)", 
        url: "images/800x600/battery/egoCTwistBlack.jpg",
        price: "45.00",
        type: "battery"  
      },
      {
        name:"Ego C Twist (Blue)", 
        url: "images/800x600/battery/egoCTwistBlue.jpg",
        price: "45.00",
        type: "battery"  
      },
      {
        name:"Ego C Twist (White)", 
        url: "images/800x600/battery/egoCTwistWhite.JPG",
        price: "45.00",
        type: "battery"  
      },
      {
        name:"Evic (Silver)", 
        url: "images/800x600/battery/evicSilver.JPG",
        price: "80.00",
        type: "battery" 
      },
      {
        name:"Evic (Black)", 
        url: "images/800x600/battery/evicBlack.JPG",
        price: "85.00",
        type: "battery" 
      },
    ];

    var tankData = [
      {
        name:"DCT (Blue)", 
        url: "images/800x600/tanks/dctBlue.JPG",
        price: "10.00",
        type: "tank"  
      },
      {
        name:"DCT (Purple)", 
        url: "images/800x600/tanks/dctPurple.JPG",
        price: "10.00",
        type: "tank"  
      },
      {
        name:"DCT (Clear)", 
        url: "images/800x600/tanks/dctClear.JPG",
        price: "10.00",
        type: "tank"  
      },
      {
        name:"DCT (Smoke)", 
        url: "images/800x600/tanks/dctSmoke.JPG",
        price: "10.00",
        type: "tank"  
      },
      {
        name:"Vivi Nova (Black)", 
        url: "images/800x600/tanks/viviNovaBlack.JPG",
        price: "10.00",
        type: "tank"  
      },
      {
        name:"Vivi Nova (Blue)", 
        url: "images/800x600/tanks/viviNovaBlue.JPG",
        price: "10.00",
        type: "tank"  
      },
      {
        name:"Vivi Nova (Clear)", 
        url: "images/800x600/tanks/viviNovaClear.JPG",
        price: "10.00",
        type: "tank"  
      },
      {
        name:"Vivi Nova (Green)", 
        url: "images/800x600/tanks/viviNovaGreen.JPG",
        price: "10.00",
        type: "tank"  
      },
      {
        name:"Vivi Nova (Red)", 
        url: "images/800x600/tanks/viviNovaRed.JPG",
        price: "10.00",
        type: "tank"  
      },
      {
        name:"Vivi Nova (Yellow)", 
        url: "images/800x600/tanks/viviNovaYellow.JPG",
        price: "10.00",
        type: "tank"  
      }
    ];        

    var tipData = [
      {
        name:"Aluminum Drip (Blue)", 
        url: "images/800x600/tips/aluminumDripBlue.JPG",
        price: "6.00",
        type: "tip"  
      },
      {
        name:"Ceramic Drip (Black)", 
        url: "images/800x600/tips/ceramicDripBlack.JPG",
        price: "8.00",
        type: "tip"  
      },
      {
        name:"Ceramic Drip (Blue)", 
        url: "images/800x600/tips/ceramicDripBlue.JPG",
        price: "8.00",
        type: "tip"  
      },
      {
        name:"Ceramic Drip (Blue Alt)", 
        url: "images/800x600/tips/ceramicDripBlue1.JPG",
        price: "8.00",
        type: "tip"  
      },
      {
        name:"Ceramic Drip (Jade)", 
        url: "images/800x600/tips/ceramicDripJade.JPG",
        price: "8.00",
        type: "tip"  
      },
      {
        name:"Ceramic Drip (Jade Alt)", 
        url: "images/800x600/tips/ceramicDripJade1.JPG",
        price: "8.00",
        type: "tip"  
      },
      {
        name:"Ceramic Drip (Red)", 
        url: "images/800x600/tips/ceramicDripRed.JPG",
        price: "8.00",
        type: "tip"  
      },
      {
        name:"Ceramic Drip (Red Alt)", 
        url: "images/800x600/tips/ceramicDripRed1.JPG",
        price: "8.00",
        type: "tip"  
      },
      {
        name:"Wooden Drip", 
        url: "images/800x600/tips/woodenDrip.JPG",
        price: "8.00",
        type: "tip"  
      }
    ];  

/*
    var Data = [
      {
        name:"", 
        url: "",
        price: "",
        type: ""  
      },
    ];
*/

    //Get the HTML from the template in the script tag
    var galleryTemplateScript = $("#gallery-template").html(); 

    //Compile the template
    var theTemplate = Handlebars.compile (galleryTemplateScript); 

    // Generate gallery images
    $("#batterySection").append(theTemplate(batteryData));
    $("#tankSection").append(theTemplate(tankData));
    $("#tipSection").append(theTemplate(tipData)); 

    $("[rel^='prettyPhoto']").prettyPhoto({
      show_title:true,            
      social_tools: false
    });
});