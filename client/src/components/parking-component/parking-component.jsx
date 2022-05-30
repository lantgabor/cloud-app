import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export function ParkingComponent() {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        axios
            .get(
                `http://${process.env.REACT_APP_BACKEND_IP}:8000`,
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
