// @flow

import * as React from 'react'
import CrossfadeImage from 'react-crossfade-image';

type Props = {
  images: Array<any>,
}

type State = {
  position: number,
}

class Slideshow extends React.Component<Props, State> {
  state: State = {
    position: 0,
  }

  _isMounted: boolean = true

  interval: ?any

  componentDidMount() {
    const { images } = this.props
    this.interval = setInterval(() => {
      if (this._isMounted) {
        this.setState((currState) => ({
          position: currState.position + 1 === images.length ? 0 : currState.position + 1
        }))
      }
    }, 3000);
  }

  componentWillUnmount() {
    this._isMounted = false
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  render() {
    const { images } = this.props

    return (
      <div className="slideshow" style={{ height: '181px'}}>
        <CrossfadeImage
          src={images[this.state.position]}
          duration={1000}
          timingFunction={"ease-out"}
        />
      </div>
    )
  }
}

export default Slideshow
