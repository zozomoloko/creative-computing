$(document).ready(function(){
  console.log("it worked")
  //
  // d.getHours()
  // d.getMinutes()
  // d.getSeconds()

  // console.log(time)

  function clock1(){
      let d = new Date()
      let time = d.toLocaleTimeString()
      $(".clock1").html(time)
  }

  let tick = setInterval(clock1, 1000)

  function clock2(){
    let d = new Date()
    let hour = d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()
    $('.hour').html(hour)
    $('.minute').html(min)
    $('.second').html(sec)

  }
  let tick2 = setInterval(clock2, 1000)

  function clock3(){
    let d = new Date()
    let hour=d.getHours()
    let min=d.getMinutes()
    let sec=d.getSeconds();

    let s = sec;
    // console.log(s);
    let m = min;
    // console.log(m)
    let h = hour;
    // console.log(h)


    $('.second-3').css({"background-color":"DarkTurquoise",
                        "height":s+"px",
                        "width":"20px"
                      });

    $('.minute-3').css({"background-color":"MediumTurquoise",
                        "height":m+"px",
                        "width":"20px",

                      });

    $('.hour-3').css({"background-color":"Turquoise	",
                      "height":h+"px",
                      "width":"20px",

                      });
  }

  let tick3 = setInterval(clock3, 1000)


  function clock4 (){
    let d = new Date()
    let min=d.getMinutes()
    let sec=d.getSeconds();

    let v1 = sec*10;
    let v2 = min*2;
    // console.log(m)


    $('.rabbit').css({"transform":"translate("+v1+"px,0)"});
    $('.turtle').css({"transform":"translate("+v2+"px,0)"});

  }
  let tick4 = setInterval(clock4, 1000)

  function clock5(){
    let d = new Date()
    let sec=d.getSeconds();

    let v = sec *3;
    $('.white').css({"transform":"translate("+v+"px,-300px)"});

  }

    let tick5 = setInterval(clock5, 1000)

})
