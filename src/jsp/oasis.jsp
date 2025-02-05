<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="UTF-8" errorPage="Error.jsp" %>

<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko">

<head>
    <link rel="stylesheet" href="/acr/css/oasis.css">
    <script>
        let formData = {
            promyelocyte: '',
            blasts: '',
            lymphocytes: '',
            metamyclocyte: '',
            monocytes: '',
            ae_category_1: '',
            grade_1: '',
            ae_code_1: '',
            ae_category_2: '',
            delta_grade_1: '',
            delta_ae_code_1: '',
            delta_ae_category_1: '',
        };

        function handleSearchClick() {
            const numVisit = document.getElementById("numVisit").value;
            const errorMessageElem = document.getElementById("error-message");

            if (!numVisit) {
                alert("Patient ID를 입력해주세요.");
                document.getElementById('blasts').value = '';
                document.getElementById('lymphocytes').value = '';
                document.getElementById('metamyclocyte').value = '';
                document.getElementById('monocytes').value = '';
                document.getElementById('ae_category_1').value = '';
                document.getElementById('grade_1').value = '';
                document.getElementById('ae_code_1').value = '';
                document.getElementById('ae_category_2').value = '';
                document.getElementById('delta_grade_1').value = '';
                document.getElementById('delta_ae_code_1').value = '';
                document.getElementById('delta_ae_category_1').value = '';
            } else if (isNaN(numVisit)) {
                alert("숫자로 입력해주세요."); document.getElementById('promyelocyte').value = '';
                document.getElementById('blasts').value = '';
                document.getElementById('lymphocytes').value = '';
                document.getElementById('metamyclocyte').value = '';
                document.getElementById('monocytes').value = '';
                document.getElementById('ae_category_1').value = '';
                document.getElementById('grade_1').value = '';
                document.getElementById('ae_code_1').value = '';
                document.getElementById('ae_category_2').value = '';
                document.getElementById('delta_grade_1').value = '';
                document.getElementById('delta_ae_code_1').value = '';
                document.getElementById('delta_ae_category_1').value = '';
            } else if (!(numVisit == '2669' || numVisit == '37894' || numVisit == '35849')) {
                alert('결과가 없습니다.');
                document.getElementById('promyelocyte').value = '';
                document.getElementById('blasts').value = '';
                document.getElementById('lymphocytes').value = '';
                document.getElementById('metamyclocyte').value = '';
                document.getElementById('monocytes').value = '';
                document.getElementById('ae_category_1').value = '';
                document.getElementById('grade_1').value = '';
                document.getElementById('ae_code_1').value = '';
                document.getElementById('ae_category_2').value = '';
                document.getElementById('delta_grade_1').value = '';
                document.getElementById('delta_ae_code_1').value = '';
                document.getElementById('delta_ae_category_1').value = '';
            }

            if (numVisit == '2669') {
                document.getElementById('promyelocyte').value = '0.0';
                document.getElementById('blasts').value = '0.0';
                document.getElementById('lymphocytes').value = '2.0';
                document.getElementById('metamyclocyte').value = '9.0';
                document.getElementById('monocytes').value = '2.0';
                document.getElementById('ae_category_1').value = '0.0';
                document.getElementById('grade_1').value = '0.0';
                document.getElementById('ae_code_1').value = '0.0';
                document.getElementById('ae_category_2').value = '0.0';
                document.getElementById('delta_grade_1').value = '0.0';
                document.getElementById('delta_ae_code_1').value = '0.0';
                document.getElementById('delta_ae_category_1').value = '0.0';
                //setPercentage1(83.56);
                //setPercentage2(16.44);
            } else if (numVisit == '37894') {
                document.getElementById('promyelocyte').value = '0.0';
                document.getElementById('blasts').value = '0.0';
                document.getElementById('lymphocytes').value = '35.0';
                document.getElementById('metamyclocyte').value = '0.0';
                document.getElementById('monocytes').value = '6.0';
                document.getElementById('ae_category_1').value = '0.0';
                document.getElementById('grade_1').value = '0.0';
                document.getElementById('ae_code_1').value = '0.0';
                document.getElementById('ae_category_2').value = '0.0';
                document.getElementById('delta_grade_1').value = '0.0';
                document.getElementById('delta_ae_code_1').value = '0.0';
                document.getElementById('delta_ae_category_1').value = '0.0';
                //setPercentage1(91.2);
                //setPercentage2(8.8);
            } else if (numVisit == '35849') {
                document.getElementById('promyelocyte').value = '0.0';
                document.getElementById('blasts').value = '0.0';
                document.getElementById('lymphocytes').value = '21.0';
                document.getElementById('metamyclocyte').value = '0.0';
                document.getElementById('monocytes').value = '11.0';
                document.getElementById('ae_category_1').value = '1.0';
                document.getElementById('grade_1').value = '2.0';
                document.getElementById('ae_code_1').value = '46.0';
                document.getElementById('ae_category_2').value = '1.0';
                document.getElementById('delta_grade_1').value = '2.0';
                document.getElementById('delta_ae_code_1').value = '46.0';
                document.getElementById('delta_ae_category_1').value = '1.0';
                //setPercentage1(99.99);
                //setPercentage2(0.01);
            }


        }
    </script>
</head>

<body>
    <div className="container">
        <div className="row">
            <label htmlFor="numVisit" className="numVisit">Patient ID :</label>
            <input type="text" id="numVisit" onkeypress="if( event.keyCode == 13 ){handleSearchClick();}" />
            <button onClick="handleSearchClick()">Search</button>
        </div>
        <div style="border-bottom: 1px solid #ccc; margin: 20px 0;"></div>
        <div>
            <div className="row">
                <label htmlFor="promyelocyte" className="label">PROMYELOCYTE :</label>
                <input type="text" id="promyelocyte" readOnly />
            </div>
            <div className="row">
                <label htmlFor="blasts" className="label">BLASTS :</label>
                <input type="text" id="blasts" readOnly />
            </div>
            <div className="row">
                <label htmlFor="lymphocytes" className="label">LYMPHOCYTES :</label>
                <input type="text" id="lymphocytes" readOnly />
            </div>
            <div className="row">
                <label htmlFor="metamyclocyte" className="label">METAMYCLOCYTE :</label>
                <input type="text" id="metamyclocyte" readOnly />
            </div>
            <div className="row">
                <label htmlFor="monocytes" className="label">MONOCYTES :</label>
                <input type="text" id="monocytes" readOnly />
            </div>
            <div className="row">
                <label htmlFor="ae_category_1" className="label">AE CATEGORY 1 :</label>
                <input type="text" id="ae_category_1" readOnly />
            </div>
            <div className="row">
                <label htmlFor="grade_1" className="label">GRADE 1 :</label>
                <input type="text" id="grade_1" readOnly />
            </div>
            <div className="row">
                <label htmlFor="ae_code_1" className="label">AE CODE 1 :</label>
                <input type="text" id="ae_code_1" readOnly />
            </div>
            <div className="row">
                <label htmlFor="ae_category_2" className="label">AE CATEGORY 2 :</label>
                <input type="text" id="ae_category_2" readOnly />
            </div>
            <div className="row">
                <label htmlFor="delta_grade_1" className="label">Δ GRADE 1 :</label>
                <input type="text" id="delta_grade_1" readOnly />
            </div>
            <div className="row">
                <label htmlFor="delta_ae_code_1" className="label">Δ AE CODE 1 :</label>
                <input type="text" id="delta_ae_code_1" readOnly />
            </div>
            <div className="row">
                <label htmlFor="delta_ae_category_1" className="label">Δ AE CATEGORY 1 :</label>
                <input type="text" id="delta_ae_category_1" readOnly />
            </div>
        </div>
        <div className="row">
            <button className="submit-btn" onClick={handleOASISClick}>OASIS</button>
        </div>
    </div>
</body>