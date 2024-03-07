import React from 'react';
import {List} from "postcss/lib/list";

type CoffeeProps = {
    name: string; //음료이름
    price: number; //음료가격
}

function Coffee(props: CoffeeProps) {
    return (
        <div>
            <p>음료이름: {props.name}</p>
            <p>음료가격: {props.price}</p>
        </div>
    );
}

export default Coffee;