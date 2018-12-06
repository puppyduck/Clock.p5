function setup() {
  createCanvas(400, 400);
}

function draw() {
  angleMode(DEGREES)
  background(220);
  var h = hour()
  var m = minute()
  var s = second()
  var hr = map(h, 0, 12, 0, 360, true)
  var mn = map(m, 0, 60, 0, 360, true)
  var se = map(s, 0, 60, 0, 360, true)
  //print(hr+":"+mn+":"+se+":::"+h+":"+m+":"+s)
  noFill()
  strokeWeight(2.5)
  stroke(200, 155, 30)

  arc(width / 2, height / 2, 50, 50, 270, hr + 270)
  stroke(10, 200, 200)
  arc(width / 2, height / 2, 80, 80, 270, mn + 270)
  stroke(201, 38, 157)
  arc(width / 2, height / 2, 120, 120, 270, se + 270)
  stroke(0)
  textSize(20)
  text(h + ":" + m + ":" + s, (width / 2) - 30, 20, )
}