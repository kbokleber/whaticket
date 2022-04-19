import React, { useEffect } from "react";
import openSocket from "socket.io-client";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(1)
	},

	paper: {
		padding: theme.spacing(2),
		display: "flex",
		alignItems: "center",
	},

	settingOption: {
		marginLeft: "auto",
	},
	margin: {
		margin: theme.spacing(1),
	},
}));


const KBODashboard = () => {
	const classes = useStyles();

	useEffect(() => {
		const socket = openSocket(process.env.REACT_APP_BACKEND_URL);
		return () => {
			socket.disconnect();
		};
	}, []);

	return (
		<div className={classes.root}>
			<iframe title="KBO" src='https://datastudio.google.com/embed/reporting/49d5e6b0-9989-4bb9-9453-e2f9e390ef9b/page/qQhqC' height='800' width='100%' frameBorder="0" />
		</div>
	);
};

export default KBODashboard;