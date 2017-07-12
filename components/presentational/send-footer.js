import React from 'react';

function SendFooter() {
    return (
        <div className="row">
            <form>
                <div className="col s12 valign-wrapper" style={{ backgroundColor: '#f6f6f6' }}>
                    <div className="input-field" style={{width:'100%'}}>
                        <label htmlFor="message">Enter Message</label>
                        <input type="text" name="message" id="message" />
                    </div>
                    <button className="btn-flat waves-effect waves-teal" type="submit">
                        <i className="material-icons">send</i>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SendFooter