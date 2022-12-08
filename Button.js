const Button = (props) => {
    return(
        <div>
            <button onClick={()=> props.clicked()}> ini adalah Button</button>
        </div>
    )
}

export default Button;
