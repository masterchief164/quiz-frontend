import React from "react";

function Register() {
    return <template>
        <div className="form-cont blur-bgimage">
            <div className="form p-3" id="form">
                <div className="spacer" style={{height: "6vh", width: "100%"}}>
                    <button type="button" className="btn btn-outline-danger btn-sm close btn-extra"
                            onClick="closeShowRegistered">Close
                    </button>
                </div>
                <div className="form-row pb-4">
                    <div className="col-lg-12">
                        <input id="Secret" type="password" className="effect-1" placeholder="Enter Secret Key"/>
                        <span className="Focus-border"/>
                    </div>
                </div>
                <div className="form-row pb-4">
                    <div className="col-lg-12">
                        <button type="button" className="btn btn-extra btn-primary btn-lg"
                                onClick="hello">Show Registered
                        </button>
                        <span className="Focus-border"/>
                    </div>
                </div>
            </div>
        </div>
    </template>
}

export default Register;