export default function Input({error, errMess, id, label, ...props}) {
    return <>
        <label htmlFor={id}>{label}</label>
        <input
            id={id}
            {...props}
        />
        {error && <p>{errMess}</p>}
    </>
}