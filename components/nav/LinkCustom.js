import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classes from './Nav.module.scss'

const LinkCustom = ({ href, children }) => {
    const router = useRouter();

    let className = children.props.className || "";
    if (router.pathname === href) {
        className = `${className} ${classes.active}`;
    }

    return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};

export default LinkCustom