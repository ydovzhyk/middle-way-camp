import s from './Button.module.scss';

const Button = ({
  text = '',
  type = 'submit',
  btnClass = 'btnLight',
  handleClick,
}) => {
  return (
    <button className={s[btnClass]} onClick={handleClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
