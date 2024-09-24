import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation(); // 현재 경로를 가져옴

    // 경로에 따라 표시될 헤더 텍스트 결정
    const getHeaderText = () => {
        switch (location.pathname) {
            case "/drug":
                return "표적항암제 금기약물 검색";
            case "/oasis":
                return "OASIS";
            default:
                return "기본 헤더 텍스트"; // 기본값 설정
        }
    };

    return (
        <div className="bg-white rounded shadow-lg py-5 px-7">
            <header>
                <nav className="flex justify-between">
                    <div className="flex items-center space-x-3 lg:pr-16 pr-6">
                        <h2 className="font-bold text-2xl leading-6 text-gray-800">{getHeaderText()}</h2>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;