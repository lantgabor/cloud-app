import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export function ParkingComponent() {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        axios
            .get(
                `http://localhost:${process.env.REACT_APP_SERVER_PORT}/sample`,
                {
                    params: {
                        table: "sample",
                    },
                }
            )
            .then((response) => {
                setPlanets(response.data);
            });
    }, []);

    return (
        <div>
            <Button variant="contained">Hello World</Button>
            <List>
                {planets.map((row) => (
                    <ListItem disablePadding key={row.name}>
                        <ListItemText primary={`${row.name} - ${row.id}`} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
