import React, { useState, useRef } from 'react';

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
}

const scores = {
    가위: 1,
    바위: 0,
    보: -1
}

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v){
        return v[1] === imgCoord;
    })[0];
}

const RSP = () => {
    const [result, setResult] = useState('');
    const [imgCoord, setImgCoord] = useState(rspCoords.바위);
    const [score, setScore] = useState(0);
    const interval = useRef();

    const changeHand = () => {
        const {imgCoord} = this.state;

        if (imgCoord === rspCoords.바위) {
            setImgCoord(rspCoords.가위);
        } else if (imgCoord === rspCoords.가위) {
            setImgCoord(rspCoords.보);
        } else if (imgCoord === rspCoords.보) {
            setImgCoord(rspCoords.바위);
        }
    }

    const onClickBtn = (choice) => () => {
        clearInterval(interval.current);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;

        if(diff === 0) {
            setResult("비겼습니다.");
        } else if ([-1, 2].includes(diff)) {
            setResult("이겼습니다!");
            setScore((prevScore) => prevScore + 1);
        } else {
            setResult("졌습니다ㅠㅠ");
            setScore((prevScore) => prevScore - 1);
        }

        setTimeout(() => {
            interval.current = setInterval(changeHand, 100);
        }, 1000);
    }
    
    return (
        <>
            <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
            <div>
              <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
              <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
              <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score}점</div>
        </>  
    )
}

class RSP extends Component {



    componentDidMount() { //컴포넌트가 첫 렌더링 된 후, 여기에 비동기 요청을 많이 함
        this.interval = setInterval(this.changeHand, 100);
    }

    componentWillUnmount() { //컴포넌트가 제거되기 직전, 비동기 요청 정리를 많이 함
        clearInterval(this.interval);
    }

}
 
export default RSP;