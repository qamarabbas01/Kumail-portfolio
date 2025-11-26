import { BsArrowRightShort } from "react-icons/bs";
import PropTypes from 'prop-types';

const Button = ({ title = 'Click' }) => {
  return (
    <div>
      <button type="button" aria-label={title} className='flex flex-row justify-center items-center gap-3 bg-brightColor hover:bg-primary hover:text-white transition transform hover:scale-105 duration-150 px-4 py-2 rounded-md cursor-pointer btn-primary'>
        {title}
        <BsArrowRightShort aria-hidden="true" />
      </button>
    </div>
  )
}

export default Button

Button.propTypes = {
  title: PropTypes.string
}
