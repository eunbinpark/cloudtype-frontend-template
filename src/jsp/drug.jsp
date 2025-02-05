<%@ 
	page language="java" 
	contentType="text/html; charset=EUC-KR" 
	pageEncoding="UTF-8"
	errorPage="Error.jsp" 
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko">
<head>
<link rel="stylesheet" href="/acr/css/oasis.css">
<title>금기약물 검색</title>
    <style>
        body {
            margin: 20px;
            font-family: Arial, sans-serif;
        }
        h1, h2 {
            font-size: 25px;
            font-weight: bold;
        }
        .container {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
            padding: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #ffffff;
        }
        label {
            margin-right: 10px;
        }
        input, select, button {
            padding: 5px;
            margin-right: 10px;
            border: 1px solid #ccc;
            outline: none;
        }
        button {
            cursor: pointer;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        table th, table td {
            border: 1px solid #000;
            padding: 8px;
        }
        table th {
            background-color: #f2f2f2;
        }
    </style>
<script>
// 동적으로 필드 추가 함수
        let drugFieldIndex = 1;

        function addDrugField() {
            const container = document.getElementById('drug-fields');
            const newField = `
                <div style="margin-bottom: 10px;">
                    <label>처방받은 약품(성분 혹은 제품명)</label>
                    <input type="text" name="drugList[${drugFieldIndex}].drug" style="width: 150px;">
                    <button type="button" onclick="searchDrugInfo(${drugFieldIndex})">검색</button>
                    <input type="text" name="drugList[${drugFieldIndex}].drugInfo.ddi" placeholder="복용가능여부" readonly style="width: 100px; text-align: center;">
                    <input type="text" name="drugList[${drugFieldIndex}].drugInfo.efficacy" placeholder="효능" readonly style="width: 400px; text-align: center;">
                </div>
            `;
            container.insertAdjacentHTML('beforeend', newField);
            drugFieldIndex++;
        }

        function searchDrugInfo(index) {
            // 약품 검색 처리 로직 구현
            alert(`약품 정보 검색 (index: ${index})`);
        }
</script>
</head>
<body>
<h1>금기약물 검색</h1>
    <div class="container">
        <form method="post" action="drugSearch.jsp">
            <div style="margin-bottom: 10px;">
                <label>복용하고 있는 표적항암제(성분 혹은 제품명)</label>
                <select name="tki" style="width: 150px;">
                    <option value="">-- 항암제 선택 --</option>
                    <option value="셈블릭스">셈블릭스</option>
                    <option value="보술리프">보술리프</option>
                    <option value="스프라이셀">스프라이셀</option>
                    <option value="엔리븐">엔리븐</option>
                    <option value="글리벡">글리벡</option>
                    <option value="타시그나">타시그나</option>
                    <option value="아이클루시그">아이클루시그</option>
                    <option value="슈펙트">슈펙트</option>
                    <option value="로페그인터페론">로페그인터페론</option>
                    <option value="턴즈">턴즈</option>
                    <option value="보도바티닙">보도바티닙</option>
                </select>
            </div>
            <!-- 약품 입력 필드 -->
            <div id="drug-fields">
                <div style="margin-bottom: 10px;">
                    <label>처방받은 약품(성분 혹은 제품명)</label>
                    <input type="text" name="drugList[0].drug" style="width: 150px;">
                    <button type="button" onclick="searchDrugInfo(0)">검색</button>
                    <input type="text" name="drugList[0].drugInfo.ddi" placeholder="복용가능여부" readonly style="width: 100px; text-align: center;">
                    <input type="text" name="drugList[0].drugInfo.efficacy" placeholder="효능" readonly style="width: 400px; text-align: center;">
                </div>
            </div>
            <button type="button" onclick="addDrugField()">+</button>
        </form>
    </div>

    <h2>대체약품 검색</h2>
    <div class="container">
        <form method="post" action="alternativeSearch.jsp">
            <div style="margin-bottom: 10px;">
                <label>검색하고 싶은 효능(키워드)</label>
                <input type="text" name="efficacy" style="width: 150px;">
                <button type="submit">검색</button>
            </div>
        </form>
        <div>
            <h3>검색하신 효능을 가진 약품목록은 다음과 같습니다.</h3>
            <table>
                <thead>
                <tr>
                    <th>대체제품</th>
                    <th>해당제약회사</th>
                    <th>대체성분</th>
                    <th>효능</th>
                </tr>
                </thead>
                <tbody>
                <!-- 예제 데이터 (실제 데이터는 백엔드에서 처리 후 동적으로 출력) -->
                <%-- JSP에서 데이터 출력 예제 --%>
                <c:forEach var="drug" items="${Drugs}">
                    <tr>
                        <td>${drug.brandname}</td>
                        <td>${drug.company}</td>
                        <td>${drug.ingredient}</td>
                        <td>${drug.efficacy}</td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
        </div>
    </div>
</body>