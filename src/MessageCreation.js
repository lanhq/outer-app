import React from 'react';
import './MessageCreation.css';

class MessageCreation extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            message: JSON.stringify({})
        };
    }

    resetMessageAsDrillableItemsFormat = () => {
        this.changeMessage(JSON.stringify({
            gdc: {
                product: "analyticalDesigner",
                event: {
                    name: "drillableItems",
                    data: {
                        identifiers: [],
                        uris: ["/gdc/md/px4o16t9ftwkloa82p4o78zv34lqk4vs/obj/9211"],
                        composedFrom: {
                            identifiers: [],
                            uris: []
                        }
                    },
                    contextId: `drillable-items-${(new Date()).getTime()}`
                }
            }
        }));
    }
    resetMessageAsOpenInsightFormat = () => {
        this.changeMessage(JSON.stringify({
            gdc: {
                product: "analyticalDesigner",
                event: {
                    name: "openInsight",
                    data: {
                        reportId: "84120",
                        projectId: "px4o16t9ftwkloa82p4o78zv34lqk4vs"
                    },
                    contextId: `open-${(new Date()).getTime()}`
                }
            }
        }));
    }

    resetMessageAsClearFormat = () => {
        this.changeMessage(JSON.stringify({
            gdc: {
                product: "analyticalDesigner",
                event: {
                    name: "clear",
                    contextId: `clear-${(new Date()).getTime()}`
                }
            }
        }));
    }

    resetMessageAsSaveFormat = () => {
        this.changeMessage(JSON.stringify({
            gdc: {
                product: "analyticalDesigner",
                event: {
                    name: "saveInsight",
                    data: {
                        title: "test save"
                    },
                    contextId: `save-${(new Date()).getTime()}`
                }
            }
        }));
    }

    resetMessageAsSaveAsFormat = () => {
        this.changeMessage(JSON.stringify({
            gdc: {
                product: "analyticalDesigner",
                event: {
                    name: "saveAsInsight",
                    data: {
                        title: "test save as"
                    },
                    contextId: `save-as-${(new Date()).getTime()}`
                }
            }
        }));
    }

    resetMessageAsExportFormat = () => {
        this.changeMessage(JSON.stringify({
            gdc: {
                product: "analyticalDesigner",
                event: {
                    name: "exportInsight",
                    data: {
                        config: {
                            title: "test export",
                            format: 'xlsx',
                            mergeHeaders: true,
                            includeFilterContext: true
                        }
                    },
                    contextId: `export-${(new Date()).getTime()}`
                }
            }
        }));
    }

    pretyJSON = (jsonStr) => {
        let pretyStr = jsonStr;
        try {
            const jsonObj = JSON.parse(jsonStr);
            return JSON.stringify(jsonObj, undefined, 4);
        } catch {
            // skip it
        }

        return pretyStr;
    }

    onMessageChange = (event) => {
        this.changeMessage(event.target.value);
    }

    changeMessage = (value) => {
        const { onMessageChange } = this.props;
        this.setState({
            message: this.pretyJSON(value)
        });
        onMessageChange(value);
    }

    resetMessageAsUndoFormat = () => {
        this.changeMessage(JSON.stringify({
            gdc: {
                product: "analyticalDesigner",
                event: {
                    name: "undo",
                    contextId: `undo-${(new Date()).getTime()}`
                }
            }
        }));
    }

    resetMessageAsRedoFormat = () => {
        this.changeMessage(JSON.stringify({
            gdc: {
                product: "analyticalDesigner",
                event: {
                    name: "redo",
                    contextId: `redo-${(new Date()).getTime()}`
                }
            }
        }));
    }

    resetMessageAsSetFilterContextFormat = () => {
        this.changeMessage(JSON.stringify({
            gdc: {
                product: "dashboard",
                event: {
                    name: "setFilterContext",
                    data: {
                        filters: [
                            {
                                positiveAttributeFilter: {
                                    displayForm: {
                                        identifier: ""
                                    },
                                    in: []
                                }
                            },
                            {
                                negativeAttributeFilter: {
                                    notIn: [],
                                    displayForm: {
                                        identifier: ""
                                    }
                                }
                            }
                        ]
                    },
                    contextId: `setFilterContext-${(new Date()).getTime()}`
                }
            }
        }));
    }

    render() {
        return (
          <div className="message-creation">
            <button onClick={this.resetMessageAsDrillableItemsFormat}>drillable Items format</button>
            <button onClick={this.resetMessageAsOpenInsightFormat}>openInsigh format</button>
            <button onClick={this.resetMessageAsClearFormat}>clear format</button>
            <button onClick={this.resetMessageAsSaveFormat}>save format</button>
            <button onClick={this.resetMessageAsSaveAsFormat}>save as format</button>
            <button onClick={this.resetMessageAsExportFormat}>export format</button>
            <button onClick={this.resetMessageAsUndoFormat}>undo format</button>
            <button onClick={this.resetMessageAsRedoFormat}>redo format</button>
            <br/>
            <strong>control filtering: </strong>
            <button onClick={this.resetMessageAsSetFilterContextFormat}>setFilterContext format</button>
            <br/><span>Message: </span><br/>
            <textarea className="fwMultilineTextbox" value={this.state.message} onChange={this.onMessageChange} cols={120} rows={10} />
          </div>
        );
    }
}

export default MessageCreation;
