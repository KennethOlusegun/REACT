import React from "react";
import Item from "./Item";

export default function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Lamborghini" ano_lancamento={1964}/>
                <Item marca="Teslla" ano_lancamento={2015}/>
            </ul>
        </>
    )
}
