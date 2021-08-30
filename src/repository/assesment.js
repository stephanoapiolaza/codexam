import axios from './common/axios-config';

const verifyAssessment = (data) => axios.post('/assessments', data);
const submitAssessment = (data) => axios.post('/assessments/submit', data);

export {verifyAssessment, submitAssessment};