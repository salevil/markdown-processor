import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import {unified} from "unified";
import markdown from "remark-parse";
import html from "rehype-stringify";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: theme.spacing(3, 2),
//   },
// }));

function MarkdownPreviewer() {
//   const classes = useStyles();
  const [markdownText, setMarkdownText] = useState("");

  const handleChange = (event) => {
    setMarkdownText(event.target.value);
  };

  const renderMarkdown = () => {
    return unified()
      .use(markdown)
      .use(html)
      .processSync(markdownText)
      .toString();
  };

  return (
    <div>
        <form>
            <label>Enter your markdown text here:</label><br />
            <textarea
                label="Enter Markdown"
                onChange={handleChange}
            />
        </form>
      {/* <TextField
        label="Enter Markdown"
        multiline
        rows={10}
        variant="outlined"
        onChange={handleChange}
        fullWidth
      /> */}
      {/* <Paper className={classes.root}>
        <div dangerouslySetInnerHTML={{ __html: renderMarkdown() }} />
      </Paper> */}
    </div>
  );
}

export default MarkdownPreviewer;