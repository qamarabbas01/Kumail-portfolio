import PropTypes from 'prop-types';

const SkillCard = (props) => {
  return (
    <div>
      <h3 className='mt-3 text-xl font-bold'>{props.title}</h3>
      <div>
        <div className='flex justify-end text-sm text-gray-700' aria-hidden>
          {props.val}
        </div>
        <div className='w-full h-2 bg-slate-300 rounded-full' role="progressbar" aria-valuenow={parseInt(props.val,10)} aria-valuemin={0} aria-valuemax={100} aria-label={`${props.title} skill level`}>
            <div className={`${props.width} h-2 bg-brightColor rounded-full `} />
        </div>
      </div>
    </div>
  )
}

export default SkillCard;

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  val: PropTypes.string.isRequired,
  width: PropTypes.string
}