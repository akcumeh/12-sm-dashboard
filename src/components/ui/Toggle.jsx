const Toggle = ({ checked, onChange }) => {
    return (
        <button
            onClick={onChange}
            className={`
          relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          ${checked
                    ? 'bg-toggle-gradient'
                    : 'bg-light-toggle'
                }
        `}
        >
            <span
                className={`
            inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out
            ${checked ? 'translate-x-6' : 'translate-x-1'}
          `}
            />
        </button>
    );
};

export default Toggle;