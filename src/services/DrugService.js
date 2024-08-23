import axios from "axios";

class DrugService {

    searchDrug(tki, drug) {
        return axios.get(process.env.REACT_APP_WAITLIST_API_URL + "/drug", {
            params: {
                tki: tki,
                drug: drug
            }
        });
    }

    searchEfficacy(tki, efficacy) {
        return axios.get(process.env.REACT_APP_WAITLIST_API_URL + "/efficacy", {
            params: {
                tki: tki,
                efficacy: efficacy
            }
        });
    }
}

export default new DrugService;