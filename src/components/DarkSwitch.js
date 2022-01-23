import React, { Component } from 'react'

export class DarkSwitch extends Component {
    render() {
        let{mode,toggleMode}=this.props
        return (
            <div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{
                            color:mode==='light'?'#000':'#fff'
                        }}>Enable {mode==='light'?'dark':'light'} mode</label>
                </div>
            </div>
        )
    }
}

export default DarkSwitch
