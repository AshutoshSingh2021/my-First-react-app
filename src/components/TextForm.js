import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper case was clicked:" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text cpied successfully!", "success");
  };

  const handleTitleCase = () => {
    let newText = text
      .split(" ")
      .map(
        (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
      )
      .join(" ");

    setText(newText);

    props.showAlert("Text converted to Title case!", "Success");
  };

  const handleEmailInText = () => {
    const regexp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9._-]+)/gi;
    const emailsRaw = text.match(regexp);
    const emails = [];
    if (emailsRaw != null) {
      emailsRaw.forEach((email) => {
        if (!emails.includes(email)) {
          emails.push(email);
        }
      });
    }

    const extractedMails = emails.join(",\n");
    if (extractedMails !== "") {
      setText(text + `\n\nExtracted Emails are:-\n\n${extractedMails}`);

      props.showAlert("Emails Extracted!", "success");
    }

    // navigator.clipboard.writeText(extractedMails);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces cleared!", "success");
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Textarea Cleared!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3 className="mb-4">{props.heading}</h3>
        <div className="mb-3 ">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#5492d1" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          type="submit"
          className="btn btn-primary my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          type="submit"
          className="btn btn-primary mx-2 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          type="submit"
          className="btn btn-primary mx-2 my-1"
          onClick={handleClearText}
        >
          Clear text
        </button>
        <button
          disabled={text.length === 0}
          type="submit"
          className="btn btn-primary mx-2 my-1"
          onClick={handleCopyText}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          type="submit"
          className="btn btn-primary mx-2 my-1"
          onClick={handleTitleCase}
        >
          Title case
        </button>

        <button
          disabled={text.length === 0}
          type="submit"
          className="btn btn-primary mx-2 my-1"
          onClick={handleEmailInText}
        >
          Extract Email
        </button>
        <button
          disabled={text.length === 0}
          type="submit"
          className="btn btn-primary mx-2 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h4>Your text summary</h4>
        <p>
          <b>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
          Words and <b>{text.length} </b>
          Characters
        </p>
        <p>
          <b>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}
          </b>{" "}
          minutes read
        </p>
        {/* <p>
          <b>{}</b> Emails extracted
        </p> */}
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
