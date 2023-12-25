const GuessInput = ({ value, onChangeProp, onSubmit }) => {
  return (
    <div className="input-box">
        <input className="p-2" type="text" value={value} onChange={onChangeProp} />
        <button className="guess-btn mt-2 btn btn-danger" onClick={onSubmit}>Click to Guess</button>
    </div>
  )
}

export default GuessInput