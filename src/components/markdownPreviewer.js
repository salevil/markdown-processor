import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { unified } from "unified";
import markdown from "remark-parse";
import html from "rehype-stringify";
import remarkRehype from 'remark-rehype';

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
//   dense: {
//     marginTop: 19,
//   },
//   menu: {
//     width: 200,
//   },
// }));

export default function OutlinedTextFields() {
//   const classes = useStyles();
  const [markdownText, setMarkdownText] = useState('');
  const [htmlOutput, setHtmlOutput] = useState('');

  const handleMarkdownChange = event => {
    setMarkdownText(event.target.value);
  };

  const handleConvertClick = () => {
    const processor = unified()
      .use(markdown)
      .use(remarkRehype)
      .use(html);

    processor.process(markdownText, (err, file) => {
      if (err) {
        console.error(err);
        return;
      }
      setHtmlOutput(String(file));
    });
  };

  return (
    <div>
      <TextField
        id="outlined-textarea"
        label="Markdown Input"
        placeholder="Enter markdown text"
        multiline
        margin="normal"
        variant="outlined"
        value={markdownText}
        onChange={handleMarkdownChange}
      />
      <Button variant="contained" color="primary" onClick={handleConvertClick}>
        Convert to HTML
      </Button>
      <div dangerouslySetInnerHTML={{ __html: htmlOutput }} />
    </div>
  );
}
