import React from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ globalHandlers, globalContextState, dynamicContextState, textTypeHandlers, lang }) => {
    return (
        <nav className="navbar is-info" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item">
                    <strong>{dynamicContextState[lang].cdac_address.value}</strong>
                </a>
                {globalContextState.editMode && (
                    <button className="button mt-2 is-small" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("cdac_address") }}>
                        <i className="fa-solid fa-pen"></i>
                    </button>
                )}
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item">{dynamicContextState[lang].have_questions.value}</a>
                    {globalContextState.editMode && (
                        <button className="button mt-3 is-small" onClick={() => { textTypeHandlers.textTypeModalUpdateHandler("have_questions") }}>
                            <i className="fa-solid fa-pen"></i>
                        </button>
                    )}
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="select mr-2">
                            <select name="lang" value={globalContextState.lang} onChange={globalHandlers.updateGlobalLanguageHandler}>
                                <option value="eng">English</option>
                                <option value="hnd">Hindi</option>
                                <option value="tel">Telugu</option>
                            </select>
                        </div>
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>{dynamicContextState[lang].log_in.value}</strong>
                            </a>
                            <a className="button is-warning">{dynamicContextState[lang].Register.value}</a>
                            <div>
                                
                                {/* <a className="button is-danger">
                                    <p className='mr-2 mt-2' style={{ fontSize: '20px' }}>Edit</p> */}
                                
                                <Form.Check style={{ transform: "scale(1.3)" }} // Increase the scale factor as needed
                                className='ml-2'
                                 type="switch"
                                 id="custom-switch" 
                                 checked={globalContextState.editMode}
                                onChange={globalHandlers.editModeChangeHandler}
                                />
                                {/* </a> */}
                            </div>
                            {globalContextState.editMode && (
                                <div>
                                    <button className="button ml-2 is-success">Save</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
