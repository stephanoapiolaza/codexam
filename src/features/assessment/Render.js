import './Render.css';
import {UseAssessment} from '../../store/assessment/state';

const Render = () => {

    const [state] = UseAssessment();
    const {verify: {stdout}} = state;
    return (
        <>
            <iframe src={stdout.data} width="100%" height="100%" />
        </>
    );
};

export default Render;
