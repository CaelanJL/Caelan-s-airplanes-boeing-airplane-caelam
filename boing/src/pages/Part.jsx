import React from 'react'

const Part = ({data}) => {
    return (
        <div className="col-lg-3 m-2 card">
            <div className="card-body text-center">
                <h5 className="card-title">{data["PartNumber"]}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{data["PartDescription"]}</h6>
                <p className="card-text m-0"><b>Work Order:</b> {data["WorkOrder"]}</p>
                <p className="card-text m-0"><b>Tool Location:</b> {data["ToolLocation"]}</p>
                <p className="card-text m-0"><b>Comments:</b></p>
                <p className="card-text m-0">{data["Comment1"]}</p>
                <p className="card-text m-0">{data["Comment2"]}</p>
                <p className="card-text m-0">{data["Comment3"]}</p>
                <p className="card-text m-0"><b>Part TCs:</b> {data["PartTCs"].join(",")}</p>
                <p className="card-text m-0"><b>Part Probes:</b> {data["PartProbes"].join(",")}</p>
            </div>
        </div>
    )
}

export default Part