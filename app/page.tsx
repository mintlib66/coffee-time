import Section from "@/components/section";

export default function Home() {
    type mainSection = {code:string, desc:string, btn:string, link: string}
    const section_arr:mainSection[] = [
        {code: "시작하기", desc: "123123123", btn: '123', link: ''},
        {code: "시작하기2", desc: "123123123", btn: '123', link: ''},
        {code: "시작하기3", desc: "123123123", btn: '123', link: ''},
        {code: "시작하기4", desc: "123123123", btn: '123', link: ''},
    ];

    return (
        <>
            <Section title={"시작하기"} desc={"여기에 이 웹페이지에 대한 간단한 설명이 들어갑니다."} btn={""} link={""}/>
            <Section title={"최근목록"} desc={"최근에 사용한어쩌구...프리셋같은느낌"} btn={""} link={""}/>
            <Section title={"카페찾기"} desc={"근처 카페와 메뉴를 쉽게 확인해요."} btn={"지도에서 찾기"} link={"/cafe"}/>
            <Section title={"팀만들기"} desc={"자주 주문하는 팀 인원을 저장해 커피 주문 목록을 간단히 만들어보세요. "} btn={"팀 추가하기"} link={"/team"}/>
        </>
    );
}
