const React = require("react");
const HtmlLayout = require("./HtmlLayout");

function Chat(props) {
  return (
    <div>
      <ul id="messages"></ul>
      <form action="">
        <input id="m" autocomplete="off" />
        <button>Send</button>
      </form>
    </div>
  );
}

module.exports = Chat;
