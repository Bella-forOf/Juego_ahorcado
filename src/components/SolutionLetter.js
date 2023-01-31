import '../styles/components/Letters.scss';
import PropTypes from 'prop-types';


const SolutionLetter = (props) => {
    return (
        <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">{props.renderSolutionLetters}</ul>
        </div>
    )

};
SolutionLetter.propTypes = {
    renderSolutionLetters: PropTypes.array.isRequired,
};
export default SolutionLetter