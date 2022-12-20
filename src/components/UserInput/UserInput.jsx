import "./UserInput.scss";

const UserInput = ({ userFirstMessage }) => {
  return (
    <div className="userInput__container">
      <input
        onInput={userFirstMessage}
        className="userInput--input"
        type="text"
        placeholder="Type here to talk to Isaac Bot"
      />
    </div>
  );
};

export default UserInput;
