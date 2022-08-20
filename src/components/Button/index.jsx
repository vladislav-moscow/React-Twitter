import './Button.scss';
function Button({text, icon, className, onClick}) {
  return (
    <button className={`btn-component ${className}`} onClick={onClick}>
      {icon}
      <span className='btn-component-min'>{text}</span>
    </button>
  );
}

export default Button;