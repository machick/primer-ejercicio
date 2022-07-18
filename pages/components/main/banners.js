import React from "react";

export default function Banners() {
    return (
        <>
        {/* <!-- BANNER TOP --> */}
        <div className="banner w-100 --bg-banner">
            <div className="banner --top --desktop"></div>
            <div className="banner --top --tablet"></div>
            <div className="banner --top --mobile"></div>
        </div>
        {/* <!-- BANNER STICKY --> */}
        <div className="banner w-100 --bg-banner">
            <div className="banner --sticky --mobile"></div>
        </div>
        </>
    
    );
}