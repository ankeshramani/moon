import axios from "axios";
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
        const config = {
            headers: {
                "Content-Type": "application/json"
            },
        };

        let resData = '';
        const response = await axios.post(url, data, config).catch(thrown => {
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
}

export default ApiService
