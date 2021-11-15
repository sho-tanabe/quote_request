$(function(){
  
  document.getElementById("process").addEventListener("change", function(){

    document.getElementById("contact1").selectedIndex = 0;
    document.getElementById("contact2").selectedIndex = 0;
    var age_elem = document.getElementById("process");
    var s_value = age_elem.selectedIndex;
    if(s_value == 1){
                            $("#contact_grp1").show("normal");
                            $("#contact_grp2").hide("normal");
                            $("#ex_box_div_b").hide("normal");
                            $("#ex_box_div_x").hide("normal");
                            $("#ex_box_div_y").hide("normal");
                            document.getElementById("contact1").setAttribute("required", true);
                            document.getElementById("contact2").removeAttribute("required");
                            document.getElementById("contact1").removeAttribute("disabled");
                            document.getElementById("contact2").setAttribute("disabled", true);
    }else if(s_value == 2){
                            $("#contact_grp1").hide("normal");
                            $("#contact_grp2").show("normal");
                            $("#ex_box_div_b").hide("normal");
                            $("#ex_box_div_x").hide("normal");
                            $("#ex_box_div_y").hide("normal");
                            document.getElementById("contact1").removeAttribute("required");
                            document.getElementById("contact2").setAttribute("required", true);
                            document.getElementById("contact1").setAttribute("disabled", true);
                            document.getElementById("contact2").removeAttribute("disabled");
    }else{
                            $("#contact_grp1").hide("normal");
                            $("#contact_grp2").hide("normal");
                            $("#ex_box_div_b").hide("normal");
                            $("#ex_box_div_x").hide("normal");
                            $("#ex_box_div_y").hide("normal");
                            document.getElementById("contact1").removeAttribute("required");
                            document.getElementById("contact2").removeAttribute("required");
    }
  }, false);
});
                    

$(function(){

  document.getElementById("contact1").addEventListener("change", function(){
  
    document.getElementById("ex_box_b").value='';
    document.getElementById("changetest1").value='';    
    document.getElementById("changetest2").value='';
    document.getElementById("changetest3").value='';
    document.getElementById("changetest4").value='';
    document.getElementById("changetest5").value='';
    var age_elem = document.getElementById("ex_age_b");
    var s_value = age_elem.selectedIndex; 
    var contact1_type = document.getElementById("contact1");
    var c1_value = contact1_type.selectedIndex;                    
    if(s_value == 1 && c1_value == 1){
                            $("#ex_box_div_b").show("normal");
                            $("#ex_box_div_x").hide("normal");
                            $("#ex_box_div_y").hide("normal");
                            document.getElementById("ex_box_b").setAttribute("required", true);
                            document.getElementById("changetest2").removeAttribute("required");
                            document.getElementById("changetest1").removeAttribute("disabled");
                            document.getElementById("changetest2").setAttribute("disabled", true);
                            document.getElementById("changetest4").setAttribute("disabled", true);
                            document.getElementById("ex_box_b").removeAttribute("disabled");
                            document.getElementById("changetest3").setAttribute("disabled", true);
                            document.getElementById("changetest5").setAttribute("disabled", true);                
    }else if(s_value == 1 && c1_value == 2){
                            $("#ex_box_div_b").hide("normal");
                            $("#ex_box_div_x").show("normal");
                            $("#ex_box_div_y").hide("normal");
                            document.getElementById("ex_box_b").removeAttribute("required");
                            document.getElementById("changetest2").setAttribute("required", true);
                            document.getElementById("changetest1").setAttribute("disabled", true);
                            document.getElementById("changetest2").removeAttribute("disabled");
                            document.getElementById("changetest4").setAttribute("disabled", true);
                            document.getElementById("ex_box_b").setAttribute("disabled", true);
                            document.getElementById("changetest3").removeAttribute("disabled");
                            document.getElementById("changetest5").setAttribute("disabled", true);
    }else{
                            $("#ex_box_div_b").hide("normal");
                            $("#ex_box_div_x").hide("normal");
                            $("#ex_box_div_y").hide("normal");
                            document.getElementById("ex_box_b").removeAttribute("required");
                            document.getElementById("changetest2").removeAttribute("required");
                            document.getElementById("changetest1").setAttribute("disabled", true);
                            document.getElementById("changetest2").setAttribute("disabled", true);
                            document.getElementById("changetest4").removeAttribute("disabled");
                            document.getElementById("ex_box_b").setAttribute("disabled", true);
                            document.getElementById("changetest3").setAttribute("disabled", true);
                            document.getElementById("changetest5").removeAttribute("disabled");
    }
  }, false);
});



$(function(){  
  document.getElementById("contact2").addEventListener("change", function(){

    document.getElementById("ex_box_b").value='';
    document.getElementById("changetest1").value='';
    document.getElementById("changetest2").value='';
    document.getElementById("changetest3").value='';
    document.getElementById("changetest4").value='';
    document.getElementById("changetest5").value='';
    var age_elem = document.getElementById("ex_age_b");
    var s_value = age_elem.selectedIndex;
    var contact2_type = document.getElementById("contact2");
    var c2_value = contact2_type.selectedIndex;                                                
    if(s_value == 2 && c2_value == 2){
                            $("#ex_box_div_b").show("normal");
                            $("#ex_box_div_x").hide("normal");
                            $("#ex_box_div_y").hide("normal");
                            document.getElementById("ex_box_b").setAttribute("required", true);
                            document.getElementById("changetest2").removeAttribute("required");
                            document.getElementById("changetest1").removeAttribute("disabled");
                            document.getElementById("changetest2").setAttribute("disabled", true);
                            document.getElementById("changetest4").setAttribute("disabled", true);
                            document.getElementById("ex_box_b").removeAttribute("disabled");
                            document.getElementById("changetest3").setAttribute("disabled", true);
                            document.getElementById("changetest5").setAttribute("disabled", true);
    }else if(s_value == 2 && c2_value == 3){
                            $("#ex_box_div_b").hide("normal");
                            $("#ex_box_div_x").show("normal");
                            $("#ex_box_div_y").hide("normal");
                            document.getElementById("ex_box_b").removeAttribute("required");
                            document.getElementById("changetest2").setAttribute("required", true);
                            document.getElementById("changetest1").setAttribute("disabled", true);
                            document.getElementById("changetest2").removeAttribute("disabled");
                            document.getElementById("changetest4").setAttribute("disabled", true);
                            document.getElementById("ex_box_b").setAttribute("disabled", true);
                            document.getElementById("changetest3").removeAttribute("disabled");
                            document.getElementById("changetest5").setAttribute("disabled", true);
    }else{
                            $("#ex_box_div_b").hide("normal");
                            $("#ex_box_div_x").hide("normal");
                            $("#ex_box_div_y").show("normal");
                            document.getElementById("ex_box_b").removeAttribute("required");
                            document.getElementById("changetest2").removeAttribute("required");
                            document.getElementById("changetest1").setAttribute("disabled", true);
                            document.getElementById("changetest2").setAttribute("disabled", true);
                            document.getElementById("changetest4").removeAttribute("disabled");
                            document.getElementById("ex_box_b").setAttribute("disabled", true);
                            document.getElementById("changetest3").setAttribute("disabled", true);
                            document.getElementById("changetest5").removeAttribute("disabled");
    }
  }, false);
  
});
