import React from 'react';
import './Modal2.scss';

class Modal2 extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      anim: '',
    }
  }
  componentDidMount() {
    console.log('Comp')
    setTimeout(() => {
      this.setState({
        anim: 'enter',
      })
    }, 1)

  }
  render() {
    return (
      <>
        <div className={`Modal2-overlay ${this.state.anim}`} onClick={this.props.close} />
        <div className={`Modal2 ${this.state.anim}`}>
          {this.props.children}
        </div>
      </>
    )
  }
}

export default Modal2;