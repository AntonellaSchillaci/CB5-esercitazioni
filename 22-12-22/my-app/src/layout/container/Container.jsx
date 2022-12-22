import './container.css';
export function Container (props) {
    const {children} = props;

    return (
        <div className="container-cit">
            {
                <div className="row">{children}</div>
            }
        </div>
    )
}