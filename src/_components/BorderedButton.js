export const BorderedButton = (props)=>{
    return(
        <button style={{
            backgroundColor:"white",
            color:"var(--primary-color)",
            border:"1px solid var(--primary-color)",
            padding:"8px",
            margin:"5px",
            borderRadius:"5px",
        }}>{props.text}</button>
    )
}