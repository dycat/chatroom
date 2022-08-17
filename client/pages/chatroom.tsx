export default function Chatroom(): JSX.Element {
  return (
    <div>
      <h2>Chat room: Dev</h2>
      <div>
        <ul>
          <li>Members</li>
          <ul>
            <li>John</li>
            <li>Anne</li>
            <li>Sam</li>
          </ul>
        </ul>
      </div>
      {/* Chat display area div */}
      <div></div>
      <input type="text" id="" placeholder="input text here..." />
      <button>Send</button>
    </div>
  );
}
