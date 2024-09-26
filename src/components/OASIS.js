import React, { useState } from "react";
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import swal from 'sweetalert';
import '../style/oasis.css';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const OASIS = () => {

    const [numVisit, setNumVisit] = useState('');
    const [formData, setFormData] = useState({
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
    });
    const [percentage1, setPercentage1] = useState();
    const [percentage2, setPercentage2] = useState();

    const [showModal, setShowModal] = useState(false);

    const [errorMessage, setErrorMessage] = useState(''); // 에러 메시지 상태 추가

    // 조회 버튼 클릭
    const handleSearchClick = () => {

        // 숫자인지 확인
        if (isNaN(numVisit)) {
            setErrorMessage('숫자로 입력해주세요.');
            return;
        }
        if (!numVisit) {
            setErrorMessage('Patient ID 을 입력해주세요.')
            return;
        }

        if (!(numVisit === '2669' || numVisit === '37894' || numVisit === '35849')) {
            setErrorMessage('결과가 없습니다.')
            setFormData({
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
            });
            return
        }

        setErrorMessage(''); // 에러 메시지 초기화

        if (numVisit === '2669') {
            setFormData({
                promyelocyte: '0.0',
                blasts: '0.0',
                lymphocytes: '2.0',
                metamyclocyte: '9.0',
                monocytes: '2.0',
                ae_category_1: '0.0',
                grade_1: '0.0',
                ae_code_1: '0.0',
                ae_category_2: '0.0',
                delta_grade_1: '0.0',
                delta_ae_code_1: '0.0',
                delta_ae_category_1: '0.0',
            });
            setPercentage1(83.56);
            setPercentage2(16.44);
        } else if (numVisit === '37894') {
            setFormData({
                promyelocyte: '0.0',
                blasts: '0.0',
                lymphocytes: '35.0',
                metamyclocyte: '0.0',
                monocytes: '6.0',
                ae_category_1: '0.0',
                grade_1: '0.0',
                ae_code_1: '0.0',
                ae_category_2: '0.0',
                delta_grade_1: '0.0',
                delta_ae_code_1: '0.0',
                delta_ae_category_1: '0.0',
            });
            setPercentage1(91.2);
            setPercentage2(8.8);
        } else if (numVisit === '35849') {
            setFormData({
                promyelocyte: '0.0',
                blasts: '0.0',
                lymphocytes: '21.0',
                metamyclocyte: '0.0',
                monocytes: '11.0',
                ae_category_1: '1.0',
                grade_1: '2.0',
                ae_code_1: '46.0',
                ae_category_2: '1.0',
                delta_grade_1: '2.0',
                delta_ae_code_1: '46.0',
                delta_ae_category_1: '1.0',
            });
            setPercentage1(99.99);
            setPercentage2(0.01);
        }
    }
    // 오아시스 버튼 클릭
    const handleOASISClick = () => {
        if (!numVisit) {
            swal('Warning', 'Patient ID를 입력해주세요.', 'warning');
            return;
        }
        else if(!formData.promyelocyte){
            swal('Warning', 'Patient ID를 검색해주세요.', 'warning');
            return;
        }
        //팝업으로 결과 확인
        setShowModal(true);
    }
    // 모달 닫기 버튼
    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div className="container">
            <div className="row">
                <label htmlFor="numVisit" className="numVisit">Patient ID :</label>
                <input type="text" id="numVisit" value={numVisit} onChange={(e) => setNumVisit(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && handleSearchClick()}/>
                <button onClick={handleSearchClick}>Search</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
            <div style={{ borderBottom: '1px solid #ccc', margin: '20px 0' }}></div>
            <div>
                <div className="row">
                    <label htmlFor="promyelocyte" className="label">PROMYELOCYTE :</label>
                    <input type="text" id="promyelocyte" value={formData.promyelocyte} readOnly />
                </div>
                <div className="row">
                    <label htmlFor="blasts" className="label">BLASTS :</label>
                    <input type="text" id="blasts" value={formData.blasts} readOnly />
                </div>
                <div className="row">
                    <label htmlFor="lymphocytes" className="label">LYMPHOCYTES :</label>
                    <input type="text" id="lymphocytes" value={formData.lymphocytes} readOnly />
                </div>
                <div className="row">
                    <label htmlFor="metamyelocyte" className="label">METAMYELOCYTE :</label>
                    <input type="text" id="metamyelocyte" value={formData.metamyclocyte} readOnly />
                </div>
                <div className="row">
                    <label htmlFor="monocytes" className="label">MONOCYTES :</label>
                    <input type="text" id="monocytes" value={formData.monocytes} readOnly />
                </div>
                <div className="row">
                    <label htmlFor="ae_category_1" className="label">AE CATEGORY 1 :</label>
                    <input type="text" id="ae_category_1" value={formData.ae_category_1} readOnly />
                </div>
                <div className="row">
                    <label htmlFor="grade_1" className="label">GRADE 1 :</label>
                    <input type="text" id="grade_1" value={formData.grade_1} readOnly />
                </div>
                <div className="row">
                    <label htmlFor="ae_code_1" className="label">AE CODE 1 :</label>
                    <input type="text" id="ae_code_1" value={formData.ae_code_1} readOnly />
                </div>
                <div className="row">
                    <label htmlFor="ae_category_2" className="label">AE CATEGORY 2 :</label>
                    <input type="text" id="ae_category_2" value={formData.ae_category_2} readOnly />
                </div>
                <div className="row">
                    <label htmlFor="delta_grade_1" className="label">Δ GRADE 1 :</label>
                    <input type="text" id="delta_grade_1" value={formData.delta_grade_1} readOnly />
                </div>
                <div className="row">
                    <label htmlFor="delta_ae_code_1" className="label">Δ AE CODE 1 :</label>
                    <input type="text" id="delta_ae_code_1" value={formData.delta_ae_code_1} readOnly />
                </div>
                <div className="row">
                    <label htmlFor="delta_ae_category_1" className="label">Δ AE CATEGORY 1 :</label>
                    <input type="text" id="delta_ae_category_1" value={formData.delta_ae_category_1} readOnly />
                </div>
            </div>
            <div className="row">
                <button className="submit-btn" onClick={handleOASISClick}>OASIS</button>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h1 className="oasis-decision">OASIS Decision</h1>

                        <div className="bar-container">
                            <div className="bar-graph">
                                <div className="bar red-bar" style={{ width: `${percentage1}%` }}></div>
                                <span className={`percent ${percentage1 >= 50.0 ? 'bold' : ''}`}>{percentage1}%</span>
                            </div>
                            <p className={`percent ${percentage1 >= 50.0 ? 'bold' : ''}`}>Continue with the current treatment</p>
                        </div>

                        <div className="bar-container">
                            <div className="bar-graph">
                                <div className="bar blue-bar" style={{ width: `${percentage2}%` }}></div>
                                <span className={`percent ${percentage2 >= 50.0 ? 'bold' : ''}`}>{percentage2}%</span>
                            </div>
                            <p className={`percent ${percentage2 >= 50.0 ? 'bold' : ''}`}>Discontinue with the current treatment</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default OASIS;