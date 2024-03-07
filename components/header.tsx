import React from 'react';
import Link from 'next/link';

export default function Header() {
    return (
        <nav className="w-full fixed">
            <ul className="flex justify-center">
                <li><Link href={'/'}>홈</Link></li> {/* 간단한 사용법 + 최근 주문한 내역 보여주기 */}
                <li><Link href={'/cafe'}>근처 카페</Link></li> {/* 네이버 지도 기반 근처 카페 불러오기, 메뉴 파악 */}
                <li><Link href={'/team'}>사람들</Link></li> {/* 커피를 주문할 사람목록 만들기 - 메신저 연동해서 사람 불러오기 가능하게 */}
            </ul>
        </nav>
    );
}