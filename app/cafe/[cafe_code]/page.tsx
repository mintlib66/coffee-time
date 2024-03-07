type PageParams = {
    cafe_code: number
}

export default function Page({params}: { params: PageParams }){
    return (
        <div>cafe 페이지 동적 주소 세그먼트 접근 test: {params.cafe_code}</div>
    );
}