var cc = 0
var jj = 0
var pp = 0
var rr = 0
var person1Input = "Name"

$(document).ready(function(){
  $(".start").click(function(){
    $("#questionyourname").show();
    $(".start").hide();
    $(".nextName").show();
  });

  $(".nextName").click(function(){
    person1Input = $("input#person1").val();
    $("#questionyourname").hide();
    $(".question1").show();
    $(".nextName").hide();
    $(".next1").show();
  });


  $(".next1").click(function(){
    if ($("#Q1").val() === "C"){
    cc = cc + 1
    }else if ($("#Q1").val() === "J"){
    jj = jj + 1
    }else if ($("#Q1").val() === "P"){
    pp = pp + 1
    }else if ($("#Q1").val() === "R"){
    rr = rr + 1
    }else{
    }
    $(".question1").hide();
    $(".question2").show();
    $(".next1").hide();
    $(".next2").show();
  });

  $(".next2").click(function(){
    if ($("#Q2").val() === "C"){
      cc = cc + 1
    }else if ($("#Q2").val() === "J"){
      jj = jj + 1
    }else if ($("#Q2").val() === "P"){
      pp = pp + 1
    }else if ($("#Q2").val() === "R"){
      rr = rr + 1
    }else{
    }
    $(".question2").hide();
    $(".question3").show();
    $(".next2").hide();
    $(".next3").show();
  });

  $(".next3").click(function(){
    if ($("#Q3").val() === "C"){
      cc = cc + 1
    }else if ($("#Q3").val() === "J"){
      jj = jj + 1
    }else if ($("#Q3").val() === "P"){
      pp = pp + 1
    }else if ($("#Q3").val() === "R"){
      rr = rr + 1
    }else{
    }
    $(".question3").hide();
    $(".question4").show();
    $(".next3").hide();
    $(".next4").show();
  });

  $(".next4").click(function(){
    if ($("#Q4").val() === "C"){
      cc = cc + 1
    }else if ($("#Q4").val() === "J"){
      jj = jj + 1
    }else if ($("#Q4").val() === "P"){
      pp = pp + 1
    }else if ($("#Q4").val() === "R"){
      rr = rr + 1
    }else{
    }
    $(".question4").hide();
    $(".question5").show();
    $(".next4").hide();
    $(".next5").show();
  });

  $(".next5").click(function(){
    if ($("#Q5").val() === "C"){
    cc = cc - 1
    }else if ($("#Q5").val() === "J"){
    jj = jj - 1
    }else if ($("#Q5").val() === "P"){
    pp = pp - 1
    }else if ($("#Q5").val() === "R"){
    rr = rr - 1
    }else{
    }
    $(".question5").hide();
    $(".person1").text(person1Input)
    $(".resultText").show();
    $(".EndNote").show();
    if ( cc > jj && cc > pp && cc > rr ){
    $(".resultC").show();
    }else if ( jj > cc && jj > pp && jj > rr ){
    $(".resultJava").show();
    }else if ( pp > jj && pp > cc && pp > rr ){
    $(".resultPhp").show();
    }else if ( rr > jj && rr > pp && rr > cc ){
    $(".resultRuby").show();
    }
    $(".next5").hide();
    $(".REstart").show();
  });

});
