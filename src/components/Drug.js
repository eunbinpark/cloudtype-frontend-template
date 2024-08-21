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
    const [alternativeDrugs, setAlternativeDrugs] = useState([]);

    useEffect(() => {
        getDrugInfo();
    }, [])

    // 항암제, 제품 검색
    const getDrugInfo = (e) => {
        
        DrugService.searchDrug(tki, drug)
            .then((response) => {
                setDrugInfo(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleAlternativeSearch = () => {

    }

    return (
        <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>금기약물 검색</h1>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ marginRight: '10px' }}>TKI:</label>
                <input
                    type="text"
                    value={tki}
                    onChange={(e) => setTki(e.target.value)}
                    style={{ width: '150px', padding: '5px', marginRight: '10px' }}
                />
                <label style={{ marginRight: '10px' }}>제품:</label>
                <input
                    type="text"
                    value={drug}
                    onChange={(e) => setDrug(e.target.value)}
                    style={{ width: '150px', padding: '5px', marginRight: '10px' }}
                />
                <button onClick={getDrugInfo} style={{ padding: '5px 10px', backgroundColor: '#d3d3d3', border: 'none', cursor: 'pointer' }}>검색</button>
            </div>

            <div style={{ marginBottom: '10px' }}>
                <p>이 제품은 <input type="text" value={drugInfo.ingredient} readOnly style={{ width: '150px', padding: '5px', marginRight: '10px' }} /> 성분으로 만들어져 있어 표적항암제의 <input type="text" value={drugInfo.ddi} readOnly style={{ width: '150px', padding: '5px', marginRight: '10px' }} /> 약물입니다.</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label style={{ marginRight: '10px' }}>이 제품의 효능:</label>
                <input type="text" value={drugInfo.efficacy} readOnly style={{ width: '150px', padding: '5px' }} />
            </div>

            <h2>대체약품 검색</h2>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ marginRight: '10px' }}>효능:</label>
                <input
                    type="text"
                    value={efficacy}
                    onChange={(e) => setEfficacy(e.target.value)}
                    style={{ width: '150px', padding: '5px', marginRight: '10px' }}
                />
                <button onClick={handleAlternativeSearch} style={{ padding: '5px 10px', backgroundColor: '#d3d3d3', border: 'none', cursor: 'pointer' }}>검색</button>
            </div>

            <div>
                <h3>위 제품과 동일한 효능을 가진 약품 목록은 다음과 같습니다.</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #000', padding: '8px', backgroundColor: '#f2f2f2' }}>성분</th>
                            <th style={{ border: '1px solid #000', padding: '8px', backgroundColor: '#f2f2f2' }}>제품</th>
                            <th style={{ border: '1px solid #000', padding: '8px', backgroundColor: '#f2f2f2' }}>제약회사</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alternativeDrugs.map((drug, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid #000', padding: '8px' }}>{drug.ingredient}</td>
                                <td style={{ border: '1px solid #000', padding: '8px' }}>{drug.drug}</td>
                                <td style={{ border: '1px solid #000', padding: '8px' }}>{drug.company}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Drug;
