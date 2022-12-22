import "./button.css";

export function Button(props) {

  const { 
    className = '',
    children = 'Non ho {children}',
    variant = 'none',
    ...otherAttributes
  } = props;

  return (
      <button
          className={`Button Button--variant-${variant} ${className}`}
          {...otherAttributes}
      >
        {children}
      </button>
  );
}