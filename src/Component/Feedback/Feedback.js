import React,{useState, useEffect} from "react";
import Header from "../Header";
import ApiService from "../../ApiService";
import Footer from "../Footer";

const Feedback = () => {
    const apiService = new ApiService();
    const [listFeedback, setListFeedback] = useState([])
    useEffect(() => {
        getFeedback()
    }, [])

    const getFeedback = async () => {
        const data = await apiService.listFeedback()
        if(data && data.data && data.data.length){
            setListFeedback(data.data)
        } else {
            setListFeedback([])
        }
    }
    return(
        <div>
            <div className='main_contain_area'>
            <div className="mn-inner-container pb-0 mb-0">
                <Header/>
            </div>
            <ul className="mn-text-image-item" style={{paddingBottom:50}}>
                {
                    listFeedback.map((x, i) => {
                        return(
                            <li key={i}>
                                <div className="mtii-contener">
                                    <div className="row">
                                        <div className="col col-md-auto">
                                            <figure style={{backgroundImage: "url(" + x.image + ")"}}>
                                              </figure>
                                        </div>
                                        <div className="col">
                                            <h3 className="mn-fb-h3">{x.title}</h3>
                                            <p className="mn-fb-desc">{x.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }


            </ul>
            </div>
            <Footer/>
        </div>

    )
};
export default Feedback