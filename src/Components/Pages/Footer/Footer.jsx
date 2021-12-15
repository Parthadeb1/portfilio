import React from 'react';

const Footer = () => {
    return (
        <div className="container bg-dark text-white mt-5 py-1 px-sm-1 px-md-3">
            <div className="text-center py-3">
                <div className="d-flex justify-content-center mb-2">
                    <a className="btn btn-light btn-social mx-2"href="https://www.facebook.com/Partha.deb07" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
                    <a className="btn btn-light btn-social mx-2"href="https://github.com/Parthadeb1" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                    <a className="btn btn-light btn-social mx-2"href="https://www.linkedin.com/in/partha-debnath01/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                </div>
                <p className="m-1">Copyright © All right reserved <a className="text-danger" style={{textDecoration: "none"}} href="https://www.linkedin.com/in/partha-debnath01/" target="_blank" rel="noreferrer">Partha Debnath</a></p>
            </div>
        </div>
    );
};

export default Footer;