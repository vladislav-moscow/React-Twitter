import './Button.scss';
function Button({text, icon, className, onClick, id}) {
  return (
    <button className={`btn-component ${className}`} onClick={onClick} id={id}>
      {icon}
      <span className='btn-component-min'>{text}</span>
    </button>
  );
}

export default Button;