import React,{useState} from "react";
import Header from "../Header";
import ApiService from "../../ApiService";
import Footer from "../Footer";

const initialState={
    firstName:'',
    lastName:'',
    email:'',
    subject:'',
    mobile:'',
    message:'',
}
const Enquire = () => {
    let apiService =new ApiService()
    const [details, setDetails] =useState(initialState)


    const onChange = (e) => {
        setDetails({...details, [e.target.name]: e.target.value})
    }

    const onAdd =async () =>{
        if(details.firstName && details.lastName && details.mobile && details.subject && details.message){
            const data = await apiService.addEnquire(details)
            if(data && data.storyId){
                setDetails(initialState)
            }
        }

    }

    return(
        <React.Fragment>
        <div className="mn-inner-container main_contain_area">
            <Header/>
            <div className="mn-story-detils-content ">
                <div className="row row10" style={{marginTop: 148}}>
                    <div className="col col-md-6 col-12">
                        <div className="row row10 w-100 ">
                            <div className="col col-md-12 col-12">
                                <h2 style={{fontWeight: 800, marginBottom: 5,fontSize: "1.6em",
                                    fontFamily: 'AvenirBlack'}} className="mt-0">FILL ME UP</h2>
                            </div>
                        </div>
                        <div className="row row10 w-100 ">
                            <div className="col col-md-6 col-12">
                                <input type="text" value={details.firstName} name="firstName" onChange={onChange} className="mn-en-form" placeholder="First name"/>
                            </div>
                            <div className="col col-md-6 col-12">
                                <input type="text" value={details.lastName} name="lastName" onChange={onChange} className="mn-en-form" placeholder="Last name"/>
                            </div>
                        </div>
                        <div className="row row10 w-100 ">
                            <div className="col col-12">
                                <input type="number" value={details.mobile} name="mobile" onChange={onChange} className="mn-en-form" placeholder="Mobile"/>
                            </div>
                        </div>
                        <div className="row row10 w-100 ">
                            <div className="col col-12">
                                <input type="text" value={details.email} name="email" onChange={onChange} className="mn-en-form" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="row row10 w-100 ">
                            <div className="col  col-12">
                                <input type="text" value={details.subject} name="subject" onChange={onChange} className="mn-en-form" placeholder="Subject"/>
                            </div>
                        </div>
                        <div className="row row10 w-100 ">

                            <div className="col  col-12">
                                <textarea rows="7" value={details.message} name="message" onChange={onChange} className="mn-en-form" placeholder="Message"/>
                            </div>
                        </div>
                        <div className="row row10 w-100 ">
                            <div className="col  col-12 ">
                                <div className="text-center">
                                    <button className="mn-en-btn" onClick={onAdd}>SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-6 col-12">
                        <h2 style={{fontWeight: 800, marginBottom: 5,fontSize: "1.6em",
                            fontFamily: 'AvenirBlack'}} className="mt-0">MOONLIGHT PICTURES</h2>
                        <p className={"mn-enq-p"}>160, 1<sup>st</sup> Floor, Platinum point, Sudama Chowk, Mota Varachha,</p>
                        <p className={"mn-enq-p"}>Surat - 394101, Gujarat, India.</p>
                        <p  className={"mn-enq-p"}><a href="mailto:moonlightpicture07@gmail.com">moonlightpicture07@gmail.com</a></p>
                        <p className={"mn-enq-p"}><a href="tel:+919601669297">+91 96016 69297</a></p>
                        <p className={"mn-enq-p"}><a href="tel:+919510241515">+91 95102 41515</a></p>
                    </div>
                </div>

            </div>
        </div>
            <Footer/>
        </React.Fragment>
    )
}
export default Enquire
