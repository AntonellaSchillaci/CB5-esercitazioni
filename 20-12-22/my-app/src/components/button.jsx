export function Button() {
    const btn = () => {
     console.log("Hello World!")
    };
  
    return (
      <button
        className="btn"
        onClick={btn}
      >
        Click me
      </button>
    );
  }