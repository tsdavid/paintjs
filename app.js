const canvas = document.getElementById('jsCanvas'); // 마우스를 인식할 곳을 불러온다.
const ctx = canvas.getContext('2d'); // mdn canvas api를 사용해서 그릴 요소, canvas안에서 픽셀을 두루는 툴

ctx.strokeStyle = '#2c2c2c'; // about strokestyle MDN = https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle
ctx.lineWidth = 2.5; // 선 굵기를 정하는 곳

let painting = false; // 기본적으로 그림을 그리는 것을 거짓으로 정하고

function stopPainting() {
    painting = false; // 그만 그려야 하는 것을 함수로 만들어 호출하기 편리하게 만든다.
}

function startPainting() {
    painting = true;
}

function onmouseMove(event) {
    // 모든 움직임고가 라인을 책임진다.
    const x = event.offsetX; // 정한 객체 내에서의 좌표
    const y = event.offsetY; // offset은 mousemove event의 객체
    if (!painting) {
        // if i am not painting == 이게 painting이 false인걸ㄲ, true인걸까
        ctx.beginPath(); // path를 시작하는점
        ctx.moveTo(x, y); // x,y를 이동하는 거 인듯
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

if (canvas) {
    canvas.addEventListener('mousemove', onmouseMove); // 마우스의 움직임을 확인하는 event
    canvas.addEventListener('mousedown', startPainting);
    // 마우스를 클릭해 그림을 그리를 걸 측정하는 event, mousedown은 클릭하고 있을때 를 감지하는 event
    canvas.addEventListener('mouseup', stopPainting); // mouseup은 클릭을 해제한 상태, 즉 그림을 그만 그리겠다는 event
    canvas.addEventListener('mouseleave', stopPainting); // 마우스가 캔버스 즉, 우리가 그림을 그릴 좌표 밖으로 벗어나면 그리기를 그만 해야함
}

/*
mousemove  객체들
clientX and Y = 전체 윈도우에서의 좌표
offsetX = 정한 객체 내에서의 좌표
*/