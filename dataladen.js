$.getJSON( "namen.json", function( data ) {
  var items = [];
  $.each( data.students, function( key, val ) {
 
    console.log("dit is de key: " + key);
    console.log("dit is de value: " + val.name);
    
    items.push( "<input id=\"" + val.key + "\"onclick=\"openPopup();\" type=\"image\" src=\"" + val.image + "\" name=\"" + val.name + "\">");
   
  });
 //$("#namenlijst").append(items);
 $("#class209").append(items);
});

function getKey() {
    
}

$.getJSON( "namen.json", function( data ) {
  var items = [];
  $.each( data.students, function( key, val ) {
      
      console.log("this is the id: " + val.id);
        
      if (key == 0){
      items.push("<img class=\"userIcon\" src=\"" + val.image +"\" >");
      
      items.push("<h2 style=\"text-align: center;\">" + val.name + "</h2>");
      items.push("<h2>Year: " + val.year + "</h2>");
      items.push("<h2>Profile: " + val.profile + "</h2>");
      items.push("<h2>Specialty: " + val.specialty + "</h2>");
      items.push("<h2>Specialization: " + val.specialization + "</h2>");  
      }
  });
    $("#IconUser").append(items);
});

