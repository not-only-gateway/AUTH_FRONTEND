import React, {useState} from "react";
import PropTypes from "prop-types";
import {Switcher} from "@f-ui/core";
import useQuery from "../../ext/hooks/useQuery";
import getQuery from "../../ext/getQuery";
import {KEYS} from "../../templates/KEYS";
import styles from "../../styles/Home.module.css";
import List from "../../ext/list/List";

export default function UserList(props) {
    const hook = useQuery(getQuery('user'))
    return (

            <List
                hook={hook}
                keys={KEYS.USER}
                onRowClick={e => props.redirect(`user?id=${e.id}`)}
                title={'Usuários'}
            />
        )

}

UserList.propTypes = {
    redirect: PropTypes.func
}
