import React from 'react';
import Link from 'next/link';

type BodyProps = {
    title: string;
    desc: string;
    btn: string;
    link: string;
    // children: React.ReactNode
}
// 여기가 본문 들어가는 부분
function Section(props: BodyProps) {
    return (
        <section className="flex flex-col items-center justify-between p-8 m-4 ring-1 rounded-lg">
            <h1 className="text-4xl font-bold mb-4">{props.title}</h1>
            <p className="p-4">{props.desc}</p>
            {props.btn != "" && <Link href={props.link}>{props.btn}</Link>}
        </section>
    );
}

export default Section;