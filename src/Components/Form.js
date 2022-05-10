import { useState } from "react";

function Form() {
    const [inputLink, setInputLink] = useState("");
    const [linkUrlshrtco, setLinkUrlshrtco] = useState("");
    const [linkUrlqr9, setLinkUrlqr9] = useState("");
    const [linkUrlshiny, setLinkUrlshiny] = useState("");
    const [shrtco, setShrtco] = useState(false);
    const [qr9, setQr9] = useState(false);
    const [shiny, setShiny] = useState(false);
    
    const handleFetchLink = async () => {
        const url = `https://api.shrtco.de/v2/shorten?url=${inputLink}`;
        const response = await fetch(url);
        const data = await response.json();
        const ok = data.ok;
        // console.log(ok);
        if (ok===true) {
            if (shrtco) {
                setLinkUrlshrtco(data.result.short_link);
            }
            if (qr9) {
                setLinkUrlqr9(data.result.short_link2);
            }
            if (shiny) {
                setLinkUrlshiny(data.result.short_link3);
            }
           
            // setLinkUrlqr9(data.result.short_link);
            // setLinkUrlshiny(data.result.short_link2);
            // console.log(data.result.short_link3);
        }
        else {
            setLinkUrlshrtco(data.error);
            setLinkUrlqr9(data.error);
            setLinkUrlshiny(data.error);
        }

    }

    const handleChange = (e) => {
        const inputUrl = e.target.value;
        setInputLink(inputUrl);
        // console.log(inputLink);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleFetchLink();
    };
    const handleChangeCheckboxshrtco = () => {
        setShrtco(!shrtco);
        // console.log(shrtco);
    };
    const handleChangeCheckbox9qr = () => {
        setQr9(!qr9);
        // console.log(qr9);
    };
    const handleChangeCheckboxshiny = () => {
        setShiny(!shiny);
        // console.log(shiny);
    };
    return (
        <div className="container-fluid mt-5" >
            <div className="row d-flex justify-content-center">
                <div className="col-sm-6 col-sm-offset-3">
                    <form className=" bg-secondary text-white" onSubmit={handleSubmit}>
                        <h1 className="display-6 text-center">Link Shortener</h1>
                        <div className="input-group">
                            <input type="text" value={inputLink} className="form-control mb-3" placeholder="Enter a Link..." onChange={handleChange} />
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit">
                                    <i className="fa fa-arrow-right border-dark text-dark " />
                                </button>
                            </div>
                        </div>
                        <div className="input-group">
                            <h5 className="display-6 text-center">Short domain: </h5>
                            <h6 className="display-6 text-center mx-3">shrtco.de </h6>
                            <input classname="form-check-input" type="checkbox" value={shrtco} id="invalidCheck" onClick={handleChangeCheckboxshrtco} />
                            <h6 className="display-6 text-center mx-3">9qr.de </h6>
                            <input classname="form-check-input" type="checkbox" value={qr9} id="invalidCheck" onClick={handleChangeCheckbox9qr} />
                            <h6 className="display-6 text-center mx-3">shiny.link </h6>
                            <input classname="form-check-input" type="checkbox" value={shiny} id="invalidCheck" onClick={handleChangeCheckboxshiny} />
                        </div>
                        <ul className="list-group text-dark">
                            <h1 className="display-6 text-center">Link generated</h1>
                            <li className="list-group-item">shrtco.de: {linkUrlshrtco}</li>
                            <li className="list-group-item">9qr.de: {linkUrlqr9}</li>
                            <li className="list-group-item">shiny.link: {linkUrlshiny}</li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;