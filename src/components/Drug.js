import React, { useEffect, useState } from 'react';
import DrugService from '../services/DrugService';
import swal from 'sweetalert';

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

    const [drugList, setDrugList] = useState([{ drug: '', drugInfo: { ddi: '', efficacy: '' } }]);

    // 대체약물 map
    const [Drugs, setDrugs] = useState([]);

    // tki 값을 출력하기 위한 상태 추가
    // const [searchTki, setSearchTki] = useState('');
    // const [searchBrandname, setSearchBrandname] = useState('');

    useEffect(() => {
        getDrugInfo();
    }, [])

    // 항암제, 제품 검색
    const getDrugInfo = (index) => {
        if (index >= 0 && index < drugList.length && drugList[index].drug) {
            const selectedDrug = drugList[index].drug.trim();  // drug 값의 앞뒤 공백 제거
            const trimmedTki = tki.trim();  // tki 값의 앞뒤 공백 제거
            DrugService.searchDrug(trimmedTki, selectedDrug)
                .then((response) => {
                    if (response.data.ingredient === null) {
                        swal('Warning', '금기 또는 주의를 요하는 약물 리스트에 없는 약물입니다.', 'warning')
                    }
                    const updatedDrugList = [...drugList];
                    updatedDrugList[index].drugInfo = response.data;
                    setDrugList(updatedDrugList); // drugList를 업데이트
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            console.log('Invalid index or drug value is undefined');
        }
    }

    const getEfficacyDrugs = () => {
        const trimmedTki = tki.trim();  // tki 값의 앞뒤 공백 제거
        const trimmedEfficacy = efficacy.trim();  // efficacy 값의 앞뒤 공백 제거

        DrugService.searchEfficacy(trimmedTki, trimmedEfficacy)
            .then((response) => {
                const drugs = response.data;

                // 배열 내 모든 항목의 ingredient가 null인지 확인
                const allIngredientsNull = drugs.every(drug => drug.ingredient === null);

                if (allIngredientsNull) {
                    swal('Warning', '대체 약물이 없습니다.', 'warning');
                } else {
                    setDrugs(drugs);
                }
                console.log(response.data)
                // setSearchBrandname(drug);
            }).catch(error => {
                console.log(error)
            })

    }

    // 새로운 약품 검색 필드 추가
    const addDrugField = () => {
        setDrugList([...drugList, { drug: '', drugInfo: { ddi: '', efficacy: '' } }]);
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Enter') {
            getDrugInfo(index);  // Enter 키가 눌리면 해당 인덱스에 대해 검색
        }
    };

    const handleEfficacyKeyDown = (e) => {
        if (e.key === 'Enter') {
            getEfficacyDrugs();  // Enter 키가 눌리면 효능 검색
        }
    };

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
                        <label style={{ marginRight: '10px' }}>복용하고 있는 표적항암제(성분 혹은 제품명) </label>
                        {/* 나중에 드롭다운의 값도 백에서 받아오는 식으로 바꿀 예정 현재는 하드코딩 */}
                        <select
                            value={tki}
                            onChange={(e) => setTki(e.target.value)}
                            style={{ width: '150px', padding: '5px', marginRight: '10px', border: '1px solid #ccc', outline: 'none' }}
                        >
                            <option value="">-- 항암제 선택 --</option>
                            <option value="Scemblix">셈블릭스</option>
                            <option value="Bosulif">보술리프</option>
                            <option value="Sprycel">스프라이셀</option>
                            <option value="ELVN">엔리븐</option>
                            <option value="Glivec">글리벡</option>
                            <option value="Tasigna">타시그나</option>
                            <option value="Iclusig">아이클루시그</option>
                            <option value="Supect">슈펙트</option>
                            <option value="Ropeginterferon">로페그인터페론</option>
                            <option value="Terns">턴즈</option>
                            <option value="Vodobatinib">보도바티닙</option>
                            {/* 여기에 더 많은 옵션 추가 가능 */}
                        </select>
                    </div>
                    <div style={{ marginBottom: '20px' }}></div>

                    {drugList.map((item, index) => (
                        <div style={{ display: 'flex' }}>
                            {/* <div style={{ display: 'flex', alignItems: 'center' }}> */}
                            <label style={{ marginRight: '10px' }}>처방받은 약품(성분 혹은 제품명)</label>
                            <input
                                type="text"
                                value={item.drug}
                                onChange={(e) => {
                                    const updatedDrugList = [...drugList];
                                    updatedDrugList[index].drug = e.target.value;
                                    setDrugList(updatedDrugList);
                                }}
                                style={{ width: '150px', padding: '5px', marginRight: '10px', border: '1px solid #ccc', outline: 'none' }}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                            />
                            <button onClick={() => getDrugInfo(index)} style={{ padding: '5px 10px', marginRight: '10px', backgroundColor: '#d3d3d3', border: '1px solid #ccc', cursor: 'pointer' }}
                            >검색</button>
                            {/* </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}> */}
                            <input
                                type="text"
                                value={item.drugInfo.ddi}
                                readOnly
                                placeholder="복용가능여부"
                                style={{
                                    width: 'auto',
                                    minWidth: '100px', // 최소 너비 설정
                                    maxWidth: '100%',  // 최대 너비를 부모 요소에 맞춤
                                    padding: '5px',
                                    marginRight: '10px',
                                    border: '1px solid #ccc',
                                    outline: 'none',
                                    boxSizing: 'content-box', // 너비 조정 시 내용에 따라 조정되도록 설정
                                    textAlign: 'center', // 텍스트 가운데 정렬
                                }}
                            />
                            <input
                                type="text"
                                value={item.drugInfo.efficacy}
                                readOnly
                                placeholder="효능"
                                style={{
                                    width: 'auto',
                                    minWidth: '400px', // 최소 너비 설정
                                    maxWidth: '100%',  // 최대 너비를 부모 요소에 맞춤
                                    padding: '5px',
                                    marginRight: '10px',
                                    border: '1px solid #ccc',
                                    outline: 'none',
                                    boxSizing: 'content-box', // 너비 조정 시 내용에 따라 조정되도록 설정
                                    textAlign: 'center', // 텍스트 가운데 정렬
                                }}
                            />
                            {/* </div> */}
                        </div>
                    ))}

                    <div>
                        <button onClick={addDrugField} style={{ padding: '5px 10px', backgroundColor: '#d3d3d3', border: 'none', cursor: 'pointer' }}>+</button>
                    </div>
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
                    <label style={{ marginRight: '10px' }}>검색하고 싶은 효능(키워드)</label>
                    <input
                        type="text"
                        value={efficacy}
                        onChange={(e) => setEfficacy(e.target.value)}
                        style={{
                            width: '150px',
                            padding: '5px',
                            marginRight: '10px',
                            border: '1px solid #ccc',
                            outline: 'none'
                        }}
                        onKeyDown={handleEfficacyKeyDown} // 엔터키 이벤트 추가
                    />
                    <button onClick={getEfficacyDrugs} style={{ padding: '5px 10px', backgroundColor: '#d3d3d3', border: 'none', cursor: 'pointer' }}
                    >검색</button>
                </div>

                <div>
                    <h3>
                        {/* <input
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
                    /> */}
                        검색하신 효능을 가진 약품목록은 다음과 같습니다.</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid #000', padding: '8px', backgroundColor: '#f2f2f2' }}>대체제품</th>
                                <th style={{ border: '1px solid #000', padding: '8px', backgroundColor: '#f2f2f2' }}>해당제약회사</th>
                                <th style={{ border: '1px solid #000', padding: '8px', backgroundColor: '#f2f2f2' }}>대체성분</th>
                                <th style={{ border: '1px solid #000', padding: '8px', backgroundColor: '#f2f2f2' }}>효능</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Drugs.map((drug, index) => (
                                <tr key={index}>
                                    <td style={{ border: '1px solid #000', padding: '8px' }}>{drug.brandname}</td>
                                    <td style={{ border: '1px solid #000', padding: '8px' }}>{drug.company}</td>
                                    <td style={{ border: '1px solid #000', padding: '8px' }}>{drug.ingredient}</td>
                                    <td style={{ border: '1px solid #000', padding: '8px' }}>{drug.efficacy}</td>
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
