import React from 'react';
import './EmbeddedControl.css';

class EmbeddedControl extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            iframeSrc: "https://localhost:8443/analyze/embedded/#/px4o16t9ftwkloa82p4o78zv34lqk4vs/reportId/edit"
        };
    }


    onIframeSrcChanged = (event) => {
        this.setState({
            iframeSrc: event.target.value
        });
    }

    render() {
        return (
          <div className="embedded-control">
            embedded URL: <input value={this.state.iframeSrc} onChange={this.onIframeSrcChanged}/>
            <iframe id="embedded-AD" src={this.state.iframeSrc} width="80%" height="400px" frameBorder="0" title="embedded AD"></iframe>
          </div>
        );
    }
}

export default EmbeddedControl;