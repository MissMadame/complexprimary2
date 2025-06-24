let posterBtn, typographyBtn, gbt, sbt, infobt;
const btnWidth = 170;
const btnHeight = 40;
const spacing = 20;
let mySwitch;
let mySlider, mySlider1, mySlider2, mySlider3, mySlider4, mySlider5, mySlider6;
let mySwitch1;



const rows = 5;    // 行数
const cols = 10;    // 列数
const squareSize = 37; // 每个方块大小





let colorMatrix = [
  ["#00baeb", "#bc59d3", "#ff8200", "#ea4846", "#7f58bd", "#ffe9f4", "#c1e153", "#ffd864", "#b35b3d", "#eb5299"],
  ["#846adc", "#f94151", "#d63665", "#8e7de4", "#4dc7f6", "#00b26e", "#fffbbd", "#ff9f36", "#e45c26", "#fff435"],
  ["#fefefe", "#f24284", "#c73f69", "#6c79e0", "#45d8f9", "#eab6a9", "#c3d2f5", "#e98b38", "#ff5e3d", "#cdada4"],
  ["#2b6ed4", "#fe3e64", "#df3e9c", "#ffd9d3", "#00c2d1", "#56b746", "#bae7a3", "#865445", "#ff8d4f", "#ff4b59"],
  ["#00ac5f", "#f64776", "#dc9ff5", "#2389af", "#26c9cb", "#82d060", "#f9c956", "#955442", "#ff9484", "#d7f3fd"]
];



let sax = 1;
let say = 1;



let mls = []
let mlsx = -1

let activeColors = [...colorMatrix[0]]; // 默认激活第一行的颜色
let rects = []; // 存储所有矩形对象
const rectWidth = 38;
const rectHeight = 19;
const padding = 1; // 矩形之间的间距

let myFont;
function preload() {


  for (let i = 0; i < 3; i++) {


    mls[i] = loadImage(i + ".png")


  }

  myFont = loadFont('a.otf');


}
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(myFont);
  textSize(24);

  sax = width / 1512
  say = height / 892
  // createAdaptiveCanvas(1512, 892);
  // canvas.style('width', '100%');
  // canvas.style('height', (window.innerHeight ) + 'px');
  // canvas.style('object-fit', 'contain');
  mySlider = new Slider(188, 327, 562, {
    lineHeight: 1,
    lineThickness: 3,
    knobSize: 18,
    id: 0,
    value: 0.3
  });
  mySlider1 = new Slider(188, 442, 157, {
    lineHeight: 1,
    lineThickness: 3,
    knobSize: 18,
    id: 1,
    value: 0.1
  });
  mySlider2 = new Slider(392, 442, 157, {
    lineHeight: 1,
    lineThickness: 3,
    knobSize: 18,
    id: 2,
    value: 0.1
  });
  mySlider3 = new Slider(596, 442, 157, {
    lineHeight: 1,
    lineThickness: 3,
    knobSize: 18,
    id: 3,
    value: 0.1
  });

  mySlider4 = new Slider(188, 566, 253, {
    lineHeight: 1,
    lineThickness: 3,
    knobSize: 18,
    id: 4,
    value: 0
  });
  mySlider5 = new Slider(503, 566, 250, {
    lineHeight: 1,
    lineThickness: 3,
    knobSize: 18,
    id: 5,
    value: 0
  });
  mySwitch = new Switch(240, 175);
  mySwitch2 = new Switch(580, 175);
  posterBtn = {
    x: 0,
    y: 0,
    w: 109,
    h: 40,
    label: "Poster",
    bgColor: color(0),
    textColor: color(255),
    isHovered: false
  };

  // 创建Typography按钮(白色背景，黑色文字，黑色边框)
  typographyBtn = {
    x: 0,
    y: 0,
    w: 170,
    h: 40,
    label: "Typography",
    bgColor: color(255),
    textColor: color(0),
    borderColor: color(0),
    isHovered: false
  };

  gbt = {
    x: 169,
    y: 46,
    w: 153,
    h: 41,
    label: "Generate",
    bgColor: color(255),
    textColor: color(0),
    borderColor: color(0),
    isHovered: false
  };

  sbt = {
    x: 348,
    y: 46,
    w: 90,
    h: 41,
    label: "Save",
    bgColor: color(255),
    textColor: color(0),
    borderColor: color(0),
    isHovered: false
  };
  infobt = {
    x: 1329,
    y: 46,
    w: 77,
    h: 41,
    label: "Info",
    bgColor: color(255),
    textColor: color(0),
    borderColor: color(0),
    isHovered: false
  };


  // 初始化矩形对象
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 10; col++) {
      rects.push({
        x: col * (rectWidth + padding) + 190,
        y: row * (rectHeight + padding) + 665,
        color: colorMatrix[row][col],
        active: activeColors.includes(colorMatrix[row][col])
      });
    }
  }



  localStorage.setItem("sc", JSON.stringify(activeColors))


  localStorage.setItem("sline", "0");
  localStorage.setItem("srandom", "0");


  localStorage.setItem("s1", 2)
  localStorage.setItem("s2", 2)
  localStorage.setItem("s3", 2)
  localStorage.setItem("s4", 30)
  localStorage.setItem("s5", 0)






  var iframe = document.getElementById('myIframe');


  iframe.contentWindow.createRandomShapes();


}



let s0 = 1;
let s1 = 0;
let s2 = 0;
let s3 = 0;
let s4 = 30;
let s5 = 0;
function draw() {
  background(255);

  scale(sax, say)
  stroke(0)
  strokeWeight(1)
  line(123, 0, 123, height)
  line(124, 128, width, 128)

  s0 = parseInt(map(mySlider.options.value, 0, 1, 1, 60))
  s1 = parseInt(map(mySlider1.options.value, 0, 1, 0, 20))
  s2 = parseInt(map(mySlider2.options.value, 0, 1, 0, 20))
  s3 = parseInt(map(mySlider3.options.value, 0, 1, 0, 20))
  s4 = parseInt(map(mySlider4.options.value, 0, 1, 30, 300))
  s5 = parseInt(map(mySlider5.options.value, 0, 1, 0, 9))
  line(816, 128, 816, height)

  push()


  translate(41, 154)
  rotate(-PI / 2)

  // 绘制Poster按钮
  drawButton(posterBtn, 0);
  pop()

  push()


  translate(41, 349)
  rotate(-PI / 2)
  // 绘制Typography按钮
  drawButton(typographyBtn, 0);

  // 检查悬停状态
  // checkHover(posterBtn);
  // checkHover(typographyBtn);



  pop()


  drawButton(gbt, 0);
  drawButton(sbt, 0);
  drawButton(infobt, 1);


  push()

  textAlign(LEFT)
  text("Fill", 189, 190)

  text("Total Number of Shapes", 189, 270)
  text("Number of Triangle ", 189, 394)

  text("Number of Rect ", 392, 394)
  text("Number of Ellipse ", 596, 394)
  text("Minimum Shape Size ", 189, 518)
  text("Color Palette", 189, 624)
  text("Rotation Precision ", 504, 518)
  text("Wireframe", 320, 190)

  text("Random", 494, 190)
  //  text("Alphabet",190,790)
  text("Symmetry", 650, 190)
  pop()
  mySwitch.display();
  mySwitch2.display();


  mySlider.display();
  mySlider1.display();
  mySlider2.display();
  mySlider3.display();
  mySlider4.display();
  mySlider5.display();


  fill(0)
  rect(rects[0].x, rects[0].y, rectWidth * 10 + 10, rectHeight * 5 + 5);
  // 绘制所有矩形
  for (let rz of rects) {
    // 绘制矩形底色
    fill(rz.color);

    rect(rz.x, rz.y, rectWidth, rectHeight);

    // 如果激活，绘制白色边框
    if (rz.active) {

      push()
      fill(255);

      // 左边框
      rect(rz.x, rz.y, 5, rectHeight);
      // 上边框
      rect(rz.x, rz.y, rectWidth, 5);
      pop()
    }
  }




  if (checkHover(infobt)) {

    push()

    imageMode(CENTER)
    image(mls[mlsx], 1350 / sax, 96 / say, mls[mlsx].width / 7, mls[mlsx].height / 7)


    pop()


  }
  else {

    mlsx = Math.floor(Math.random() * 3)
  }
}


function drawButton(btn, y) {
  // 绘制背景
  fill(btn.bgColor);
  if (btn.borderColor) {
    stroke(btn.borderColor);
    strokeWeight(1);
  } else {
    noStroke();
  }
  rect(btn.x, btn.y, btn.w, btn.h, y == 0 ? 50 : 0);

  // 绘制文字
  textSize(20);
  textAlign(CENTER, CENTER);
  fill(btn.textColor);
  noStroke();
  text(btn.label, btn.x + btn.w / 2, btn.y + btn.h / 2 - 3);

  // 悬停效果
  if (btn.isHovered) {
    fill(0, 0, 0, 20);
    noStroke();
    rect(btn.x, btn.y, btn.w, btn.h, 5);
  }
}

function checkHover(btn) {



  return mouseX / sax > btn.x && mouseX / sax < btn.x + btn.w && mouseY / say > btn.y && mouseY / say < btn.y + btn.h

}

function mousePressed() {


  console.log(1111)
  // 检查Poster按钮点击
  if (
    mouseX / sax / sax > posterBtn.x &&
    mouseX / sax / sax < posterBtn.x + posterBtn.w &&
    mouseY / say / say > posterBtn.y &&
    mouseY / say / say < posterBtn.y + posterBtn.h
  ) {
    console.log("Poster button clicked");
    // 在这里添加Poster按钮的功能
  }

  // 检查Typography按钮点击
  if (
    mouseX / sax > typographyBtn.x &&
    mouseX / sax < typographyBtn.x + typographyBtn.w &&
    mouseY / say > typographyBtn.y &&
    mouseY / say < typographyBtn.y + typographyBtn.h
  ) {
    console.log("Typography button clicked");
    // 在这里添加Typography按钮的功能
  }

  console.log(checkHover(gbt))
  if (checkHover(gbt)) {


    var iframe = document.getElementById('myIframe');


    iframe.contentWindow.createRandomShapes();


  }
  if (checkHover(sbt)) {


    var iframe = document.getElementById('myIframe');


    iframe.contentWindow.exportToSVG();


  }




  for (let i = 0; i < rects.length; i++) {
    let rect = rects[i];
    // 检查是否点击了矩形
    if (mouseX / sax > rect.x && mouseX / sax < rect.x + rectWidth &&
      mouseY / say > rect.y && mouseY / say < rect.y + rectHeight) {

      // 切换激活状态
      rect.active = !rect.active;

      // 更新激活颜色数组
      if (rect.active) {
        if (!activeColors.includes(rect.color)) {
          activeColors.push(rect.color);
        }
      } else {
        let index = activeColors.indexOf(rect.color);
        if (index > -1) {
          activeColors.splice(index, 1);
        }
      }

      break; // 只处理一个矩形的点击
    }
  }

  localStorage.setItem("sc", JSON.stringify(activeColors))

  if (mySlider.contains(mouseX / sax, mouseY / say)) mySlider.startDrag();
  if (mySlider1.contains(mouseX / sax, mouseY / say)) mySlider1.startDrag();
  if (mySlider2.contains(mouseX / sax, mouseY / say)) mySlider2.startDrag();
  if (mySlider3.contains(mouseX / sax, mouseY / say)) mySlider3.startDrag();
  if (mySlider4.contains(mouseX / sax, mouseY / say)) mySlider4.startDrag();
  if (mySlider5.contains(mouseX / sax, mouseY / say)) mySlider5.startDrag();

  // 检查开关点击
  if (mySwitch.clicked()) localStorage.setItem("sline", mySwitch.state ? "1" : "0");
  if (mySwitch2.clicked()) localStorage.setItem("srandom", mySwitch2.state ? "1" : "0");
}

function mouseDragged() {
  // 更新所有滑块的拖动状态
  if (mySlider.isDragging) mySlider.display();
  if (mySlider1.isDragging) mySlider1.display();
  if (mySlider2.isDragging) mySlider2.display();
  if (mySlider3.isDragging) mySlider3.display();
  if (mySlider4.isDragging) mySlider4.display();
  if (mySlider5.isDragging) mySlider5.display();
}

function mouseReleased() {
  // 停止所有滑块的拖动
  mySlider.stopDrag();
  mySlider1.stopDrag();
  mySlider2.stopDrag();
  mySlider3.stopDrag();
  mySlider4.stopDrag();
  mySlider5.stopDrag();


  localStorage.setItem("s1", s1)
  localStorage.setItem("s2", s2)
  localStorage.setItem("s3", s3)
  localStorage.setItem("s4", s4)
  localStorage.setItem("s5", s5)



}


class Switch {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 57;
    this.height = 28;
    this.buttonSize = 22;
    this.buttonOffset = 3;
    this.state = false;
    this.onColor = color(179); // 打开状态颜色
    this.offColor = color(255); // 关闭状态颜色
    this.buttonColor = color(0); // 按钮颜色
  }

  // 显示开关
  display() {

    push()

    stroke(0)
    // 绘制开关背景
    if (this.state) {
      fill(this.onColor);
    } else {
      fill(this.offColor);
    }
    rect(this.x, this.y, this.width, this.height, this.height / 2);

    // 绘制开关按钮
    fill(this.buttonColor);
    if (this.state) {
      // 打开状态 - 按钮在右侧
      circle(
        this.x + this.width - this.buttonOffset - this.buttonSize / 2,
        this.y + this.height / 2,
        this.buttonSize
      );
    } else {
      // 关闭状态 - 按钮在左侧
      circle(
        this.x + this.buttonOffset + this.buttonSize / 2,
        this.y + this.height / 2,
        this.buttonSize
      );
    }

    pop()
  }

  // 检查是否被点击
  clicked() {
    if (
      mouseX / sax > this.x &&
      mouseX / sax < this.x + this.width &&
      mouseY / say > this.y &&
      mouseY / say < this.y + this.height
    ) {
      this.state = !this.state;
      return true;
    }
    return false;
  }

  // 获取当前状态
  getState() {
    return this.state;
  }

  // 设置状态
  setState(newState) {
    this.state = newState;
  }
}


class Slider {
  constructor(x, y, width, options = {}) {
    this.x = x;          // 滑块起始x位置
    this.y = y;          // 滑块y位置
    this.width = width;  // 滑轨总宽度

    // 默认选项
    const defaults = {
      lineHeight: 2,      // 滑轨线高度
      lineThickness: 4,   // 滑轨中间加粗部分高度
      knobSize: 20,       // 滑块直径
      value: 0.5,         // 初始值(0-1)
      color: [0, 0, 0]    // 颜色[r,g,b]
    };

    // 合并选项
    this.options = { ...defaults, ...options };

    // 计算滑块位置
    this.knobX = this.x + this.width * this.options.value;
    this.isDragging = false;
  }

  // 显示滑块
  display() {
    // 绘制滑轨



    stroke(this.options.color);
    strokeWeight(this.options.lineHeight);

    noFill()
    rect(this.x - 3, this.y - 4, this.width + 6, 8, 5)

    // 滑轨两端细线
    line(this.x, this.y, this.x + this.width * 0.3, this.y);
    line(this.x + this.width * 0.7, this.y, this.x + this.width, this.y);

    // 滑轨中间加粗部分
    // strokeWeight(this.options.lineThickness);
    line(this.x + this.width * 0.3, this.y, this.x + this.width * 0.7, this.y);

    // 绘制滑块
    noStroke();
    fill(this.options.color);
    circle(this.knobX, this.y, this.options.knobSize);

    // 如果正在拖动，更新滑块位置
    if (this.isDragging) {




      if (this.options.id == 1 || this.options.id == 2 || this.options.id == 3) {


        if (s1 + s2 + s3 < s0) {

          this.knobX = constrain(mouseX / sax, this.x, this.x + this.width);
          this.options.value = map(this.knobX, this.x, this.x + this.width, 0, 1);
        }

        else {

          if (constrain(mouseX / sax, this.x, this.x + this.width) < this.knobX) {



            this.knobX = constrain(mouseX / sax, this.x, this.x + this.width);
            this.options.value = map(this.knobX, this.x, this.x + this.width, 0, 1);


          }





        }


      }

      else {


        this.knobX = constrain(mouseX / sax, this.x, this.x + this.width);
        this.options.value = map(this.knobX, this.x, this.x + this.width, 0, 1);
      }



      if (this.options.id == 0) {


        // console.log(s0,'kkkk')
        mySlider1.options.value = this.options.value * 2.5 / 3
        mySlider2.options.value = this.options.value * 2.5 / 3
        mySlider3.options.value = this.options.value * 2.5 / 3



        mySlider1.knobX = mySlider1.x + mySlider1.width * mySlider1.options.value;
        mySlider2.knobX = mySlider2.x + mySlider2.width * mySlider2.options.value;
        mySlider3.knobX = mySlider3.x + mySlider3.width * mySlider3.options.value;
        //  mySlider2.knobX = constrain( mouseX/(sax*2.5), mySlider2.x, mySlider2.x + mySlider2.width);
        //  mySlider3.knobX = constrain( mouseX/(sax*2.5), mySlider3.x, mySlider3.x + mySlider3.width);


      }


    }
  }

  // 检查是否点击了滑块
  contains(px, py) {
    return dist(px, py, this.knobX, this.y) < this.options.knobSize / 2;
  }

  // 开始拖动
  startDrag() {
    this.isDragging = true;
  }

  // 停止拖动
  stopDrag() {
    this.isDragging = false;


    console.log(this.options.value)
  }

  // 获取当前值(0-1)
  getValue() {
    return this.options.value;
  }

  // 设置值(0-1)
  setValue(val) {
    this.options.value = constrain(val, 0, 1);
    this.knobX = this.x + this.width * this.options.value;
  }
}
