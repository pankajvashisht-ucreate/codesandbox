import React, { memo } from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import { Styles } from "./Styles";

const RunWeb = ({ srcData, classes }) => (
	<div className={classes.main}>
		<iframe
			className={classes.main}
			srcDoc={srcData}
			title="output"
			sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
			frameBorder="0"
			width="100%"
			height="100%"
		/>
	</div>
);

RunWeb.propTypes = {
	srcData: PropTypes.any.isRequired,
	classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(memo(RunWeb));
