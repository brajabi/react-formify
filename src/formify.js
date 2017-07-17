import React, { Component } from 'react';

class MyForm extends Component {
  nodeCreator(nodeObject) {
    const { type, options, node, props } = nodeObject;

    switch (node) {
      case 'input':
        return <input type={type} {...props}/>
        
      case 'select':
        return (
          <select {...props}>
            {nodeObject.options.map(e => <option>{e}</option>)}
          </select>
        );
    }
  }

  render() {
    return (
      <div>
        {this.props.data.map((e,i) => {
            const node = this.nodeCreator(e);
            return (
              <div>
                <label>{e.label}</label>
                <br />
                {node}
              </div>
            );
        })}
      </div>
    );
  }
}

export default MyForm;