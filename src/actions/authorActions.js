import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}
export function loadAuthors(course){
  return function (dispatch){
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors()
    .then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    })
    .catch(error => {
      throw(error);
    });
  };

  // return dispatch => {
  //   return AuthorApi.getAllAuthors().then(authors => {
  //     dispatch(loadAuthorsSuccess(authors));
  //   }).catch(error => {
  //     throw(error);
  //   })
  //
  //   // dispatch(beginAjaxCall());
  //   // return AuthorApi.getAllAuthors().then(authors => {
  //   //   dispatch(loadAuthorsSuccess(authors));
  //   // }).catch(error => {
  //   //   throw(error);
  //   // });
  // };
}
