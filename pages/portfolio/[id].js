import React from "react";
import Layout from "../../components/layout/Layout";
import Category from "../../components/category/Category";

const CategoryPage = () => {
    return (
        <Layout isCategoryPage={true}>
            <Category/>
        </Layout>
    )
}

export default CategoryPage