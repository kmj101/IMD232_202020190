let traffic;
//변수 지정
let infiniteOffset = 80;
//변수 지정

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  //캔버스지정
  colorMode(HSL, 360, 250, 100, 100);
  //색상모드지정
  background('white');
  //배경색지정
  traffic = new Traffic();
  //traffic에 새로운 보기 생성
  for (
    let n = 0;
    n < 10;
    n++ //변수루프초기화, 루프조건
  ) {
    traffic.addVehicle(random(width), random(height));
  }
}
//루프의 각 반복에서 메서드를 호출하며 random(폭) 및 random(높이)의 두 가지 인수 전달

function draw() {
  background('white');
  //캔버스 배경석 설정
  traffic.run();
  //traffic 실행 방법
}
//스케치에 애니메이션 효과

function mouseDragged() {
  //캔버스에 마우스를 드래그 할 때마다 호출
  traffic.addVehicle(mouseX, mouseY);
}
//traffic에 addVehicle() 메서드를 호출하여 현재 마우스X, 마우스Y 좌표를 인수로 전달
//마우스를 드래그 할 때마다 현재 마우스 위치에 새로운 오브젝트가 추가
