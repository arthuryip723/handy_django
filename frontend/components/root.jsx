import React from 'react';


class Root extends React.Component {
  render() {
    // return <div>Root</div>;
    // console.log(this.props);
    // console.log(this.props.workers);
    return (<div>
      <h1>Workers: </h1>
      <ul>
        {
          this.props.workers.map(worker => (
            <li key={worker.id}>{worker.name}</li>
            ))
        }
      </ul>
    </div>
    );
  }

  componentDidMount() {
    // alert('hello');
    this.props.requestWorkers();
  }
}

export default Root;