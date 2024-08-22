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

    searchEfficacy(efficacySearch) {
        return axios.get(process.env.REACT_APP_WAITLIST_API_URL, efficacySearch);
    }
}

export default new DrugService;