import axios from "axios";
import qs from 'qs';
const baseUrl = "https://moonlightpictures.in/api";


export class ApiService {
    async getData(url, token, cancelToken, headers) {
        const config = {
            headers: {
                ...(headers || {}),
            },
        };
        let resData = '';
        const response = await axios.get(url, config).catch((err) => {
            resData = {error: 'something went wrong'};
        });
        return resData || response.data;
    }

    async postMethod(url, data, headers,) {
        let newData = qs.stringify(data);
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        };

        let resData = '';
        const response = await axios.post(url, newData, config).catch(thrown => {
            if (thrown.toString() === 'Cancel') {
                resData = 'cancel';
            } else {
                resData = {error: 'something went wrong'};;
            }
        });
        return resData || response.data;
    }

    async putMethod(url, data, headers) {
        const config = {
            headers: {

                "Content-Type": "application/json"
            }
        };
        let resData = '';
        const response = await axios.put(url, data, config).catch(err => {
            resData = {error: 'something went wrong'};
        });
        return resData || response.data;
    }

    async deleteMethod(url, data, headers) {
        const config = {
            headers: {

                ...(headers || {})
            },
            data
        };
        let resData = '';
        const response = await axios.delete(url, config).catch(err => {
            resData = {error: 'something went wrong'};
        });
        return resData || response.data;
    }

    async getSlider(){
        return await this.getData(`${baseUrl}/getSlider`);
    }
    async storyList(){
        return await this.getData(`${baseUrl}/storyList`);
    }
    async getStoryImage(id){
        return await this.getData(`${baseUrl}/getStoryImage?story_id=${id}`);
    }
    async listFeedback(){
        return await this.getData(`${baseUrl}/listFeedback`);
    }
    async addEnquire(payload){
        return await this.postMethod(`${baseUrl}/addEnquire`, payload);
    }
    async addLike(id, likecount){
        return await this.getData(`${baseUrl}/addLike?storyId=${id}&likecount=${likecount}`);
    }
}

export default ApiService
