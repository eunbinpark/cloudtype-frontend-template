import React, { useState } from 'react';

const Drug = () => {
  const [tki, setTki] = useState('');
  const [product, setProduct] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [efficacy, setEfficacy] = useState('');
  const [alternativeEfficacy, setAlternativeEfficacy] = useState('');
  const [alternativeDrugs, setAlternativeDrugs] = useState([]);

  const handleSearch = async () => {
    // 메인 제품 검색 처리
    // /api/search 라는 API 엔드포인트가 있다고 가정
    const response = await fetch(`/api/search?tki=${tki}&product=${product}`);
    const data = await response.json();
    setIngredient(data.ingredient);
    setEfficacy(data.efficacy);
  };

  const handleAlternativeSearch = async () => {
    // 대체 약품 검색 처리
    // /api/alternative-search 라는 API 엔드포인트가 있다고 가정
    const response = await fetch(`/api/alternative-search?efficacy=${alternativeEfficacy}`);
    const data = await response.json();
    setAlternativeDrugs(data.alternatives);
  };

  return (
    <div>
      <h1>금기약물 검색</h1>
      <div>
        <label>TKI: </label>
        <input type="text" value={tki} onChange={(e) => setTki(e.target.value)} />
        <label>제품: </label>
        <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} />
        <button onClick={handleSearch}>검색</button>
      </div>
      <div>
        <p>이 제품은 <input type="text" value={ingredient} readOnly /> 성분으로 만들어져 있어 표적항암제의 <input type="text" value={efficacy} readOnly /> 약물입니다.</p>
      </div>
      <div>
        <label>이 제품의 효능: </label>
        <input type="text" value={efficacy} readOnly />
      </div>

      <h2>대체약품 검색</h2>
      <div>
        <label>효능: </label>
        <input type="text" value={alternativeEfficacy} onChange={(e) => setAlternativeEfficacy(e.target.value)} />
        <button onClick={handleAlternativeSearch}>검색</button>
      </div>
      <div>
        <h3>위 제품과 동일한 효능을 가진 약품 목록은 다음과 같습니다.</h3>
        <table>
          <thead>
            <tr>
              <th>성분</th>
              <th>제품</th>
              <th>제약회사</th>
            </tr>
          </thead>
          <tbody>
            {alternativeDrugs.map((drug, index) => (
              <tr key={index}>
                <td>{drug.ingredient}</td>
                <td>{drug.product}</td>
                <td>{drug.company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Drug;
