import * as Repository from '../../repository/assesment';

const setLoading = (dispatch, status) =>
    dispatch({ type: "SET_LOADING", payload: status });

const verifyAssessment = async (dispatch, {type, data})=> {
    setLoading(dispatch, true);
    const request = {
        "key": "EVAL_001",
        "tasks": [
            {
                "key": "TASKS_01",
                "summary": "Se debe realizar lo siguiente <p>Ejemplo</p>",
                "type": type,
                "answers": [
                    {
                        data
                    }
                ]
            }
        ]
    };
    Repository.verifyAssessment(request).then(result => {
        dispatch({type: 'VERIFY', payload: result.data})
    }).catch(error => {
        dispatch({type: 'VERIFY_ERROR', payload: error})
        console.log(`Has ocurred an error, check de console ${error}`);
    });
};

export {verifyAssessment, setLoading};