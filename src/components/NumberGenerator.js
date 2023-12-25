const NumberGenerator = ({ onGenerate }) => {
  return (
    // The NumberGenerator receives a prop named onGenerate
    <button className="mt-3 btn btn-primary" onClick={onGenerate}>
        Generate New Number
    </button>
  );
};

export default NumberGenerator