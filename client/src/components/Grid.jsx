import React from 'react';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      grid: new Array(10).fill(new Array(10).fill(0))
    }
  }

  render() {
    return (
      <div>
        {
          this.state.grid.map(row => {
            return (
              <div>
                {
                  row.map(cell => <span style={{color: 'blue'}}> {cell} </span>)
                }
              </div>
            )
          })
        }
      </div>
    );
  }
}