import Layout from "../../../components/layout/Layout";
import React from "react";
import Work from "../../../components/work/Work";

const WorkPage = () => {
    return (
        <Layout isCategoryPage={true}>
            <Work/>
        </Layout>
    )
}

export default WorkPage