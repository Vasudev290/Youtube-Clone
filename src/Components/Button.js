const Button = (props) => {
  const { name } = props;
  return (
    <button className="px-4 py-2 bg-gray-200 rounded-lg whitespace-nowrap text-sm md:text-base hover:bg-gray-300 transition-colors duration-200">
      {name} 
    </button>
  );
};

export default Button;
