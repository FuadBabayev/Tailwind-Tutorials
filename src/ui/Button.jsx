import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {
  // const className = "bg-yellow-400 font-semibold uppercase text-stone-800 py-3 px-4 inline-block tracking-wide rounded-full hover:bg-yellow-500 transition-colors duration-500 focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-offset-2 active:bg-yellow-800 disabled:cursor-not-allowed"

  const base = "bg-yellow-400 text-sm font-semibold uppercase text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-500 transition-colors duration-500 focus:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-offset-2 active:bg-yellow-800 disabled:cursor-not-allowed"
  const styles = {
    primary : base + " px-4 py-3 md:px-6 md:py-4",
    secondary : "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
    small : base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
  };

  if(to) return <Link to={to} className={styles[type]}>{children}</Link>;
  return <button disabled={disabled} className={styles[type]}>{children}</button>;
}

export default Button;
