import React from 'react'

const Autoclave = ({data}) => {
    return (
        <div className="col-lg-3 card">
            <div className="card-body text-center">
                <h5 className="card-title">{data["Equipment"]}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{data["LoadNumber"]}</h6>
                <p className="card-text m-0"><b>Run Start:</b> {data["RunStart"]}</p>
                <p className="card-text m-0"><b>Run End:</b> {data["RunEnd"]}</p>
                <p className="card-text m-0"><b>Run Duration:</b> {data["RunDuration"]}s</p>
                <p className="card-text m-0"><b>Operator Name:</b> {data["OperatorName"]}</p>
                <p className="card-text m-0"><b>Export Control:</b> {data["ExportControl"]}</p>
            </div>
        </div>
    )
}

export default Autoclave