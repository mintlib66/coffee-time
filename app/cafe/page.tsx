import Link from "next/link";
import Script from "next/script";
import React from "react";

export default function Page() {
    const NAVER_MAP_CLIENT_ID = process.env.NAVER_MAP_CLIENT_KEY;
  return (
    <div>
        <Script type="text/javascript" src={}/>
        <div className="w-1/2">
            <div id="map" className="w-full h-80"></div>
            <p>필터조건에 따라 카페리스트가 나타납니다.</p>
            <ul>
                <li><Link href={'/cafe/a'}>A카페</Link></li>
                <li><Link href={'/cafe/b'}>B카페</Link></li>
                <li><Link href={'/cafe/c'}>C카페</Link></li>
            </ul>
        </div>
    </div>
  )
}
