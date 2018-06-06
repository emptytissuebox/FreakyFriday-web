$.getJSON( "namen.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    
//    items.push( "<li class=" + val.gender + " >" + val.name + "</li>" );
    console.log("dit is de key: " + key);
    console.log("dit is de value: " + val.name);
    
    items.push( "<input id=\"" + val.id + "\"onclick=\"openPopup();\" type=\"image\" src=\"" + val.image + "\" name=\"" + val.name + "\">");
    console.log("dit is de key: " + key);
    console.log("dit is de value: " + val.name);
      
    console.log("this is the id: " + val.id);
        
    //items.push("<img class=\"userIcon\" src=\"" + val.image +"\" >")
    //document.getElementById("Iconuser").innerHTML = val.image;
//    document.getElementById("nameUser").innerHTML = val.name;
//      document.getElementById("yearUser").innerHTML = val.year;
//      document.getElementById("profileUser").innerHTML = val.profile;
//      document.getElementById("specialityUser").innerHTML = val.speciality;
  });
 //$("#namenlijst").append(items);
 $("#class209").append(items);
});

$.getJSON( "namen.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
      
      console.log("this is the id: " + val.id);
        
      items.push("<img class=\"userIcon\" src=\"" + val.image +"\" >")
      document.getElementById("Iconuser").innerHTML = val.image;
      document.getElementById("nameUser").innerHTML = val.name;
      document.getElementById("yearUser").innerHTML = val.year;
      document.getElementById("profileUser").innerHTML = val.profile;
      document.getElementById("specialityUser").innerHTML = val.speciality;
  
  });
    $("#IconUser").append(items);
});
    