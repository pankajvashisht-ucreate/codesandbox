import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import { Styles } from "./Styles";
import { RunWeb, Editior } from "Component";
import { useDebounce } from "Hooks";
const Home = ({ classes }) => {
	const [code, setCode] = useState({
		html: "",
		css: "",
		js: "",
	});
	const [srcData, setSrcData] = useState("");
	const debouncedCode = useDebounce(code, 2000);
	const renderCode = () => {
		const { html, css, js } = code;
		setSrcData(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `);
	};
	useEffect(() => {
		if (debouncedCode) {
			renderCode();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedCode]);

	const handleCode = useCallback(
		({ key, value }) => {
			setCode((codes) => ({ ...codes, [key]: value }));
		},
		[setCode]
	);
	return (
		<div className={classes.main}>
			<div className={classes.codeEditor}>
				<Editior code={code.html} codeLangauge="html" onChange={handleCode} />
				<Editior code={code.css} codeLangauge="css" onChange={handleCode} />
				<Editior code={code.js} codeLangauge="js" onChange={handleCode} />
			</div>
			<div>
				<RunWeb srcData={srcData} />
			</div>
		</div>
	);
};

Home.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(Home);
