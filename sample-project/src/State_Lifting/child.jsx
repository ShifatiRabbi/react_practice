import React from "react";

function StateLifting(data) {

    let cdata = "Hello, it's a child data"
    data.renderData(cdata)

    return(
        <div>
            <div>
                {data.parentData}
            </div>
        </div>
    )
}

export default StateLifting;