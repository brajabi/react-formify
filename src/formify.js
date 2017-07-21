import React, { Component } from 'react';

class MyForm extends Component {
  nodeCreator(nodeObject) {
    const { type, options, node, name, props } = nodeObject;

    switch (node) {
      case 'input':
        return <input type={type} {...props}/>
        
      case 'checkbox':
        return (
          <div>
            {nodeObject.options.map(e => {
              return (<div>
                <input type="checkbox" value="{e}" {...props}/>
                <label>{e}</label>
              </div>)
            })}
          </div>
        );

       case 'radio':
        return (
          <div>
            {nodeObject.options.map(e => {
              console.log(props);
              return (<div>
                <input type="radio" value={e} name={name} {...props} />
                <label>{e}</label>
              </div>)
            })}
          </div>
        );

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