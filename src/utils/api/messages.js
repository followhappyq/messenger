import { axios } from "../../core/index"

export default {
  getAllByDialogId: (id) => axios.get("/messages?dialog=" + id),
  send: (text, dialogId) =>
    axios.post("/messages", {
      text: text,
      dialog_id: dialogId,
    }),
}
