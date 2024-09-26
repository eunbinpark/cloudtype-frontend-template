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

        setErrorMessage(''); // 에러 메시지 초기화

        if (numVisit === '1') {
            setFormData({
                promyelocyte: '10',
                blasts: '5',
                lymphocytes: '30',
                metamyelocyte: '12',
                monocytes: '20',
                ae_category_1: 'Category A',
                grade_1: 'Grade 2',
                ae_code_1: 'Code 123',
                ae_category_2: 'Category B',
                delta_grade_1: 'Grade 1',
                delta_ae_code_1: 'Code 456',
                delta_ae_category_1: 'Category C',
            });
            setPercentage1(75);
            setPercentage2(25);
        } else if (numVisit === '2') {
            setFormData({
                promyelocyte: '15',
                blasts: '7',
                lymphocytes: '25',
                metamyelocyte: '10',
                monocytes: '18',
                ae_category_1: 'Category X',
                grade_1: 'Grade 3',
                ae_code_1: 'Code 789',
                ae_category_2: 'Category Y',
                delta_grade_1: 'Grade 2',
                delta_ae_code_1: 'Code 321',
                delta_ae_category_1: 'Category Z',
            });
            setPercentage1(60);
            setPercentage2(40);
        } else {
            // 기본값 설정 (혹은 비어있을 수 있음)
            setFormData({
                promyelocyte: '',
                blasts: '',
                lymphocytes: '',
                metamyelocyte: '',
                monocytes: '',
                ae_category_1: '',
                grade_1: '',
                ae_code_1: '',
                ae_category_2: '',
                delta_grade_1: '',
                delta_ae_code_1: '',
                delta_ae_category_1: '',
            });
            setPercentage1(81.7);
            setPercentage2(18.3);
        }
    }
    // 오아시스 버튼 클릭
    const handleOASISClick = () => {
        if (!numVisit) {
            swal('Warning', 'Num Visit을 입력해주세요.', 'warning');
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
                <label htmlFor="numVisit">Num Visit :</label>
                <input type="text" id="numVisit" value={numVisit} onChange={(e) => setNumVisit(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && handleSearchClick()}/>
                <button onClick={handleSearchClick}>Search</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
            <div>
                <div className="row">
                    <label htmlFor="promyelocyte">PROMYELOCYTE :</label>
                    <input type="text" id="promyelocyte" value={formData.promyelocyte} readOnly />
                </div>
                <div className="row">
                    <label htmlFor="blasts">BLASTS :</label>
                    <input type="text" id="blasts" value={formData.blasts} readOnly />
                </div>
                <div className="row">
                    <label htmlFor="lymphocytes">LYMPHOCYTES :</label>
                    <input type="text" id="lymphocytes" value={formData.lymphocytes} readOnly />
                </div>
                <div className="row">
                    <label htmlFor="metamyelocyte">METAMYELOCYTE :</label>
                    <input type="text" id="metamyelocyte" value={formData.metamyclocyte} readOnly />
                </div>
                <div className="row">
                    <label htmlFor="monocytes">MONOCYTES :</label>
                    <input type="text" id="monocytes" value={formData.monocytes} readOnly />
                </div>
                <div className="row">
                    <label htmlFor="ae_category_1">AE CATEGORY 1 :</label>
                    <input type="text" id="ae_category_1" value={formData.ae_category_1} readOnly />
                </div>
                <div className="row">
                    <label htmlFor="grade_1">GRADE 1 :</label>
                    <input type="text" id="grade_1" value={formData.grade_1} readOnly />
                </div>
                <div className="row">
                    <label htmlFor="ae_code_1">AE CODE 1 :</label>
                    <input type="text" id="ae_code_1" value={formData.ae_code_1} readOnly />
                </div>
                <div className="row">
                    <label htmlFor="ae_category_2">AE CATEGORY 2 :</label>
                    <input type="text" id="ae_category_2" value={formData.ae_category_2} readOnly />
                </div>
                <div className="row">
                    <label htmlFor="delta_grade_1">delta GRADE 1 :</label>
                    <input type="text" id="delta_grade_1" value={formData.delta_grade_1} readOnly />
                </div>
                <div className="row">
                    <label htmlFor="delta_ae_code_1">delta AE CODE 1 :</label>
                    <input type="text" id="delta_ae_code_1" value={formData.delta_ae_code_1} readOnly />
                </div>
                <div className="row">
                    <label htmlFor="delta_ae_category_1">delta AE CATEGORY 1 :</label>
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
                        <h2>OASIS Decision</h2>

                        <div className="bar-container">
                            <div className="bar-graph">
                                <div className="bar red-bar" style={{ width: `${percentage1}%` }}></div>
                                <span className="percentage">{percentage1}%</span>
                            </div>
                            <p>Continue with the current treatment</p>
                        </div>

                        <div className="bar-container">
                            <div className="bar-graph">
                                <div className="bar blue-bar" style={{ width: `${percentage2}%` }}></div>
                                <span className="percentage">{percentage2}%</span>
                            </div>
                            <p>Discontinue with the current treatment</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default OASIS;