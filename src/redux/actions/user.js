import { userApi } from "../../utils/api"
import { notification } from "../../utils/helpers/helpers"

const actions = {
  setUserData: (data) => ({
    type: "USER:SET_DATA",
    payload: data,
  }),
  fetchUserData: () => (dispatch) => {
    userApi.getMe().then(({ data }) => {
      dispatch(actions.setUserData(data))
    })
  },
  fetchUserLogin: (postData) => (dispatch) => {
    return userApi
      .signIn(postData)
      .then(({ data }) => {
        const { token } = data
        notification({
          title: "Success",
          text: "Authorization has been successful.",
          type: "success",
        })
        window.axios.defaults.headers.common["token"] = token
        window.localStorage["token"] = token
        dispatch(actions.fetchUserData())
        return data
      })
      .catch(({ response }) => {
        if (response.status === 403) {
          notification({
            title: "Authentication failed.",
            text: "Incorrect login or password.",
            type: "error",
          })
        }
      })
  },
  fetchUserRegister: (postData) => (dispatch) => {
    return userApi.signUp(postData).then(({ data }) => {
      return data
    })
  },
}

export default actions
