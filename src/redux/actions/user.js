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
    return userApi.signIn(postData).then(({ data }) => {
      const { status, token } = data
      if (status === "error") {
        notification({
          title: "Authentication failed.",
          text: "Incorrect login or password.",
          type: "error",
        })
      } else {
        notification({
          title: "Success",
          text: "Authorization has been successful.",
          type: "success",
        })
        window.axios.defaults.headers.common["token"] = token
        window.localStorage["token"] = token
        dispatch(actions.fetchUserData())
      }
      return data
    })
  },
  fetchUserRegister: (postData) => (dispatch) => {
    return userApi.signUp(postData).then(({ data }) => {
      console.log(data)
      return data
    })
  },
}

export default actions
