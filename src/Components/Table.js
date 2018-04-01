import React from 'react'

export class Table extends React.Component {
  render () {
    let count = 0;
    return (
      <table className="table table-bordered table-sm">
        <thead>
          <tr>
            {
              this.props.cols.map(col => {
                return (<th scope="col" key={col}>{col}</th>);
              })
            }
          </tr>
        </thead>
        <tbody>
            {
              this.props.rows.map(row => {
                return (
                  <tr key={++count}>
                    {
                      row.map(data => {
                        return (<td scope="row" key={data}>{data}</td>);
                      })
                    }
                  </tr>
                )
              })
            }
        </tbody>
      </table>
    );
  }
}
