import axios from '../base';

const BASE_URL = 'examples';

// --- Пример
type example__PROPS = {
    exampleId: string;
};

export const example = (props: example__PROPS) => {
    const { exampleId } = props;
    return axios.get(`${BASE_URL}/${exampleId}/avatar/color`).catch((error) => {
        return error;
    });
};
