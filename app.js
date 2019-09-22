const canvas = document.getElementById('jsCanvas'); // 마우스를 인식할 곳을 불러온다.

let painting = false; // 기본적으로 그림을 그리는 것을 거짓으로 정하고

function stopPainting() {
    painting = false; // 그만 그려야 하는 것을 함수로 만들어 호출하기 편리하게 만든다.
}

function onmouseMove(event) {
    const x = event.offsetX; // 정한 객체 내에서의 좌표
    const y = event.offsetY; // offset은 mousemove event의 객체
}

function onMouseDown(event) {
    painting = true; // 그림을 그리는 행위 = 마우스를 클릭하는 행위를 하는 함수에 들어오면 painting을 true로 바꾼다.
    console.log(event);
}

function onMouseUp(event) {
    // painting = false; // 마우스 클릭을 헤제하면 그림을 그만 그리겠다는 의미니까, painting을 false로 바꾼다.
    stopPainting(); // paint = false를 바꾸는 함수 호출
}

if (canvas) {
    canvas.addEventListener('mousemove', onmouseMove); // 마우스의 움직임을 확인하는 event
    canvas.addEventListener('mousedown', onMouseDown);
    // 마우스를 클릭해 그림을 그리를 걸 측정하는 event, mousedown은 클릭하고 있을때 를 감지하는 event
    canvas.addEventListener('mouseup', onMouseUp); // mouseup은 클릭을 해제한 상태, 즉 그림을 그만 그리겠다는 event
    canvas.addEventListener('mouseleave', stopPainting); // 마우스가 캔버스 즉, 우리가 그림을 그릴 좌표 밖으로 벗어나면 그리기를 그만 해야함
}

/*
mousemove  객체들
clientX and Y = 전체 윈도우에서의 좌표
offsetX = 정한 객체 내에서의 좌표
*/