let capture
let tracker
let balls = []
let eyeballs = []



function setup() {

    createCanvas(800, 600).parent('p5')

    // start capturing video
    capture = createCapture(VIDEO)
    capture.size(800, 600)
    capture.hide()

    // create the tracker
    tracker = new clm.tracker()
    tracker.init()
    tracker.start(capture.elt)




}

function draw() {

    // draw background stuff
    background(0)

    // show the mirrored video feed
    showFlippedCapture()

    noStroke()
    fill(0, 0, 255, 50)
    rect(0,0, 400, 300)

    rect (400, 300, 800, 600)

    fill(76, 61, 242, 50)
    rect(400, 0, 800, 300)

    rect(0, 300, 400, 300)


    // get new data from tracker
    let features = tracker.getCurrentPosition()



   //      fill(255, 0, 0, 100)
   // triangle(features[1].x, features[1].y, features[2].x, features[2].y, features[35].x, features[35].y)


    // sometimes the tracker doesn't capture anything
    // in that case, we want to stop the function right here using 'return'
    if (features.length == 0) {
        return
    }
    stroke(0, 0, 0)
    strokeWeight(2)
    line(features[13].x,features[13].y, features[0].x,features[0].y)
    line(features[14].x,features[14].y, features[1].x, features[1].y)
    line(features[13].x,features[13].y, features[2].x,features[2].y)
    line(features[12].x,features[12].y, features[1].x, features[1].y)
    line(features[12].x,features[12].y, features[3].x, features[3].y)
    line(features[11].x,features[11].y, features[2].x,features[2].y)
    line(features[11].x,features[11].y, features[4].x,features[4].y)
    line(features[10].x,features[10].y, features[3].x, features[3].y)
    line(features[10].x,features[10].y, features[5].x, features[5].y)
    line(features[9].x,features[9].y, features[4].x,features[4].y)
    line(features[9].x,features[9].y, features[6].x,features[6].y)
    line(features[8].x,features[8].y, features[5].x, features[5].y)



    line(features[14].x,features[14].y, features[22].x, features[22].y)
    // line(features[16].x,features[16].y, features[15].x, features[15].y)
    // line(features[16].x,features[16].y, features[17].x, features[17].y)
    line(features[18].x,features[18].y, features[0].x, features[0].y)

    line(features[18].x,features[18].y, features[62].x, features[62].y)
    line(features[22].x,features[22].y, features[62].x, features[62].y)











    // stroke(0, 0, 0, 150)
    fill(220, 177, 240, 50)
    triangle(features[12].x, features[12].y,features[11].x, features[11].y,
      features[32].x, features[32].y)

    triangle(features[11].x, features[11].y,features[10].x, features[10].y,
      features[32].x, features[32].y)

    fill(220, 177, 240, 100)
    triangle(features[2].x, features[2].y,features[3].x, features[3].y,
              features[27].x, features[27].y)

    triangle(features[3].x, features[3].y,features[4].x, features[4].y,
              features[27].x, features[27].y)


    triangle(features[5].x, features[5].y,features[4].x, features[4].y,
            features[32].x, features[32].y)

    triangle(features[9].x, features[9].y,features[10].x, features[10].y,
              features[27].x, features[27].y)


  stroke(255,255,255)
  strokeWeight(1)
  circle(features[32].x, features[32].y, 7)
  circle(features[27].x, features[27].y, 7)

// let left_eye_ball = {x: features[32].x,
//                        y: features[32].y,
//                        vx: random(-10,10),
//                        vy: random(-10,10),
//                        c: (0,0,0, 150)
//                        }
// eyeballs.push(left_eye_ball)
//
// for (let ball of eyeballs){
//
//   fill(ball.c)
//   circle(ball.x, ball.y, 20)
//
//   ball.x += ball.vx
//   ball.y += ball.vy
//
//   ball.vy += 0.5
//
// }

// let left_eye_ball = {x: features[32].x,
//                        y: features[32].y,
//                        vx: random(-10,50),
//                        vy: random(-10,50),
//                        c: (0,0,0, 150)
//                        }
//
//                        noFill()
//                        stroke(255)
//                        circle(left_eye_ball.x, left_eye_ball.y, 10)
//                        left_eye_ball.x += left_eye_ball.vx
//                        left_eye_ball.y += left_eye_ball.vy

// fill(230, 178, 237, 100)
// triangle(features[13].x, features[13].y,features[12].x, features[12].y,
//   left_eye_ball.x, left_eye_ball.y)


// let leftpupil = features[32]
//     noFill()
//     stroke(255)
//     circle(ball.x, ball.y, 10)
//     ball.x += ball.vx
//     ball.y += ball.vy






    // for (let feature of features) {
    //     stroke(255)
    //     fill(255)
    //     circle(feature.x, feature.y, 4)
    //     text(feature.label, feature.x, feature.y)
    // }



    // the eyes are elements 32 and 27
    fill(230, 99, 247, 100)
    noStroke()
    circle(features[32].x, features[32].y, 20)  // access the array directly
    circle(features[27].x, features[27].y, 20)

    // let bottom_left_eye = features[28, 70, 31, 69, 30]
    fill(0, 0, 0)
    circle(features[28].x, features[28].y, 5)
    circle(features[70].x, features[70].y, 5)
    circle(features[31].x, features[31].y, 5)
    circle(features[69].x, features[69].y, 5)

    // let bottom_right_eye = features[23, 66, 26, 65, 25]
    fill(0)
    circle(features[23].x, features[23].y, 5)
    circle(features[66].x, features[66].y, 5)
    circle(features[26].x, features[26].y, 5)
    circle(features[65].x, features[65].y, 5)



let leye_top = features[29]
let leye_bottom = features[31]
let distance2 = dist(leye_top.x, leye_top.y, leye_bottom.x, leye_bottom.y)

if (distance2 > 15) {
  let leye_center = {x: leye_top.x,
                      y: (leye_bottom.y + leye_top.y) /2}

          let random_ball = {x: leye_center.x,
                             y: leye_center.y,
                             vx: 0,
                             vy: random(-3,3),
                             c: [0, 0, 0]
                             }

                    balls.push(random_ball)
                    }
                    for (let ball of balls){

                      fill(ball.c)
                      circle(ball.x, ball.y, 3)

                      ball.x += ball.vx
                      ball.y += ball.vy

                      ball.vy += 2

                      if (ball.x < 0 || ball.x > width || ball.y < 0 || ball.y > height) {
                           balls.splice(balls.indexOf(ball), 1)
                         }
}








let reye_top = features[24]
let reye_bottom = features[26]
let distance3 = dist(reye_top.x, reye_top.y, reye_bottom.x, reye_bottom.y)

if (distance3 > 15) {
  let reye_center = {x: reye_top.x,
                      y: (reye_bottom.y + reye_top.y) /2}

          let random_ball = {x: reye_center.x,
                             y: reye_center.y,
                             vx: 0,
                             vy: random(-3,3),
                             c: [0, 0, 0]
                             }

                    balls.push(random_ball)
                    }
                    for (let ball of balls){

                      fill(ball.c)
                      circle(ball.x, ball.y, 3)

                      ball.x += ball.vx
                      ball.y += ball.vy

                      ball.vy += 2

                      if (ball.x < 0 || ball.x > width || ball.y < 0 || ball.y > height) {
                           balls.splice(balls.indexOf(ball), 1)
                         }
}








let mouth_top = features[60]
let mouth_bottom = features [57]
let distance = dist(mouth_top.x, mouth_top.y, mouth_bottom.x, mouth_bottom.y)

if (distance > 20) {
  let mouth_center = {x: mouth_top.x,
                      y: (mouth_bottom.x + mouth_top.y) /2}


      let random_ball = {x: mouth_center.x,
                         y: mouth_center.y,
                         vx: random(-10,10),
                         vy: random(-10,10),
                         c: [0, 0, 0, 150]
                         }

      balls.push(random_ball)
    }

    for (let ball of balls){

      fill(ball.c)
      circle(ball.x, ball.y, 15)

      ball.x += ball.vx
      ball.y += ball.vy

      ball.vy += 1.2

      if (ball.x < 0 || ball.x > width || ball.y < 0 || ball.y > height) {
           balls.splice(balls.indexOf(ball), 1)
         }

    }


}

// this function flips the webcam and displays it
function showFlippedCapture() {
    push()
    translate(capture.width, 0)
    scale(-1, 1)
    image(capture, 0, 0, capture.width, capture.height)
    pop()
}
