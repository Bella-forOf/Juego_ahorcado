import '../styles/components/Form.scss'
const Form = ({ lastLetter = 'a', handleClickLetter }) => {//props desestructurado y con valor por defecto, por si acaso

    const handleInputLetter = (ev) => {
        handleClickLetter(ev.target.value)

    }
    return (
        <form className="form">
            <label className="title" htmlFor="last-letter">
                Escribe una letra:
            </label>
            <input
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                name="last-letter"
                id="last-letter"
                onChange={handleInputLetter}
                value={lastLetter}
            />
        </form>
    )
};
export default Form