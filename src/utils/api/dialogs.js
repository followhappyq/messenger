import { axios } from "../../core/index"

export default {
  getAll: () => axios.get("/dialogs"),
  create: ({ partner, text }) => axios.post("/dialogs", { partner, text }),
}
