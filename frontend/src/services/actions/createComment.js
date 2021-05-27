import agent from '../../agent';
import {
    ADD_COMMENT,
} from '../../utils/constants/actionTypes';


export const createComment = (slug, body) => {
    return (dispatch) => {
        agent.Comments.create(slug,
            {body: body})
            .then((payload) => dispatch({ type: ADD_COMMENT, payload }))
            .catch(e => console.log(e))
    }
}
