class Vehicle {
  //클래스정의
  constructor(
    x,
    y,
    //초기위치
    mass,
    //질량
    rad,
    //반지름
    speedMx,
    //최대속도
    forceMx,
    //최대힘
    color //색상
  ) {
    this.pos = createVector(x, y);
    //위치를 나타내는 벡터
    this.vel = p5.Vector.random2D();
    //속도를 나타내는 벡터
    this.acc = createVector();
    //가속도 나타내는 벡터
    this.mass = mass;
    //질량
    this.rad = rad;
    //반경
    this.speedMx = speedMx;
    //최대 속도
    this.forceMx = forceMx;
    //최대 힘
    this.neighborhooodRad = 50;
    //상호작용하는 주변을 정의하는 반경
    this.color = color;
    //색상
  }

  cohesion(
    others //응집력
  ) {
    let cnt = 0;
    //cnt는 0으로 초기화
    const steer = createVector(0, 0);
    //초기 벡터 생성
    others.forEach((each) =>
      //other 배열 요소 반복
      {
        if (each !== this) {
          //자기상호작용방지
          const distSq =
            (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
          if (distSq < this.neighborhooodRad ** 2) {
            steer.add(each.pos);
            cnt++;
            //정의된 주변 반경 내에서 주변 오브젝트 중심을 향해
            //이동하도록 하는 조항력 계산
            //조항력은 벡터에 누적되고, cnt는 응집력으로 고려되는 주변의 수를 계산
          }
        }
      }
    );
    if (cnt > 0) {
      //반경 내에 인접 오브젝트 있는지 확인
      steer.div(cnt);
      //주변의 평균 위치를 계산하여 현재 차량을 주변 차량의 중심으로 이동
      steer.sub(this.pos);
      //주변의 평균 위치를 계산한 후 조향 벡터에서 현재 차량의 위치(this.pos)를 뺌
      steer.setMag(this.speedMx);
      //응집력이 오브젝트의 제한 속도를 초과하지 않도록 보장
      steer.sub(this.vel);
      //목표 지점에 도달하기 위해 원하는 속도 변화에 기여
      steer.limit(this.forceMx);
      //응집력이 오브젝트의 방향 전환 능력을 초과하지 않도록 보장
    }
    return steer;
    //방법이 종료되면 수정된 스티어 벡터(steer vector)가 반환
  }
  //최대 속도와 힘의 한계를 계산해 주변 오브젝트를 중심으로 유도하는 응집력 계산
  //조향 벡터는 조향력의 원하는 방향과 크기

  align(
    others //정렬
  ) {
    let cnt = 0;
    //cnt는 0으로 초기화
    const steer = createVector(0, 0);
    //초기 벡터 생성
    others.forEach((each) =>
      //other 배열 요소 반복
      {
        if (each !== this) {
          //오브젝트가 스스로 정렬을 계산하지 않도록 보장
          const distSq =
            (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
          //현재 오브젝트의 위치(this)와 주변 차량의 위치(각각) 사이의 유클리드 거리(distSq)를 계산
          if (distSq < this.neighborhooodRad ** 2) {
            //distSq가 주변 반경의 제곱보다 작은지 확인
            steer.add(each.vel);
            //주변오브젝트속도누적
            cnt++;
            //조건 만족하는 주변마다 cnt변수 1씩 증가
          }
        }
      }
    );
    if (cnt > 0) {
      //정의된 인접 반경(cnt가 0보다 큼) 내에 인접한 오브젝트가 있는지 확인
      steer.div(cnt);
      //주변오브젝트의 평균속도를 계산하여 정렬방향을 설정
      steer.setMag(this.speedMx);
      //정렬력이 오브젝트의 제한 속도를 초과하지 않도록 보장
      steer.sub(this.vel);
      //오브젝트의 속도를 주변에 맞추기 위해 원하는 속도 변화에 기여
      steer.limit(this.forceMx);
      //조향 벡터의 크기를 차량에 허용되는 최대 힘(this.forceMx)으로 제한
    }
    return steer;
    //방법이 끝나면 수정된 스티어링 벡터가 반환
    //벡터를 사용하여 오브젝트의 속도나 방향을 조정하여 주변에 정렬
  }

  separate(
    others //분리
  ) {
    let cnt = 0;
    //cnt는 0으로 초기화
    const steer = createVector(0, 0);
    //초기 벡터 생성
    others.forEach((each) =>
      //other 배열 요소 반복
      {
        if (each !== this) {
          //오브젝트이 스스로 분리를 계산하지 않도록 보장
          const dist = this.pos.dist(each.pos);
          //현재 오브젝트의 위치(이것)와 주변 오브젝트의 위치(각) 사이의 거리(dist)를 계산
          if (dist > 0 && this.rad + each.rad > dist) {
            //두 오브젝트 반경의 합이 두 차량 사이의 거리보다 클 경우 이 조건은 두 오브젝트가 서로 너무 가까이 있는지, 분리가 필요한지 점검
            const distNormal = dist / (this.rad + each.rad);
            const towardMeVec = p5.Vector.sub(this.pos, each.pos);
            towardMeVec.setMag(1 / distNormal);
            //벡터(MeVec를 향하여)를 주변오브젝트(each.pos)에서 현재오브젝트(this.pos)으로 정규화된 방향 벡터로 계산
            //주변오브젝트로부터 멀어지는 것을 보장
            steer.add(towardMeVec);
            //여러 이웃 오브젝트의 힘을 축적
            cnt++;
            ////조건 만족하는 주변마다 cnt변수 1씩 증가
          }
        }
      }
    );
    if (cnt > 0) {
      //인접 반경(cnt는 0보다 큼) 내에 인접한 오브젝트가 있는지 확인
      steer.div(cnt);
      //분리가 필요한 모든 주변을 고려하여 분리에 대한 평균 조향력을 계산
      steer.setMag(this.speedMx);
      //조향 벡터의 크기(길이)를 오브젝트에 허용되는 최대 속도(this.speedMx)로 설정
      steer.sub(this.vel);
      //주변 오브젝트와의 분리를 유지하기 위해 원하는 속도 변화에 기여
      steer.limit(this.forceMx);
      //조향 벡터의 크기를 오브젝트에 허용되는 최대 힘(this.forceMx)으로 제한
    }
    return steer;
    //방법 종료 후 수정된 스티어 벡터 반환
    //미리 정의된 속도 및 힘 제약을 초과하지 않도록 제한
  }

  applyForce(
    force //외부에서 들어오는 힘 반영
  ) {
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    //질량에 의한 힘 나누기
    this.acc.add(forceDivedByMass);
    //가속 누적
  }

  update() {
    //오브젝트의 위치, 속도, 가속도 상태 업데이트
    this.vel.add(this.acc);
    //가속도에 따른 속도의 변화
    this.vel.limit(this.speedMx);
    //속도가 미리 정의된 제한을 초과하지 않도록 보장
    this.pos.add(this.vel);
    //속도에 따른 위치 변화
    this.acc.mult(0);
    //0을 곱하여 가속도를 0으로 재설정
    //이전 프레임에서 가속도가 누적되는 것을 방지
  }

  borderInfinite() {
    //경계가 있는 캔버스 또는 시뮬레이션 영역 내에서 오브젝트에 대한 랩어라운드 동작을 구현
    if (this.pos.x < -infiniteOffset) {
      //오브젝트의 x좌표(this.pos.x)가 무한 오프셋의 음의 값보다 작은지 확인
      this.pos.x = width + infiniteOffset;
      //오브젝트를 캔버스의 오른쪽으로 효과적으로 wraps시켜 매끄러운 연속적인 공간의 외관 구현
    } else if (this.pos.x > width + infiniteOffset) {
      //오브젝트의 x좌표가 캔버스 너비에 무한 오프셋을 더한 값보다 큰지 확인
      this.pos.x = -infiniteOffset;
      //오브젝트의 x좌표는 캔버스의 왼쪽 경계에서 오프셋을 뺀 값으로 설정
    }
    if (this.pos.y < -infiniteOffset) {
      //캔버스의 상단 또는 하단 경계를 넘어 이동할 때 랩어라운드 동작을 처리하기 위해 위의 각주와 동일함
      this.pos.y = height + infiniteOffset;
      //오브젝트의 y 좌표는 캔버스의 하단 경계에 오프셋(무한 오프셋)을 더한 값으로 설정
    } else if (this.pos.y > height + infiniteOffset) {
      //오브젝트의 y 좌표가 캔버스 높이에 무한 오프셋을 더한 값보다 큰지 확인
      this.pos.y = -infiniteOffset;
      //오브젝트의 y좌표는 캔버스의 상단 경계에서 infiniteOffset을 뺀 값으로 설정
    }
  }

  display() {
    //표시
    push();
    //현재 변환 상태 저장
    translate(this.pos.x, this.pos.y);
    //조정 시스템 위치(0, 0)에 영향
    rotate(this.vel.heading());
    //속도 방향으로 회전
    noStroke();
    //선 없음
    fill(this.color);
    //채우기 색상
    beginShape();
    //형상 정의
    vertex(this.rad, 0);
    // 점, 선, 삼각형, 사각형, 그리고 다각형의 꼭짓점 좌표를 지정
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    //삼각형
    vertex(0, 0);
    //오브젝트 센터
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    //최종 꼭짓점 정의
    endShape(CLOSE);
    //형상 정의 마무리
    pop();
    //이전 상태 복원
  }
}
