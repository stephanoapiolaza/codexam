import React, {useContext, useReducer} from "react";
import reducer from './reducer';
import {AssessmentContext} from './context';

const UseAssessment = () => {
    const context = useContext(AssessmentContext);
    if (context === undefined) {
        throw new Error('UseAssessment must be used within a Provider')
    }
    const {state, dispatch} = context;
    return [state, dispatch];
};

const AssessmentState = ({children}) => {
    const initialState = {
        verify: {
            "type": "WEB",
            "stdout": {
                "type": "IFRAME",
                "data": "https://stephanoapiolaza.cl"
            }
        },
        loading: false,
        error: {
            enabled: false,
            message: ""
        },
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch}
    return (
        <AssessmentContext.Provider value={value}>
            {children}
        </AssessmentContext.Provider>
    );
};

export {AssessmentState, UseAssessment};