import React from 'react';

class RandomEl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      randomData: {}
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/random")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            randomData: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, randomData } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div>
            Title: {randomData.name}
          </div>
          <div>
            <img src={randomData.image}/>
          </div>
          <div>
            Message: {randomData.message}
          </div>
        </div>
      );
    }
  }
}

export default RandomEl;