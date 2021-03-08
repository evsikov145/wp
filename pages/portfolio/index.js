import Layout from "../../components/layout/Layout";
import React from 'react'
import Portfolio from "../../components/portfolio/Portfolio";

const PortfolioPage = () => {
    return (
        <Layout isPortfolioPage={true}>
            <Portfolio/>
        </Layout>
    )
}

export default PortfolioPage