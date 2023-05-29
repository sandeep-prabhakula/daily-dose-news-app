import React from 'react'

const DarkSwitch = (props)=> {
        return (
            <div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{
                            color:props.mode==='light'?'#000':'#fff'
                        }}>{props.mode==='light'?'dark':'light'} mode</label>
                </div>
            </div>
        )
    
}

export default DarkSwitch
