import React from 'react';
import {List} from "postcss/lib/list";

type CafeProps = {
    code: string;   //고유코드
    name: string;   //카페이름
}

//데이터 상으로 카페에 대응하는 메뉴 리스트 있음 -> coffee컴포넌트와 연결됨

function Cafe(props: CafeProps) {
    return (
        <div>
            <div className="image">카페 이미지</div>
            <p>카페 코드: {props.code}</p>
            <p>카페 이름: {props.name}</p>
        </div>
    );
}

export default Cafe;