import React, { memo } from "react";
import PropTypes from "prop-types";
import { Styles } from "./Styles";
import withStyles from "react-jss";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/addon/display/autorefresh";
import "codemirror/addon/comment/comment";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";

const Editior = ({
	code,
	codeLangauge = "html",
	theme = "monokai",
	classes,
	keyMap = "sublime",
	onChange,
}) => (
	<div className={classes.main}>
		<div className="heading">{codeLangauge}</div>
		<CodeMirror
			value={code}
			onChange={(value) =>
				onChange({ value: value.getValue(), key: codeLangauge })
			}
			options={{
				theme,
				smartIndent: true,
				keyMap: keyMap,
				mode: codeLangauge,
			}}
		/>
	</div>
);

Editior.propTypes = {
	code: PropTypes.any.isRequired,
	classes: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	codeLangauge: PropTypes.string,
	theme: PropTypes.string,
	keyMap: PropTypes.string,
};

export default withStyles(Styles)(memo(Editior));
