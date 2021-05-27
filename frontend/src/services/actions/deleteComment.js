import agent from '../../agent';
import {
     DELETE_COMMENT,
} from '../../utils/constants/actionTypes';


export const deleteComment = (slug, commentId) => {
    return (dispatch) => {
        agent.Comments.delete(slug, commentId)
            .then((payload) => dispatch({ type: DELETE_COMMENT, payload, commentId }))
            .catch(e => console.log(e))
    }
}
