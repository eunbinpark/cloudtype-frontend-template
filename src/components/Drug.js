import React, { useEffect, useState } from 'react';
import DrugService from '../services/DrugService';

const Drug = () => {
    // 보내는 파라미터
    //검색어 : 항암제, 약
    const [tki, setTki] = useState('');
    const [drug, setDrug] = useState('');
    // 효능
    const [efficacy, setEfficacy] = useState('');

    // 받는 파라미터
    // 성분 map : 성분 + 금기/주의 + 효능
    const [drugInfo, setDrugInfo] = useState([]);

    // 대체약물 map
    const [Drugs, setDrugs] = useState([]);

    // tki 값을 출력하기 위한 상태 추가
    const [searchTki, setSearchTki] = useState('');
    const [searchBrandname, setSearchBrandname] = useState('');

    useEffect(() => {
        getDrugInfo();
    }, [])

    // 항암제, 제품 검색
    const getDrugInfo = (e) => {

        DrugService.searchDrug(tki, drug)
            .then((response) => {
                setDrugInfo(response.data);
                console.log(response.data);
                setSearchTki(tki); // 검색 후 tki 값을 설정
            })
            .catch(error => {
                console.log(error);
            })
    }

    const getEfficacyDrugs = () => {

        DrugService.searchEfficacy(tki, efficacy)
            .then((response) => {
                setDrugs(response.data)
                console.log(response.data)
                setSearchBrandname(drug); 
            }).catch(error => {
                console.log(error)
            })

    }

    return (
        <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ fontSize: '25px', fontWeight: 'bold' }}>금기약물 검색</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '10px',
                padding: '15px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#ffffff'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <label style={{ marginRight: '10px' }}>복용하고 있는 표적항암제를 입력해주세요 : </label>
                        <input
                            type="text"
                            value={tki}
                            onChange={(e) => setTki(e.target.value)}
                            style={{ width: '150px', padding: '5px', marginRight: '10px', border: '1px solid #ccc', outline: 'none' }}
                        />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <label style={{ marginRight: '10px' }}>처방받은 약품을 입력해주세요 :</label>
                        <input
                            type="text"
                            value={drug}
                            onChange={(e) => setDrug(e.target.value)}
                            style={{ width: '150px', padding: '5px', marginRight: '10px', border: '1px solid #ccc', outline: 'none' }}
                        />
                        <button onClick={getDrugInfo} style={{ padding: '5px 10px', backgroundColor: '#d3d3d3', border: '1px solid #ccc', cursor: 'pointer' }}>검색</button>
                    </div>
                </div>
                <div style={{ marginBottom: '10px' }}>
                <p>이 제품은
                    <input
                        type="text"
                        value={drugInfo.ingredient}
                        readOnly
                        style={{
                            width: 'auto',
                            minWidth: '150px', // 최소 너비 설정
                            maxWidth: '100%',  // 최대 너비를 부모 요소에 맞춤
                            padding: '5px',
                            marginRight: '10px',
                            border: 'none',
                            borderBottom: '1px solid #000',
                            outline: 'none',
                            boxSizing: 'content-box', // 너비 조정 시 내용에 따라 조정되도록 설정
                            textAlign: 'center', // 텍스트 가운데 정렬
                        }}
                    />
                    성분으로 만들어져 있고,
                </p>
                <p>효능은
                    <input
                        type="text"
                        value={drugInfo.efficacy}
                        readOnly
                        style={{
                            width: 'auto',
                            minWidth: '150px', // 최소 너비 설정
                            maxWidth: '100%',  // 최대 너비를 부모 요소에 맞춤
                            padding: '5px',
                            marginRight: '10px',
                            border: 'none',
                            borderBottom: '1px solid #000',
                            outline: 'none',
                            boxSizing: 'content-box' // 너비 조정 시 내용에 따라 조정되도록 설정
                        }}
                    />
                    이며,
                </p>
                <p>
                    <input
                        type="text"
                        value={searchTki}
                        readOnly
                        style={{
                            width: 'auto',
                            minWidth: '150px', // 최소 너비 설정
                            maxWidth: '100%',  // 최대 너비를 부모 요소에 맞춤
                            padding: '5px',
                            marginRight: '10px',
                            border: 'none',
                            borderBottom: '1px solid #000',
                            outline: 'none',
                            boxSizing: 'content-box', // 너비 조정 시 내용에 따라 조정되도록 설정
                            textAlign: 'center', // 텍스트 가운데 정렬
                        }}
                    />
                    표적항암제의
                    <input
                        type="text"
                        value={drugInfo.ddi}
                        readOnly
                        style={{
                            width: 'auto',
                            minWidth: '150px', // 최소 너비 설정
                            maxWidth: '100%',  // 최대 너비를 부모 요소에 맞춤
                            padding: '5px',
                            marginRight: '10px',
                            border: 'none',
                            borderBottom: '1px solid #000',
                            outline: 'none',
                            boxSizing: 'content-box', // 너비 조정 시 내용에 따라 조정되도록 설정
                            textAlign: 'center', // 텍스트 가운데 정렬
                        }}
                    />
                    약물입니다.
                </p>
            </div>
                </div>

            

            <h2 style={{ fontSize: '25px', fontWeight: 'bold', marginTop: '50px' }}>대체약품 검색</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '10px',
                padding: '15px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#ffffff'
            }}>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ marginRight: '10px' }}>검색하고 싶은 효능을 입력해주세요 :</label>
                <input
                    type="text"
                    value={efficacy}
                    onChange={(e) => setEfficacy(e.target.value)}
                    style={{ width: '150px', padding: '5px', marginRight: '10px', border: '1px solid #ccc', outline: 'none' }}
                />
                <button onClick={getEfficacyDrugs} style={{ padding: '5px 10px', backgroundColor: '#d3d3d3', border: 'none', cursor: 'pointer' }}>검색</button>
            </div>

            <div>
                <h3><input
                        type="text"
                        value={searchBrandname}
                        readOnly
                        style={{
                            width: 'auto',
                            minWidth: '150px', // 최소 너비 설정
                            maxWidth: '100%',  // 최대 너비를 부모 요소에 맞춤
                            padding: '5px',
                            marginRight: '10px',
                            border: 'none',
                            borderBottom: '1px solid #000',
                            outline: 'none',
                            boxSizing: 'content-box', // 너비 조정 시 내용에 따라 조정되도록 설정
                            textAlign: 'center', // 텍스트 가운데 정렬
                        }}
                    />을(를) 대체할 수 있는 효능을 가진 약품목록은 다음과 같습니다.</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #000', padding: '8px', backgroundColor: '#f2f2f2' }}>대체성분</th>
                            <th style={{ border: '1px solid #000', padding: '8px', backgroundColor: '#f2f2f2' }}>대체제품</th>
                            <th style={{ border: '1px solid #000', padding: '8px', backgroundColor: '#f2f2f2' }}>해당제약회사</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Drugs.map((drug, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid #000', padding: '8px' }}>{drug.ingredient}({drug.ingredientkor})</td>
                                <td style={{ border: '1px solid #000', padding: '8px' }}>{drug.brandname}</td>
                                <td style={{ border: '1px solid #000', padding: '8px' }}>{drug.company}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
}

export default Drug;
