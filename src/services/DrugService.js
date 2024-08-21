import axios from "axios";

class DrugService{

    searchDrug(tki, drug) {
        const params = new URLSearchParams({ tki, drug }).toString();
        return axios.get(`${process.env.REACT_APP_WAITLIST_API_URL}?${params}`);
    }
    
    searchEfficacy(efficacySearch) {
        const params = new URLSearchParams({ efficacy: efficacySearch }).toString();
        return axios.get(`${process.env.REACT_APP_WAITLIST_API_URL}?${params}`);
    }
}

export default new DrugService;