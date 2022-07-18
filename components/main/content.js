import React from "react";
import ContentAside from "./content-aside";
import ContentMain from "./content-main";
export default function Content() {
    return (
    <>
    <div className="lay-sidebar">
        <ContentMain/>
        <ContentAside/>
    </div>
    </>
    );
}