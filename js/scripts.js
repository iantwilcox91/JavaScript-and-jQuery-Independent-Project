var Ccount = 0
var Javacount = 0
var Phpcount = 0
var Rubycount = 0


$(document).ready(function(){
  $(".start").click(function(){
    $("#questionyourname").show();
    $(".start").hide();
    $(".nextName").show();
  });

  $("#questionyourname").submit(function(event){
    event.preventDefault();
    person1Input = $("input#person1").val();
    $("#questionyourname").hide();
    $(".question1").show();
    $(".nextName").hide();
    $(".next1").show();
  });


  $(".next1").click(function(){
    if ($("#Q1").val() === "C"){
    Ccount = Ccount + 1
    }else if ($("#Q1").val() === "J"){
    Javacount = Javacount + 1
    }else if ($("#Q1").val() === "P"){
    Phpcount = Phpcount + 1
    }else if ($("#Q1").val() === "R"){
    Rubycount = Rubycount + 1
    }else{
    }
    $(".question1").hide();
    $(".question2").show();
    $(".next1").hide();
    $(".next2").show();
  });

  $(".next2").click(function(){
    if ($("#Q2").val() === "C"){
      Ccount = Ccount + 1
    }else if ($("#Q2").val() === "J"){
      Javacount = Javacount + 1
    }else if ($("#Q2").val() === "P"){
      Phpcount = Phpcount + 1
    }else if ($("#Q2").val() === "R"){
      Rubycount = Rubycount + 1
    }else{
    }
    $(".question2").hide();
    $(".question3").show();
    $(".next2").hide();
    $(".next3").show();
  });

  $(".next3").click(function(){
    if ($("#Q3").val() === "C"){
      Ccount = Ccount + 1
    }else if ($("#Q3").val() === "J"){
      Javacount = Javacount + 1
    }else if ($("#Q3").val() === "P"){
      Phpcount = Phpcount + 1
    }else if ($("#Q3").val() === "R"){
      Rubycount = Rubycount + 1
    }else{
    }
    $(".question3").hide();
    $(".question4").show();
    $(".next3").hide();
    $(".next4").show();
  });

  $(".next4").click(function(){
    if ($("#Q4").val() === "C"){
      Ccount = Ccount + 1
    }else if ($("#Q4").val() === "J"){
      Javacount = Javacount + 1
    }else if ($("#Q4").val() === "P"){
      Phpcount = Phpcount + 1
    }else if ($("#Q4").val() === "R"){
      Rubycount = Rubycount + 1
    }else{
    }
    $(".question4").hide();
    $(".question5").show();
    $(".next4").hide();
    $(".next5").show();
  });

  $(".next5").click(function(){
    if ($("#Q5").val() === "C"){
    Ccount = Ccount - 1
    }else if ($("#Q5").val() === "J"){
    Javacount = Javacount - 1
    }else if ($("#Q5").val() === "P"){
    Phpcount = Phpcount - 1
    }else if ($("#Q5").val() === "R"){
    Rubycount = Rubycount - 1
    }else{
    }
    $(".question5").hide();
    $(".person1").text(person1Input)
    $(".resultText").show();
    $(".EndNote").show();
    if ( Ccount > Javacount && Ccount > Phpcount && Ccount > Rubycount ){
    $(".resultC").show();
  }else if ( Javacount > Ccount && Javacount > Phpcount && Javacount > Rubycount ){
    $(".resultJava").show();
  }else if ( Phpcount > Javacount && Phpcount > Ccount && Phpcount > Rubycount ){
    $(".resultPhp").show();
  }else if ( Rubycount > Javacount && Rubycount > Phpcount && Rubycount > Ccount ){
    $(".resultRuby").show();
    }
    $(".next5").hide();
    $(".REstart").show();
  });

});
